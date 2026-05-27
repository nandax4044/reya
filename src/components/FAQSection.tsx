import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQSection() {
  const { content } = useContent();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = content.faqs;

  const handleToggle = (id: number) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-24 px-4 bg-slate-950/20 border-t border-slate-900">
      
      {/* Decorative center radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-700/5 rounded-full blur-[115px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-black font-display text-slate-100 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="max-w-md mx-auto text-slate-450 text-sm font-semibold">
            Temukan jawaban cepat atas pertanyaan-pertanyaan mendasar seputar mekanisme dan kebijakan server privat.
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-3">
          {faqs?.map((faq) => {
            const isOpen = openIndex === faq.id;
            return (
              <div 
                key={faq.id}
                className="bg-slate-900/40 border border-sky-950/45 hover:border-sky-500/20 rounded-xl overflow-hidden transition duration-200 shadow-md backdrop-blur-md"
              >
                {/* Header block (clickable status) */}
                <button
                  onClick={() => handleToggle(faq.id)}
                  className={`w-full px-5 py-4 flex items-center justify-between text-left transition select-none cursor-pointer ${
                    isOpen ? 'bg-slate-900/85' : ''
                  }`}
                >
                  <span className="text-xs md:text-sm font-bold text-slate-200 font-display">
                    {faq.id}. {faq.question}
                  </span>
                  
                  <div>
                    <ChevronDown className={`h-4 w-4 text-slate-500 transition duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
                  </div>
                </button>

                {/* Answer block (collapsible text) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="border-t border-sky-950/30 overflow-hidden"
                    >
                      <div className="py-4 px-5">
                        <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-semibold">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
