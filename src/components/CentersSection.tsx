import { MapPin, ExternalLink, Play } from 'lucide-react';

const centers = [
  {
    city: "Nairobi",
    address: "Bunifu Youths Kenya HQ, Nairobi",
    phone: "+254 712 015 793"
  }
];

export default function CentersSection() {
  return (
    <section id="centers" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <h2 className="font-caveat text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-10 sm:mb-16 text-sky-600">Centers</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-20">
          {centers.map((center) => (
            <div key={center.city} className="p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-[2rem] bg-white hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className="flex justify-between items-start mb-4 sm:mb-6">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-sky-100 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                  <MapPin className="w-5 h-5 sm:w-7 sm:h-7" />
                </div>
                <a 
                  href="#"
                  className="flex items-center gap-1 text-sky-600 font-semibold hover:underline text-xs sm:text-sm"
                >
                  Get directions
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-900">{center.city}</h3>
              <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                {center.address}
              </p>
              <p className="text-sky-600 font-semibold text-sm sm:text-base">{center.phone}</p>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl sm:rounded-[2rem] p-5 sm:p-8 md:p-16 text-white">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Video</h3>
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-6 sm:mb-8">
                Dedicated to helping kids develop life-long interest in science & building countless competencies.
              </p>
              <a 
                href="#"
                className="inline-flex items-center gap-2 text-sky-300 font-semibold hover:text-sky-200 transition-colors text-sm sm:text-base"
              >
                View More Videos
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="relative aspect-video bg-black/30 rounded-xl sm:rounded-2xl overflow-hidden group cursor-pointer order-1 md:order-2">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 sm:w-10 sm:h-10 text-white fill-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
