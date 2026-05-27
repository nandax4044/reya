import { useState } from 'react';
import { X, Smartphone, Monitor, ShieldCheck, Copy, Check, Info } from 'lucide-react';
import { motion } from 'motion/react';

interface PlayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PlayModal({ isOpen, onClose }: PlayModalProps) {
  const [copiedIp, setCopiedIp] = useState(false);
  
  if (!isOpen) return null;

  const serverIp = "15.235.166.218";

  const handleCopyIp = () => {
    navigator.clipboard.writeText(serverIp).then(() => {
      setCopiedIp(true);
      setTimeout(() => setCopiedIp(false), 2000);
    });
  };

  const handleScrollToGuide = () => {
    onClose();
    const target = document.querySelector("#how-to-play");
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Dark Backdrop overlay */}
      <motion.div 
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-slate-950/85 backdrop-blur-md" 
      />

      {/* Modal Dialog Content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: "spring", damping: 25, stiffness: 350 }}
        className="relative z-10 w-full max-w-lg bg-slate-900 border border-sky-950/50 rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden"
      >
        {/* Glow behind */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-cyan-500/10 rounded-full blur-[60px] pointer-events-none" />

        {/* Top bar */}
        <div className="flex justify-between items-center mb-6 relative">
          <div className="flex items-center space-x-2">
            <span className="text-xl">🎮</span>
            <h3 className="text-lg md:text-xl font-black text-slate-100 font-display">
              Play
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition duration-150 cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Info list */}
        <div className="space-y-6 relative mb-8">
          
          {/* IP Card block details */}
          <div className="p-4 bg-slate-950 border border-slate-900 rounded-xl relative">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] font-extrabold tracking-widest text-slate-500 uppercase font-mono">
                Official Server Address
              </span>
              <span className="flex items-center space-x-1 bg-emerald-500/10 px-2 py-0.5 rounded text-[10px] text-emerald-400 font-bold border border-emerald-500/10">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                <span>Active IP</span>
              </span>
            </div>

            <div className="flex justify-between items-center bg-slate-900 px-3.5 py-2.5 rounded-lg border border-slate-800">
              <span className="font-mono text-cyan-400 font-bold text-sm select-all">
                {serverIp}
              </span>
              
              <button
                onClick={handleCopyIp}
                className="flex items-center space-x-1 px-3 py-1.5 bg-sky-950/60 border border-sky-400/20 hover:bg-sky-900/50 rounded text-xs font-bold text-sky-400 transition cursor-pointer"
              >
                {copiedIp ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                <span>{copiedIp ? 'Disalin' : 'Salin IP'}</span>
              </button>
            </div>
            
            <p className="text-[10px] text-slate-500 font-bold mt-2 font-mono">
              Hosts redirect address: growtopia1.com &amp; growtopia2.com
            </p>
          </div>

          {/* Platforms options buttons */}
          <div className="grid grid-cols-2 gap-4">
            {/* option 1 (apk android) */}
            <div className="bg-slate-950/40 p-4 border border-slate-900 hover:border-cyan-500/10 text-center rounded-xl">
              <div className="flex justify-center text-cyan-400 mb-2">
                <Smartphone className="h-6 w-6" />
              </div>
              <p className="text-xs font-bold text-slate-200">Android &amp; iOS</p>
              <p className="text-[10px] text-slate-500 mt-0.5">Proxy / PowerTunnel</p>
            </div>

            {/* option 2 (PC setup) */}
            <div className="bg-slate-950/40 p-4 border border-slate-900 hover:border-cyan-500/10 text-center rounded-xl">
              <div className="flex justify-center text-indigo-400 mb-2">
                <Monitor className="h-6 w-6" />
              </div>
              <p className="text-xs font-bold text-slate-200">Windows &amp; Mac</p>
              <p className="text-[10px] text-slate-500 mt-0.5">Edit Hosts / DNS</p>
            </div>
          </div>

          {/* Quick instructions text */}
          <div className="flex gap-3 bg-cyan-950/20 p-4 border border-cyan-900/10 rounded-xl text-left">
            <Info className="h-4 w-4 text-cyan-400 mt-0.5 flex-none" />
            <p className="text-slate-400 text-xs leading-relaxed font-semibold">
              Butuh panduan lengkap tentang bagaimana cara mendownload aplikasi, menyalin, dan menyisipkan berkas IP ke dalam sistem VPN? Tenang, kami menyediakan panduan langkah demi langkah yang detail!
            </p>
          </div>

        </div>

        {/* Action bottom button */}
        <button
          onClick={handleScrollToGuide}
          className="w-full py-3.5 bg-gradient-to-r from-cyan-400 to-sky-500 hover:from-cyan-300 hover:to-sky-400 text-slate-950 font-black text-sm uppercase tracking-wider rounded-xl shadow-lg transition duration-150 cursor-pointer"
        >
          Lihat Panduan Instalasi
        </button>

      </motion.div>
    </div>
  );
}
