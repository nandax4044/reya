import { Play, MessageSquare, ShieldCheck, Gamepad2, Award, Landmark } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import logoPng from '../assets/images/arcadeps_logo_1779289543018.png';
import playersOnlineIcon from '../assets/images/players_online_icon_1779881420573.png';
import registeredAccountsIcon from '../assets/images/registered_accounts_icon_1779881440738.png';
import activeWorldsIcon from '../assets/images/active_worlds_icon_1779881459052.png';

interface HeroProps {
  onStartPlayingClick: () => void;
  playersOnlineCount: number;
}

export default function Hero({ onStartPlayingClick, playersOnlineCount }: HeroProps) {
  const { content } = useContent();
  const { 
    bannerText, 
    brandName, 
    tagline, 
    description, 
    ctaPrimaryText, 
    ctaSecondaryText, 
    ctaSecondaryHref,
    statsOnlineIcon,
    statsRegisteredIcon,
    statsActiveWorldsIcon,
    logoUrl
  } = content.hero;
  
  const handleScrollToSection = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-4 text-center overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-sky-500/10 rounded-full blur-[110px] pointer-events-none" />

      {/* Main Content Card Box */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* State Badge */}
        <div className="inline-flex items-center space-x-1.5 bg-sky-500/10 border border-sky-400/20 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest text-[#38bdf8] uppercase mb-8 shadow-xs animate-pulse">
          <span className="h-2 w-2 rounded-full bg-[#22d3ee]"></span>
          <span>{bannerText}</span>
        </div>

        {/* 3D Animated Branding using generated Logo Image */}
        <div className="relative mb-6 select-none flex flex-col items-center">
          {/* Subtle back glowing halo */}
          <div className="absolute -inset-10 bg-gradient-to-r from-cyan-500/10 to-sky-500/10 rounded-full blur-3xl pointer-events-none select-none" />
          <img 
            src={logoPng} 
            alt={brandName || "Reya Ps"} 
            className="w-full max-w-[320px] md:max-w-[460px] h-auto object-contain relative filter drop-shadow-[0_12px_24px_rgba(34,211,238,0.3)] animate-float hover:scale-105 transition duration-300" 
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Catchy Tagline */}
        <h2 className="text-xl md:text-2xl font-bold font-display text-slate-100 tracking-wide mb-4">
          {tagline}
        </h2>

        {/* Elaborated Description */}
        <p className="max-w-xl text-sm md:text-base text-slate-400 leading-relaxed mb-10 px-2 font-medium">
          {description}
        </p>

        {/* Interactive Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 px-4">
          <button
            onClick={onStartPlayingClick}
            className="flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 hover:from-cyan-300 hover:to-sky-400 text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg shadow-sky-400/20 hover:shadow-cyan-400/30 transform hover:-translate-y-0.5 transition active:translate-y-0 duration-150 cursor-pointer"
          >
            <span>❄</span>
            <span>{ctaPrimaryText}</span>
          </button>

          {ctaSecondaryHref.startsWith('http') ? (
            <a
              href={ctaSecondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-slate-900 border border-sky-900/40 hover:bg-slate-800/80 text-white font-black text-sm uppercase tracking-wider hover:border-sky-500/30 transition duration-150"
            >
              <MessageSquare className="h-4 w-4" />
              <span>{ctaSecondaryText}</span>
            </a>
          ) : (
            <a
              href={ctaSecondaryHref}
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection(ctaSecondaryHref);
              }}
              className="flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-slate-900 border border-sky-900/40 hover:bg-slate-800/80 text-white font-black text-sm uppercase tracking-wider hover:border-sky-500/30 transition duration-150"
            >
              <MessageSquare className="h-4 w-4" />
              <span>{ctaSecondaryText}</span>
            </a>
          )}
        </div>

        {/* Stats Section Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl px-4 mt-6">
          
          {/* Stat Item 1 (Players Online) */}
          <div className="relative group overflow-hidden bg-slate-950/40 border border-sky-900/20 hover:border-cyan-500/30 px-6 py-6 rounded-2xl transition duration-300 backdrop-blur-xs">
            <div className="absolute -right-2 -bottom-2 opacity-0 group-hover:opacity-100 transition duration-300" style={{ transform: 'scale(1.5)' }}>
              <img src={playersOnlineIcon} className="w-14 h-14 object-contain opacity-[0.06] filter blur-xs" referrerPolicy="no-referrer" />
            </div>
            <div className="flex justify-center mb-3">
              <img 
                src={playersOnlineIcon} 
                alt="Online" 
                className="h-12 w-12 object-contain filter drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] hover:scale-110 hover:rotate-3 transition duration-300 animate-bounce-slow" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <div className="text-3xl font-black text-slate-100 font-display mb-1">
              {playersOnlineCount}
            </div>
            <div className="text-[10px] font-extrabold text-slate-500 tracking-wider uppercase font-mono">
              PLAYERS ONLINE
            </div>
          </div>

          {/* Stat Item 2 (Registered Accounts) */}
          <div className="relative group overflow-hidden bg-slate-950/40 border border-sky-900/20 hover:border-cyan-500/30 px-6 py-6 rounded-2xl transition duration-300 backdrop-blur-xs">
            <div className="absolute -right-2 -bottom-2 opacity-0 group-hover:opacity-100 transition duration-300" style={{ transform: 'scale(1.5)' }}>
              <img src={registeredAccountsIcon} className="w-14 h-14 object-contain opacity-[0.06] filter blur-xs" referrerPolicy="no-referrer" />
            </div>
            <div className="flex justify-center mb-3">
              <img 
                src={registeredAccountsIcon} 
                alt="Registered" 
                className="h-12 w-12 object-contain filter drop-shadow-[0_0_8px_rgba(234,179,8,0.5)] hover:scale-110 hover:-rotate-3 transition duration-300 animate-bounce-slow" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <div className="text-3xl font-black text-slate-100 font-display mb-1">
              {content.hero.statsRegistered}
            </div>
            <div className="text-[10px] font-extrabold text-slate-500 tracking-wider uppercase font-mono">
              REGISTERED ACCOUNTS
            </div>
          </div>

          {/* Stat Item 3 (Active Worlds) */}
          <div className="relative group overflow-hidden bg-slate-950/40 border border-sky-900/20 hover:border-cyan-500/30 px-6 py-6 rounded-2xl transition duration-300 backdrop-blur-xs">
            <div className="absolute -right-2 -bottom-2 opacity-0 group-hover:opacity-100 transition duration-300" style={{ transform: 'scale(1.5)' }}>
              <img src={activeWorldsIcon} className="w-14 h-14 object-contain opacity-[0.06] filter blur-xs" referrerPolicy="no-referrer" />
            </div>
            <div className="flex justify-center mb-3">
              <img 
                src={activeWorldsIcon} 
                alt="Worlds" 
                className="h-12 w-12 object-contain filter drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] hover:scale-110 hover:rotate-3 transition duration-300 animate-bounce-slow" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <div className="text-3xl font-black text-slate-100 font-display mb-1">
              {content.hero.statsActiveWorlds}
            </div>
            <div className="text-[10px] font-extrabold text-slate-500 tracking-wider uppercase font-mono">
              ACTIVE WORLDS
            </div>
          </div>

        </div>

        {/* Scroll down mouse indicator */}
        <div 
          onClick={() => handleScrollToSection('#how-to-play')}
          className="mt-16 flex flex-col items-center cursor-pointer group"
        >
          <span className="text-[10px] font-extrabold text-slate-500 group-hover:text-slate-300 tracking-widest uppercase mb-2 font-mono transition">Scroll</span>
          <div className="w-5 h-9 border-2 border-slate-700 group-hover:border-sky-500 rounded-full flex justify-center p-1 transition">
            <div className="w-1 h-2 bg-slate-500 group-hover:bg-cyan-400 rounded-full animate-scroll-mouse" />
          </div>
        </div>

      </div>
    </section>
  );
}
