import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Rohan Desai",
    company: "TechNova Solutions",
    text: "Aurix Studios delivered beyond our expectations. The visual quality and motion design for our new app was phenomenal. Truly world-class work.",
    rating: 5
  },
  {
    name: "Ananya Sharma",
    company: "Elevate Ventures",
    text: "Working with the Aurix team was a seamless experience. They understood our brand vision immediately and translated it into a luxurious digital experience.",
    rating: 5
  },
  {
    name: "Vikram Mehta",
    company: "Mehta & Co.",
    text: "The web experience they built for us is fast, elegant, and perfectly encapsulates our brand identity. Their attention to detail is unmatched in the industry.",
    rating: 5
  }
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
        {reviews.map((review, index) => (
          <motion.div
            key={review.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-8 rounded-2xl flex flex-col items-start border border-champagne/10 hover:border-champagne/30 transition-colors duration-500"
          >
            <div className="flex gap-1 mb-6 text-champagne">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            
            <p className="text-ivory/80 text-lg font-light leading-relaxed mb-8 flex-grow">
              "{review.text}"
            </p>
            
            <div className="mt-auto">
              <h4 className="font-display font-medium text-ivory tracking-wide">{review.name}</h4>
              <span className="text-xs uppercase tracking-widest text-champagne/70 mt-1 block">{review.company}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
