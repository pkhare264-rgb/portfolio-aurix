import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="relative py-32 md:py-48 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Typographic focal point */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-light uppercase leading-[1.1] tracking-tight mb-8">
            Designing<br />
            <span className="font-serif italic text-champagne">perception</span><br />
            in the age<br />
            of AI.
          </h2>
          <div className="w-24 h-[1px] bg-champagne/30 mb-8" />
          <p className="text-ivory/60 font-light leading-relaxed max-w-md text-lg">
            We are an elite creative studio blending cinematic storytelling, intelligent brand systems, and luxury digital experiences. Our work doesn't just look expensive—it commands cultural relevance.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative grid grid-cols-2 gap-6"
        >
          {/* Glass metrics cards */}
          <div className="glass-card rounded-2xl p-8 flex flex-col justify-end h-64 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-30 text-champagne transition-transform group-hover:scale-110 duration-700">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-display text-4xl font-light mb-2 text-ivory">01</span>
            <span className="text-xs uppercase tracking-widest text-ivory/50">Cinematic</span>
            <h3 className="text-lg font-medium mt-1">World Building</h3>
          </div>

          <div className="glass-card rounded-2xl p-8 flex flex-col justify-end h-64 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-30 text-champagne transition-transform group-hover:scale-110 duration-700">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16V12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-display text-4xl font-light mb-2 text-ivory">02</span>
            <span className="text-xs uppercase tracking-widest text-ivory/50">Intelligence</span>
            <h3 className="text-lg font-medium mt-1">AI Integration</h3>
          </div>

          <div className="col-span-2 glass-card rounded-2xl p-8 flex items-center justify-between">
            <div>
              <span className="font-display text-2xl font-light text-ivory">Limitless</span>
              <p className="text-sm text-ivory/50 mt-1">Creative boundaries do not exist here.</p>
            </div>
            <div className="w-12 h-12 rounded-full border border-champagne/30 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-champagne animate-pulse" />
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
