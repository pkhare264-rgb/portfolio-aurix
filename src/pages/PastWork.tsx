import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function PastWork() {
  const [showWebsiteModal, setShowWebsiteModal] = useState(false);
  const [showAdsModal, setShowAdsModal] = useState(false);

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#030712] min-h-screen pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
        {/* Cinematic Navy Atmosphere Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-1/4 -right-1/4 w-[60vw] h-[60vw] bg-indigo-900/10 rounded-full blur-[150px] mix-blend-screen" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,rgba(0,0,0,0)_80%)]" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 relative z-50 pointer-events-auto"
          >
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-2 text-ivory/50 hover:text-ivory uppercase tracking-widest text-xs transition-colors mb-12">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Home
            </Link>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light uppercase tracking-tighter text-white leading-[0.9]">
              Our Past <br className="hidden md:block"/>
              <span className="font-serif italic text-champagne">Work</span>
            </h1>
          </motion.div>

          <div className="flex flex-col gap-6">
            {/* Add past work items here. In future can map through real data */}
            {[
              { id: 1, title: 'Magazine Publication & Designing', url: '#', description: 'View our editorial campaigns, cover designs, and publication layouts.' },
              { id: 2, title: 'Website Building', url: '#', description: 'Explore full-stack digital experiences, e-commerce platforms, and immersive websites.' },
              { id: 3, title: 'Creative AI Ads', url: '#', description: 'Discover our approach to AI-generated cinematography and forward-thinking ad campaigns.' },
            ].map((project, index) => (
              <motion.a
                href={project.url}
                key={project.id}
                onClick={(e) => {
                  if (project.id === 2) {
                    e.preventDefault();
                    setShowWebsiteModal(true);
                  } else if (project.id === 3) {
                    e.preventDefault();
                    setShowAdsModal(true);
                  }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-[2rem] overflow-hidden cursor-pointer bg-white/[0.02] border border-white/5 p-8 md:p-12 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-champagne font-mono mb-4 block">0{project.id}</span>
                    <h3 className="font-display text-3xl md:text-5xl font-light text-white tracking-tight">{project.title}</h3>
                    <p className="font-light text-white/50 mt-4 max-w-2xl text-lg">{project.description}</p>
                  </div>
                  
                  <div className="flex-shrink-0 w-16 h-16 rounded-full border border-white/20 flex items-center justify-center transform group-hover:border-champagne transition-colors bg-white/5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </main>

      <AnimatePresence>
        {showWebsiteModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
            onClick={() => setShowWebsiteModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#050510] border border-white/10 rounded-3xl p-8 md:p-12 max-w-2xl w-full relative shadow-[0_0_100px_rgba(0,0,0,0.5)]"
            >
              <button 
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all"
                onClick={() => setShowWebsiteModal(false)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className="mb-8">
                <span className="text-xs uppercase tracking-[0.2em] text-champagne font-mono mb-4 block">Selected Works</span>
                <h3 className="font-display text-3xl md:text-4xl text-white font-light tracking-tight mb-4">Website Building</h3>
                <p className="text-white/60 font-light text-lg">
                  These are just 1-2 examples of the many diverse projects we have delivered to our extensive roaster of clients.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <a 
                  href="https://khetpure.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
                >
                  <div>
                    <h4 className="text-xl text-white font-medium mb-1">Khetpure</h4>
                    <span className="text-white/50 text-sm">E-commerce & Brand Experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-champagne text-sm uppercase tracking-widest font-mono">
                    Visit Site
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>

                <a 
                  href="https://www.lokmeram.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
                >
                  <div>
                    <h4 className="text-xl text-white font-medium mb-1">Lokmeram</h4>
                    <span className="text-white/50 text-sm">NGO Website</span>
                  </div>
                  <div className="flex items-center gap-2 text-champagne text-sm uppercase tracking-widest font-mono">
                    Visit Site
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showAdsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
            onClick={() => setShowAdsModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#050510] border border-white/10 rounded-3xl p-8 md:p-12 max-w-5xl w-full relative shadow-[0_0_100px_rgba(0,0,0,0.5)] max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              <button 
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all z-50"
                onClick={() => setShowAdsModal(false)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className="mb-8 pr-12">
                <span className="text-xs uppercase tracking-[0.2em] text-champagne font-mono mb-4 block">Selected Works</span>
                <h3 className="font-display text-3xl md:text-4xl text-white font-light tracking-tight mb-4">Creative AI Ads</h3>
                <p className="text-white/60 font-light text-lg">
                  These are 3 of our most recent works we had done in so many projects.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { id: 1, title: 'Future Concepts', video: '/Video-456.mp4' },
                  { id: 2, title: 'Cinematic AI', video: '/Video-417.mp4' },
                  { id: 3, title: 'Khetpure Spotlight', video: '/khetpure.mp4' },
                ].map((ad) => (
                  <div key={ad.id} className="relative group rounded-[2rem] overflow-hidden bg-black/50 border border-white/5 aspect-[9/16]">
                    <video 
                      src={ad.video} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none opacity-80" />
                    <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                      <span className="text-[10px] text-champagne tracking-widest font-mono uppercase mb-2 block">0{ad.id}</span>
                      <h4 className="text-white text-lg font-medium">{ad.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
