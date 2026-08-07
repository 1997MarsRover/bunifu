export type ProgramGuideStep = {
  step: number;
  title: string;
  summary: string;
  highlights?: string[];
  image: string;
  imageWebp: string;
  imageAlt: string;
};

export const PROGRAM_GUIDE_STEPS: ProgramGuideStep[] = [
  {
    step: 1,
    title: 'Bunifu Code Clubs program guide',
    summary:
      'Our Code Clubs guide is the roadmap for how Bunifu introduces young learners to technology through structured, hands-on sessions—not a replacement for school, but a dedicated STEM space alongside it.',
    highlights: ['Coding & robotics', 'Hands-on projects', 'Youth-focused learning'],
    image: '/1.png',
    imageWebp: '/1.webp',
    imageAlt: 'Cover of the Bunifu Code Clubs program guide',
  },
  {
    step: 2,
    title: 'What your child does at our STEM space',
    summary:
      'Bunifu is exposure-first: children discover coding, robotics, AI, app building, and 3D design in a supportive space where curiosity leads. Programs serve ages 4–18, with three-hour sessions across ten meetings.',
    highlights: ['Ages 4–18', '3 hours per session', '10 sessions total', 'Exposure, not a classroom'],
    image: '/2.png',
    imageWebp: '/2.webp',
    imageAlt: 'Parent guide explaining what children do at the Bunifu STEM space',
  },
  {
    step: 3,
    title: 'Four core activities',
    summary:
      'Every student rotates through four professional-style areas across the ten sessions: coding with Scratch, robotics with micro:bit, AI and mobile apps with Code.org, and 3D design and printing with Tinkercad.',
    highlights: ['Coding', 'Robotics', 'AI & apps', '3D design & printing'],
    image: '/3.png',
    imageWebp: '/3.webp',
    imageAlt: 'Chart of Bunifu four core STEM activities and tools used',
  },
  {
    step: 4,
    title: 'What a 3-hour session looks like',
    summary:
      'Each session runs three hours with welcome and warm-up, two main activity blocks, breaks for food and free play, and a show-and-tell wrap-up so learners share what they built and recap the day.',
    highlights: [
      'Welcome & warm-up (15 min)',
      'Two hands-on blocks',
      'Breaks to recharge',
      'Show & tell at the end',
    ],
    image: '/4.png',
    imageWebp: '/4.webp',
    imageAlt: 'Schedule of a typical three-hour Bunifu session',
  },
  {
    step: 5,
    title: 'Progress after 10 sessions',
    summary:
      'Learners progress at their own pace through beginner and intermediate levels. By the end they can show a game or story, a working robot, a simple app idea, and a printed 3D object they designed.',
    highlights: ['Beginner milestones', 'Intermediate challenges', 'Own pace'],
    image: '/5.png',
    imageWebp: '/5.webp',
    imageAlt: 'Beginner and intermediate outcomes after ten Bunifu sessions',
  },
  {
    step: 6,
    title: 'Lesson plans for each activity',
    summary:
      'Coding, robotics, and 3D design each follow a ten-session plan that builds week by week—from Scratch basics and first robots to obstacle courses, multi-part prints, and a final showcase project.',
    highlights: ['Session-by-session coding', 'Hands-on robotics', 'Tinkercad print projects'],
    image: '/6.png',
    imageWebp: '/6.webp',
    imageAlt: 'Session-by-session lesson plans for coding, robotics, and 3D design',
  },
  {
    step: 7,
    title: 'Fees, meals, and contact',
    summary:
      'The hands-on ten-session program is KSh 15,000. Snacks and meals are not included; learners may bring their own or use the on-site cafeteria (optional, billed separately). Reach us at Afralti, Waiyaki Way.',
    highlights: ['KSh 15,000 (10 sessions)', 'Bring food or use cafeteria', 'Afralti, Waiyaki Way'],
    image: '/7.png',
    imageWebp: '/7.webp',
    imageAlt: 'Program fees, meal arrangements, and Bunifu contact information',
  },
];
