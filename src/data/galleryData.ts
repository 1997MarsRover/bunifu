export interface GalleryCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  displayOrder: number;
  active: boolean;
}

export interface GalleryImage {
  id: string;
  collectionId: string;
  imageUrl: string;
  thumbnailUrl?: string;
  altText: string;
  caption: string;
  photographerCredit?: string;
  width?: number;
  height?: number;
  aspectRatio?: 'landscape' | 'portrait' | 'square' | 'wide';
  displayOrder: number;
  featured?: boolean;
  createdAt?: string;
}

export interface GalleryCollection {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  story?: {
    heading: string;
    text: string;
    highlightImage?: string;
  };
  categoryId: string;
  coverImage: string;
  eventDate: string;
  location: string;
  featured: boolean;
  published: boolean;
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
  images: GalleryImage[];
}

export const galleryCategories: GalleryCategory[] = [
  {
    id: 'learning',
    name: 'Learning',
    slug: 'learning',
    description: 'Coding sessions, robotics workshops, mentor interactions, and learners experimenting with technology.',
    displayOrder: 1,
    active: true,
  },
  {
    id: 'projects',
    name: 'Projects',
    slug: 'projects',
    description: 'Robots, 3D prints, applications, prototypes, Scratch projects, and mechanical builds.',
    displayOrder: 2,
    active: true,
  },
  {
    id: 'bootcamps',
    name: 'Bootcamps',
    slug: 'bootcamps',
    description: 'Holiday STEM camps, weekend intensive workshops, and hands-on maker bootcamps.',
    displayOrder: 3,
    active: true,
  },
  {
    id: 'outreach',
    name: 'Outreach',
    slug: 'outreach',
    description: 'School visits, classroom coding clubs, and community STEM initiatives across Kenya.',
    displayOrder: 4,
    active: true,
  },
  {
    id: 'competitions',
    name: 'Competitions',
    slug: 'competitions',
    description: 'Robotics arenas, innovation challenges, exhibitions, and learner showcases.',
    displayOrder: 5,
    active: true,
  },
  {
    id: 'educators',
    name: 'Educators',
    slug: 'educators',
    description: 'Teacher training, school leadership sessions, mentor workshops, and club patrons.',
    displayOrder: 6,
    active: true,
  },
];

export const galleryCollections: GalleryCollection[] = [
  {
    id: 'col-makers-quest',
    title: "Maker's QUEST",
    slug: 'makers-quest',
    shortDescription: 'Hands-on robotics prototyping, hardware assembly, and creative engineering challenges where young makers turn raw components into functioning machines.',
    story: {
      heading: 'From loose components to intelligent machines',
      text: 'During Maker’s QUEST, learners stepped directly into the shoes of hardware innovators. Working with WhaleBot modular STEM kits and microcontrollers, teams brainstormed mechanical structures, wired motors and sensors, wrote control routines, and debugged rover movement on test tracks. Rather than memorizing passive theory, students learned how mechanical stability, gear ratios, and real-time code come together.',
      highlightImage: '/max.webp',
    },
    categoryId: 'bootcamps',
    coverImage: '/max.webp',
    eventDate: 'August 2026',
    location: 'Nairobi, Kenya',
    featured: true,
    published: true,
    displayOrder: 1,
    createdAt: '2026-08-20T09:00:00Z',
    updatedAt: '2026-09-09T08:00:00Z',
    images: [
      {
        id: 'mq-1',
        collectionId: 'col-makers-quest',
        imageUrl: '/max.webp',
        altText: 'Young makers collaborating on WhaleBot robotics assembly during Maker’s QUEST',
        caption: 'Team collaboration on robotics chassis',
        aspectRatio: 'landscape',
        displayOrder: 1,
        featured: true,
      },
      {
        id: 'mq-2',
        collectionId: 'col-makers-quest',
        imageUrl: '/whalebot.webp',
        altText: 'WhaleBot robotics engineering kit components and modular structural parts',
        caption: 'WhaleBot modular robotics hardware',
        aspectRatio: 'landscape',
        displayOrder: 2,
      },
      {
        id: 'mq-3',
        collectionId: 'col-makers-quest',
        imageUrl: '/max1.webp',
        altText: 'Focused student wiring drive motors and checking gear alignment',
        caption: 'Assembling and wiring drivetrain motors',
        aspectRatio: 'landscape',
        displayOrder: 3,
      },
      {
        id: 'mq-4',
        collectionId: 'col-makers-quest',
        imageUrl: '/max2.webp',
        altText: 'Testing robotic rover maneuvers and obstacle sensor responses',
        caption: 'Track testing and sensor calibration',
        aspectRatio: 'landscape',
        displayOrder: 4,
      },
      {
        id: 'mq-5',
        collectionId: 'col-makers-quest',
        imageUrl: '/laptop.webp',
        altText: 'Hands-on programming and firmware flashing on laptop station',
        caption: 'Flashing code and testing logic',
        aspectRatio: 'portrait',
        displayOrder: 5,
      },
      {
        id: 'mq-6',
        collectionId: 'col-makers-quest',
        imageUrl: '/max3.webp',
        altText: 'Close-up of young innovator calibrating robotics module',
        caption: 'Precision hardware calibration',
        aspectRatio: 'portrait',
        displayOrder: 6,
      },
    ],
  },
  {
    id: 'col-school-outreach',
    title: 'STEM School Outreach & Coding Clubs',
    slug: 'stem-school-outreach',
    shortDescription: 'Bringing hands-on coding, robotics demos, and digital skills directly into school classrooms to ignite curiosity across diverse learners.',
    story: {
      heading: 'Sparking the first flame in classrooms across Kenya',
      text: 'Our scalable coding-club model meets schools and learners right where they are. By bringing modular STEM kits, laptops, and dedicated facilitators into primary and secondary schools, we give students their very first opportunity to write code, animate stories, and see circuits respond. Each school outreach establishes student-led clubs that continue thriving long after the initial session.',
      highlightImage: '/child.webp',
    },
    categoryId: 'outreach',
    coverImage: '/child.webp',
    eventDate: 'Term Sessions 2026',
    location: 'Schools across Kenya',
    featured: false,
    published: true,
    displayOrder: 2,
    createdAt: '2026-07-15T09:00:00Z',
    updatedAt: '2026-09-09T08:00:00Z',
    images: [
      {
        id: 'outreach-1',
        collectionId: 'col-school-outreach',
        imageUrl: '/child.webp',
        altText: 'Young student beaming with confidence as their code runs on screen',
        caption: 'Joyful breakthrough moment in code',
        aspectRatio: 'portrait',
        displayOrder: 1,
        featured: true,
      },
      {
        id: 'outreach-2',
        collectionId: 'col-school-outreach',
        imageUrl: '/child1.webp',
        altText: 'Student deeply focused on programming an interactive project',
        caption: 'Deep focus on logic and sequencing',
        aspectRatio: 'portrait',
        displayOrder: 2,
      },
      {
        id: 'outreach-3',
        collectionId: 'col-school-outreach',
        imageUrl: '/children.webp',
        altText: 'Group of learners gathered around a laptop screen collaborating on an activity',
        caption: 'Peer learning and collaborative problem solving',
        aspectRatio: 'portrait',
        displayOrder: 3,
      },
      {
        id: 'outreach-4',
        collectionId: 'col-school-outreach',
        imageUrl: '/children2.webp',
        altText: 'Young girl exploring coding blocks and creative technology',
        caption: 'Empowering girls in STEM from early years',
        aspectRatio: 'portrait',
        displayOrder: 4,
      },
      {
        id: 'outreach-5',
        collectionId: 'col-school-outreach',
        imageUrl: '/photo_dump_outreach_laptop_session.webp',
        altText: 'Classroom outreach session with students active on laptops',
        caption: 'Hands-on classroom outreach session',
        aspectRatio: 'landscape',
        displayOrder: 5,
      },
      {
        id: 'outreach-6',
        collectionId: 'col-school-outreach',
        imageUrl: '/photo_dump_outreach_student_selfie.webp',
        altText: 'Students smiling together after completing their first coding challenge',
        caption: 'Pride in building their first project',
        aspectRatio: 'portrait',
        displayOrder: 6,
      },
      {
        id: 'outreach-7',
        collectionId: 'col-school-outreach',
        imageUrl: '/photo_dump_outreach_school_group_wide.webp',
        altText: 'Full school cohort celebrating the launch of their new coding club',
        caption: 'Schoolwide coding club launch celebration',
        aspectRatio: 'wide',
        displayOrder: 7,
      },
      {
        id: 'outreach-8',
        collectionId: 'col-school-outreach',
        imageUrl: '/photo_dump_outreach_school_group_alt.webp',
        altText: 'Students and teacher posing with Bunifu facilitators after outreach',
        caption: 'School cohort with Bunifu facilitators',
        aspectRatio: 'landscape',
        displayOrder: 8,
      },
      {
        id: 'outreach-9',
        collectionId: 'col-school-outreach',
        imageUrl: '/photo_dump_outreach_facilitators_group.webp',
        altText: 'Bunifu facilitators and school educators after session debrief',
        caption: 'Facilitators and school patrons',
        aspectRatio: 'landscape',
        displayOrder: 9,
      },
    ],
  },
  {
    id: 'col-fgc-competitions',
    title: 'First Global Challenge & Competitions',
    slug: 'first-global-robotics-competitions',
    shortDescription: 'Young Kenyan engineers designing, building, and programming competitive robots for national and international robotics arenas.',
    story: {
      heading: 'Taking Kenyan engineering to the world stage',
      text: 'Competitive robotics pushes young engineers to tackle real-world constraints: weight limits, autonomous routing, alliance coordination, and rapid pit-crew repairs. Representing Kenya, our learners demonstrate that African youth are equipped to compete with the top STEM innovators on Earth.',
      highlightImage: '/fgc2.webp',
    },
    categoryId: 'competitions',
    coverImage: '/fgc2.webp',
    eventDate: '2026 Season',
    location: 'Kenya & Global Arenas',
    featured: false,
    published: true,
    displayOrder: 4,
    createdAt: '2026-06-10T09:00:00Z',
    updatedAt: '2026-09-09T08:00:00Z',
    images: [
      {
        id: 'fgc-1',
        collectionId: 'col-fgc-competitions',
        imageUrl: '/fgc2.webp',
        altText: 'Team Kenya robotics students adjusting the competition robot mechanism',
        caption: 'Pit crew fine-tuning competition robot',
        aspectRatio: 'landscape',
        displayOrder: 1,
        featured: true,
      },
      {
        id: 'fgc-2',
        collectionId: 'col-fgc-competitions',
        imageUrl: '/fgc.webp',
        altText: 'Team Kenya representative holding the national flag beside competition robot',
        caption: 'Proudly representing Kenya in robotics',
        aspectRatio: 'portrait',
        displayOrder: 2,
      },
      {
        id: 'fgc-3',
        collectionId: 'col-fgc-competitions',
        imageUrl: '/activity_competition.webp',
        altText: 'Students presenting technological project at a judging showcase',
        caption: 'Project presentation to competition jury',
        aspectRatio: 'portrait',
        displayOrder: 3,
      },
      {
        id: 'fgc-4',
        collectionId: 'col-fgc-competitions',
        imageUrl: '/photo-dump/robotics/robot-day-wins.webp',
        altText: 'Students celebrating a successful test run with their outdoor robotics build',
        caption: 'Celebration after a successful robot demonstration',
        aspectRatio: 'landscape',
        displayOrder: 4,
      },
    ],
  },
  {
    id: 'col-startup-africa',
    title: 'Startup Africa',
    slug: 'startup-africa-showcase',
    shortDescription: 'Young innovators presenting tangible technology solutions, pitch presentations, and prototypes to mentors and industry leaders.',
    story: {
      heading: 'Pitching real solutions to community challenges',
      text: 'At Startup Africa Kabarak, Bunifu learners stepped up onto the main stage to pitch prototypes built during their sessions. From environmental monitoring concepts to automated assistive devices, learners showed how technology education directly translates into community impact.',
      highlightImage: '/STARUP AFRICA KABARAK-114.webp',
    },
    categoryId: 'competitions',
    coverImage: '/STARUP AFRICA KABARAK-114.webp',
    eventDate: 'May 2026',
    location: 'Kabarak University, Kenya',
    featured: false,
    published: true,
    displayOrder: 5,
    createdAt: '2026-05-31T09:00:00Z',
    updatedAt: '2026-09-09T08:00:00Z',
    images: [
      {
        id: 'sa-1',
        collectionId: 'col-startup-africa',
        imageUrl: '/STARUP AFRICA KABARAK-114.webp',
        altText: 'Youth keynote and innovation presentation on stage at Kabarak',
        caption: 'Keynote youth pitch on stage',
        aspectRatio: 'landscape',
        displayOrder: 1,
        featured: true,
      },
      {
        id: 'sa-2',
        collectionId: 'col-startup-africa',
        imageUrl: '/STARUP AFRICA KABARAK-164.webp',
        altText: 'Learners demonstrating functioning device to evaluators and mentors',
        caption: 'Demonstrating working prototype to mentors',
        aspectRatio: 'landscape',
        displayOrder: 2,
      },
      {
        id: 'sa-3',
        collectionId: 'col-startup-africa',
        imageUrl: '/STARUP AFRICA KABARAK-301.webp',
        altText: 'Panel of young innovators discussing technological solutions',
        caption: 'Discussion panel on youth tech pathways',
        aspectRatio: 'landscape',
        displayOrder: 3,
      },
      {
        id: 'sa-4',
        collectionId: 'col-startup-africa',
        imageUrl: '/STARUP AFRICA KABARAK-333.webp',
        altText: 'Showcase awards celebrating standout student innovation builds',
        caption: 'Celebrating innovation achievements',
        aspectRatio: 'landscape',
        displayOrder: 4,
      },
      {
        id: 'sa-5',
        collectionId: 'col-startup-africa',
        imageUrl: '/photo-dump/startup-africa/innovation-on-display.webp',
        altText: 'Exhibition display of youth inventions and prototypes',
        caption: 'Youth projects on exhibition display',
        aspectRatio: 'landscape',
        displayOrder: 5,
      },
    ],
  },
  {
    id: 'col-coding-workshops',
    title: 'Hands-On Coding & Robotics Labs',
    slug: 'hands-on-coding-workshops',
    shortDescription: 'Where curiosity transforms into code: tinkering with robotics, electronics, sensors, and algorithmic logic.',
    story: {
      heading: 'Hands on the keyboard, eyes on the outcome',
      text: 'Every lab session at Bunifu is structured around active doing. Mentors don’t lecture from slides; they pose real challenges and guide learners as they formulate logic, write code, observe sensor feedback, and refine their own builds.',
      highlightImage: '/photo-dump/robotics/hands-on-eyes-wide.webp',
    },
    categoryId: 'learning',
    coverImage: '/photo-dump/robotics/hands-on-eyes-wide.webp',
    eventDate: 'Weekend & Club Sessions',
    location: 'Bunifu Innovation Center, Afralti',
    featured: false,
    published: true,
    displayOrder: 6,
    createdAt: '2026-06-01T09:00:00Z',
    updatedAt: '2026-09-09T08:00:00Z',
    images: [
      {
        id: 'learn-1',
        collectionId: 'col-coding-workshops',
        imageUrl: '/photo-dump/robotics/hands-on-eyes-wide.webp',
        altText: 'Mentor explaining sensor wiring to captivated learners',
        caption: 'Hands-on mentor guidance',
        aspectRatio: 'landscape',
        displayOrder: 1,
        featured: true,
      },
      {
        id: 'learn-2',
        collectionId: 'col-coding-workshops',
        imageUrl: '/photo-dump/workshop/build-test-repeat.webp',
        altText: 'Learners adjusting code and re-testing robot movements',
        caption: 'Build, test, and repeat cycle',
        aspectRatio: 'landscape',
        displayOrder: 2,
      },
      {
        id: 'learn-3',
        collectionId: 'col-coding-workshops',
        imageUrl: '/photo-dump/stem/tiny-builds-big-ideas.webp',
        altText: 'Demonstrating microcontroller circuit integration in class',
        caption: 'Tiny builds sparking big ideas',
        aspectRatio: 'landscape',
        displayOrder: 3,
      },
      {
        id: 'learn-4',
        collectionId: 'col-coding-workshops',
        imageUrl: '/gallery_hands_on_coding.webp',
        altText: 'Students working together on interactive coding exercise',
        caption: 'Interactive pair programming',
        aspectRatio: 'landscape',
        displayOrder: 4,
      },
      {
        id: 'learn-5',
        collectionId: 'col-coding-workshops',
        imageUrl: '/gallery_mentor_coding.webp',
        altText: 'One-on-one mentorship helping student debug code logic',
        caption: 'Personalized mentoring in action',
        aspectRatio: 'portrait',
        displayOrder: 5,
      },
    ],
  },
  {
    id: 'col-educator-training',
    title: 'Educator Training & School Leadership',
    slug: 'educator-training-school-leadership',
    shortDescription: 'Training teachers, equipping club patrons, and partnering with school Boards of Management to scale STEM clubs.',
    story: {
      heading: 'Equipping schools with sustainable STEM capacity',
      text: 'For STEM education to be lasting, educators and school administrators must be empowered partners. We host practical training sessions for school patrons and leadership teams, showing how our scalable coding-club model integrates seamlessly into school timetables.',
      highlightImage: '/activity_educators_training.webp',
    },
    categoryId: 'educators',
    coverImage: '/activity_educators_training.webp',
    eventDate: 'Ongoing Partnerships',
    location: 'Nairobi & Partner Schools',
    featured: false,
    published: true,
    displayOrder: 7,
    createdAt: '2026-07-20T09:00:00Z',
    updatedAt: '2026-09-09T08:00:00Z',
    images: [
      {
        id: 'edu-2',
        collectionId: 'col-educator-training',
        imageUrl: '/activity_educators_training.webp',
        altText: 'Hands-on teacher training workshop on STEM pedagogy and club facilitation',
        caption: 'Teacher training and STEM pedagogy',
        aspectRatio: 'landscape',
        displayOrder: 2,
        featured: true,
      },
      {
        id: 'edu-3',
        collectionId: 'col-educator-training',
        imageUrl: '/team.webp',
        altText: 'Bunifu facilitation and curriculum planning team',
        caption: 'Bunifu STEM facilitators team',
        aspectRatio: 'landscape',
        displayOrder: 3,
      },
      {
        id: 'edu-4',
        collectionId: 'col-educator-training',
        imageUrl: '/team1.webp',
        altText: 'Educator and mentor coaches reviewing curriculum modules',
        caption: 'Lead coaches reviewing modules',
        aspectRatio: 'portrait',
        displayOrder: 4,
      },
      {
        id: 'edu-5',
        collectionId: 'col-educator-training',
        imageUrl: '/James.webp',
        altText: 'Bunifu facilitator James mentoring in the innovation lab',
        caption: 'Facilitator James in the lab',
        aspectRatio: 'portrait',
        displayOrder: 5,
      },
      {
        id: 'edu-6',
        collectionId: 'col-educator-training',
        imageUrl: '/Millicent.webp',
        altText: 'Bunifu facilitator Millicent assisting learners with creative robotics',
        caption: 'Facilitator Millicent guiding learners',
        aspectRatio: 'portrait',
        displayOrder: 6,
      },
      {
        id: 'edu-7',
        collectionId: 'col-educator-training',
        imageUrl: '/Shady.webp',
        altText: 'Bunifu STEM coach Shady preparing robotics kits',
        caption: 'Coach Shady organizing hardware',
        aspectRatio: 'landscape',
        displayOrder: 7,
      },
    ],
  },
  {
    id: 'col-projects-creations',
    title: 'Robots, Prototypes & 3D Creations',
    slug: 'robots-prototypes-3d-creations',
    shortDescription: 'Physical builds, 3D printed mechanical gears, custom rovers, and interactive digital projects crafted by learners.',
    categoryId: 'projects',
    coverImage: '/whalebot.webp',
    eventDate: 'All Seasons',
    location: 'Makerspace & Labs',
    featured: false,
    published: true,
    displayOrder: 8,
    createdAt: '2026-08-10T09:00:00Z',
    updatedAt: '2026-09-09T08:00:00Z',
    images: [
      {
        id: 'proj-1',
        collectionId: 'col-projects-creations',
        imageUrl: '/whalebot.webp',
        altText: 'Modular WhaleBot robotic arm and drivetrain build',
        caption: 'WhaleBot robotic arm prototype',
        aspectRatio: 'landscape',
        displayOrder: 1,
        featured: true,
      },
      {
        id: 'proj-2',
        collectionId: 'col-projects-creations',
        imageUrl: '/activity_3d_printing.webp',
        altText: 'Precision 3D printing of structural robotics parts',
        caption: '3D printed functional parts',
        aspectRatio: 'landscape',
        displayOrder: 2,
      },
      {
        id: 'proj-3',
        collectionId: 'col-projects-creations',
        imageUrl: '/activity_3ddesign.webp',
        altText: 'Student CAD design ready for fabrication',
        caption: 'CAD design for fabrication',
        aspectRatio: 'portrait',
        displayOrder: 3,
      },
      {
        id: 'proj-4',
        collectionId: 'col-projects-creations',
        imageUrl: '/max2.webp',
        altText: 'Completed mobile robot chassis on test track',
        caption: 'Completed rover build on test track',
        aspectRatio: 'landscape',
        displayOrder: 4,
      },
    ],
  },
];

export function getFeaturedCollection(): GalleryCollection {
  return galleryCollections.find((c) => c.featured) || galleryCollections[0];
}

export function getCollectionBySlug(slug: string): GalleryCollection | undefined {
  return galleryCollections.find((c) => c.slug === slug);
}

export function getCollectionsByCategory(categoryId: string): GalleryCollection[] {
  if (categoryId === 'all' || categoryId === 'All') {
    return galleryCollections;
  }
  return galleryCollections.filter((c) => c.categoryId.toLowerCase() === categoryId.toLowerCase());
}

export function getAllGalleryImages(): GalleryImage[] {
  return galleryCollections.flatMap((c) => c.images);
}
