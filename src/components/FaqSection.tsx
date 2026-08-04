import { useState } from 'react';
import { FAQ } from '../data/content';

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      id={`faq-item-${index}`}
      className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${open ? 'bg-white/10' : 'hover:bg-white/8'}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-white text-base">{question}</span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            open
              ? 'bg-gradient-to-br from-orange-500 to-red-500 text-white rotate-45'
              : 'bg-white/10 text-white/60'
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-6 pb-6 text-white/60 leading-relaxed text-sm">{answer}</p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center mb-14 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-white/60 text-sm font-medium">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            Časté otázky
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            Máte <span className="text-gradient">otázky?</span>
          </h2>
          <p className="text-white/60 max-w-xl text-base">
            Odpovede na najčastejšie otázky o termovíznom meraní.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {FAQ.map((item, i) => (
            <FaqItem
              key={i}
              question={item.question}
              answer={item.answer}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
