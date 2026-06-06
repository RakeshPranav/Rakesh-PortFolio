import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import LightPillar from "./components/LightPillar";

export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap');
        * { font-family: 'Manrope', sans-serif; }
        html { scroll-behavior: smooth; }
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #111827; }
        ::-webkit-scrollbar-thumb { background: #374151; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #6366f1; }
        .hidden-scrollbar::-webkit-scrollbar { display: none; }
        .hidden-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      <Cursor />
      <div className="fixed inset-0 z-[-1] bg-slate-950 overflow-hidden pointer-events-none">
        <LightPillar
          topColor="#928ea2"
          bottomColor="#417664"
          intensity={1.2}
          rotationSpeed={0.3}
          glowAmount={0.002}
          pillarWidth={3}
          pillarHeight={0.3}
          noiseIntensity={1.5}
          pillarRotation={57}
          interactive={false}
          mixBlendMode="screen"
          quality="high"
        />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}