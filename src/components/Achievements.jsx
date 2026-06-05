import { FadeIn, SectionLabel, TiltCard } from "./Shared";
import { Icon } from "./Icons";
import { ACHIEVEMENTS } from "../data";

export default function Achievements() {
  return (
    <section id="recognition" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <SectionLabel>Recognition</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none mb-16">
            Achievements
          </h2>
        </FadeIn>
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-8 hidden-scrollbar pl-2">
          {ACHIEVEMENTS.map((a, i) => (
            <FadeIn key={i} delay={i * 80} className="snap-center shrink-0 w-[85vw] md:w-[350px]">
              <TiltCard className="group relative border border-slate-600/40 rounded-2xl overflow-hidden bg-slate-800/20 backdrop-blur-md flex flex-col hover:border-indigo-500/40 hover:shadow-[0_0_30px_-5px_rgba(79,70,229,0.3)] hover:bg-slate-700/25 transition-all duration-500 hover:-translate-y-2">
                
                {/* Image Overlay Header */}
                <div className="relative h-[250px] w-full overflow-hidden shrink-0">
                  <img src={a.image} alt={a.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/20 to-transparent opacity-90 group-hover:opacity-30 transition-opacity duration-500" />
                  
                  {/* External Glass Link Button */}
                  <a href={a.link} target="_blank" rel="noreferrer" title="Open LinkedIn Post" 
                     className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/70 backdrop-blur-md border border-slate-600/50 flex items-center justify-center text-slate-200 hover:text-white hover:bg-indigo-600 hover:border-indigo-400 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 z-10 cursor-pointer">
                     <Icon.ExternalLink />
                  </a>
                </div>

                {/* Body Canvas (Fluid Expanse) */}
                <div className="p-5 flex flex-col bg-slate-800/10 backdrop-blur-sm z-0">
                  <h3 className="font-bold text-white text-lg tracking-wide mb-1 leading-snug">{a.label}</h3>

                  {/* Short Descriptive - Always explicitly maintained */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {a.short}
                  </p>

                  {/* Deep descriptive context - Expands natively into void pushing layout fluidly */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
                    <div className="overflow-hidden">
                      <div className="pt-4 text-sm text-indigo-100/80 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                        {a.detail}
                      </div>
                    </div>
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
