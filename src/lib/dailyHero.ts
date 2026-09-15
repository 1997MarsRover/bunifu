export interface DailyHeroImage {
  id: number;
  src: string;
  alt: string;
  tag: string;
}

export const DAILY_HERO_IMAGES: DailyHeroImage[] = [
  {
    id: 1,
    src: '/daily-hero/daily-1.webp',
    alt: 'Young Kenyan innovators engaged in practical STEM learning with Bunifu',
    tag: 'Daily Field Spotlight',
  },
  {
    id: 2,
    src: '/daily-hero/daily-2.webp',
    alt: 'Hands-on robotics and technology workshop with Bunifu students',
    tag: 'Today in the Lab',
  },
  {
    id: 3,
    src: '/daily-hero/daily-3.webp',
    alt: 'Students building and testing creative coding projects in Kenya',
    tag: 'Daily Field Spotlight',
  },
  {
    id: 4,
    src: '/daily-hero/daily-4.webp',
    alt: 'Bunifu STEM club learners demonstrating interactive tech models',
    tag: 'Learner Highlight',
  },
  {
    id: 5,
    src: '/daily-hero/daily-5.webp',
    alt: 'Young innovators collaborating on robotics kits and micro-controllers',
    tag: 'Today in the Lab',
  },
  {
    id: 6,
    src: '/daily-hero/daily-6.webp',
    alt: 'Practical STEM classroom exploration with Bunifu facilitators',
    tag: 'Daily Field Spotlight',
  },
  {
    id: 7,
    src: '/daily-hero/daily-7.webp',
    alt: 'Hands-on hardware and coding session with Kenyan youths',
    tag: 'Learner Highlight',
  },
  {
    id: 8,
    src: '/daily-hero/daily-8.webp',
    alt: 'Bunifu tech workshop fostering curiosity and critical thinking',
    tag: 'Today in the Lab',
  },
  {
    id: 9,
    src: '/daily-hero/daily-9.webp',
    alt: 'Students showcasing practical STEM prototypes and creations',
    tag: 'Daily Field Spotlight',
  },
  {
    id: 10,
    src: '/daily-hero/daily-10.webp',
    alt: 'Inspiring the next generation of African innovators through STEM',
    tag: 'Today in the Lab',
  },
];

/**
 * Returns a deterministically selected hero image based on the calendar day.
 * Rotates automatically every day across the 10 images.
 */
export function getDailyHeroImage(date: Date = new Date()): DailyHeroImage {
  const dayNumber = Math.floor(date.getTime() / 86_400_000);
  const index = Math.abs(dayNumber) % DAILY_HERO_IMAGES.length;
  return DAILY_HERO_IMAGES[index];
}
