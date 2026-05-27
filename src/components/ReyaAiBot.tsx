import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, X, Sparkles, Bot, User, RefreshCw, HelpCircle } from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const QUICK_QUESTIONS = [
  { text: "📱 Cara Main Android", query: "Bagaimana cara mendownload dan bermain Reya Ps di HP Android?" },
  { text: "🍏 Panduan iOS", query: "Bagaimana cara instalasi dan bermain Reya Ps di perangkat iOS/iPhone?" },
  { text: "💻 Cara Main PC", query: "Bagaimana cara menyambungkan Growtopia PC saya ke server Reya Ps?" },
  { text: "💎 Apakah Gratis?", query: "Apakah server privat Reya Ps ini gratis untuk dimainkan?" },
  { text: "🚜 Fitur Autofarm", query: "Apakah sistem asisten automasi (Autofarm legal) tersedia gratis?" },
];

export default function ReyaAiBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init',
      role: 'assistant',
      content: 'Halo Jovial Gamer! 🌟 Saya **Reya AI**, asisten virtual cerdas siap membimbingmu di Reya Ps GTPS. Ada yang perlu saya bantu mengenai cara menghubungkan akun, panduan download, asisten autofarm, atau fitur kosmetik store premium kami?',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasNewMessageAlert, setHasNewMessageAlert] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasNewMessageAlert(false);
    }
  }, [messages, isOpen]);

  // Alert highlight for unopened messages
  useEffect(() => {
    if (!isOpen && messages.length > 1) {
      setHasNewMessageAlert(true);
    }
  }, [messages, isOpen]);

  const getLocalReply = (userMessage: string): string => {
    const lower = userMessage.toLowerCase();
    
    if (lower.includes("android") || lower.includes("hp") || lower.includes("handphone") || lower.includes("power") || lower.includes("tunnel")) {
      return "📱 **Cara Main di HP Android (Reya Ps):**\n\n1. Unduh dan pasang aplikasi **PowerTunnel** dari internet atau GitHub.\n2. Buka PowerTunnel, lalu atur rute host kustom/redirect menuju: `https://host.logo.png/private-server`.\n3. Aktifkan layanannya (VPN tersambung).\n4. Buka game Growtopia resmi kamu, lalu tekan Play untuk langsung bermain di server Reya Ps!";
    }
    
    if (lower.includes("ios") || lower.includes("iphone") || lower.includes("shadowrocket") || lower.includes("dnscloak") || lower.includes("apple")) {
      return "🍏 **Cara Bermain di iOS / iPhone (Reya Ps):**\n\n1. Instal aplikasi **Shadowrocket** atau **DNSCloak** melalui Apple App Store.\n2. Konfigurasikan file host aturan kustom lokal yang mengarah ke: `https://host.logo.png/private-server`.\n3. Izinkan profil sambungan VPN baru ketika diminta di pengaturan iPhone.\n4. Jalankan game Growtopia resmi kamu dan nikmati keseruan bermain di server Reya Ps!";
    }
    
    if (lower.includes("pc") || lower.includes("windows") || lower.includes("komputer") || lower.includes("notepad")) {
      return "💻 **Cara Bermain di Windows PC (Reya Ps):**\n\n1. Cari aplikasi **Notepad**, klik kanan dan pilih **Run as Administrator**.\n2. Buka file hosts di alamat folder: `C:\\Windows\\System32\\drivers\\etc\\hosts`.\n3. Tempelkan/tambahkan baris data ini di baris paling bawah file:\n   `134.209.112.98 growtopia1.com`\n   `134.209.112.98 growtopia2.com`\n4. Simpan perubahan file Notepad tersebut, jalankan Growtopia PC, dan kamu langsung masuk!";
    }

    if (lower.includes("mac") || lower.includes("macbook") || lower.includes("dmg") || lower.includes("apple pc")) {
      return "🍎 **Cara Bermain di macOS (Reya Ps):**\n\n1. Buka aplikasi **Terminal** di Mac kamu.\n2. Ketikkan perintah ini: `sudo nano /etc/hosts` dan masukkan password Mac.\n3. Tambahkan baris pemetaan alamat IP server:\n   `134.209.112.98 growtopia1.com`\n   `134.209.112.98 growtopia2.com`\n4. Simpan dengan menekan `Ctrl + O` lalu keluar dengan `Ctrl + X`.\n5. Buka Growtopia dan rasakan keseruan bermain!";
    }

    if (lower.includes("fitur") || lower.includes("feature") || lower.includes("autofarm") || lower.includes("auto") || lower.includes("cheat") || lower.includes("bot")) {
      return "🚜 **Fitur Unggulan & Sistem Autofarm:**\n\n- **Autofarm Legal**: Sistem asisten automasi penambangan batu/blok bawaan server yang 100% legal gratis tanpa khawatir dibanned!\n- **Leaderboard Real-time**: Memantau pemain top pemegang DL/WL dan Gems terbanyak.\n- **Komunitas & Event Gacha**: Gacha seru, event musiman dengan hadiah-hadiah kosmetik super mewah sejak rilis awal.";
    }

    if (lower.includes("gratis") || lower.includes("free") || lower.includes("bayar") || lower.includes("duit")) {
      return "💎 **Apakah Reya Ps Gratis?**\n\nYa, **100% GRATIS**! Server privat Growtopia **Reya Ps** selalu gratis untuk dimainkan oleh siapapun dari seluruh dunia. Kami menyediakan kosmetik kustom, tantangan seru, asisten autofarm legal bawaan tanpa biaya pendaftaran apapun.";
    }

    if (lower.includes("store") || lower.includes("donasi") || lower.includes("beli") || lower.includes("item") || lower.includes("gems") || lower.includes("shop")) {
      return "🛍️ **Informasi Donasi & Item Store (Reya Ps):**\n\nKami menawarkan beberapa barang hiasan kosmetik unik premium untuk mendukung server:\n- **Cosmic Wings**: 75.000 Gems\n- **VIP Elite Pass**: Rp 15.000\n- **Admin Light Aura**: 125.000 Gems\n- **Growtoken Double Bundle**: Rp 25.000\n\nAnda dapat mengklik tombol **Shop** di bar navigasi atas untuk mengunjungi toko kami.";
    }

    if (lower.includes("owner") || lower.includes("admin") || lower.includes("staff") || lower.includes("munich") || lower.includes("mango")) {
      return "👑 **Staff & Admin Kehormatan Reya Ps:**\n\n- **Munich**: Server Owner (Pemilik Utama)\n- **Mango**: Server Administrator\n- Serta didukung oleh jajaran Tim Developer, Moderator, dan Helpers berpengalaman.";
    }

    return "Halo! Saya **Reya AI**, asisten cerdas Reya Ps. ✨\n\nBerikut beberapa hal yang bisa saya jelaskan untuk Anda. Silakan tanyakan atau pilih topik di bawah:\n- **android** (Panduan main HP Android)\n- **ios** (Panduan main iPhone / iOS)\n- **pc** (Panduan main PC Windows)\n- **autofarm** (Sistem automation legal)\n- **gratis** (Apakah server berbayar?)\n- **store** (Info item premium store / Shop)";
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay for realism
    setTimeout(() => {
      try {
        const replyText = getLocalReply(text);
        const assistantMsg: ChatMessage = {
          id: `reya-${Date.now()}`,
          role: 'assistant',
          content: replyText,
          timestamp: new Date(),
        };

        setMessages(prev => [...prev, assistantMsg]);
      } catch (err) {
        console.error(err);
        const errorMsg: ChatMessage = {
          id: `reya-error-${Date.now()}`,
          role: 'assistant',
          content: 'Maaf, sistem pemrosesan lokal saya mengalami gangguan. Silakan coba kirim pesanmu kembali!',
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, errorMsg]);
      } finally {
        setIsTyping(false);
      }
    }, 600);
  };

  const clearChat = () => {
    setMessages([
      {
        id: `init-${Date.now()}`,
        role: 'assistant',
        content: 'Halo kembali! Sesi chat kita telah direset bersih. Ada pertanyaan segar baru lainnya seputar server privat Reya Ps, Munich Owner, atau update terbaru?',
        timestamp: new Date(),
      }
    ]);
  };

  return (
    <div id="reya-chat-widget" className="fixed bottom-6 right-6 z-50 select-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ type: 'spring', damping: 20, stiffness: 260 }}
            className="absolute bottom-20 right-0 w-[90vw] sm:w-[380px] h-[520px] bg-[#070b13] border border-cyan-500/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Ambient Background Lights */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[40px] pointer-events-none" />
            <div className="absolute bottom-10 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-[40px] pointer-events-none" />

            {/* Chat Header */}
            <div className="relative bg-[#0b132b]/85 border-b border-sky-950/45 p-4 flex items-center justify-between z-10">
              <div className="flex items-center space-x-2.5">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 p-0.5 flex items-center justify-center shadow-lg shadow-cyan-950/50">
                    <span className="w-full h-full bg-[#070b13] rounded-full flex items-center justify-center text-cyan-400">
                      <Bot className="h-5 w-5 animate-pulse" />
                    </span>
                  </div>
                  {/* Active Online Indicator */}
                  <span className="absolute bottom-0 right-0 h-3 w-3 bg-emerald-500 border-2 border-[#070b13] rounded-full" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-100 tracking-wider flex items-center space-x-1 font-display">
                    <span>REYA AI</span>
                    <Sparkles className="h-3 w-3 text-cyan-400 fill-cyan-400 animate-pulse" />
                  </h4>
                  <p className="text-[10px] text-zinc-400 font-bold font-mono">
                    Reya Ps Virtual Guide
                  </p>
                </div>
              </div>

              {/* Header Action controllers */}
              <div className="flex items-center space-x-1.5">
                <button 
                  onClick={clearChat}
                  title="Reset Sesi Chat"
                  className="p-1.5 text-slate-400 hover:text-cyan-400 hover:bg-slate-900/50 rounded-lg transition"
                >
                  <RefreshCw className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-900/50 rounded-lg transition"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>
            </div>

            {/* Conversations Scroll Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-sky-950/40">
              
              {/* Chat messages */}
              {messages.map((message) => {
                const isAssistant = message.role === 'assistant';
                return (
                  <div 
                    key={message.id}
                    className={`flex items-start gap-2.5 ${!isAssistant ? 'flex-row-reverse' : ''}`}
                  >
                    {/* Tiny visual avatar stamp */}
                    <div className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 ${
                      isAssistant 
                        ? 'bg-cyan-950/30 border-cyan-500/30 text-cyan-400 text-[10px]' 
                        : 'bg-indigo-950/30 border-indigo-500/30 text-indigo-400'
                    }`}>
                      {isAssistant ? <Bot className="h-4.5 w-4.5" /> : <User className="h-4.5 w-4.5" />}
                    </div>

                    {/* Chat Bubble Body */}
                    <div className={`max-w-[75%] rounded-2xl px-3.5 py-2.5 text-xs font-medium leading-relaxed font-sans relative ${
                      isAssistant
                        ? 'bg-slate-900/50 border border-sky-950/50 text-slate-200 shadow-md rounded-tl-none'
                        : 'bg-gradient-to-br from-cyan-400/10 to-sky-500/20 border border-cyan-400/30 text-white shadow-md rounded-tr-none'
                    }`}>
                      <div className="whitespace-pre-wrap">
                        {/* Process markdown emphasis safely */}
                        {message.content.split('**').map((chunk, index) => {
                          if (index % 2 === 1) {
                            return <strong key={index} className="text-cyan-400 font-extrabold">{chunk}</strong>;
                          }
                          return chunk;
                        })}
                      </div>
                      
                      {/* Timestamp Indicator */}
                      <span className="block text-[8px] text-zinc-500 font-mono mt-1 text-right leading-none">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>

                  </div>
                );
              })}

              {/* Sleek Thinking Status Bar */}
              {isTyping && (
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-cyan-950/30 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0">
                    <Bot className="h-4.5 w-4.5 animate-pulse" />
                  </div>
                  <div className="bg-slate-900/40 border border-cyan-500/20 rounded-2xl p-4 text-xs shadow-lg rounded-tl-none w-[75%] relative overflow-hidden backdrop-blur-sm">
                    {/* Glowing scanning bottom beam */}
                    <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-full animate-pulse" />
                    
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center gap-2">
                        {/* Premium dual-ring spinning custom loader */}
                        <div className="relative w-4 h-4 shrink-0 flex items-center justify-center">
                          <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-cyan-500/30 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 border-2 border-cyan-500/20 border-t-cyan-400 animate-spin"></span>
                        </div>
                        <span className="font-black text-[9px] text-cyan-400 uppercase tracking-widest font-mono animate-pulse">
                          Reya AI is typing...
                        </span>
                      </div>
                      
                      {/* Premium content placeholder placeholders to convey typing/processing */}
                      <div className="space-y-1.5 select-none opacity-60">
                        <div className="h-1.5 bg-slate-800 rounded-full w-[95%] animate-pulse" />
                        <div className="h-1.5 bg-slate-800 rounded-full w-[70%] animate-pulse delay-75" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions Shelf */}
            <div className="px-4 py-2 border-t border-sky-950/20 bg-slate-950/35 overflow-x-auto whitespace-nowrap scrollbar-none flex gap-1.5 py-2.5 select-none shrink-0">
              {QUICK_QUESTIONS.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(item.query)}
                  className="px-2.5 py-1 text-[10px] font-bold bg-slate-905 border border-sky-950/40 hover:border-cyan-500/30 text-slate-300 hover:text-white rounded-lg transition cursor-pointer select-none leading-none inline-flex items-center gap-1 active:scale-95 duration-100 backdrop-blur-md"
                >
                  <HelpCircle className="h-3 w-3 text-cyan-400 shrink-0" />
                  <span>{item.text}</span>
                </button>
              ))}
            </div>

            {/* Prompt input controllers */}
            <div className="p-3 bg-slate-950 border-t border-sky-950/45 flex items-center gap-2 z-10 shrink-0">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSendMessage(inputValue);
                }}
                placeholder="Ketik pertanyaanmu seputar Reya Ps..."
                className="flex-1 bg-[#090d16] border border-sky-950/40 focus:border-cyan-500/40 rounded-xl px-4 py-3 text-xs text-slate-200 placeholder-zinc-550 outline-none transition"
              />
              <button
                onClick={() => handleSendMessage(inputValue)}
                className="p-3 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-slate-950 shadow-md shadow-cyan-950/20 active:scale-95 transition cursor-pointer flex-none"
              >
                <Send className="h-4 w-4 fill-slate-950" />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating launcher circular trigger button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 p-0.5 shadow-xl shadow-cyan-950/50 flex items-center justify-center relative cursor-pointer"
      >
        <span className="w-full h-full bg-[#070b13] rounded-full flex items-center justify-center text-cyan-400 relative">
          {isOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <>
              <MessageSquare className="h-6 w-6 text-cyan-400 animate-pulse" />
              {/* Alert Notification light badge */}
              {hasNewMessageAlert && (
                <span className="absolute top-0 right-0 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
                </span>
              )}
            </>
          )}
        </span>
      </motion.button>
    </div>
  );
}
