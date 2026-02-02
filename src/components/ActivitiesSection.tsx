import { Cpu, Binary, Cog, Atom } from 'lucide-react';

const categories = [
  {
    title: 'Robotics',
    description: 'A fun way for kids to learn STEM concepts by letting them make their own robots',
    icon: Cpu,
    color: 'bg-orange-500'
  },
  {
    title: 'Mathematics',
    description: 'Lots of interactive Maths challenges for kids of different ages and abilities',
    icon: Binary,
    color: 'bg-blue-600'
  },
  {
    title: 'Engineering',
    description: 'Kids will learn how and why things work the way they do with practical concepts',
    icon: Cog,
    color: 'bg-green-600'
  },
  {
    title: 'Physics',
    description: 'Taking abstract concepts and presenting them in fun ways that make them easy to understand',
    icon: Atom,
    color: 'bg-purple-600'
  }
];

const activities = [
  {
    title: "Color Mixing Lamp",
    description: "How to produce any color with a lamp that uses light as an input.",
    category: "Robotics",
    age: "10 - 18",
    color: "bg-orange-500"
  },
  {
    title: "Automatic Light",
    description: "How to build a sound-operated light that you can control with your voice.",
    category: "Electricity",
    age: "8+",
    color: "bg-yellow-500"
  },
  {
    title: "Pulley hoist",
    description: "How to change the direction of forces to be applied to your advantage.",
    category: "Simple machines",
    age: "5 - 8",
    color: "bg-blue-500"
  },
  {
    title: "Self-Driving Vehicle",
    description: "How to build a circuit cruiser, a vehicle that gets around two DC motors.",
    category: "Energy and Power",
    age: "5 - 8",
    color: "bg-green-500"
  },
  {
    title: "Touchy-Feel Lamp",
    description: "How to program a lamp that responds to your touch.",
    category: "Robotics",
    age: "10 - 18",
    color: "bg-orange-500"
  },
  {
    title: "Water glass trick",
    description: "How air can be a force",
    category: "Air",
    age: "10 - 18",
    color: "bg-sky-400"
  },
  {
    title: "Navigator",
    description: "How to build a handheld device that allows you to navigate, even in the dark.",
    category: "Air",
    age: "8+",
    color: "bg-sky-400"
  },
  {
    title: "Art Machine",
    description: "How to create a doodle with DC motors, and a pulse that dances, wiggles, and draws up a storm.",
    category: "Power",
    age: "8+",
    color: "bg-red-500"
  },
  {
    title: "Castor Bot",
    description: "How to build complex machines and control them with simple programs.",
    category: "Robotics",
    age: "14+",
    color: "bg-orange-500"
  },
  {
    title: "Spaceship interface",
    description: "How to design a basic control panel.",
    category: "Coding",
    age: "10 - 18",
    color: "bg-indigo-500"
  },
  {
    title: "Security Device",
    description: "How to design a security alarm, with customized alarm for different places.",
    category: "Energy & Power",
    age: "8+",
    color: "bg-green-500"
  }
];

const dailyActivities = [
  "Computer games",
  "Digital Labs",
  "Coding challenges",
  "Robotic Kits",
  "Short videos on emerging technologies",
  "Physical computing with Arduino",
  "Prototyping with 3D printers",
  "Child friendly Sci-Fi animations/movies"
];

export default function ActivitiesSection() {
  return (
    <section id="activities" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Intro */}
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="font-caveat text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-sky-600">Learning resources designed for kids</h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Flexible, semi-structured learning resources designed to suit the short time frame that the kids have to spend at Bunifu, delivered in fun and engaging formats.
          </p>
        </div>

        {/* Daily Activities Schedule */}
        <div className="bg-sky-50 rounded-2xl sm:rounded-[2rem] p-5 sm:p-8 md:p-12 mb-12 sm:mb-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Amazing learning activities for kids</h3>
            <div className="flex gap-2 sm:gap-3">
              <span className="px-4 sm:px-5 py-2 bg-white rounded-full text-xs sm:text-sm font-semibold shadow-sm border border-sky-100">Mon - Fri</span>
              <span className="px-4 sm:px-5 py-2 bg-white rounded-full text-xs sm:text-sm font-semibold shadow-sm border border-sky-100">Saturday</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {dailyActivities.map((activity) => (
              <div key={activity} className="bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-sky-100/50">
                <p className="font-medium text-gray-800 text-sm sm:text-base">{activity}</p>
              </div>
            ))}
          </div>
        </div>

        {/* STEM Categories */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8 mb-16 sm:mb-24">
          {categories.map((cat) => (
            <div key={cat.title} className="group p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-gray-100 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 bg-white">
              <div className={`${cat.color} w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <cat.icon className="w-6 h-6 sm:w-7 md:w-8 sm:h-7 md:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-gray-900">{cat.title}</h3>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base">{cat.description}</p>
            </div>
          ))}
        </div>

        {/* Activity Cards */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Activities</h3>
          <p className="text-gray-600 mb-6 sm:mb-10 text-sm sm:text-base">Here are a cross section of some of the activities that kids can choose to interact with at Bunifu</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-sky-200 group">
                <div className="flex justify-between items-start mb-3 sm:mb-4 gap-2">
                  <span className={`${activity.color} text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-full uppercase tracking-wide`}>
                    {activity.category}
                  </span>
                  <span className="text-gray-400 text-xs sm:text-sm font-medium bg-white px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">
                    {activity.age}
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 group-hover:text-sky-600 transition-colors">{activity.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Book Activity CTA */}
        <div className="text-center">
          <a
            href="#book-tour"
            className="inline-flex items-center justify-center bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-sky-500/30 text-sm sm:text-base"
          >
            Book an activity
          </a>
        </div>
      </div>
    </section>
  );
}
