export type PersonType = 'Board' | 'Leadership' | 'Team' | 'Advisor';

export interface Person {
  id: string;
  name: string;
  slug: string;
  portrait: string;
  portraitAlt: string;
  boardRole: string;
  professionalTitle?: string;
  shortBio?: string;
  linkedinUrl?: string;
  memberType: PersonType;
  featured: boolean;
  displayOrder: number;
  published: boolean;
}

// This content model mirrors the fields expected from the external Bunifu CMS.
// Until a public people endpoint is available, published profiles live here.
export const people: Person[] = [
  {
    id: 'board-bryce-hartley',
    name: 'Bryce Hartley',
    slug: 'bryce-hartley',
    portrait: '/people-bryce-hartley.webp',
    portraitAlt: 'Portrait of Bryce Hartley, Founding Board Member at Bunifu Youths',
    boardRole: 'Founding Board Member',
    professionalTitle: 'Venture & Emerging Markets Advisor',
    shortBio: 'Bryce Hartley is a Founding Board Member of Bunifu Youths and a Venture & Emerging Markets Advisor.',
    memberType: 'Board',
    featured: true,
    displayOrder: 1,
    published: true,
  },
];

export function getPublishedPeople() {
  return people
    .filter((person) => person.published)
    .sort((a, b) => a.displayOrder - b.displayOrder);
}
