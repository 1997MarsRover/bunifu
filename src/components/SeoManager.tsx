import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSeoMetadata } from '../lib/seo';

function upsertMeta(name: string, content?: string) {
  const selector = `meta[name="${name}"]`;
  const existing = document.head.querySelector<HTMLMetaElement>(selector);

  if (!content) {
    existing?.remove();
    return;
  }

  const element = existing ?? document.createElement('meta');
  element.name = name;
  element.content = content;
  if (!existing) document.head.appendChild(element);
}

export default function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const metadata = getSeoMetadata(location.pathname);
    if (!metadata) return;

    document.title = metadata.title;
    upsertMeta('description', metadata.description);
    upsertMeta('robots', metadata.robots);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = metadata.canonical;
  }, [location.pathname]);

  return null;
}
