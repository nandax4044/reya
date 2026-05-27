import { useState } from 'react';
import { 
  Smartphone, Apple, Monitor, Copy, Check, Download, 
  ChevronRight, ExternalLink, Globe, Wifi, Network, ShieldCheck, HelpCircle
} from 'lucide-react';
import { useContent } from '../context/ContentContext';

export default function HowToPlay() {
  const { content } = useContent();
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const serverIp = content.howToPlay?.serverIp || "134.209.112.98";
  const apkUrl = content.howToPlay?.apkUrl || "https://mediafire.com/file/reyaps_apk/download";
  const installerApkUrl = content.howToPlay?.installerApkUrl || apkUrl;
  const hostUrlAndroid = content.howToPlay?.hostUrlAndroid || "https://growtopia.id/android";
  const hostUrlIos = content.howToPlay?.hostUrlIos || "https://growtopia.id/ios";
  const powerTunnelUrl = content.howToPlay?.powerTunnelUrl || "https://github.com/knyar/PowerTunnel-Android/releases";
  const virtualHostTxtUrl = content.howToPlay?.virtualHostTxtUrl || "https://host.logo.png/private-server";

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(id);
      setTimeout(() => setCopiedText(null), 2500);
    }).catch(err => {
      console.error("Gagal menyalin teks: ", err);
    });
  };

  const windowsHostLines = `${serverIp} www.growtopia1.com\n${serverIp} www.growtopia2.com`;

  return (
    <section id="how-to-play" className="relative py-24 px-4 bg-slate-950/40 border-t border-sky-950/30">
      
      {/* Immersive background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-950/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Caption & Title */}
        <div className="text-center mb-14">
          <p className="text-xs font-black tracking-widest text-cyan-400 uppercase mb-2 font-mono flex items-center justify-center gap-1.5">
            <Network className="h-3.5 w-3.5" />
            <span>TUTORIAL PENYAMBUNGAN KLIEN</span>
          </p>
          <h2 className="text-3xl md:text-5xl font-black font-display text-white tracking-tight mb-4 uppercase">
            Panduan Cara Main
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-red-500 via-cyan-400 to-indigo-600 mx-auto rounded-full mb-4" />
          <p className="max-w-xl mx-auto text-slate-450 text-xs md:text-sm font-semibold leading-relaxed">
            Pilih metode kesukaanmu di bawah ini. Kami telah menyediakan pengaturan terlengkap untuk seluruh sistem operasi agar kamu dapat mengakses server <span className="text-cyan-400">Reya Ps</span> dengan instan dan aman.
          </p>
        </div>

        {/* Global Connection Stats Widget Bar */}
        <div className="bg-slate-900/70 border border-sky-950/50 rounded-2xl p-5 mb-12 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-left shadow-xl backdrop-blur-xs">
          
          <div className="flex items-center space-x-4">
            <div className="h-10 w-10 bg-cyan-950/60 border border-cyan-500/30 rounded-xl flex items-center justify-center text-cyan-400 shrink-0">
              <Globe className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[9px] font-black text-slate-500 tracking-wider uppercase font-mono">IP Address Server</p>
              <p className="text-xs font-black text-slate-200 font-mono truncate">{serverIp}</p>
            </div>
            <button
              onClick={() => handleCopy(serverIp, 'global-ip')}
              className="px-2.5 py-1.5 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-400/30 hover:border-cyan-400/50 rounded-lg text-[10px] font-black uppercase text-cyan-400 transition cursor-pointer shrink-0"
            >
              {copiedText === 'global-ip' ? 'Tersalin' : 'Salin'}
            </button>
          </div>

          <div className="flex items-center space-x-4 border-t sm:border-t-0 sm:border-l border-sky-950/50 pt-4 sm:pt-0 sm:pl-6">
            <div className="h-10 w-10 bg-indigo-950/60 border border-indigo-500/30 rounded-xl flex items-center justify-center text-indigo-400 shrink-0">
              <Wifi className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] font-black text-slate-500 tracking-wider uppercase font-mono">Port Game</p>
              <p className="text-xs font-black text-slate-200 font-mono leading-none mt-1">17091 / 17000</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 border-t sm:border-t-0 sm:border-l border-sky-950/50 pt-4 sm:pt-0 sm:pl-6">
            <div className="h-10 w-10 bg-rose-950/60 border border-red-500/30 rounded-xl flex items-center justify-center text-rose-400 shrink-0">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] font-black text-slate-500 tracking-wider uppercase font-mono">Keamanan Server</p>
              <p className="text-xs font-black text-slate-200 leading-none mt-1">WAF Protected / Anti DDOS</p>
            </div>
          </div>

        </div>

        {/* Bento Grid layout of 8 tutorial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8">

          {/* CARD 1: ReyaPS Mobile APK */}
          <div className="bg-slate-900/50 backdrop-blur-xs border border-sky-950/40 hover:border-cyan-500/30 rounded-2xl p-6 transition duration-350 shadow-md relative group flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-5 pb-3 border-b border-sky-950/30">
                <div className="p-2.5 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400">
                  <Smartphone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-white flex items-center gap-2">
                    <span>ReyaPS Mobile APK</span>
                    <span className="px-1.5 py-0.5 text-[8px] font-black tracking-widest uppercase bg-rose-500/10 text-red-400 border border-red-500/20 rounded">
                      Utama
                    </span>
                  </h3>
                  <p className="text-[10px] text-slate-550 font-bold uppercase tracking-wider font-mono">Sangat Mudah - Tanpa Setelan Tambahan</p>
                </div>
              </div>

              <ol className="space-y-3.5 text-xs text-slate-350 font-medium list-none pl-0">
                <li className="flex gap-2">
                  <span className="font-mono text-red-500 font-bold shrink-0">1.</span>
                  <span>Uninstall Growtopia Resmi jika ada di HP kamu.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-mono text-red-500 font-bold shrink-0">2.</span>
                  <span>Restart perangkat HP kamu (Saran agar memori segar).</span>
                </li>
                <li className="flex flex-col gap-1">
                  <div className="flex gap-2">
                    <span className="font-mono text-red-500 font-bold shrink-0">3.</span>
                    <span>
                      Unduh dan instal <a href={apkUrl} target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 font-black underline">ReyaPS APK Resmi</a> di bawah.
                    </span>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="font-mono text-red-500 font-bold shrink-0">4.</span>
                  <span>Jalankan APK ReyaPS lalu masuk menggunakan Akun terdaftar.</span>
                </li>
              </ol>
            </div>

            <div className="mt-6 pt-4 border-t border-sky-950/20">
              <a
                href={apkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-2.5 bg-gradient-to-r from-red-600 to-rose-500 hover:from-red-500 hover:to-rose-400 text-white font-black text-xs uppercase tracking-widest rounded-xl transition cursor-pointer select-none shadow-[0_0_15px_rgba(239,68,68,0.15)] hover:scale-[1.01]"
              >
                <Download className="h-4 w-4" />
                <span>Unduh ReyaPS APK</span>
              </a>
            </div>
          </div>

          {/* CARD 2: ReyaPS Installer */}
          <div className="bg-slate-900/50 backdrop-blur-xs border border-sky-950/40 hover:border-cyan-500/30 rounded-2xl p-6 transition duration-350 shadow-md relative group flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-5 pb-3 border-b border-sky-950/30">
                <div className="p-2.5 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400">
                  <Smartphone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-white flex items-center gap-2">
                    <span>ReyaPS Installer App</span>
                    <span className="px-1.5 py-0.5 text-[8px] font-black tracking-widest uppercase bg-red-500/10 text-red-400 border border-red-500/20 rounded">
                      Alternatif
                    </span>
                  </h3>
                  <p className="text-[10px] text-slate-550 font-bold uppercase tracking-wider font-mono">Aplikasi Launcher All-In-One</p>
                </div>
              </div>

              <ol className="space-y-3.5 text-xs text-slate-350 font-medium list-none pl-0">
                <li className="flex gap-2">
                  <span className="font-mono text-red-500 font-bold shrink-0">1.</span>
                  <span>Hapus (Uninstall) game Growtopia Real terlebih dahulu.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-mono text-red-500 font-bold shrink-0">2.</span>
                  <span>
                    Pasang <a href={installerApkUrl} target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 font-black underline">ReyaPS Installer APK</a> di HP kamu.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-mono text-red-500 font-bold shrink-0">3.</span>
                  <span>Buka ReyaPS Installer lantas selesaikan proses masuk akun.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-mono text-red-500 font-bold shrink-0">4.</span>
                  <span>Tunggu proses download file data internal selesai, lalu klik Mainkan!</span>
                </li>
              </ol>
            </div>

            <div className="mt-6 pt-4 border-t border-sky-950/20">
              <a
                href={installerApkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-2.5 bg-slate-950 hover:bg-slate-900 border border-red-500/30 text-rose-400 font-black text-xs uppercase tracking-widest rounded-xl transition cursor-pointer select-none hover:scale-[1.01]"
              >
                <Download className="h-4 w-4" />
                <span>Unduh Installer APK</span>
              </a>
            </div>
          </div>

          {/* CARD 3: Windows */}
          <div className="bg-slate-900/50 backdrop-blur-xs border border-sky-950/40 hover:border-cyan-500/30 rounded-2xl p-6 transition duration-350 shadow-md relative group flex flex-col justify-between md:col-span-1">
            <div>
              <div className="flex items-center space-x-3 mb-5 pb-3 border-b border-sky-950/30">
                <div className="p-2.5 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-cyan-400">
                  <Monitor className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-white flex items-center gap-2">
                    <span>Windows OS</span>
                  </h3>
                  <p className="text-[10px] text-slate-550 font-bold uppercase tracking-wider font-mono">Ubah rute loket via berkas internal host</p>
                </div>
              </div>

              <ol className="space-y-3.5 text-xs text-slate-350 font-medium list-none pl-0">
                <li className="flex gap-2">
                  <span className="font-mono text-cyan-400 font-bold shrink-0">1.</span>
                  <span>
                    Tekan tombol <kbd className="px-1.5 py-0.5 bg-slate-950 border border-slate-800 text-slate-300 text-[10px] rounded font-mono font-bold">Win + R</kbd> lalu paste: <code className="text-red-400 font-mono px-1 py-0.5 bg-slate-950/80 rounded border border-slate-900 text-[11px] break-all">C:\Windows\System32\drivers\etc</code>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-mono text-cyan-400 font-bold shrink-0">2.</span>
                  <span>Buka file bernama <strong className="text-slate-200">hosts</strong> dengan Notepad (Klik Kanan &rarr; Run as Administrator).</span>
                </li>
                <li className="flex flex-col gap-1.5">
                  <div className="flex gap-2">
                    <span className="font-mono text-cyan-400 font-bold shrink-0">3.</span>
                    <span>Tambahkan baris berikut di baris terbawah hosts teks:</span>
                  </div>
                  <div className="p-2.5 bg-slate-950 border border-sky-950 rounded-lg text-[10px] text-emerald-400 font-mono relative group/btn leading-relaxed mb-1">
                    <pre className="whitespace-pre">{windowsHostLines}</pre>
                    <button
                      onClick={() => handleCopy(windowsHostLines, 'win-hosts')}
                      className="absolute right-2 top-2 p-1.5 bg-slate-900 border border-slate-800 hover:text-white rounded select-none opacity-0 group-hover/btn:opacity-100 transition duration-150 cursor-pointer"
                      title="Salin Baris"
                    >
                      {copiedText === 'win-hosts' ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                    </button>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="font-mono text-cyan-400 font-bold shrink-0">4.</span>
                  <span>Simpan file hosts (CTRL + S) lalu luncurkan game Growtopia PC kamu.</span>
                </li>
              </ol>
            </div>

            <div className="mt-6 pt-4 border-t border-sky-950/20">
              <button
                onClick={() => handleCopy(windowsHostLines, 'win-hosts')}
                className="w-full flex items-center justify-center space-x-2 py-2.5 bg-slate-950 hover:bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 font-black text-xs uppercase tracking-widest rounded-xl transition cursor-pointer select-none"
              >
                {copiedText === 'win-hosts' ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                <span>{copiedText === 'win-hosts' ? 'Tersalin!' : 'Copy Host Configuration'}</span>
              </button>
            </div>
          </div>

          {/* CARD 4: PowerTunnel (Android) */}
          <div className="bg-slate-900/50 backdrop-blur-xs border border-sky-950/40 hover:border-cyan-500/30 rounded-2xl p-6 transition duration-350 shadow-md relative group flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-5 pb-3 border-b border-sky-950/30">
                <div className="p-2.5 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-cyan-400">
                  <Smartphone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-white flex items-center gap-2">
                    <span>PowerTunnel (Android)</span>
                  </h3>
                  <p className="text-[10px] text-slate-550 font-bold uppercase tracking-wider font-mono">Bypass DNS - Terpopuler Tanpa Root</p>
                </div>
              </div>

              <ol className="space-y-3.5 text-xs text-slate-350 font-medium list-none pl-0">
                <li className="flex gap-2">
                  <span className="font-mono text-cyan-400 font-bold shrink-0">1.</span>
                  <span>
                    Instal <a href={powerTunnelUrl} target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 font-black underline">PowerTunnel APK</a> di handphone Android kamu.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-mono text-cyan-400 font-bold shrink-0">2.</span>
                  <span>Buka aplikasi, pilih menu samping &rarr; Plugin &rarr; Hosts &rarr; centang Buka Pengaturan.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-mono text-cyan-400 font-bold shrink-0">3.</span>
                  <span>
                     Masukkan list beralamat URL: <code className="text-red-400 font-mono text-[10px] md:text-[11px] px-1 py-0.5 bg-slate-950 rounded break-all select-all">{hostUrlAndroid}</code>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-mono text-cyan-400 font-bold shrink-0">4.</span>
                  <span>Kembali ke menu beranda utama PowerTunnel, tekan <strong className="text-white">CONNECT</strong>, lalu jalankan Growtopia.</span>
                </li>
              </ol>
            </div>

            <div className="mt-6 pt-4 border-t border-sky-950/20">
              <a
                href={powerTunnelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-2.5 bg-slate-950 hover:bg-slate-900 border border-slate-850 text-slate-300 font-black text-xs uppercase tracking-widest rounded-xl transition cursor-pointer select-none hover:border-cyan-500/20"
              >
                <Download className="h-4 w-4" />
                <span>Unduh PowerTunnel APK (GitHub)</span>
              </a>
            </div>
          </div>

          {/* CARD 5: Hosts Go (Android) */}
          <div className="bg-slate-900/50 backdrop-blur-xs border border-sky-950/40 hover:border-cyan-500/30 rounded-2xl p-6 transition duration-350 shadow-md relative group flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-5 pb-3 border-b border-sky-950/30">
                <div className="p-2.5 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-cyan-400">
                  <Smartphone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-white flex items-center gap-2">
                    <span>Hosts Go (Android)</span>
                  </h3>
                  <p className="text-[10px] text-slate-550 font-bold uppercase tracking-wider font-mono">Metode Patcher Sederhana Tanpa Akses Sudo</p>
                </div>
              </div>

              <ol className="space-y-3.5 text-xs text-slate-350 font-medium list-none pl-0">
                <li className="flex gap-2">
                  <span className="font-mono text-cyan-400 font-bold shrink-0">1.</span>
                  <span>
                    Unduh dan pasang aplikasi <a href="https://play.google.com/store/search?q=hosts+go&c=apps" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 font-black underline">Hosts Go (No Root)</a> di Google Play Store.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-mono text-cyan-400 font-bold shrink-0">2.</span>
                  <span>Buka Editor Hosts &rarr; Enable pilihan, lalu tekan Download Hosts File.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-mono text-cyan-400 font-bold shrink-0">3.</span>
                  <span>
                    Ketik rujukan host URL: <code className="text-red-400 font-mono text-[10px] md:text-[11px] px-1 py-0.5 bg-slate-950 rounded break-all select-all">{hostUrlAndroid}</code>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-mono text-cyan-400 font-bold shrink-0">4.</span>
                  <span>Klik tombol Apply, aktifkan proteksi VPN loket, lalu buka game Growtopia resmi kamu.</span>
                </li>
              </ol>
            </div>

            <div className="mt-6 pt-4 border-t border-sky-950/20">
              <a
                href="https://play.google.com/store/search?q=hosts+go&c=apps"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-2.5 bg-slate-950 hover:bg-slate-900 border border-slate-850 text-slate-300 font-black text-xs uppercase tracking-widest rounded-xl transition cursor-pointer select-none hover:border-cyan-500/20"
              >
                <Download className="h-4 w-4" />
                <span>Download Hosts Go</span>
              </a>
            </div>
          </div>

          {/* CARD 6: Virtual Host (Android) */}
          <div className="bg-slate-900/50 backdrop-blur-xs border border-sky-950/40 hover:border-cyan-500/30 rounded-2xl p-6 transition duration-350 shadow-md relative group flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-5 pb-3 border-b border-sky-950/30">
                <div className="p-2.5 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-cyan-400">
                  <Smartphone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-white flex items-center gap-2">
                    <span>Virtual Host (Android)</span>
                  </h3>
                  <p className="text-[10px] text-slate-550 font-bold uppercase tracking-wider font-mono">Beban Reroute menggunakan Berkas .txt Manual</p>
                </div>
              </div>

              <ol className="space-y-3.5 text-xs text-slate-350 font-medium list-none pl-0">
                <li className="flex gap-2">
                  <span className="font-mono text-cyan-400 font-bold shrink-0">1.</span>
                  <span>
                    Instal <a href="https://github.com/vnt9xx/virtual-host/releases" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 font-black underline">Virtual Host APK</a> pada HP Android.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-mono text-cyan-400 font-bold shrink-0">2.</span>
                  <span>
                    Klik tombol unduhan lantas simpan berkas konfigurasi <a href="#" onClick={(e) => { e.preventDefault(); handleCopy(windowsHostLines, 'hosts-file'); }} className="text-red-400 hover:text-red-300 font-black underline">Hosts File di sini</a>.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-mono text-cyan-400 font-bold shrink-0">3.</span>
                  <span>Buka aplikasi Virtual Host, klik <strong className="text-white">SELECT HOSTS FILE</strong>.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-mono text-cyan-400 font-bold shrink-0">4.</span>
                  <span>Cari dan pilih file host berekstensi TXT yang barusan diunduh, nyalakan, lalu mainkan game!</span>
                </li>
              </ol>
            </div>

            <div className="mt-6 pt-4 border-t border-sky-950/20">
              <button
                onClick={() => handleCopy(windowsHostLines, 'hosts-file-2')}
                className="w-full flex items-center justify-center space-x-2 py-2.5 bg-slate-950 hover:bg-slate-900 border border-slate-850 text-slate-300 font-black text-xs uppercase tracking-widest rounded-xl transition cursor-pointer select-none"
              >
                <Download className="h-4 w-4" />
                <span>Unduh Hosts File (.txt)</span>
              </button>
            </div>
          </div>

          {/* CARD 7: Mac */}
          <div className="bg-slate-900/50 backdrop-blur-xs border border-sky-950/40 hover:border-cyan-500/30 rounded-2xl p-6 transition duration-350 shadow-md relative group flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-5 pb-3 border-b border-sky-950/30">
                <div className="p-2.5 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-cyan-400">
                  <Apple className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-white flex items-center gap-2">
                    <span>macOS Apple</span>
                  </h3>
                  <p className="text-[10px] text-slate-550 font-bold uppercase tracking-wider font-mono">Penyuntingan berkas etc/hosts via Apple Terminal</p>
                </div>
              </div>

              <ol className="space-y-3.5 text-xs text-slate-350 font-medium list-none pl-0">
                <li className="flex gap-2">
                  <span className="font-mono text-cyan-400 font-bold shrink-0">1.</span>
                  <span>Buka Finder &rarr; Tekan <kbd className="px-1.5 py-0.5 bg-slate-950 border border-slate-800 text-slate-300 text-[10px] rounded font-mono font-bold">Go</kbd> &rarr; pilih <strong className="text-slate-200">Go to Folder</strong>.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-mono text-cyan-400 font-bold shrink-0">2.</span>
                  <span>Masukkan alamat direktori: <code className="text-red-400 font-mono px-1 py-0.5 bg-slate-950 border border-slate-900 rounded text-[11px] select-all">/private/etc/hosts</code></span>
                </li>
                <li className="flex flex-col gap-1.5">
                  <div className="flex gap-2">
                    <span className="font-mono text-cyan-400 font-bold shrink-0">3.</span>
                    <span>Salin fail tersebut ke Desktop, buka & edit memakai TextEdit, lampirkan baris:</span>
                  </div>
                  <div className="p-2.5 bg-slate-950 border border-sky-950 rounded-lg text-[10px] text-emerald-400 font-mono relative group/macbtn leading-relaxed mb-1">
                    <pre className="whitespace-pre">{windowsHostLines}</pre>
                    <button
                      onClick={() => handleCopy(windowsHostLines, 'mac-hosts')}
                      className="absolute right-2 top-2 p-1.5 bg-slate-900 border border-slate-800 hover:text-white rounded select-none opacity-0 group-hover/macbtn:opacity-100 transition duration-150 cursor-pointer"
                      title="Salin Baris"
                    >
                      {copiedText === 'mac-hosts' ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                    </button>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="font-mono text-cyan-400 font-bold shrink-0">4.</span>
                  <span>Simpan berkas dan seret kembali hosts tersebut ke folder private/etc/ asal &rarr; start Growtopia.</span>
                </li>
              </ol>
            </div>

            <div className="mt-6 pt-4 border-t border-sky-950/20">
              <button
                onClick={() => handleCopy(windowsHostLines, 'mac-hosts')}
                className="w-full flex items-center justify-center space-x-2 py-2.5 bg-slate-950 hover:bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 font-black text-xs uppercase tracking-widest rounded-xl transition cursor-pointer select-none"
              >
                {copiedText === 'mac-hosts' ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                <span>{copiedText === 'mac-hosts' ? 'Tersalin!' : 'Copy Mac Host Lines'}</span>
              </button>
            </div>
          </div>

          {/* CARD 8: Surge5 (iPhone) */}
          <div className="bg-slate-900/50 backdrop-blur-xs border border-sky-950/40 hover:border-cyan-500/30 rounded-2xl p-6 transition duration-350 shadow-md relative group flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-5 pb-3 border-b border-sky-950/30">
                <div className="p-2.5 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-cyan-400">
                  <Apple className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-white flex items-center gap-2">
                    <span>Surge5 (iPhone / iOS)</span>
                  </h3>
                  <p className="text-[10px] text-slate-550 font-bold uppercase tracking-wider font-mono">Penggunaan profil vpn kustom tanpa jailbreak</p>
                </div>
              </div>

              <ol className="space-y-3.5 text-xs text-slate-350 font-medium list-none pl-0">
                <li className="flex gap-2">
                  <span className="font-mono text-cyan-400 font-bold shrink-0">1.</span>
                  <span>
                    Beli / unduh utilitas <a href="https://apps.apple.com/us/app/surge-5/id1442624960" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 font-black underline">Surge5</a> dari Apple App Store secara resmi.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-mono text-cyan-400 font-bold shrink-0">2.</span>
                  <span>
                    Gunakan tautan impor profil VPN berikut: <code className="text-red-400 font-mono text-[10px] md:text-[11px] px-1 py-0.5 bg-slate-950 rounded break-all select-all">{hostUrlIos}</code>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-mono text-cyan-400 font-bold shrink-0">3.</span>
                  <span>Klik profil impor &rarr; Allow / Izinkan penambahan Konfigurasi VPN kustom di pengaturan iPhone.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-mono text-cyan-400 font-bold shrink-0">4.</span>
                  <span>Tekan tombol Connect besar, biarkan status VPN tersambung aktif, lalu buka Growtopia iOS.</span>
                </li>
              </ol>
            </div>

            <div className="mt-6 pt-4 border-t border-sky-950/20">
              <a
                href="https://apps.apple.com/us/app/surge-5/id1442624960"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-2.5 bg-slate-950 hover:bg-slate-900 border border-slate-850 text-slate-300 font-black text-xs uppercase tracking-widest rounded-xl transition cursor-pointer select-none hover:border-cyan-500/20"
              >
                <Download className="h-4 w-4" />
                <span>Surge5 App Store</span>
              </a>
            </div>
          </div>

        </div>

        {/* Dynamic FAQ/Help prompt bottom footer */}
        <div className="mt-14 text-center">
          <p className="text-slate-450 text-xs font-bold flex items-center justify-center gap-1.5">
            <HelpCircle className="h-4 w-4 text-cyan-400" />
            <span>Klien bermasalah atau butuh panduan langsung? Silakan konsultasi gratis via chatbot asisten asisten virtual di sebelah kanan bawah.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
