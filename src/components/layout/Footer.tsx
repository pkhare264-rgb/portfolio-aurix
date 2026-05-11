export default function Footer() {
  return (
    <footer className="border-t border-ivory/10 py-12 px-6 md:px-12 relative z-10 bg-obsidian">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex items-center gap-3 -ml-6 md:-ml-12 lg:-ml-24">
          <img src="/logo.png" alt="AURIX Studios" className="h-28 md:h-36 object-contain" />
        </div>
        
        <div className="flex gap-8 text-xs uppercase tracking-widest text-ivory/50">
          <a href="https://wa.me/918349970052?text=Hello%20AURIX%20Studios%2C%20I%20would%20like%20to%20inquire%20about%20your%20services!" target="_blank" rel="noopener noreferrer" className="hover:text-champagne transition-colors">WhatsApp</a>
          <a href="https://www.instagram.com/madebyaurix?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:text-champagne transition-colors">Instagram</a>
        </div>
        
        <div className="text-xs text-ivory/30 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} AURIX Studios. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
