import Head from "next/head";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ================= NAVBAR ================= */
const Navbar = ({ setIsNavOpen }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setScrollProgress((window.scrollY / scrollHeight) * 100);
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-[100] px-6 py-6 flex justify-center">
      <div className="w-full max-w-5xl bg-[#0b0f1a]/80 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-3 flex justify-between items-center shadow-2xl relative overflow-hidden">
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-violet-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-500">
            ⚡
          </div>
          <span className="font-bold text-white uppercase text-md">
            Rakesh G
          </span>
        </div>

        <div className="hidden md:flex gap-6 text-[10px] font-bold uppercase text-slate-500">
          {["about", "skills", "experience", "projects", "contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item}`}
                className="hover:text-white transition-colors"
              >
                {item}
              </a>
            )
          )}
        </div>

        <button
          onClick={() => setIsNavOpen(true)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

/* ================= MAIN ================= */
export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Stock Market Prediction (LSTM)",
      tech: ["Python", "LSTM", "TensorFlow"],
      desc: "Designed and trained LSTM models for time series forecasting of stock prices using historical market data.",
    },
    {
      title: "Neural Pilot – Hill Climb AI",
      tech: ["Python", "Deep RL", "TensorFlow"],
      desc: "Developed a Deep Reinforcement Learning agent for a physics-based vehicle control problem.",
    },
    {
      title: "Fake Product Review Detection",
      tech: ["NLP", "Python", "ML"],
      desc: "Engineered a classification model to detect fraudulent reviews using preprocessing and feature extraction.",
    },
  ];

  return (
    <>
      <Head>
        <title>Rakesh G | Data Science Portfolio</title>
        <meta
          name="description"
          content="Rakesh G – Data Science Portfolio specializing in Machine Learning, Deep Learning, NLP and AI systems."
        />
        <meta
          name="keywords"
          content="Rakesh G, Data Science, Machine Learning, AI, Portfolio"
        />
        <meta name="author" content="Rakesh G" />
      </Head>

      <div className="min-h-screen bg-[#030712] text-slate-200 font-sans overflow-x-hidden">

        <Navbar />

        {/* HERO */}
        <section className="pt-64 pb-32 px-6 text-center relative">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[120px] -z-10" />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[9rem] font-extrabold tracking-tight text-white uppercase"
          >
            Rakesh <span className="text-violet-500">G</span>
          </motion.h1>

          <p className="mt-8 max-w-2xl mx-auto text-slate-400 text-xl italic">
            Bridging mathematical theory and intelligent systems.
          </p>

          <div className="mt-12 flex justify-center gap-6 flex-wrap">
            <a
              href="#projects"
              className="px-10 py-4 bg-white text-black font-bold rounded-2xl hover:bg-violet-500 hover:text-white transition-all uppercase text-xs tracking-widest"
            >
              Explore Work
            </a>

            <a
              href="/resume.pdf"
              download="Rakesh_G_Resume.pdf"
              className="px-10 py-4 border border-white/10 rounded-2xl font-bold hover:bg-white/5 transition-all uppercase text-xs tracking-widest"
            >
              Download CV
            </a>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5"
        >
          <h2 className="text-5xl font-extrabold mb-16 text-white uppercase">
            Featured <span className="text-violet-500">Work</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, i) => (
              <div
                key={i}
                onClick={() => setSelectedProject(proj)}
                className="p-10 bg-[#0b0f1a] border border-white/5 rounded-3xl cursor-pointer hover:border-violet-500/50 transition-all shadow-xl"
              >
                <div className="flex flex-wrap gap-2 mb-6 uppercase tracking-widest">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-bold px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h4 className="text-2xl font-extrabold text-white uppercase">
                  {proj.title}
                </h4>
              </div>
            ))}
          </div>
        </section>

        {/* MODAL */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/95 backdrop-blur-md"
              />

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative bg-[#0b0f1a] border border-white/10 p-12 rounded-3xl max-w-2xl w-full text-white shadow-2xl text-center"
              >
                <h3 className="text-4xl font-black text-violet-400 mb-6 uppercase">
                  {selectedProject.title}
                </h3>

                <div className="flex justify-center flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-violet-500/10 text-violet-400 rounded-full text-xs uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-slate-400 leading-relaxed text-lg mb-8">
                  {selectedProject.desc}
                </p>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="py-3 px-8 bg-white/5 border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all uppercase text-xs tracking-widest"
                >
                  Close
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <footer className="py-10 text-center text-slate-600 text-xs tracking-widest border-t border-white/5 uppercase">
          © 2026 RAKESH G
        </footer>
      </div>
    </>
  );
}
