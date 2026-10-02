import type { ReactNode } from 'react';

type SectionHeaderProps = {
  eyebrow: string;
  icon: ReactNode;
  title: ReactNode;
  description: string;
  tone?: 'primary' | 'info' | 'success' | 'neutral';
  maxWidth?: string;
};

const toneClasses = {
  primary: 'text-primary border-primary/30 bg-primary/10',
  info: 'text-info border-info/30 bg-info/10',
  success: 'text-success border-success/30 bg-success/10',
  neutral: 'text-base-content/70 border-white/20 bg-white/5',
};

export default function SectionHeader({
  eyebrow,
  icon,
  title,
  description,
  tone = 'primary',
  maxWidth = 'max-w-2xl',
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-14 flex flex-col items-center gap-4">
      <div className={`badge badge-outline gap-2 px-4 py-3 text-sm font-medium rounded-full ${toneClasses[tone]}`}>
        {icon}
        {eyebrow}
      </div>
      <h2 className="font-display font-bold text-4xl md:text-5xl text-white">{title}</h2>
      <p className={`font-display font-medium tracking-[-0.01em] text-base-content/70 ${maxWidth} text-base leading-relaxed`}>
        {description}
      </p>
    </div>
  );
}
