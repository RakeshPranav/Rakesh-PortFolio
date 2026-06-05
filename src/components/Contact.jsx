import { useState } from "react";
import { FadeIn, SectionLabel, SectionHeading } from "./Shared";
import { Icon } from "./Icons";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => { setStatus("sent"); setForm({ name: "", email: "", message: "" }); }, 1200);
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <SectionLabel>Get In Touch</SectionLabel>
          <SectionHeading>Contact</SectionHeading>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: info */}
          <FadeIn>
            <p className="text-slate-300 text-base leading-relaxed mb-10">
              I'm actively seeking full-time and internship opportunities. Whether you have a project in mind
              or just want to connect — my inbox is open.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              <a
                href="mailto:pranav.sadhasivam@gmail.com"
                className="inline-flex items-center gap-3 text-slate-200 hover:text-indigo-400 font-medium text-sm transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-slate-700 flex items-center justify-center">
                  <Icon.Mail />
                </div>
                pranav.sadhasivam@gmail.com
              </a>
            </div>

            <div className="flex gap-3">
              {[
                { href: "https://github.com/RakeshPranav", Icon: Icon.Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/rakesh-pranav", Icon: Icon.Linkedin, label: "LinkedIn" },
                { href: "https://leetcode.com/u/Rakesh_Pranav/", Icon: Icon.Leetcode, label: "LeetCode" },
                { href: "https://www.hackerrank.com/profile/pranav_sadhasiv1", Icon: Icon.Hackerrank, label: "HackerRank" },
              ].map(({ href, Icon: I, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-xl border border-slate-600/40 bg-slate-800/20 backdrop-blur-sm flex items-center justify-center text-slate-300 hover:border-indigo-400/60 hover:text-white hover:bg-indigo-500/10 transition-all duration-300 hover:scale-105 active:scale-95"
                  title={label}
                >
                  <I />
                </a>
              ))}
            </div>
          </FadeIn>

          {/* Right: form */}
          <FadeIn delay={100}>
            <div className="border border-slate-600/40 rounded-2xl p-8 bg-slate-800/20 backdrop-blur-md">
              {status === "sent" ? (
                <div className="text-center py-10">
                  <div className="text-5xl mb-4">✉️</div>
                  <div className="font-bold text-white text-lg mb-2">Message sent!</div>
                  <div className="text-slate-400 text-sm">I'll get back to you soon.</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                      className="w-full border border-slate-600/40 bg-slate-800/30 backdrop-blur-sm rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                      className="w-full border border-slate-700 bg-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                      className="w-full border border-slate-600/40 bg-slate-800/30 backdrop-blur-sm rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                      placeholder="What's on your mind?"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-3.5 bg-white text-slate-800 text-sm font-bold rounded-xl hover:bg-slate-100 transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending…" : "Send Message →"}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
