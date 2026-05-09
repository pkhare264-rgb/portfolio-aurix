import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'Unearthing the architectural truth of your brand and defining its future trajectory in the market.'
  },
  {
    num: '02',
    title: 'Strategy',
    desc: 'Engineering the perception blueprint using data, AI analysis, and cultural insights.'
  },
  {
    num: '03',
    title: 'Concept',
    desc: 'Exploration of aesthetic and narrative directions that command attention and distinctiveness.'
  },
  {
    num: '04',
    title: 'Production',
    desc: 'Meticulous execution of visual, motion, and digital assets to world-class standards.'
  },
  {
    num: '05',
    title: 'Launch',
    desc: 'Strategic deployment of the new brand ecosystem into the cultural and digital landscape.'
  }
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0.2, 0.8], ['0%', '100%']);

  return (
    <section id="process" className="relative py-32 md:py-48 max-w-5xl mx-auto px-6 md:px-12" ref={containerRef}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-24"
      >
        <span className="text-xs uppercase tracking-[0.3em] font-medium text-champagne block mb-6">Methodology</span>
        <h2 className="font-display text-4xl md:text-6xl font-light uppercase tracking-tight">
          The <span className="font-serif italic text-gradient-gold">Blueprint</span>
        </h2>
      </motion.div>

      <div className="relative">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-ivory/10 -translate-x-1/2">
          <motion.div 
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-champagne via-champagne to-transparent"
            style={{ height: lineHeight }}
          />
        </div>

        <div className="space-y-24 md:space-y-32">
          {steps.map((step, index) => (
            <div key={step.num} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              
              {/* Connector Dot */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-obsidian border-2 border-champagne -translate-x-1/2 z-10 hidden sm:block"
              />

              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:pl-20 md:text-left'}`}
              >
                <div className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-champagne/30 transition-colors duration-500">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-champagne/5 rounded-full blur-2xl group-hover:bg-champagne/10 transition-colors duration-500" />
                  <span className="font-serif italic text-4xl text-champagne mb-4 block opacity-50">{step.num}</span>
                  <h3 className="font-display text-2xl font-light mb-3">{step.title}</h3>
                  <p className="text-ivory/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
