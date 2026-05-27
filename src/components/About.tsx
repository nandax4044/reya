import { Compass, Code2 } from 'lucide-react';
import * as Icons from 'lucide-react';
import { useContent } from '../context/ContentContext';

export default function About() {
  const { content } = useContent();
  const { title, description1, description2, statsDevs, highlights } = content.about;

  // Icon dynamic renderer
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName] || Compass;
    return <IconComponent className="h-5 w-5" />;
  };

  return (
    <section id="about" className="relative py-24 px-4 bg-slate-950/20 border-t border-slate-900 overflow-hidden">
      
      {/* Decorative Radial BG Glow */}
      <div className="absolute left-1/3 bottom-0 w-80 h-80 bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 animate-fade-in">
        
        {/* Caption and Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black font-display text-slate-100 tracking-tight mb-2">
            {title}
          </h2>
          <p className="text-sm font-semibold tracking-wider text-slate-500 uppercase font-mono">
            Our story and vision
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Our Vision & Basic Stats */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Our Vision Card Block */}
            <div className="bg-slate-900/40 border border-sky-950/40 hover:border-sky-500/10 p-6 md:p-8 rounded-2xl shadow-xl backdrop-blur-md text-left">
              <h3 className="text-lg md:text-xl font-bold font-display text-cyan-400 mb-4 flex items-center space-x-2 select-none">
                <Compass className="h-5 w-5 animate-spin-slow" />
                <span>Visi &amp; Komitmen</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-semibold">
                {description1}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed font-semibold mt-4">
                {description2}
              </p>
            </div>

            {/* Twin Stat Counter Cards */}
            <div className="select-none">
              
              {/* Stat 1: Developers */}
              <div className="bg-slate-950/40 border border-sky-900/10 hover:border-cyan-500/20 p-5 rounded-2xl text-center shadow-md transition duration-200">
                <div className="flex justify-center mb-1.5 text-cyan-400">
                  <Code2 className="h-5 w-5" />
                </div>
                <div className="text-2xl font-black text-slate-100 font-display">{statsDevs}</div>
                <div className="text-[9px] font-extrabold text-slate-500 tracking-widest uppercase font-mono">
                  DEVELOPERS AKTIF
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Stacked Highlighting Perks */}
          <div className="lg:col-span-7 space-y-4 text-left">
            {highlights?.map((peri, index) => (
              <div 
                key={index}
                className="group flex gap-4 md:gap-5 p-5 bg-slate-900/30 border border-sky-950/35 hover:bg-slate-900/55 hover:border-cyan-500/20 rounded-2xl transition duration-250 shadow-md backdrop-blur-md"
              >
                <div className="flex-none select-none">
                  <div className={`p-3 rounded-xl border flex items-center justify-center group-hover:scale-105 transition duration-200 ${peri.color}`}>
                    {renderIcon(peri.icon)}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-slate-200 group-hover:text-white transition font-display">
                    {peri.title}
                  </h4>
                  <p className="text-slate-400 text-xs md:text-sm mt-1 leading-relaxed font-semibold">
                    {peri.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
