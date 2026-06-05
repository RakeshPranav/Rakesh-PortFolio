import { useState } from "react";
import { FadeIn, SectionLabel } from "./Shared";

const SKILL_NODES = [
  {
    id: "java",
    name: "Java & Backend",
    code: "JVM_CORE",
    desc: "Object-oriented systems, Spring Boot APIs, microservice architectures, and scalable server-side solutions.",
    color: "#6366f1",
    x: 0,
    y: -88,
    icon: JavaIcon,
  },
  {
    id: "cloud",
    name: "Cloud & AWS",
    code: "AWS_INFRA",
    desc: "EC2, S3, Amplify deployments, cloud-native infrastructure configuration and production-grade reliability.",
    color: "#f59e0b",
    x: 80,
    y: -44,
    icon: CloudIcon,
  },
  {
    id: "aiml",
    name: "AI / ML Pipelines",
    code: "ML_STACK",
    desc: "Pandas, NumPy, Scikit-learn, RAG architectures, Whisper, Wav2Vec2, and Agentic AI systems.",
    color: "#8b5cf6",
    x: 80,
    y: 44,
    icon: AIIcon,
  },
  {
    id: "fullstack",
    name: "Full-Stack Web",
    code: "MERN_OPS",
    desc: "React, Node.js, MongoDB, REST APIs, Firebase — from design to production deployment.",
    color: "#22c55e",
    x: 0,
    y: 88,
    icon: WebIcon,
  },
  {
    id: "python",
    name: "Python & Data",
    code: "PY_DATA",
    desc: "Data engineering, Flask backends, OpenCV pipelines, deep learning model training and evaluation.",
    color: "#38bdf8",
    x: -80,
    y: 44,
    icon: PythonIcon,
  },
  {
    id: "sql",
    name: "Databases & SQL",
    code: "DB_QUERY",
    desc: "MySQL, MongoDB Atlas, BigQuery analytics, schema design and optimised query performance.",
    color: "#ec4899",
    x: -80,
    y: -44,
    icon: DBIcon,
  },
];

function JavaIcon({ size = 16, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M9 9h6M9 12h6M9 15h4" />
    </svg>
  );
}
function CloudIcon({ size = 16, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  );
}
function AIIcon({ size = 16, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5.64 5.64l2.12 2.12M16.24 16.24l2.12 2.12M5.64 18.36l2.12-2.12M16.24 7.76l2.12-2.12" />
    </svg>
  );
}
function WebIcon({ size = 16, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
function PythonIcon({ size = 16, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.13 2 7 3.5 7 5v2h5v1H5.5C3.57 8 2 9.57 2 12s1.57 4 3.5 4H7v-2.5C7 11.5 8.5 10 12 10s5 1.5 5 3.5V17c0 1.5-1 3-4 3H8" />
      <circle cx="9" cy="5" r="1" fill={color} stroke="none" />
      <circle cx="15" cy="19" r="1" fill={color} stroke="none" />
    </svg>
  );
}
function DBIcon({ size = 16, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12" />
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}
function CoreIcon({ size = 24, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="12" r="7" strokeDasharray="2 3" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
    </svg>
  );
}

// Tag groups mirrored from existing data
const SKILL_TAGS = {
  Languages: { color: "text-indigo-300 bg-indigo-950/60 border-indigo-800", dot: "bg-indigo-500", items: ["Java", "Python", "SQL", "HTML", "CSS"] },
  Technologies: { color: "text-sky-300 bg-sky-950/60 border-sky-800", dot: "bg-sky-500", items: ["React", "Node.js", "MongoDB", "Tailwind CSS"] },
  "Cloud & Tools": { color: "text-amber-300 bg-amber-950/60 border-amber-800", dot: "bg-amber-500", items: ["AWS", "GitHub", "Vercel", "Firebase", "MySQL"] },
  "AI / ML": { color: "text-violet-300 bg-violet-950/60 border-violet-800", dot: "bg-violet-500", items: ["Pandas", "NumPy", "Scikit-learn", "RAG", "Agentic AI"] },
};

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section Label */}
        <FadeIn delay={0}>
          <SectionLabel>Toolkit</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none mb-12">
            Skills
          </h2>
        </FadeIn>

        {/* Main Two-Column Layout */}
        <FadeIn delay={100}>
          <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* LEFT: Holographic Orbital Sphere */}
            <div className="flex justify-center items-center relative" style={{ minHeight: "400px" }}>
              <div
                className="relative flex items-center justify-center"
                style={{
                  width: "380px",
                  height: "380px",
                  borderRadius: "50%",
                  border: "1px solid rgba(99,102,241,0.15)",
                  background: "radial-gradient(circle at center, rgba(99,102,241,0.06) 0%, rgba(5,8,22,0.4) 70%)",
                  boxShadow: "0 0 60px rgba(99,102,241,0.08), inset 0 0 60px rgba(0,0,0,0.3)",
                }}
              >
                {/* Outer dashed orbit */}
                <div
                  className="absolute rounded-full"
                  style={{
                    width: "300px",
                    height: "300px",
                    border: "1px dashed rgba(139,92,246,0.2)",
                    animation: "orbitSpin 18s linear infinite",
                  }}
                />
                {/* Inner solid orbit */}
                <div
                  className="absolute rounded-full"
                  style={{
                    width: "220px",
                    height: "220px",
                    border: "1px solid rgba(99,102,241,0.12)",
                    borderTopColor: "rgba(99,102,241,0.5)",
                    animation: "orbitSpinRev 12s linear infinite",
                  }}
                />

                {/* SVG connector lines */}
                <svg
                  width="380"
                  height="380"
                  viewBox="0 0 380 380"
                  style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none", zIndex: 5 }}
                >
                  {SKILL_NODES.map((s) => {
                    const isHovered = hoveredSkill?.id === s.id;
                    return (
                      <line
                        key={`line-${s.id}`}
                        x1="190"
                        y1="190"
                        x2={190 + s.x}
                        y2={190 + s.y}
                        stroke={isHovered ? s.color : "rgba(255,255,255,0.05)"}
                        strokeWidth={isHovered ? 1.5 : 0.7}
                        strokeDasharray={isHovered ? "none" : "4,4"}
                        style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
                      />
                    );
                  })}
                </svg>

                {/* Center Core */}
                <div
                  className="absolute z-10 flex flex-col items-center justify-center text-center rounded-full"
                  style={{
                    width: "110px",
                    height: "110px",
                    background: "rgba(5,8,22,0.9)",
                    border: hoveredSkill
                      ? `1.5px solid ${hoveredSkill.color}`
                      : "1.5px solid rgba(99,102,241,0.3)",
                    boxShadow: hoveredSkill
                      ? `0 0 25px ${hoveredSkill.color}55`
                      : "0 0 20px rgba(99,102,241,0.15)",
                    transition: "border-color 0.3s, box-shadow 0.3s",
                    padding: "12px",
                  }}
                >
                  {hoveredSkill ? (
                    <>
                      <hoveredSkill.icon size={20} color={hoveredSkill.color} />
                      <span
                        className="font-mono text-[8px] tracking-widest mt-2 font-semibold"
                        style={{ color: hoveredSkill.color }}
                      >
                        {hoveredSkill.code}
                      </span>
                      <span className="text-white text-[9px] font-bold mt-1 tracking-wider">ACTIVE</span>
                    </>
                  ) : (
                    <>
                      <CoreIcon size={22} color="rgba(99,102,241,0.8)" />
                      <span className="text-slate-500 text-[8px] font-mono tracking-widest mt-2">SYS_CORE</span>
                      <span className="text-slate-400 text-[9px] font-bold mt-1 tracking-wider">READY</span>
                    </>
                  )}
                </div>

                {/* Orbital Nodes */}
                {SKILL_NODES.map((s) => {
                  const isHovered = hoveredSkill?.id === s.id;
                  return (
                    <div
                      key={s.id}
                      onMouseEnter={() => setHoveredSkill(s)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      style={{
                        position: "absolute",
                        top: `calc(50% + ${s.y}px)`,
                        left: `calc(50% + ${s.x}px)`,
                        transform: `translate(-50%, -50%) scale(${isHovered ? 1.3 : 1})`,
                        width: "38px",
                        height: "38px",
                        borderRadius: "50%",
                        background: isHovered
                          ? `${s.color}18`
                          : "rgba(5,8,22,0.92)",
                        border: isHovered
                          ? `2px solid ${s.color}`
                          : "1.5px solid rgba(255,255,255,0.12)",
                        boxShadow: isHovered ? `0 0 18px ${s.color}88` : "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "default",
                        zIndex: 20,
                        transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
                      }}
                    >
                      <s.icon size={15} color={isHovered ? s.color : "rgba(148,163,184,0.7)"} />
                    </div>
                  );
                })}
              </div>

              {/* Keyframe styles */}
              <style>{`
                @keyframes orbitSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes orbitSpinRev { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
              `}</style>
            </div>

            {/* RIGHT: Diagnostics panel */}
            <div
              className="relative rounded-2xl flex flex-col justify-center"
              style={{
                minHeight: "340px",
                padding: "36px 32px",
                background: "rgba(5,8,22,0.6)",
                border: "1px solid rgba(139,92,246,0.15)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Corner accents */}
              {[
                "top-0 left-0 border-t border-l rounded-tl-2xl",
                "top-0 right-0 border-t border-r rounded-tr-2xl",
                "bottom-0 left-0 border-b border-l rounded-bl-2xl",
                "bottom-0 right-0 border-b border-r rounded-br-2xl",
              ].map((cls, i) => (
                <div
                  key={i}
                  className={`absolute w-5 h-5 ${cls}`}
                  style={{ borderColor: "rgba(99,102,241,0.4)" }}
                />
              ))}

              {hoveredSkill ? (
                <div className="flex flex-col gap-4">
                  <div>
                    <span
                      className="font-mono text-[10px] tracking-[0.2em] uppercase"
                      style={{ color: hoveredSkill.color }}
                    >
                      ACTIVE_NODE // {hoveredSkill.code}
                    </span>
                    <h3
                      className="text-2xl font-black text-white mt-2 tracking-tight"
                      style={{ textShadow: `0 0 20px ${hoveredSkill.color}44` }}
                    >
                      {hoveredSkill.name}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">{hoveredSkill.desc}</p>
                  <div
                    className="flex items-center gap-2 font-mono text-[9px] tracking-wider pt-4 mt-2"
                    style={{
                      borderTop: "1px solid rgba(255,255,255,0.05)",
                      color: "#22c55e",
                    }}
                  >
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ background: "#22c55e" }}
                    />
                    DIAGNOSTIC: SYSTEM ENGAGED [100% READY]
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-indigo-400">
                      SYS_STANDBY // AWAITING_NODE
                    </span>
                    <h3 className="text-2xl font-black text-white mt-2 tracking-tight">
                      Hover a node
                    </h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Each orbital node represents a skill cluster. Hover over any node on the sphere to project its diagnostic data and capabilities into this panel.
                  </p>
                  {/* Skill tag grid in idle state */}
                  <div className="flex flex-col gap-3 mt-1">
                    {Object.entries(SKILL_TAGS).map(([cat, { color, dot, items }]) => (
                      <div key={cat} className="flex items-start gap-2 flex-wrap">
                        <span className={`inline-flex items-center gap-1 text-[10px] font-bold tracking-wider uppercase shrink-0 ${color} border rounded-full px-2.5 py-1`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                          {cat}
                        </span>
                        {items.map((skill) => (
                          <span key={skill} className="text-[10px] text-slate-400 font-mono bg-slate-800/60 px-2 py-0.5 rounded-md border border-slate-700/50">
                            {skill}
                          </span>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div
                    className="flex items-center gap-2 font-mono text-[9px] tracking-wider pt-4 mt-2 text-slate-500"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-600 animate-pulse" />
                    STATUS: IDLE // LISTENING FOR TRIGGER
                  </div>
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
