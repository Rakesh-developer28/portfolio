import Head from "next/head";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  const projects = [
    {
      title: "Stock Market Prediction (LSTM)",
      tech: ["Python", "LSTM", "FinTech"],
      desc: "Built deep LSTM network to forecast stock prices using historical time-series data.",
      link: "https://github.com/Rakesh-developer28/stock_prediction"
    },
    {
      title: "Neural Pilot – Hill Climb AI",
      tech: ["Deep RL", "TensorFlow"],
      desc: "Reinforcement Learning agent trained using PPO for physics-based vehicle control.",
      link: "https://github.com/Rakesh-developer28/Neural-Pilot-Hill-Climb-AI"
    },
    {
      title: "NLP Menu vs Delivery Analysis",
      tech: ["NLP", "VADER"],
      desc: "Sentiment analysis differentiating food quality vs delivery service efficiency.",
      link: "https://github.com/Rakesh-developer28/menu-delivery-nlp-analysis"
    },
    {
      title: "Finance Tracker",
      tech: ["Flask", "SQLite"],
      desc: "Full-stack finance dashboard with ETL pipelines and analytics visualization.",
      link: "https://github.com/Rakesh-developer28/finance_tracker"
    }
  ];

  const Section = ({ children, id }) => (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-6 py-24"
    >
      {children}
    </motion.section>
  );

  return (
    <>
      <Head>
        <title>Rakesh G | Data Science Professional</title>
      </Head>

      <div className={`${darkMode ? "bg-[#020617] text-slate-300" : "bg-white text-slate-800"} min-h-screen transition-colors duration-500 overflow-x-hidden`}>

        {/* PREMIUM NAVBAR */}
        <nav className="fixed top-0 w-full z-50 flex justify-center px-6 py-6">
          <div className="w-full max-w-6xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl px-8 py-4 flex justify-between items-center shadow-xl">
            <span className="font-black uppercase tracking-tight">
              Portfolio
            </span>

            <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#education">Education</a>
              <a href="#projects">Projects</a>
              <a href="#certs">Certs</a>
              <a href="#contact">Contact</a>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition text-[10px]"
              >
                {darkMode ? "Light" : "Dark"}
              </button>
            </div>
          </div>
        </nav>

        {/* FLOATING GLOW */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-violet-600/20 blur-[140px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-indigo-600/20 blur-[140px] rounded-full animate-pulse" />
        </div>

        {/* HERO */}
        <section className="pt-44 pb-24 px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black"
          >
            <span className="bg-gradient-to-r from-white via-violet-400 to-violet-600 bg-clip-text text-transparent">
              Rakesh G
            </span>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.6 }}
              className="h-[3px] mt-4 mx-auto bg-gradient-to-r from-violet-500 to-violet-700 rounded-full"
            />
          </motion.h1>

          <p className="max-w-2xl mx-auto mt-8 text-lg opacity-80">
            Transforming complex data into intelligent solutions that drive real-world impact.
          </p>
        </section>

        {/* ABOUT */}
        <Section id="about">
          <h2 className="text-3xl font-black mb-6 uppercase">About Me</h2>
          <p className="opacity-80 leading-relaxed">
            M.Sc. Data Science student specializing in predictive modeling, Deep Learning,
            FinTech analytics, and Industrial AI solutions. Experienced in building
            LSTM networks, NLP pipelines, and reinforcement learning systems.
          </p>
        </Section>

        {/* SKILLS */}
        <Section id="skills">
          <h2 className="text-3xl font-black mb-12 uppercase">Core Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Languages", skills: ["Python", "R", "SQL", "JavaScript"] },
              { title: "AI / ML", skills: ["LSTM", "NLP", "TensorFlow", "Deep RL"] },
              { title: "Tools", skills: ["Power BI", "Excel", "Neo4j", "SQLite"] }
            ].map((cat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="font-bold mb-4 uppercase text-violet-400">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-violet-600/10 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* EDUCATION */}
        <Section id="education">
          <h2 className="text-3xl font-black mb-6 uppercase">Education</h2>
          <p className="mb-4"><strong>M.Sc. Data Science</strong> – PMIST (Present)</p>
          <p><strong>B.Sc. Data Science</strong> – PMIST | CGPA: 7.51 / 10</p>
        </Section>

        {/* PROJECTS */}
        <Section id="projects">
          <h2 className="text-3xl font-black mb-12 uppercase">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((proj, i) => (
              <div
                key={i}
                onClick={() => setSelectedProject(proj)}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500 cursor-pointer transition"
              >
                <h3 className="font-bold text-xl mb-4">{proj.title}</h3>
                <p className="opacity-80 text-sm">{proj.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* CERTIFICATIONS */}
        <Section id="certs">
          <h2 className="text-3xl font-black mb-8 uppercase">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <img src="/cert_snapshot_1.png" className="rounded-xl border border-white/10" />
            <img src="/cert_snapshot_2.png" className="rounded-xl border border-white/10" />
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact">
          <h2 className="text-2xl font-bold mb-6 uppercase">Get In Touch</h2>
          <div className="flex gap-6">
            <a href="mailto:rakesh28.dev@gmail.com">Email</a>
            <a href="https://linkedin.com/in/rakeshgdev" target="_blank">LinkedIn</a>
          </div>
        </Section>

        {/* MODAL */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/80">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="bg-[#0b0f1a] p-8 rounded-xl max-w-md text-center"
              >
                <h3 className="font-bold text-xl mb-4">{selectedProject.title}</h3>
                <p className="mb-6">{selectedProject.desc}</p>
                <a href={selectedProject.link} target="_blank" className="text-violet-400">
                  View Source
                </a>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </>
  );
}
