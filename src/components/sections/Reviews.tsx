import { motion } from 'motion/react';

const reviewImages = [
  "/test1.png",
  "/test2.png",
  "/test3.png"
];

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-32 md:py-48 max-w-7xl mx-auto px-6 md:px-12">
      <motion.div
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 1 }}
         className="text-center mb-20"
      >
        <span className="text-xs uppercase tracking-[0.3em] font-medium text-champagne block mb-6">Client Testimonials</span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-tight">
          What They <span className="font-serif italic text-gradient-gold">Say</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviewImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center p-4 md:p-6 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-champagne/20 hover:bg-white/[0.05] transition-all duration-500 group"
          >
            <div className="relative w-full rounded-2xl overflow-hidden bg-white/5 p-2 backdrop-blur-sm border border-white/5">
              <div className="absolute inset-0 bg-obsidian mix-blend-color opacity-50 z-10 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none" />
              <img 
                src={image} 
                alt={`Client Review ${index + 1}`} 
                className="w-full h-auto object-contain block opacity-70 grayscale-[0.8] group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 ease-[0.16,1,0.3,1] transform group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
