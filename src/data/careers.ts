import { STEM_FACILITATOR_GOOGLE_FORM_URL, SALES_OUTREACH_GOOGLE_FORM_URL } from '../lib/links';

export interface CareerPosition {
  id: 'stem-facilitator' | 'sales-outreach-associate';
  title: string;
  subtitle: string;
  tagline: string;
  posterWording: string;
  department: string;
  location: string;
  workArrangement: string;
  schedule: string;
  startDate?: string;
  applicationDeadline: string;
  compensation?: string;
  googleFormUrl: string;
  mainResponsibilities: string[];
  essentialRequirements: string[];
  addedAdvantages: string[];
  candidateProfile: string[];
  applicationInstructions: string[];
  color: {
    primary: string;
    bgLight: string;
    badge: string;
    border: string;
  };
}

export const CAREER_POSITIONS: CareerPosition[] = [
  {
    id: 'stem-facilitator',
    title: 'STEM Education Facilitator',
    subtitle: 'Coding · Robotics · 3D Design & Printing',
    tagline: 'Can you turn curiosity into creation?',
    posterWording:
      'Bunifu Youths Kenya is looking for an energetic, creative and learner-centred facilitator to deliver practical STEM experiences in schools and at our learning spaces. The right person enjoys working with children, brings positive energy into the classroom and can help learners move from simply using technology to designing, coding and building with it.',
    department: 'Education & Programs',
    location: 'Nairobi',
    workArrangement: 'Fully physical, with travel to partner schools',
    schedule: '6 days a week',
    startDate: 'October 1st, 2026',
    applicationDeadline: 'September 26th',
    googleFormUrl: STEM_FACILITATOR_GOOGLE_FORM_URL,
    mainResponsibilities: [
      'Facilitate engaging sessions in coding, robotics, 3D design and 3D printing.',
      'Prepare age-appropriate lesson plans, activities and materials.',
      'Guide learners through practical projects, challenges and showcases.',
      'Manage classroom participation, safety, equipment and time effectively.',
      'Track attendance, learner progress, projects and session outcomes.',
      'Support school demonstrations, open days, camps and community outreach.',
      'Build positive relationships with learners, teachers, parents and school leaders.',
      'Care for robotics kits, laptops, microcontrollers, 3D printers and other learning equipment.',
      'Submit brief and accurate session reports on time.',
      'Learn new tools and programmes through internal training and continuous practice.',
    ],
    essentialRequirements: [
      'Previous experience teaching, mentoring or facilitating children or young people in STEM or technology.',
      'Working knowledge of at least two areas among coding, robotics, electronics, 3D design and 3D printing.',
      'Confidence using beginner-friendly platforms such as Scratch, Tinkercad or similar tools.',
      'Strong classroom communication and learner-management skills.',
      'A warm, jovial, patient and encouraging personality.',
      'Ability to explain technical ideas in simple language.',
      'Reliability, professionalism and good time management.',
      'Ability and willingness to travel physically to schools within Nairobi.',
      'Smartphone access and ability to complete digital attendance and reporting forms.',
      'Commitment to child safeguarding, inclusion and respectful learning environments.',
    ],
    addedAdvantages: [
      'Diploma or degree in Education, ICT, Computer Science, Engineering, Mechatronics or a related field.',
      'Experience working with competency-based, project-based or maker-centred learning.',
      'Experience with Arduino, micro:bit, LEGO robotics or similar platforms.',
      'Experience operating and troubleshooting a 3D printer.',
      'Experience engaging teachers, parents or school administrators.',
      'A portfolio of lessons, learner projects or personal technology projects.',
    ],
    candidateProfile: [
      'Light up when a learner finally makes something work.',
      'Can make a technical lesson feel simple, practical and exciting.',
      'Are comfortable learning what you do not yet know.',
      'Combine creativity with structure and reliable reporting.',
      'Enjoy both classroom facilitation and meeting new school communities.',
    ],
    applicationInstructions: [
      'An updated CV.',
      'A short statement explaining why you want to teach STEM.',
      'A 60–90 second introduction video or a link to a teaching demonstration.',
      'Photos or links to projects you have taught or built, where available.',
      'Your Nairobi location and availability.',
      'Your expected compensation.',
    ],
    color: {
      primary: '#0066CC',
      bgLight: 'from-blue-50/80 via-white to-blue-50/30',
      badge: 'bg-blue-100 text-blue-800 border-blue-200',
      border: 'hover:border-blue-400',
    },
  },
  {
    id: 'sales-outreach-associate',
    title: 'School Partnerships, Sales & Outreach Associate',
    subtitle: 'Partnership Building · School Outreach · Programme Growth',
    tagline: 'Help us take practical STEM education to more schools',
    posterWording:
      'Bunifu Youths Kenya is looking for a confident, organised and results-driven person to introduce our coding, robotics and 3D-design programmes to more schools and communities. This role is for someone who enjoys meeting people, starting conversations, following up consistently and turning school interest into active partnerships and learner enrolments.',
    department: 'Growth & Outreach',
    location: 'Nairobi',
    workArrangement: 'Fully physical and field-based',
    schedule: 'Full-time / Field-based',
    compensation: 'Salary / Retainer + Commission structure',
    applicationDeadline: 'Rolling basis (Immediate start)',
    googleFormUrl: SALES_OUTREACH_GOOGLE_FORM_URL,
    mainResponsibilities: [
      'Research and identify schools that could benefit from Bunifu Youths programmes.',
      'Contact school leaders, teachers, parents and community partners through calls, email, WhatsApp and physical visits.',
      'Book meetings, demonstrations and programme presentations.',
      'Explain programme benefits, structure, schedules and fees clearly.',
      'Prepare and share proposals, quotations and follow-up information.',
      'Maintain accurate records of leads, conversations, meetings and next actions.',
      'Follow up consistently until a lead is converted, paused or closed.',
      'Support school activations, exhibitions, open days and community outreach events.',
      'Gather feedback from schools and share market insights with the programme team.',
      'Work toward agreed monthly targets for contacts, meetings, proposals, partnerships and enrolments.',
    ],
    essentialRequirements: [
      'Previous experience in sales, outreach, customer service, school engagement, community mobilisation or business development.',
      'Strong spoken and written communication.',
      'Confidence speaking with teachers, principals, administrators and parents.',
      'Ability to build trust and explain educational programmes clearly.',
      'Strong follow-up habits and attention to detail.',
      'Comfort using WhatsApp, email, Google Forms and Google Sheets.',
      'Ability to work independently, organise field visits and meet targets.',
      'Professional presentation and respectful conduct.',
      'Knowledge of Nairobi schools or education networks.',
      'Genuine interest in education, technology and youth development.',
    ],
    addedAdvantages: [
      'Existing relationships with schools, teachers or education organisations.',
      'Experience selling education programmes, training, technology or services.',
      'Experience preparing proposals or quotations.',
      'Familiarity with CRM or sales-tracking systems.',
      'Ability to create simple social media content, school stories or campaign materials.',
      'Experience supporting events, activations or demonstrations.',
    ],
    candidateProfile: [
      'Are comfortable walking into a new school and beginning a professional conversation.',
      'Follow up without becoming discourteous or discouraged.',
      'Listen carefully before recommending a programme.',
      'Can turn interest into a clear next step.',
      'Keep accurate records and know where every lead stands.',
      'Care about expanding meaningful learning opportunities, not merely making a sale.',
    ],
    applicationInstructions: [
      'An updated CV.',
      'A short statement describing your sales, outreach or school-engagement experience.',
      'One example of a target you achieved or a relationship you helped convert.',
      'A short written pitch introducing Bunifu Youths Kenya to a school principal.',
      'Your Nairobi location and availability.',
      'Your expected compensation.',
    ],
    color: {
      primary: '#E65100',
      bgLight: 'from-amber-50/80 via-white to-orange-50/30',
      badge: 'bg-amber-100 text-amber-800 border-amber-200',
      border: 'hover:border-amber-400',
    },
  },
];
