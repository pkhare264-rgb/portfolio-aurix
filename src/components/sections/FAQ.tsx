import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We specialize in 3D digital experiences, web design, and AI-enabled creative campaigns. Our services range from building immersive landing pages to full-scale digital brand identities and high-converting advertisements."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity. Light weight and basic projects are done in 1-2 days, mid-tier projects take 5-7 days, and large-scale projects can take 7+ days. We provide a detailed timeline during the discovery phase."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, we work with clients globally. Our remote-first approach allows us to collaborate effectively across different time zones, ensuring seamless communication and project delivery."
  },
  {
    question: "What is your pricing structure?",
    answer: "Every project is unique, so our pricing is tailored to your specific requirements. We offer project-based pricing, which will be outlined in a comprehensive proposal after our initial consultation."
  },
  {
    question: "How do we get started?",
    answer: "Getting started is easy. Simply fill out the contact form below with your project details, or reach out to us via WhatsApp. We will schedule a discovery call to discuss your vision and how we can bring it to life."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-32 px-6 md:px-12 bg-obsidian/50">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <span className="text-sm uppercase tracking-[0.2em] text-champagne mb-6 block font-mono">Answers</span>
          <h2 className="text-4xl md:text-5xl font-display text-white tracking-tight mb-8">
            Frequently Asked <span className="italic font-light">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-white/10 rounded-2xl overflow-hidden bg-white/5"
            >
              <button
                className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg md:text-xl font-medium text-white pr-8">{faq.question}</span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300" style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: openIndex === index ? 0 : 1, transition: 'opacity 0.3s' }} />
                    {openIndex === index && (
                      <path d="M1 7H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="absolute" />
                    )}
                  </svg>
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-white/60 font-light text-lg">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
