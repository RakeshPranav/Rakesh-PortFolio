import { useInView } from '../hooks/useInView';
import { useTilt } from '../hooks/useTilt';

export function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="h-px flex-1 bg-slate-700" />
      <span className="text-[10px] tracking-[0.25em] uppercase text-slate-300 font-medium">{children}</span>
      <span className="h-px flex-1 bg-slate-700" />
    </div>
  );
}

export function SectionHeading({ children }) {
  return (
    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none mb-12">
      {children}
    </h2>
  );
}

export function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export function TiltCard({ children, className = "" }) {
  const { ref, onMouseMove, onMouseLeave, style } = useTilt(8, 1.02);
  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={style}
      className={`h-full ${className}`}
    >
      {children}
    </div>
  );
}
