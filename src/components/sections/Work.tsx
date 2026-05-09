import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

const capabilities = [
  {
    id: '01',
    title: 'Digital Experiences',
    description: 'Luxury websites and immersive digital platforms designed to convert attention into authority.',
    image: '/aurix digital experience.png',
    type: 'image',
    size: 'large' // span 2 columns
  },
  {
    id: '02',
    title: 'AI Visual Campaigns',
    description: 'Cinematic AI-powered campaigns crafted for modern brand dominance.',
    image: '/khetpure.mp4',
    type: 'video',
    size: 'tall'
  },
  {
    id: '03',
    title: 'Editorial & Publications',
    description: 'Luxury magazine and publication design with refined editorial storytelling.',
    image: '/magazine1.png',
    type: 'image',
    size: 'standard'
  },
  {
    id: '04',
    title: 'Brand Identity Systems',
    description: 'Strategic visual identities built to create unforgettable perception.',
    image: '/brand identity.png',
    type: 'image',
    size: 'wide'
  },
  {
    id: '05',
    title: 'Motion & Creative Direction',
    description: 'Immersive motion design and cinematic visual storytelling.',
    image: '/motion and creative.png',
    type: 'image',
    size: 'wide'
  }
];

export default function Work() {
  const [selectedItem, setSelectedItem] = useState<typeof capabilities[0] | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (selectedItem) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }
    return () => {
      if (typeof window !== 'undefined') {
        document.body.style.overflow = 'unset';
      }
    }
  }, [selectedItem]);

  return (
    <section id="work" className="relative py-32 md:py-48 bg-[#030712] overflow-hidden">
      {/* Cinematic Navy Atmosphere Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 -right-1/4 w-[60vw] h-[60vw] bg-indigo-900/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,rgba(0,0,0,0)_80%)]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:items-start mb-24 md:mb-32">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs uppercase tracking-[0.4em] font-medium text-ivory/50 block mb-6">Our Expertise</span>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-light uppercase tracking-tighter text-white leading-[0.9]">
              Creative <br className="hidden md:block"/>
              <span className="font-serif italic text-champagne">Capabilities</span>
            </h2>
          </motion.div>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-[minmax(400px,auto)] md:auto-rows-[minmax(450px,auto)]">
          {capabilities.map((item, index) => {
            let gridClasses = "md:col-span-12"; // default

            if (item.size === 'large') gridClasses = "md:col-span-8 md:row-span-2";
            else if (item.size === 'tall') gridClasses = "md:col-span-4 md:row-span-2";
            else if (item.size === 'wide') gridClasses = "md:col-span-8";
            else if (item.size === 'standard') gridClasses = "md:col-span-4";

            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative rounded-[2rem] overflow-hidden cursor-pointer ${gridClasses} flex flex-col`}
                onClick={() => setSelectedItem(item)}
              >
                {/* Glassmorphism Surface & Border */}
                <div className="absolute inset-0 z-20 border border-white/5 rounded-[2rem] pointer-events-none mix-blend-overlay group-hover:border-white/20 transition-colors duration-700" />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none" />
                
                {/* Media Content */}
                <div className={item.id === '04' ? "relative w-full flex-grow flex items-center justify-center overflow-hidden" : "absolute inset-0 w-full h-full transform group-hover:scale-105 group-hover:rotate-[1deg] transition-all duration-[1.5s] ease-[0.16,1,0.3,1] origin-center"}>
                  {item.type === 'video' ? (
                    <video 
                      src={item.image}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-1000"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className={`w-full ${item.id === '04' ? 'h-auto block relative transform group-hover:scale-105 group-hover:rotate-[1deg] origin-center transition-all duration-[1.5s] ease-[0.16,1,0.3,1]' : 'h-full object-cover absolute inset-0'} opacity-60 group-hover:opacity-100 transition-opacity duration-1000`}
                    />
                  )}
                </div>
                
                {/* Floating Content UI */}
                <div className="absolute inset-0 z-30 p-8 md:p-12 flex flex-col justify-between pointer-events-none">
                  {/* Top Header */}
                  <div className="flex justify-between items-start translate-y-0 group-hover:-translate-y-2 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                    <div className="w-10 h-10 rounded-full font-mono text-xs flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                      {item.id}
                    </div>
                    
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-700 ease-[0.16,1,0.3,1]">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M5 19L19 5M19 5H5M19 5V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* Bottom Text Area */}
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                    <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-white mb-3 md:mb-4 tracking-tight drop-shadow-md">
                      {item.title}
                    </h3>
                    <p className="text-white/70 font-sans text-sm md:text-base max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal / Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-6 md:p-12"
            onClick={() => setSelectedItem(null)}
          >
            <button 
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white backdrop-blur-md transition-all"
              onClick={() => setSelectedItem(null)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="relative w-full h-full max-w-7xl max-h-[85vh] rounded-[2rem] overflow-hidden flex flex-col bg-[#050510] border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex-grow relative overflow-hidden bg-black/50">
                {selectedItem.type === 'video' ? (
                  <video 
                    src={selectedItem.image}
                    className="w-full h-full object-contain"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.title}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
              
              <div className="p-8 md:p-10 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs uppercase tracking-[0.2em] text-ivory/50 font-mono">{selectedItem.id}</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-4xl text-white font-light tracking-tight">{selectedItem.title}</h3>
                  <p className="text-white/60 text-sm md:text-base mt-2 max-w-xl font-light">{selectedItem.description}</p>
                </div>
                
                <Link 
                  to="/past-work" 
                  className="flex-shrink-0 group relative overflow-hidden rounded-full border border-white/20 bg-white/5 px-8 py-4 backdrop-blur-sm transition-colors hover:bg-white/10"
                  onClick={() => {
                    setSelectedItem(null);
                    window.scrollTo(0, 0);
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-white">
                    Our Past Work
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1 transition-transform">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
