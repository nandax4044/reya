import { useState, FormEvent } from 'react';
import { MessageSquare, Check, Send } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export default function CommunitySection() {
  const { content } = useContent();
  const { 
    discordUrl, 
    whatsappUrl, 
    discordOnlineText, 
    chatMessages, 
    rules, 
    tips 
  } = content.community;

  const [typedMessage, setTypedMessage] = useState('');
  const [messages, setMessages] = useState<string[]>(chatMessages || [
    "Halo guys, ada yang mau trade DL?",
    "Server lancar jaya mantap sekali!",
    "Baru buat akun langsung dapet bonus haha"
  ]);

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (typedMessage.trim() === '') return;
    setMessages([...messages, typedMessage]);
    setTypedMessage('');
  };

  return (
    <section id="community" className="relative py-24 px-4 bg-slate-950/40 border-t border-slate-900">
      
      {/* Background Lighting blur */}
      <div className="absolute left-1/2 bottom-1/4 -translate-x-1/2 w-96 h-96 bg-violet-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Caption and Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black font-display text-slate-100 tracking-tight mb-2">
            Community
          </h2>
          <p className="text-sm font-semibold tracking-wider text-slate-500 uppercase font-mono">
            Connect with players and get support
          </p>
        </div>

        {/* Layout Column Splitting */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Discord Mock Widget & Call-to-actions */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-slate-900/40 border border-sky-950/45 rounded-3xl p-6 shadow-xl backdrop-blur-md">
              <h3 className="text-lg md:text-xl font-bold font-display text-slate-100 mb-2 flex items-center space-x-2">
                <MessageSquare className="h-5 w-5 text-indigo-400" />
                <span>Join our Discord</span>
              </h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6 font-medium">
                Terhubunglah bersama ribuan player aktif lainnya, dapatkan bantuan teknis secepat kilat dari tim bantuan, berpartisipasi dalam pembagian item gratis (giveaway), dan tetap terupdate dengan berita server terbaru.
              </p>

              {/* High-Fidelity Mock Discord Widget */}
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-[#202225] flex flex-col font-sans">
                {/* Purple header */}
                <div className="bg-[#5865F2] px-4 py-3 flex items-center justify-between select-none">
                  <div className="flex items-center space-x-2 text-white">
                    {/* SVG Discord logo replica */}
                    <svg className="h-5 w-6 fill-white" viewBox="0 0 127.14 96.36">
                      <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.45-5c.88-.65,1.74-1.34,2.58-2a75.58,75.58,0,0,0,72.75,0c.84.71,1.7,1.4,2.58,2a68.45,68.45,0,0,1-10.45,5,77.74,77.74,0,0,0,6.63,10.85,105.73,105.73,0,0,0,31-18.83C129.87,48.56,123.63,25.86,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z" />
                    </svg>
                    <span className="font-bold text-xs tracking-wider uppercase">Discord</span>
                  </div>
                  <span className="text-[10px] bg-slate-950/30 px-2 py-0.5 rounded-full text-white font-bold">
                    {discordOnlineText}
                  </span>
                </div>

                {/* Inner Widget Grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-5 h-64 text-left">
                  
                  {/* Channels Sidebar List (2 cols) */}
                  <div className="md:col-span-2 bg-[#2f3136] p-3 border-r border-[#202225] overflow-y-auto space-y-3.5 select-none text-xs">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                        🔊 SALURAN SUARA
                      </span>
                      <div className="space-y-1 mt-1 text-slate-300 font-semibold">
                        {/* Voice channel 1 */}
                        <div className="p-1 px-1.5 rounded bg-slate-800 text-white flex flex-col">
                          <span className="flex items-center space-x-1">
                            <span>🔊</span>
                            <span>voice 1</span>
                          </span>
                          {/* Inside users */}
                          <div className="pl-4 mt-1 flex items-center space-x-1 text-[11px] text-emerald-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span className="font-mono">Nayaka (Muted)</span>
                          </div>
                        </div>

                        {/* Voice channel 2 */}
                        <div className="p-1.5 rounded hover:bg-slate-800 hover:text-white flex items-center space-x-1 cursor-pointer">
                          <span>🔊</span>
                          <span>voice 2</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                        ANGGOTA ONLINE
                      </span>
                      <div className="space-y-1.5 mt-1 text-slate-300">
                        <div className="flex items-center space-x-2 pl-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                          <span className="font-semibold font-mono text-cyan-400">joo</span>
                        </div>
                        <div className="flex items-center space-x-2 pl-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                          <span className="font-medium font-mono text-slate-300">Nanda</span>
                        </div>
                        <div className="flex items-center space-x-2 pl-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                          <span className="font-medium font-mono text-slate-300">Cherly</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Simulated Discord Public Chat (3 cols) */}
                  <div className="md:col-span-3 bg-[#36393f] p-3 flex flex-col justify-between overflow-hidden">
                    {/* Chat Messages */}
                    <div className="flex-1 overflow-y-auto space-y-2.5 text-xs pr-1">
                      {messages.map((msg, i) => (
                        <div key={i} className="flex gap-2 items-start text-left">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-500 flex-none text-[8px] font-bold text-white flex items-center justify-center">
                            A
                          </div>
                          <div>
                            <div className="flex items-center space-x-1.5">
                              <span className="font-bold text-slate-200">Player</span>
                              <span className="text-[8px] bg-slate-700 text-slate-400 px-1 rounded font-mono">15:00</span>
                            </div>
                            <p className="text-slate-300 mt-0.5 font-medium">{msg}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Chat input box */}
                    <form onSubmit={handleSendMessage} className="flex gap-1.5 mt-2 flex-none">
                      <input 
                        type="text" 
                        value={typedMessage}
                        onChange={(e) => setTypedMessage(e.target.value)}
                        placeholder="Ketik pesan..." 
                        className="flex-1 bg-[#40444b] border border-transparent focus:border-indigo-500/50 rounded px-2 py-1.5 text-xs text-white placeholder-slate-500 outline-none"
                      />
                      <button 
                        type="submit" 
                        className="bg-[#5865F2] hover:bg-[#4752c4] rounded text-white p-1.5 cursor-pointer flex items-center justify-center flex-none"
                      >
                        <Send className="h-3.5 w-3.5" />
                      </button>
                    </form>
                  </div>

                </div>

                {/* Footer link to join */}
                <div className="bg-[#2f3136] px-4 py-2 text-center text-[10px] text-slate-400 font-bold border-t border-[#202225] select-none">
                  Hangout with people who get it
                </div>
              </div>

              {/* Action buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                <a
                  href={discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-[#5865F2] hover:bg-[#4752c4] text-white font-extrabold text-xs uppercase tracking-wider text-center flex items-center justify-center space-x-2 shadow-lg shadow-indigo-950/40 transform hover:-translate-y-0.5 transition duration-150"
                >
                  {/* SVG Discord logo */}
                  <svg className="h-4.5 w-5 fill-white" viewBox="0 0 127.14 96.36">
                    <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.45-5c.88-.65,1.74-1.34,2.58-2a75.58,75.58,0,0,0,72.75,0c.84.71,1.7,1.4,2.58,2a68.45,68.45,0,0,1-10.45,5,77.74,77.74,0,0,0,6.63,10.85,105.73,105.73,0,0,0,31-18.83C129.87,48.56,123.63,25.86,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z" />
                  </svg>
                  <span>Join Discord</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba56] text-white font-extrabold text-xs uppercase tracking-wider text-center flex items-center justify-center space-x-2 shadow-lg shadow-emerald-950/30 transform hover:-translate-y-0.5 transition duration-150"
                >
                  {/* SVG WhatsApp glyph replica */}
                  <svg className="h-4.5 w-4.5 fill-white" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.811 1.452 5.518 0 10.006-4.486 10.01-10.002.002-2.673-1.037-5.184-2.924-7.073A9.87 9.87 0 0 0 11.527 2.01c-5.523 0-10.012 4.487-10.014 10.006-.001 1.743.456 3.444 1.323 4.956L1.832 20.85l4.022-1.05s.015-.01.077-.042z" />
                  </svg>
                  <span>Join WhatsApp</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Server Tips & Server Rules blocks */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Quick Tips card */}
            <div className="bg-slate-900/40 border border-sky-950/45 rounded-3xl p-6 md:p-8 shadow-xl backdrop-blur-md">
              <h3 className="text-base md:text-lg font-bold font-display text-slate-100 mb-6 flex items-center space-x-2">
                <span className="text-base md:text-lg">🚀</span>
                <span>Quick Tips</span>
              </h3>

              <div className="space-y-4">
                {tips?.map((tip) => (
                  <div key={tip.id} className="flex gap-3 text-left">
                    <div className="flex-none">
                      <div className="w-5 h-5 rounded-full bg-cyan-900/40 border border-cyan-500/30 flex items-center justify-center text-[10px] font-black text-cyan-400 select-none">
                        {tip.id}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs md:text-sm font-bold text-slate-200">
                        {tip.title}
                      </h4>
                      <p className="text-slate-400 text-[11px] md:text-xs mt-0.5 leading-relaxed font-semibold">
                        {tip.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Server Rules card */}
            <div className="bg-slate-900/40 border border-sky-950/45 rounded-3xl p-6 md:p-8 shadow-xl backdrop-blur-md">
              <h3 className="text-base md:text-lg font-bold font-display text-slate-100 mb-6 flex items-center space-x-2">
                <span className="text-base md:text-lg">📋</span>
                <span>Server Rules</span>
              </h3>

              <div className="space-y-3.5">
                {rules?.map((rule, idx) => (
                  <div key={idx} className="flex gap-3 text-left group">
                    <div className="flex-none mt-0.5 select-none">
                      <div className="w-4 h-4 rounded bg-emerald-500/10 border border-emerald-500/20 group-hover:border-emerald-400/50 flex items-center justify-center text-emerald-400 transition">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </div>
                    </div>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-semibold group-hover:text-slate-300 transition duration-150">
                      {rule}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
