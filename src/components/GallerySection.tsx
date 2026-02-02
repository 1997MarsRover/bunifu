const images = [
  {
    url: "https://images.pexels.com/photos/8471939/pexels-photo-8471939.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Kids learning robotics"
  },
  {
    url: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "STEM workshop"
  },
  {
    url: "https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Coding class"
  },
  {
    url: "https://images.pexels.com/photos/8923312/pexels-photo-8923312.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Kids with gadgets"
  },
  {
    url: "https://images.pexels.com/photos/8471944/pexels-photo-8471944.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Science experiment"
  },
  {
    url: "https://images.pexels.com/photos/8923181/pexels-photo-8923181.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Group learning"
  }
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <h2 className="font-caveat text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-sky-600 text-center">Gallery</h2>
        <p className="text-center text-gray-600 mb-10 sm:mb-16 text-base sm:text-lg max-w-2xl mx-auto px-2">
          A glimpse into the exciting world of learning and innovation at Bunifu Youths Kenya
        </p>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-xl sm:rounded-2xl group cursor-pointer ${
                index === 0 ? 'col-span-2 row-span-1 md:row-span-2' : ''
              }`}
            >
              <div className={`${index === 0 ? 'aspect-video md:aspect-square' : 'aspect-square sm:aspect-video'}`}>
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-6">
                <p className="text-white font-semibold text-xs sm:text-sm md:text-base">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
