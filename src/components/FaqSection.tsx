import { useState } from 'react';
import { FAQ } from '../data/content';
import SectionHeader from './ui/SectionHeader';

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      id={`faq-item-${index}`}
      className={`collapse collapse-plus glass rounded-2xl transition-all duration-300 ${open ? 'collapse-open bg-white/10' : 'collapse-close hover:bg-white/8'}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="collapse-title font-semibold text-white text-base flex items-center justify-between gap-4 px-6 py-5"
        aria-expanded={open}
      >
        {question}
        <span
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ml-auto ${
            open
              ? 'bg-gradient-to-br from-primary to-secondary text-white rotate-45'
              : 'bg-white/10 text-white/60'
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div className="collapse-content">
        <p className="px-0 pb-2 text-base-content/60 leading-relaxed text-sm">{answer}</p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6">
        <SectionHeader
          tone="neutral"
          eyebrow="Časté otázky"
          icon={(
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          )}
          title={<>Máte <span className="text-gradient">otázky?</span></>}
          description="Odpovede na najčastejšie otázky o termovíznom meraní."
          maxWidth="max-w-xl"
        />

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
