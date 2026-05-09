import { motion } from 'motion/react';
import { useRef, useState } from 'react';
import { cn } from '../../lib/utils';
import { Wand2, Layout, BookOpen, Film, Video, Hexagon } from 'lucide-react';

const services = [
  {
    title: 'AI Brand Awareness',
    desc: 'Intelligent perception engineering that positions your brand at the forefront of the cultural zeitgeist.',
    icon: Wand2,
  },
  {
    title: 'Luxury Website Design',
    desc: 'Awwwards-winning digital experiences that fuse seamless interaction with high-end aesthetic value.',
    icon: Layout,
  },
  {
    title: 'Magazine & Editorial Design',
    desc: 'Exquisite typography and layout choreography that commands attention and defines visual authority.',
    icon: BookOpen,
  },
  {
    title: 'Motion Graphics',
    desc: 'Liquid-smooth cinematic motion that breathes life into static identities and digital environments.',
    icon: Film,
  },
  {
    title: 'Cinematic Ad Creatives',
    desc: 'High-production visual storytelling designed to captivate and convert elite audiences.',
    icon: Video,
  },
  {
    title: 'Visual Identity Systems',
    desc: 'Cohesive, timeless, and expensive-feeling brand architectures that scale beautifully.',
    icon: Hexagon,
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative glass-card rounded-2xl p-8 overflow-hidden group cursor-pointer h-full"
      style={{
        transformStyle: 'preserve-3d',
        transform: isHovered 
          ? `perspective(1000px) rotateX(${(mousePosition.y - 150) * -0.02}deg) rotateY(${(mousePosition.x - 150) * 0.02}deg)` 
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
        transition: isHovered ? 'none' : 'transform 0.5s ease',
      }}
    >
      {/* Dynamic Glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(214, 179, 106, 0.15) 0%, transparent 60%)`
        }}
      />
      
      <div className="relative z-10 flex flex-col h-full" style={{ transform: 'translateZ(30px)' }}>
        <div className="w-12 h-12 rounded-full border border-champagne/20 flex items-center justify-center mb-8 group-hover:border-champagne/60 group-hover:bg-champagne/10 transition-all duration-500 relative">
          <motion.div
            animate={{ 
              y: [0, -2, 0],
              rotate: [0, 3, -3, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity, 
              ease: "easeInOut",
              delay: index * 0.2
            }}
          >
            <Icon className="w-5 h-5 text-champagne" />
          </motion.div>
        </div>
        <h3 className="font-display text-xl font-light mb-4">{service.title}</h3>
        <p className="text-ivory/50 text-sm leading-relaxed mt-auto group-hover:text-ivory/80 transition-colors duration-500">{service.desc}</p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-32 md:py-48 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-champagne block mb-6">Expertise</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light uppercase leading-tight tracking-tight">
            Digital <span className="font-serif italic text-gradient-gold">Alchemy</span>
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-ivory/60 max-w-md font-light text-sm"
        >
          We transform raw ambition into refined market dominance through a meticulous blend of design, motion, and artificial intelligence.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
