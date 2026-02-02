import { Lightbulb, Users, Trophy } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-16 sm:mb-20">
          <div className="order-2 md:order-1">
            <h2 className="font-caveat text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 text-sky-600">About Bunifu</h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6">
              At Bunifu Youths Kenya, we believe in nurturing the next generation of creators, problem-solvers, and leaders.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Our name, <strong>"Bunifu"</strong>, means "innovative" in Swahili, reflecting our mission to ignite creativity and equip youth with future-ready skills. We provide a conducive and interactive environment where kids can channel their energy, excitement, curiosity and creativity.
            </p>
          </div>
          <div className="relative order-1 md:order-2 mb-8 md:mb-0">
            <div className="aspect-square rounded-2xl sm:rounded-[3rem] overflow-hidden">
              <img
                src="./afro_american-school_boy.jpg"
                alt="Young innovator at Bunifu"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-4 sm:-bottom-6 sm:-left-6 bg-sky-500 text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl">
              <p className="text-2xl sm:text-3xl font-bold">Kenya</p>
              <p className="text-sky-100 text-sm sm:text-base">Empowering Youth</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-100">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-sky-500 flex items-center justify-center text-white mb-4 sm:mb-6">
              <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Tech Education</h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Hands-on training in coding, web & app development, 3D design, robotics, and more.
            </p>
          </div>
          
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-orange-500 flex items-center justify-center text-white mb-4 sm:mb-6">
              <Users className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Mentorship</h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Connecting learners with industry experts for career guidance and real-world insights.
            </p>
          </div>
          
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 sm:col-span-2 md:col-span-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-green-500 flex items-center justify-center text-white mb-4 sm:mb-6">
              <Trophy className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Youth Empowerment</h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Helping young people turn ideas into opportunities through entrepreneurship and STEM competitions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
