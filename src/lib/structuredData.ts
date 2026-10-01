import { SHOP_PRODUCTS } from './shopProducts';
import { canonicalUrl, normalizePathname, SITE_ORIGIN } from './seo';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: 'Bunifu Youths Kenya',
  alternateName: 'Bunifu',
  url: `${SITE_ORIGIN}/`,
  logo: `${SITE_ORIGIN}/final.webp`,
  description:
    'Bunifu Youths Kenya helps children and teens build practical STEM skills through coding, robotics, AI, 3D design, bootcamps, school outreach, mentorship and competitions.',
  email: 'bunifuyouthskenya@gmail.com',
  telephone: '+254712015793',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Afralti Waiyaki Way',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
  areaServed: 'Kenya',
  sameAs: ['https://instagram.com/Bunifu_youths_Kenya'],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What age groups do you cater to?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work with children and teens aged 6-17. Younger learners build foundations through play, visual coding, and guided activities, while older students take on deeper projects in robotics, web development, AI, 3D design, and competitions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need any prior experience in STEM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No prior experience is required! Our programs are designed for beginners and we guide each student at their own pace. We believe every child has the potential to be an innovator.',
      },
    },
    {
      '@type': 'Question',
      name: 'What equipment do students need?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For center-based sessions, we provide the core learning tools and equipment. Students mainly need curiosity and willingness to participate. For advanced tracks, a personal laptop can help with practice, but it is not required for beginners.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can parents/guardians get involved?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Parents and guardians can enroll learners, attend showcases, support practice at home, volunteer, sponsor learners, or connect us with schools and community spaces that would benefit from outreach sessions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there any scholarships available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We offer scholarships for students from underserved communities. Our mission is to make STEM education accessible to all young Kenyans regardless of their financial background. Contact us to learn more about our scholarship programs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes Bunifu different from other STEM programs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bunifu combines hands-on learning, mentorship, African innovation stories, outreach, and project-based practice. We do not only teach tools; we help learners build confidence, explain their ideas, solve problems, and see themselves as creators.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with schools and community groups?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We run school visits, outreach sessions, bootcamps, educator training, and partner programs for institutions that want to introduce learners to practical STEAM experiences.',
      },
    },
  ],
};

export type StructuredData = Record<string, unknown>;

export function getStructuredData(pathname: string): StructuredData[] {
  const normalizedPath = normalizePathname(pathname);

  if (normalizedPath === '/') return [organizationSchema, faqSchema];

  if (normalizedPath.startsWith('/shop/')) {
    const slug = normalizedPath.slice('/shop/'.length);
    const product = SHOP_PRODUCTS.find((entry) => entry.slug === slug);
    if (!product) return [];

    return [
      {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        image: product.images.map((image) => canonicalUrl(image)),
        description: product.description,
        offers: {
          '@type': 'Offer',
          url: canonicalUrl(normalizedPath),
          priceCurrency: 'KES',
          price: product.priceKes,
          availability: product.inStock
            ? 'https://schema.org/InStock'
            : 'https://schema.org/OutOfStock',
        },
      },
    ];
  }

  return [];
}
