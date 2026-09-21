import { PATTERN_URL } from '../lib/assets';

export default function PartnersSection() {
  const partners = [
    'Samburu Girls Foundation',
    'The Tech Challenge Kenya',
    'UNESCO Kenya',
    'M-Lugha',
    'Nomadic Hub',
    'Kanatech',
    'Scratch',
    'World Robot Olympiad Kenya',
    'Microsoft',
    'Mentor a Cub',
    'Code with Kids',
    'Enjoyai',
  ];

  return (
    <section id="partners" className="min-h-screen bg-white relative overflow-hidden py-16">
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: `url(${PATTERN_URL})`, backgroundSize: '600px', backgroundRepeat: 'repeat' }} />

      <div className="relative z-10 px-8 md:px-16">
        <h2 className="font-caveat text-sky-600 text-6xl md:text-7xl lg:text-8xl mb-16 text-center tracking-wide">
          Our Partners
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center min-h-[120px]"
            >
              <p className="text-gray-700 font-semibold text-center">
                {partner}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
