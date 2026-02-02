export default function NumbersSection() {
  return (
    <section id="numbers" className="min-h-screen bg-gradient-to-br from-sky-600 to-blue-700 relative overflow-hidden py-16 flex items-center">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}/>
      </div>

      <div className="relative z-10 w-full px-8 md:px-16">
        <h2 className="font-caveat text-white text-6xl md:text-7xl lg:text-8xl mb-16 text-center tracking-wide">
          Our Impact
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <p className="text-white/80 text-lg mb-2 font-medium">Schools</p>
              <p className="font-caveat text-white text-7xl md:text-8xl">15</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <p className="text-white/80 text-lg mb-2 font-medium">Students Impacted</p>
              <p className="font-caveat text-white text-7xl md:text-8xl">2,500</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <p className="text-white/80 text-lg mb-2 font-medium">Counties</p>
              <p className="font-caveat text-white text-7xl md:text-8xl">3</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <p className="text-white/80 text-lg mb-2 font-medium">Boys</p>
              <p className="font-caveat text-white text-7xl md:text-8xl">1,789</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <p className="text-white/80 text-lg mb-2 font-medium">Girls</p>
              <p className="font-caveat text-white text-7xl md:text-8xl">711</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
