import { motion } from 'motion/react';
import { Suspense, lazy, useState, useEffect } from 'react';

const HeroScene = lazy(() => import('./HeroScene'));

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative w-full min-h-[100dvh] overflow-hidden flex flex-col items-center pt-24 md:pt-20">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-champagne/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-frosted/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      {/* 3D Scene */}
      {!isMobile && (
        <div className="hidden md:block absolute w-full h-[80vh] top-[10vh] left-0 z-10 opacity-80 pointer-events-none flex-shrink-0">
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </div>
      )}

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-auto mb-20 md:mb-32 flex flex-col items-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block mb-6 text-xs uppercase tracking-[0.3em] font-medium text-champagne">
            Creative Digital Studio
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-[7rem] leading-[0.9] font-light tracking-[-0.03em] uppercase mb-8"
        >
          Crafting <span className="font-serif italic text-gradient-gold">Attention</span><br />
          Into Art
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-ivory/60 max-w-lg mx-auto font-light leading-relaxed mb-12 text-sm md:text-base"
        >
          AI Branding, Cinematic Design & Digital Experiences by MadeByAurix.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-6 pointer-events-auto"
        >
          <a href="#work" className="relative overflow-hidden group glass rounded-full px-8 py-4 text-sm uppercase tracking-widest font-medium hover:border-ivory/30 transition-colors">
            <span className="relative z-10 text-ivory">View Projects</span>
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a href="#contact" className="text-xs uppercase tracking-widest font-medium text-champagne hover:text-ivory transition-colors group flex items-center gap-2">
            Start a Project
            <span className="w-8 h-[1px] bg-champagne group-hover:bg-ivory transition-colors group-hover:w-12 duration-300" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-champagne to-transparent relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-ivory"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
