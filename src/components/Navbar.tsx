import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Shop', href: '#shop' },
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNav = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navBg =
    scrolled || isOpen
      ? 'bg-white/95 backdrop-blur-md shadow-sm'
      : 'bg-cream/90 backdrop-blur-sm md:bg-transparent';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 sm:h-20">
          <button onClick={() => handleNav('#home')} className="flex items-center gap-2 sm:gap-3 min-h-[44px] z-10">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
              <span className="text-deep-brown font-display font-bold text-base sm:text-lg">A</span>
            </div>
            <span className="font-display font-bold text-xl sm:text-2xl text-deep-brown">Aura</span>
          </button>

          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className="font-body text-base tracking-wide text-deep-brown hover:text-gold transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2.5 text-gray-600 hover:text-deep-brown transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center z-10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-cream shadow-lg max-h-[calc(100dvh-4rem)] overflow-y-auto">
          <div className="px-4 py-3 space-y-0.5 pb-safe text-center">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className="block w-full text-center font-body text-base text-deep-brown hover:text-gold transition-colors py-3.5 px-3 rounded-xl hover:bg-cream active:bg-cream/80 min-h-[48px]"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
