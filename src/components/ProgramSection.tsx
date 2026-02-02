import { Code, Smartphone, Box, Sparkles, Users, Trophy } from 'lucide-react';
import Logo from './Logo';

export default function ProgramsSection() {
  return (
    <section id="programs" className="min-h-screen bg-gray-50 relative overflow-hidden py-16">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}/>
      </div>

      <div className="relative z-10 p-8 md:p-16">
        <div className="flex justify-end mb-8">
          <Logo />
        </div>

        <h2 className="font-caveat text-sky-600 text-6xl md:text-7xl lg:text-8xl mb-16 text-center tracking-wide">
          Our Programs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          <div className="bg-teal-600 text-white p-8 rounded-2xl shadow-lg min-h-[280px] flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
            <div className="bg-white/20 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform">
              <Sparkles className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-semibold text-center">
              Tech Skills for Kids & Youth
            </h3>
          </div>

          <div className="bg-orange-500 text-white p-8 rounded-2xl shadow-lg min-h-[280px] flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
            <div className="bg-white/20 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform">
              <Code className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-center">
              Coding with Scratch & OctoStudio
            </h3>
            <p className="text-lg text-center text-white/90">
              Fun, interactive learning for beginners.
            </p>
          </div>

          <div className="bg-purple-600 text-white p-8 rounded-2xl shadow-lg min-h-[280px] flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
            <div className="bg-white/20 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform">
              <Smartphone className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-center">
              Web & Mobile App Development
            </h3>
            <p className="text-lg text-center text-white/90">
              Build real-world projects.
            </p>
          </div>

          <div className="bg-lime-600 text-white p-8 rounded-2xl shadow-lg min-h-[280px] flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
            <div className="bg-white/20 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform">
              <Box className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-semibold text-center">
              3D Design & Digital Creativity
            </h3>
            <p className="text-lg text-center text-white/90 mt-3">
              Bring ideas to life!
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-6 px-4">
          <div className="bg-white rounded-2xl p-8 shadow-md flex items-start gap-4">
            <div className="bg-sky-100 p-3 rounded-full flex-shrink-0">
              <Users className="w-6 h-6 text-sky-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 text-lg mb-2">Mentorship Program</h4>
              <p className="text-gray-600">
                We link young innovators with professionals in tech, business, and creative industries to gain real-world insights and career guidance.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md flex items-start gap-4">
            <div className="bg-sky-100 p-3 rounded-full flex-shrink-0">
              <Trophy className="w-6 h-6 text-sky-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 text-lg mb-2">Youth Empowerment Initiatives</h4>
              <p className="text-gray-600">
                From entrepreneurship training to STEM competitions, we help youth create, innovate, and succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
