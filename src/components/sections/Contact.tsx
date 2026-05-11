import { motion } from 'motion/react';
import { useState, SyntheticEvent } from 'react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        console.error("Form submission error");
      }
    } catch (error) {
      console.error("Form submission error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 md:py-48 px-6 md:px-12 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-champagne/5 rounded-[100%] blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 glass-card rounded-3xl p-8 md:p-16 border border-champagne/20">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-champagne block mb-6">Initiate</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-light uppercase tracking-tight leading-[0.9] mb-8">
              Let's Build Something<br />
              <span className="font-serif italic text-gradient-gold">Impossible</span> To Ignore.
            </h2>
            <p className="text-ivory/60 max-w-lg mx-auto font-light">
              We partner with visionary founders and luxury brands ready to redefine their category.
            </p>
          </motion.div>
        </div>

        {isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 space-y-6"
          >
            <div className="w-20 h-20 bg-champagne/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-champagne/20">
              <svg className="w-10 h-10 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-display text-white tracking-tight">Request Received Successfully</h3>
            <p className="text-ivory/60 font-light text-lg">Thank you for reaching out. A member of our creative team will contact you shortly.</p>
          </motion.div>
        ) : (
          <motion.form 
            action="https://formspree.io/f/mnjwlvya"
            method="POST"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 max-w-2xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-ivory/20 py-4 text-ivory placeholder-transparent focus:outline-none focus:border-champagne peer"
                  placeholder="Name"
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-0 top-4 text-ivory/40 text-sm tracking-widest uppercase transition-all duration-300 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-champagne peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:text-xs"
                >
                  Your Name
                </label>
              </div>
              <div className="relative group">
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-ivory/20 py-4 text-ivory placeholder-transparent focus:outline-none focus:border-champagne peer"
                  placeholder="Email"
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-0 top-4 text-ivory/40 text-sm tracking-widest uppercase transition-all duration-300 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-champagne peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:text-xs"
                >
                  Email Address
                </label>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  className="w-full bg-transparent border-b border-ivory/20 py-4 text-ivory placeholder-transparent focus:outline-none focus:border-champagne peer"
                  placeholder="Phone"
                />
                <label 
                  htmlFor="phone" 
                  className="absolute left-0 top-4 text-ivory/40 text-sm tracking-widest uppercase transition-all duration-300 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-champagne peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:text-xs"
                >
                  Communication Number
                </label>
              </div>
              <div className="relative group">
                <input 
                  type="text" 
                  id="company"
                  name="company"
                  className="w-full bg-transparent border-b border-ivory/20 py-4 text-ivory placeholder-transparent focus:outline-none focus:border-champagne peer"
                  placeholder="Company"
                />
                <label 
                  htmlFor="company" 
                  className="absolute left-0 top-4 text-ivory/40 text-sm tracking-widest uppercase transition-all duration-300 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-champagne peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:text-xs"
                >
                  Brand / Company
                </label>
              </div>
            </div>

            <div className="relative group">
              <textarea 
                id="project"
                name="project"
                required
                rows={4}
                className="w-full bg-transparent border-b border-ivory/20 py-4 text-ivory placeholder-transparent focus:outline-none focus:border-champagne peer resize-none"
                placeholder="Project Details"
              />
              <label 
                htmlFor="project" 
                className="absolute left-0 top-4 text-ivory/40 text-sm tracking-widest uppercase transition-all duration-300 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-champagne peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:text-xs"
              >
                Project Vision
              </label>
            </div>

            <div className="pt-8 text-center">
              <button disabled={isSubmitting} type="submit" className="relative overflow-hidden group bg-champagne text-obsidian rounded-full px-12 py-5 text-sm uppercase tracking-[0.2em] font-medium transition-transform hover:scale-105 active:scale-95 duration-300 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed">
                <span className="relative z-10 transition-colors duration-300">{isSubmitting ? 'Submitting...' : 'Submit Request'}</span>
                <div className="absolute inset-0 bg-white/20 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}
