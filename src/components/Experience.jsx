import { useRef, useEffect, useState } from "react";
import { SectionLabel } from "./Shared";
import { Icon } from "./Icons";
import { EXPERIENCE } from "../data";


/* ── fires once when element crosses threshold ── */
function useOnScreen(threshold = 0.3) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ── scroll-driven glowing line fill ── */
function GlowingCenterLine() {
  const wrapperRef = useRef(null);
  const [fillPct, setFillPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      // how far we've scrolled through the element
      const scrolled = viewH - rect.top;
      const total = rect.height + viewH;
      const pct = Math.min(100, Math.max(0, (scrolled / total) * 140));
      setFillPct(pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px pointer-events-none z-0"
      style={{ background: "rgba(71,85,105,0.25)" }}
    >
      {/* Bright glow fill */}
      <div
        className="absolute top-0 left-0 w-full transition-none"
        style={{
          height: `${fillPct}%`,
          background:
            "linear-gradient(to bottom, #6366f1, #f59e0b 50%, #06b6d4)",
          boxShadow: "0 0 8px 2px rgba(99,102,241,0.6)",
          filter: "blur(0.5px)",
          transition: "height 0.1s linear",
        }}
      />
    </div>
  );
}

/* ── center dot that glows when card is visible ── */
function CenterDot({ color, visible }) {
  return (
    <div className="relative flex items-center justify-center z-10">
      {/* Outer pulse */}
      {visible && (
        <span
          className="absolute rounded-full animate-ping opacity-30"
          style={{ width: 28, height: 28, backgroundColor: color }}
        />
      )}
      {/* Inner dot */}
      <div
        className="w-4 h-4 rounded-full border-2 transition-all duration-500"
        style={{
          backgroundColor: visible ? color : "#1e293b",
          borderColor: visible ? color : "#334155",
          boxShadow: visible
            ? `0 0 0 3px ${color}20, 0 0 14px ${color}70`
            : "none",
        }}
      />
    </div>
  );
}

/* ── card: glow pulse + rotateZ on hover ── */
function ExpCard({ exp, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl border transition-all duration-400 cursor-default overflow-hidden"
      style={{
        background: "rgba(15, 23, 42, 0.35)",
        borderColor: hovered ? `${exp.color}50` : `${exp.color}20`,
        // Inset box shadow to keep the glow strictly inside the card boundaries
        boxShadow: hovered
          ? `inset 0 0 20px 2px ${exp.color}40, inset 0 0 45px 10px ${exp.color}15`
          : `inset 0 0 10px -4px ${exp.color}10`,
        transition: "border-color 0.4s ease, box-shadow 0.4s ease",
        opacity: visible ? 1 : 0,
      }}
    >
      {/* Background glowing gradients that rotate/tilt to stay dynamic inside the clipped parent */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-700 ease-out z-0"
        style={{
          background: `radial-gradient(circle at 20% 20%, ${exp.color}20 0%, transparent 60%), radial-gradient(circle at 80% 80%, ${exp.color}15 0%, transparent 60%)`,
          transform: hovered ? "rotateZ(180deg) scale(1.3)" : "rotateZ(0deg) scale(1)",
          opacity: hovered ? 1 : 0.3,
        }}
      />

      {/* Content wrapper that tilts/rotates on the Z-axis inside the clipped boundary */}
      <div
        className="p-6 transition-all duration-500 ease-out origin-center relative z-10"
        style={{
          transform: hovered
            ? "rotateZ(-1.5deg) scale(1.02)"
            : "rotateZ(0deg) scale(1)",
        }}
      >
        {/* Accent bar */}
        <div
          className="h-0.5 rounded-full mb-5"
          style={{
            width: visible ? "2.5rem" : "0",
            background: `linear-gradient(90deg, ${exp.color}, transparent)`,
            boxShadow: hovered ? `0 0 8px ${exp.color}` : "none",
            transition: "width 0.6s ease, box-shadow 0.3s ease",
          }}
        />

        {/* Header row */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span style={{ color: exp.color }}><Icon.Briefcase /></span>
              <h3 className="text-white font-bold text-lg">{exp.role}</h3>
            </div>
            <span
              className="text-sm font-semibold px-2.5 py-1 rounded-md"
              style={{
                color: exp.color,
                backgroundColor: `${exp.color}18`,
                border: `1px solid ${exp.color}30`,
              }}
            >
              {exp.company}
            </span>
          </div>
          <span
            className="text-xs font-mono px-3 py-1 rounded-full"
            style={{
              color: exp.color,
              backgroundColor: `${exp.color}12`,
              border: `1px solid ${exp.color}28`,
            }}
          >
            {exp.period}
          </span>
        </div>

        {/* Bullets */}
        <ul className="flex flex-col gap-2">
          {exp.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-slate-300">
              <span
                className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: `${exp.color}80` }}
              />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


/* ── single row: [left card | dot | right card] ── */
function TimelineRow({ exp, index }) {
  const isLeft = index % 2 === 0;
  const [cardRef, visible] = useOnScreen(0.3);

  return (
    <div
      ref={cardRef}
      className="grid grid-cols-[1fr_56px_1fr] items-center gap-0"
    >
      {/* LEFT side */}
      <div className="flex justify-end pr-6">
        {isLeft && (
          <div
            className="w-full max-w-md transition-all duration-700 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-40px)",
            }}
          >
            <ExpCard exp={exp} visible={visible} />
          </div>
        )}
      </div>

      {/* CENTER dot — sits exactly on the line */}
      <div className="flex justify-center">
        <CenterDot color={exp.color} visible={visible} />
      </div>

      {/* RIGHT side */}
      <div className="flex justify-start pl-6">
        {!isLeft && (
          <div
            className="w-full max-w-md transition-all duration-700 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(40px)",
            }}
          >
            <ExpCard exp={exp} visible={visible} />
          </div>
        )}
      </div>
    </div>
  );
}

/* ── section ── */
export default function Experience() {
  const [titleRef, titleVisible] = useOnScreen(0.1);

  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div
          ref={titleRef}
          className="transition-all duration-700"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <SectionLabel>Career</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none mb-20">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative hidden md:block">
          <GlowingCenterLine />
          <div className="flex flex-col gap-16">
            {EXPERIENCE.map((exp, i) => (
              <TimelineRow key={exp.company} exp={exp} index={i} />
            ))}
          </div>
        </div>

        {/* Mobile: single column */}
        <div className="md:hidden relative pl-8">
          {/* Left rail */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-slate-700/40" />
          <div className="flex flex-col gap-10">
            {EXPERIENCE.map((exp, i) => {
              const [ref, vis] = useOnScreen(0.2);
              return (
                <div key={exp.company} ref={ref} className="relative">
                  {/* Mobile dot */}
                  <div
                    className="absolute -left-[21px] top-5 w-3.5 h-3.5 rounded-full border-2 z-10"
                    style={{ backgroundColor: exp.color, borderColor: "#020617" }}
                  />
                  <div
                    className="transition-all duration-700"
                    style={{
                      opacity: vis ? 1 : 0,
                      transform: vis ? "translateX(0)" : "translateX(20px)",
                    }}
                  >
                    <ExpCard exp={exp} visible={vis} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
