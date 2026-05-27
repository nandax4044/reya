import { useState, useEffect, MouseEvent } from 'react';
import { Menu, X, Play, ExternalLink } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { motion, AnimatePresence } from 'motion/react';
import logoPng from '../assets/images/arcadeps_logo_1779289543018.png';

interface HeaderProps {
  onPlayClick: () => void;
  playersOnlineCount: number;
}

export default function Header({ 
  onPlayClick, 
  playersOnlineCount
}: HeaderProps) {
  const { content } = useContent();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/90 backdrop-blur-md border-b border-sky-900/40 py-3 shadow-lg shadow-sky-950/40' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            
            {/* Logo brand / text */}
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center space-x-2 group cursor-pointer"
            >
              <div className="relative flex items-center">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-sky-500 rounded-lg blur-xs opacity-50 group-hover:opacity-100 transition duration-300"></div>
                <img 
                  src={logoPng} 
                  alt={content.hero.brandName || "Reya Ps"} 
                  className="h-10 w-auto relative object-contain filter drop-shadow-[0_2px_10px_rgba(34,211,238,0.25)] hover:scale-105 transition duration-200" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </a>

            {/* Desktop Navigation Link buttons */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-3 py-2 rounded-lg text-xs font-black uppercase tracking-wider text-cyan-400 bg-cyan-950/45 transition"
              >
                Beranda
              </button>
              
              <a
                href="#how-to-play"
                onClick={(e) => handleLinkClick(e, '#how-to-play')}
                className="px-3 py-2 rounded-lg text-xs font-black uppercase tracking-wider text-slate-450 hover:text-white transition"
              >
                Cara Main
              </a>

              <a
                href="https://reyashop.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg text-xs font-black uppercase tracking-wider text-slate-400 hover:text-white hover:bg-slate-900/40 transition flex items-center space-x-1"
              >
                <span>Shop</span>
                <ExternalLink className="h-3 w-3 inline" />
              </a>
            </nav>

            {/* Right Side Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              {/* Online indicator */}
              <div className="flex items-center space-x-2 bg-slate-900/80 border border-emerald-500/20 px-3.5 py-1.5 rounded-full text-xs font-bold text-emerald-400 shadow-inner">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-duration-1000"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>{playersOnlineCount} Online</span>
              </div>

              {/* CTA Action button */}
              <button
                onClick={onPlayClick}
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-black tracking-widest text-white rounded-xl group bg-gradient-to-br from-cyan-400 to-indigo-600 transition hover:scale-105 cursor-pointer shadow-[0_0_15px_rgba(34,211,238,0.2)]"
              >
                <span className="relative px-4 py-2.5 transition bg-slate-950 rounded-[10px] group-hover:bg-opacity-0">
                  PLAY NOW
                </span>
              </button>
            </div>

            {/* Mobile menu button controller */}
            <div className="md:hidden flex items-center space-x-2">
              <div className="flex items-center space-x-1.5 bg-slate-900/80 border border-emerald-500/20 px-2.5 py-1 rounded-full text-[11px] font-bold text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{playersOnlineCount} Online</span>
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none cursor-pointer"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu expanded container */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden bg-slate-950/95 backdrop-blur-lg border-b border-sky-900/40 py-3"
            >
              <div className="px-3 pt-2 pb-4 space-y-2.5">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full text-left block px-3.5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider text-cyan-400 bg-cyan-950/50 transition"
                >
                  Beranda
                </button>

                <a
                  href="#how-to-play"
                  onClick={(e) => handleLinkClick(e, '#how-to-play')}
                  className="w-full text-left block px-3.5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider text-slate-300 hover:text-white transition"
                >
                  Cara Main
                </a>

                <a
                  href="https://reyashop.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-left flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider text-slate-300 hover:text-white transition"
                >
                  <span>Shop</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>

                <div className="pt-4 border-t border-slate-900">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setTimeout(onPlayClick, 100);
                    }}
                    className="w-full h-11 flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-600 text-white font-black text-xs uppercase tracking-widest shadow-md cursor-pointer"
                  >
                    <Play className="h-4 w-4 fill-white" />
                    <span>PLAY NOW</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
