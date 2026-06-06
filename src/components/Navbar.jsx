import { useState, useEffect } from "react";
import { Icon } from "./Icons";
import { NAV_LINKS } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex items-center ${
          scrolled
            ? "top-4 w-[90%] max-w-[800px] h-14 px-6 md:px-8 bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 rounded-full"
            : "top-0 w-full max-w-6xl h-24 px-6 bg-transparent border-transparent rounded-none"
        }`}
      >
        <div className="flex-1 flex justify-start items-center">
          <span className="font-black text-xl tracking-tight text-white shrink-0">
            RP<span className="text-indigo-600">.</span>
          </span>
        </div>
        <ul className="hidden md:flex items-center justify-center gap-8 shrink-0">
          {NAV_LINKS.map((l) => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                className="relative text-sm text-slate-300 hover:text-white font-medium transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 hover:after:w-full after:bg-white after:transition-all after:duration-300"
              >
                {l}
              </button>
            </li>
          ))}
        </ul>
        {/* Right Action Column */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <button
            onClick={() => scrollTo("Contact")}
            className="hidden md:inline-flex px-5 py-2 text-sm font-bold text-slate-900 bg-white rounded-full hover:bg-slate-100 hover:-translate-y-0.5 transition-all shadow-[0_0_15px_-3px_rgba(255,255,255,0.4)]"
          >
            Contact
          </button>
          
          <button
            className="md:hidden text-slate-200 shrink-0"
            onClick={() => setOpen((p) => !p)}
          >
            {open ? <Icon.X /> : <Icon.Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {NAV_LINKS.map((l) => (
          <button
            key={l}
            onClick={() => scrollTo(l)}
            className="text-3xl font-black text-white hover:text-indigo-400 transition-colors"
          >
            {l}
          </button>
        ))}
        {/* Mobile Contact Button */}
        <button
          onClick={() => scrollTo("Contact")}
          className="mt-6 px-10 py-4 text-2xl font-black text-slate-900 bg-white rounded-full hover:bg-slate-100 transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)]"
        >
          Contact
        </button>
      </div>
    </>
  );
}
