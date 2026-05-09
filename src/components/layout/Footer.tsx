export default function Footer() {
  return (
    <footer className="border-t border-ivory/10 py-12 px-6 md:px-12 relative z-10 bg-obsidian">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex items-center gap-3 -ml-6 md:-ml-12 lg:-ml-24">
          <img src="/logo.png" alt="AURIX Studios" className="h-28 md:h-36 object-contain drop-shadow-[0_0_20px_rgba(147,51,234,0.4)]" />
        </div>
        
        <div className="flex gap-8 text-xs uppercase tracking-widest text-ivory/50">
          <a href="#" className="hover:text-champagne transition-colors">WhatsApp</a>
          <a href="#" className="hover:text-champagne transition-colors">Instagram</a>
        </div>
        
        <div className="text-xs text-ivory/30 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} AURIX Studios. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
