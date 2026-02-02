import Logo from './Logo';

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-cyan-600 to-blue-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}/>
      </div>

      <div className="relative z-10 p-8 md:p-16 flex justify-end">
        <Logo />
      </div>

      <div className="relative z-10 px-8 md:px-16 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-caveat text-white text-6xl md:text-7xl lg:text-8xl mb-12 tracking-wide">
            Our Mission
          </h2>

          <div className="space-y-6 text-white text-lg leading-relaxed">
            <p>
              Welcome to Bunifu Youths Kenya, a youth development center dedicated to empowering young minds through technology, mentorship, and innovation.
            </p>

            <p>
              We equip kids and youth with essential digital skills, connect them with industry experts, and open doors to limitless opportunities in STEM and beyond!
            </p>

            <ul className="space-y-4 mt-8">
              <li className="flex items-start">
                <span className="mr-3 text-sky-300 text-xl">•</span>
                <span>Learn Coding, Web & App Development, 3D Design & More!</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-sky-300 text-xl">•</span>
                <span>Get Mentorship from Experts in Tech & Business!</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-sky-300 text-xl">•</span>
                <span>Turn Your Ideas into Real-World Innovations!</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <img
              src="https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Youth learning"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
