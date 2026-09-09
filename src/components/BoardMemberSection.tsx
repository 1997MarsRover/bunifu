import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { getPublishedPeople } from '../data/people';

export default function BoardMemberSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const reduceMotion = useReducedMotion();
  const members = getPublishedPeople();
  const featuredMember = members.find((member) => member.featured) ?? members[0];
  const remainingMembers = members.filter((member) => member.id !== featuredMember?.id);
  const reveal = reduceMotion ? {} : { opacity: 0, y: 18 };
  const visible = isInView ? { opacity: 1, y: 0 } : {};

  if (!featuredMember) return null;

  return (
    <section
      id="our-people"
      ref={sectionRef}
      aria-labelledby="our-people-heading"
      className="bg-[#f7f5ef] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.header
          initial={reveal}
          animate={visible}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-4xl md:mb-16"
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-brand-green">Our people</p>
          <h2 id="our-people-heading" className="max-w-3xl text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-brand-dark sm:text-5xl md:text-6xl">
            The people helping shape our direction.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-brand-dark/65 md:text-lg md:leading-8">
            Our board and leadership bring experience, perspective and a shared belief in creating meaningful opportunities for young people through technology and education.
          </p>
        </motion.header>

        <article className="grid border-y border-brand-dark/20 py-8 md:grid-cols-12 md:gap-12 md:py-12 lg:gap-16">
          <motion.div
            initial={reduceMotion ? {} : { opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="md:col-span-6 lg:col-span-5"
          >
            <div className="mx-auto aspect-[4/5] w-full max-w-[430px] overflow-hidden bg-neutral-200 md:mx-0">
              <img
                src={featuredMember.portrait}
                alt={featuredMember.portraitAlt}
                width={900}
                height={1125}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-300 motion-reduce:transition-none md:hover:scale-[1.015]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={reveal}
            animate={visible}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="flex flex-col justify-center pt-9 md:col-span-6 md:pt-0 lg:col-span-7"
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-brand-green">Board member</p>
            <h3 className="text-4xl font-bold leading-none tracking-[-0.045em] text-brand-dark sm:text-5xl md:text-6xl">
              {featuredMember.name}
            </h3>
            <p className="mt-6 text-lg font-semibold text-brand-dark sm:text-xl">{featuredMember.boardRole}</p>
            {featuredMember.professionalTitle && (
              <p className="mt-2 text-base leading-7 text-brand-dark/55">{featuredMember.professionalTitle}</p>
            )}
            {featuredMember.shortBio && (
              <p className="mt-8 max-w-xl border-t border-brand-dark/20 pt-7 text-base leading-7 text-brand-dark/65">
                {featuredMember.shortBio}
              </p>
            )}
          </motion.div>
        </article>

        {remainingMembers.length > 0 && (
          <div className="grid gap-x-7 gap-y-12 pt-14 sm:grid-cols-2 lg:grid-cols-3">
            {remainingMembers.map((member) => (
              <article key={member.id}>
                <div className="aspect-[4/5] overflow-hidden bg-neutral-200">
                  <img src={member.portrait} alt={member.portraitAlt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-300 motion-reduce:transition-none hover:scale-[1.015]" />
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-[-0.02em] text-brand-dark">{member.name}</h3>
                <p className="mt-2 text-sm text-brand-dark/60">{member.boardRole}</p>
                {member.professionalTitle && <p className="mt-1 text-sm text-brand-dark/45">{member.professionalTitle}</p>}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
