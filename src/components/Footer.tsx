import { Heart, ShieldAlert } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export default function Footer() {
  const { content } = useContent();
  const currentYear = new Date().getFullYear();
  const brandName = content.hero.brandName;

  return (
    <footer className="relative bg-slate-950/80 border-t border-slate-900 py-12 px-4 text-center z-10 select-none">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        
        {/* Logo text duplicate */}
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-xl font-extrabold text-[#38bdf8] uppercase tracking-wider gaming-3d-text-small">
            {brandName}
          </span>
        </div>

        {/* Disclaimer card/box to show high-tier safety */}
        <div className="max-w-md bg-amber-500/5 border border-amber-500/10 rounded-xl p-4 mb-6 text-center shadow-inner">
          <p className="text-[10px] md:text-sm text-yellow-500/85 font-semibold leading-relaxed flex items-center justify-center space-x-1.5 font-mono">
            <ShieldAlert className="h-4 w-4 text-yellow-500 flex-none" />
            <span></span>
          </p>
          <p className="text-[10px] text-slate-500 mt-1.5 leading-relaxed font-semibold">
            {brandName} 
          </p>
        </div>

        {/* Navigation list in footer */}
        <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-500 font-bold mb-6">
          <a href="#home" className="hover:text-slate-300 transition">Beranda</a>
          <a href="#how-to-play" className="hover:text-slate-300 transition">Panduan</a>
          <a href="#features" className="hover:text-slate-300 transition">Fitur</a>
          <a href="#about" className="hover:text-slate-300 transition">Tentang</a>
          <a href="#community" className="hover:text-slate-300 transition">Komunitas</a>
        </div>

        {/* Made with love block */}
        <div className="text-[11px] text-slate-600 font-bold flex items-center space-x-1 font-mono">
          <span>&copy; {currentYear} {brandName} GTPS. Built with</span>
          <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500 animate-pulse" />
          <span>Web dev @Nanda. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
}
