import { SectionLabel, FadeIn } from "./Shared";

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0}>
          <SectionLabel>Who I Am</SectionLabel>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-16 items-center mt-4">
          <div>
            <FadeIn delay={100}>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-8">
                Code that thinks.
                <br />
                <span className="text-indigo-400">Systems that scale.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                I am a software developer who believes the best code is the kind that solves problems people
                didn't even know they had. My stack spans Java for bulletproof backends, cloud platforms for
                infinite scale, and AI/ML for systems that learn and adapt.
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <p className="text-slate-300 text-base leading-relaxed">
                I don't just build applications — I build ecosystems. From architecting cloud infrastructure
                to embedding intelligence into software, I'm driven by one question:{" "}
                <span className="text-indigo-300 font-semibold">how can this work smarter?</span>
              </p>
            </FadeIn>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "2x", label: "Hackathon Winner" },
              { num: "3x", label: "Internships" },
              { num: "5+", label: "Projects" },
              { num: "6+", label: "Certifications" },
              { num: "∞", label: "Coffee cups" },
            ].map(({ num, label }, index) => (
              <FadeIn key={label} delay={400 + index * 80}>
                <div
                  className="h-full border border-slate-600/40 rounded-2xl p-6 bg-slate-800/20 backdrop-blur-md hover:border-indigo-500/40 hover:bg-slate-700/25 transition-all duration-300"
                >
                  <div className="text-4xl font-black text-white mb-1">{num}</div>
                  <div className="text-sm text-slate-400">{label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
