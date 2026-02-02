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
    <section id="partners" className="min-h-screen bg-gray-50 relative overflow-hidden py-16">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}/>
      </div>

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
