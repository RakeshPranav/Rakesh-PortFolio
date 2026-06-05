import { FadeIn, SectionLabel, SectionHeading, TiltCard } from "./Shared";
import { Icon } from "./Icons";
import { PROJECTS } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <SectionLabel>Work</SectionLabel>
          <SectionHeading>Projects</SectionHeading>
        </FadeIn>
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 hidden-scrollbar">
          {PROJECTS.map((p, i) => (
            <FadeIn key={p.title} delay={i * 100} className="snap-center shrink-0 w-[85vw] md:w-[400px]">
              <TiltCard className="group relative border border-slate-600/40 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-black/40 transition-all duration-400 bg-slate-800/20 backdrop-blur-md hover:bg-slate-700/25 hover:border-slate-500/50">
                {/* Gradient header */}
                <div className={`h-2 bg-linear-to-r ${p.gradient}`} />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${p.gradient} flex items-center justify-center text-white`}>
                      <Icon.Code />
                    </div>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors border border-slate-600 hover:border-slate-200 px-3 py-1.5 rounded-full"
                    >
                      <Icon.Github /> GitHub <Icon.ExternalLink />
                    </a>
                  </div>
                  <h3 className="text-xl font-black text-white mb-3 leading-tight">{p.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] font-semibold bg-slate-700/40 text-slate-200 border border-slate-600/40 px-2.5 py-1 rounded-lg backdrop-blur-sm"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
