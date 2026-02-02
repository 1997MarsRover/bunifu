import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is STEM?",
    answer: "STEM stands for Science, Technology, Engineering, and Mathematics. It's an interdisciplinary approach to learning that integrates these four disciplines into a cohesive learning paradigm based on real-world applications."
  },
  {
    question: "What is Bunifu Youths Kenya about?",
    answer: "Bunifu Youths Kenya provides a conducive and interactive environment where kids can channel their energy, excitement, curiosity and creativity. We focus on tech education, mentorship, and youth empowerment to raise the next generation of innovators."
  },
  {
    question: "Is Bunifu meant only for high ability students?",
    answer: "No! Bunifu is designed for all students regardless of their current ability level. Our programs are structured to meet each child where they are and help them grow at their own pace."
  },
  {
    question: "Is Bunifu only for kids interested in careers in math and science?",
    answer: "Not at all. While we focus on STEM, the skills learned - critical thinking, problem-solving, creativity, and collaboration - are valuable in any career path. We welcome all curious minds!"
  },
  {
    question: "How do I know if Bunifu is 'right' for my child?",
    answer: "If your child shows curiosity about how things work, enjoys building or creating things, or you want to expose them to future-ready skills, Bunifu is a great fit. We offer trial sessions so you can see how your child responds to our learning environment."
  },
  {
    question: "Why is STEM important in Africa?",
    answer: "STEM education is crucial for Africa's development. It prepares young people for the jobs of the future, fosters innovation and entrepreneurship, and helps solve local challenges with technology-driven solutions."
  },
  {
    question: "There are no standardised tests for STEM. Why then should it matter for my child?",
    answer: "STEM education goes beyond tests. It builds problem-solving skills, critical thinking, creativity, and resilience - competencies that are essential for success in any field. These skills prepare children for a rapidly changing world where adaptability is key."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="pt-16 sm:pt-24 pb-16 sm:pb-24 bg-white relative">
      {/* Children illustration - feet touch the Contact section boundary */}
      <div className="absolute bottom-0 left-0 z-0">
        <div 
          className="w-40 sm:w-56 md:w-72 lg:w-[24rem] xl:w-[30rem] 2xl:w-[36rem]"
          style={{
            maskImage: 'linear-gradient(to right, black 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, black 85%, transparent 100%)'
          }}
        >
          <img 
            src="/children.svg" 
            alt="Children learning"
            className="w-full h-auto"
          />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Spacer for where illustration would be */}
          <div className="hidden lg:block lg:w-1/3">
          </div>
          
          {/* Right side - FAQ Content */}
          <div className="w-full lg:w-2/3 pb-16 sm:pb-24">
            <h2 className="font-caveat text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-sky-600">Frequently Asked Questions</h2>
            <p className="text-gray-600 mb-10 sm:mb-12 text-sm sm:text-base md:text-lg">
              Bunifu provides a conducive and interactive environment where kids can channel their energy, excitement, curiosity and creativity
            </p>

            <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden hover:border-sky-200 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors gap-3"
              >
                <span className="font-semibold text-gray-900 text-sm sm:text-base">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-sky-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-[500px]' : 'max-h-0'
                }`}
              >
                <p className="px-4 sm:px-6 pb-4 sm:pb-5 text-gray-600 leading-relaxed text-sm sm:text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
