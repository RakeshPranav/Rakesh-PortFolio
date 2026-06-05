import { Icon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-black text-lg text-white">
          RP<span className="text-indigo-500">.</span>
        </span>
        <span className="text-xs text-slate-500">
          © {new Date().getFullYear()} Rakesh Pranav K S · Coimbatore, TamilNadu, India
        </span>
        <div className="flex gap-3">
          {[
            { href: "https://github.com/RakeshPranav", Icon: Icon.Github },
            { href: "https://www.linkedin.com/in/rakesh-pranav", Icon: Icon.Linkedin },
            { href: "https://leetcode.com/u/Rakesh_Pranav/", Icon: Icon.Leetcode },
            { href: "https://www.hackerrank.com/profile/pranav_sadhasiv1", Icon: Icon.Hackerrank }
          ].map(({ href, Icon: I }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-white transition-colors"
            >
              <I />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
