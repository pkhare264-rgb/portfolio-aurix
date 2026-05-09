import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Studio', href: '/#about' },
    { name: 'Expertise', href: '/#services' },
    { name: 'Work', href: '/#work' },
    { name: 'Process', href: '/#process' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-500 will-change-[padding,background-color] ease-[cubic-bezier(0.16,1,0.3,1)]',
          scrolled 
            ? 'py-3 bg-obsidian/80 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-obsidian/50' 
            : 'py-8 bg-transparent border-b border-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div 
            className={cn(
              "flex items-center gap-3 relative z-50 -ml-4 md:-ml-10 lg:-ml-16 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left",
              scrolled ? "scale-90" : "scale-100"
            )}
          >
            <a href="/">
              <motion.img 
                src="/logo.png" 
                alt="AURIX Studios" 
                className="h-20 md:h-28 object-contain drop-shadow-[0_0_15px_rgba(147,51,234,0.3)]" 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              />
            </a>
          </div>

          <div 
            className={cn(
              "hidden md:flex items-center gap-8 glass rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center",
              scrolled ? "px-6 py-2 scale-95" : "px-8 py-3 scale-100"
            )}
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] font-medium text-ivory/70 hover:text-champagne transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div 
            className={cn(
              "hidden md:block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-right",
              scrolled ? "scale-90" : "scale-100"
            )}
          >
            <a 
              href="/#contact"
              className="relative overflow-hidden group border border-ivory/20 rounded-full px-6 py-2.5 text-xs uppercase tracking-[0.1em] font-medium hover:border-champagne/50 transition-colors inline-block"
            >
              <span className="relative z-10 group-hover:text-obsidian transition-colors duration-300">Let's Talk</span>
              <div className="absolute inset-0 bg-gradient-to-r from-ivory to-champagne translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>
          </div>

          <button 
            className={cn(
              "md:hidden relative z-50 text-ivory transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
              scrolled ? "scale-90" : "scale-100"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-obsidian flex flex-col justify-center items-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="font-display text-4xl font-light uppercase tracking-widest hover:text-champagne transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                href="/#contact"
                className="mt-8 border border-champagne text-champagne rounded-full px-8 py-3 text-sm uppercase tracking-widest"
                onClick={() => setMobileMenuOpen(false)}
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
