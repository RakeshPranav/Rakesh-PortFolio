import { Icon } from "./Icons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >


      {/* ── Two-column layout ── */}
      <div className="relative max-w-5xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-16">

        {/* ── LEFT: Profile Image ── */}
        <div
          className="shrink-0 flex items-center justify-center"
          style={{ animation: "fadeSlideLeft 0.8s 0.1s ease both" }}
        >
          {/* Outer decorative ring */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-indigo-200 via-violet-100 to-purple-200 blur-md scale-105 opacity-70" />
            {/* Profile image container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-slate-100 ring-2 ring-indigo-100">
              <img
                src="/profile.png"
                alt="Rakesh Pranav"
                className="w-full h-full object-cover rounded-full shadow-2xl"
              />
            </div>
            {/* Available badge pinned to image */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-100 bg-white text-indigo-700 text-[11px] font-semibold tracking-wide shadow-md whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              Available for hire
            </div>
          </div>
        </div>

        {/* ── RIGHT: Hero Content ── */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">

          {/* Name */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none mb-5"
            style={{ animation: "fadeSlideDown 0.7s 0.2s ease both" }}
          >
            Rakesh
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-violet-600 to-purple-600">
              Pranav K S
            </span>
          </h1>

          {/* Tagline */}
          <p
            className="text-sm md:text-base text-slate-400 font-semibold mb-4 tracking-widest uppercase"
            style={{ animation: "fadeSlideDown 0.7s 0.3s ease both" }}
          >
            Entry-Level Software Engineer &nbsp;·&nbsp; Java &nbsp;·&nbsp; Cloud &nbsp;·&nbsp; AI/ML
          </p>

          {/* Divider */}
          <div
            className="w-12 h-0.5 bg-indigo-400 mb-5 rounded-full"
            style={{ animation: "fadeSlideDown 0.7s 0.35s ease both" }}
          />

          {/* Intro */}
          <p
            className="text-sm md:text-base text-slate-300 max-w-lg mb-10 leading-relaxed"
            style={{ animation: "fadeSlideDown 0.7s 0.4s ease both" }}
          >
            Building scalable software systems and deploying cloud-native solutions.
            Passionate about clean code, intelligent systems, and elegant architecture.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap items-center justify-center md:justify-start gap-3"
            style={{ animation: "fadeSlideDown 0.7s 0.5s ease both" }}
          >
            <a
              href="/Rakesh-CV.pdf"
              download="Rakesh-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-800 text-sm font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-black/20"
            >
              <Icon.Download /> Resume
            </a>
            <a
              href="https://github.com/RakeshPranav"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-600 bg-slate-800 text-slate-200 text-sm font-semibold hover:border-slate-400 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Icon.Github /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rakesh-pranav"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-blue-900 bg-blue-950/30 text-blue-400 text-sm font-semibold hover:border-blue-700 hover:text-blue-300 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Icon.Linkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>


    </section>
  );
}
