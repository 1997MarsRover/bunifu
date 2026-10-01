import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSeoMetadata } from '../lib/seo';
import { getStructuredData } from '../lib/structuredData';

function upsertMeta(attribute: 'name' | 'property', key: string, content?: string) {
  const selector = `meta[${attribute}="${key}"]`;
  const existing = document.head.querySelector<HTMLMetaElement>(selector);

  if (!content) {
    existing?.remove();
    return;
  }

  const element = existing ?? document.createElement('meta');
  element.setAttribute(attribute, key);
  element.content = content;
  if (!existing) document.head.appendChild(element);
}

export default function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const metadata = getSeoMetadata(location.pathname);
    if (!metadata) return;

    document.title = metadata.title;
    upsertMeta('name', 'description', metadata.description);
    upsertMeta('name', 'robots', metadata.robots);
    upsertMeta('property', 'og:type', metadata.ogType ?? 'website');
    upsertMeta('property', 'og:url', metadata.canonical);
    upsertMeta('property', 'og:title', metadata.title);
    upsertMeta('property', 'og:description', metadata.description);
    upsertMeta('property', 'og:image', metadata.image);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', metadata.title);
    upsertMeta('name', 'twitter:description', metadata.description);
    upsertMeta('name', 'twitter:image', metadata.image);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = metadata.canonical;

    document.head.querySelectorAll('script[data-seo-schema]').forEach((element) => element.remove());
    for (const schema of getStructuredData(location.pathname)) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.seoSchema = '';
      script.text = JSON.stringify(schema).replace(/</g, '\\u003c');
      document.head.appendChild(script);
    }
  }, [location.pathname]);

  return null;
}
