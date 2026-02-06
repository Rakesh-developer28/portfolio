import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Custom Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl tracking-tighter uppercase">RAKESH G</h1>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-indigo-400 transition">About</a>
          <a href="#education" className="hover:text-indigo-400 transition">Education</a>
          <a href="#skills" className="hover:text-indigo-400 transition">Skills</a>
          <a href="#experience" className="hover:text-indigo-400 transition">Experience</a>
          <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl text-white">
          {isOpen ? "✕" : "☰"}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-950 border-b border-gray-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 text-center text-gray-300">
              <a href="#about" onClick={() => setIsOpen(false)}>About</a>
              <a href="#education" onClick={() => setIsOpen(false)}>Education</a>
              <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
              <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
              <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ProjectModal = ({ project, onClose }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
      className="absolute inset-0 bg-black/90 backdrop-blur-sm"
    />
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="relative bg-gray-900 border border-gray-700 p-8 rounded-3xl max-w-lg w-full shadow-2xl"
    >
      <h3 className="text-3xl font-bold text-indigo-400">{project.title}</h3>
      <p className="mt-6 text-gray-300 leading-relaxed">{project.desc}</p>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-indigo-400 underline">
          View Repository on GitHub →
        </a>
      )}
      <button onClick={onClose} className="mt-8 w-full py-3 bg-indigo-600 rounded-xl font-bold hover:bg-indigo-700 transition">
        Close Details
      </button>
    </motion.div>
  </div>
);

// --- Main Page ---

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  const skills = [
    { name: "Python", level: 90 },
    { name: "SQL", level: 85 },
    { name: "Machine Learning", level: 80 },
    { name: "Deep Learning (LSTM)", level: 75 },
    { name: "Data Visualization", level: 85 },
  ];

  const projects = [
    {
      title: "Stock Market Prediction (LSTM)",
      tech: ["Python", "LSTM", "Deep Learning"],
      desc: "Designed and trained LSTM models for time series forecasting of stock prices using historical market data. Implemented data preprocessing, feature engineering, and model tuning to improve prediction accuracy.",
      link: "https://github.com/Rakesh-developer28/stock_prediction"
    },
    {
      title: "Fake Product Review Detection",
      tech: ["NLP", "Python", "ML"],
      desc: "Developed a machine learning model to classify product reviews as real or fake using NLP techniques for text preprocessing and feature extraction. Trained and evaluated models to improve detection accuracy."
    },
    {
      title: "Neural Pilot – Hill Climb AI",
      tech: ["Python", "TensorFlow", "Deep Reinforcement Learning"],
      desc: "Developed a DRL agent for a physics-based control problem using TensorFlow, Pygame, and Pymunk.",
      link: "https://github.com/Rakesh-developer28/Neural-Pilot-Hill-Climb-AI"
    },
    {
       title: "Finance Tracker",
       tech: ["Python", "Flask", "SQLite", "Chart.js"],
       desc: "Personal finance tracker mini-project built using Flask, SQLite, and Chart.js.",
       link: "https://github.com/Rakesh-developer28/finance_tracker"
    }
  ];

  const education = [
    {
      degree: "Master of Science in Data Science",
      school: "Periyar Maniammai Institute of Science & Technology",
      date: "07/2025 – Present",
      location: "Thanjavur, Tamil Nadu",
      status: "Current"
    },
    {
      degree: "Bachelor of Science in Data Science",
      school: "Periyar Maniammai Institute of Science & Technology",
      date: "08/2022 – 05/2025",
      location: "Thanjavur, Tamil Nadu",
      grade: "CGPA: 7.51 / 10.0",
      status: "Completed"
    }
  ];

  const experience = [
    {
      role: "Data Analyst Intern",
      company: "Tech Vaseegrah",
      date: "07/2024 – 08/2024",
      points: [
        "Analyzed and visualized business data using Python, Excel, and SQL.",
        "Built a real-world billing and dashboard web application using Flask.",
        "Created interactive dashboards and reports to enhance decision-making speed."
      ]
    },
    {
      role: "AI & ML Trainee",
      company: "Rexroth Bosch Group",
      date: "Dec 2024 – Jan 2025",
      points: [
        "Intensive training on industrial AI applications.",
        "Worked with real-world sensor datasets to build predictive ML models.",
        "Applied deep learning concepts to manufacturing use cases."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-indigo-500">
      <Navbar />

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent leading-tight">
            AI • ML • Data Science
          </h1>
          <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed italic">
            "Transforming complex data into intelligent solutions."
          </p>
          <p className="mt-4 text-gray-300 font-medium tracking-wide">
            RAKESH G • M.Sc. Data Science Student
          </p>
          <div className="mt-10 flex justify-center gap-6 flex-wrap">
            <a href="#projects" className="px-8 py-3 bg-indigo-600 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/20">View Projects</a>
            <a href="resume.pdf" download className="px-8 py-3 border border-gray-700 rounded-xl font-bold hover:border-indigo-500 transition hover:bg-gray-900 text-white">Download Resume</a>
          </div>
        </motion.div>
      </section>

      {/* EXPANDED SUMMARY */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-indigo-500 pl-4 text-white">Professional Summary</h2>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I am a results-driven <span className="text-indigo-400 font-semibold">Data Science professional</span> currently pursuing my M.Sc. at <span className="text-indigo-400">Periyar Maniammai Institute of Science & Technology</span>. 
              My expertise lies at the intersection of <span className="text-indigo-400 font-semibold">Software Engineering</span> and <span className="text-indigo-400 font-semibold">Advanced Analytics</span>, where I transform complex, unstructured datasets into 
              actionable intelligence.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              With hands-on experience in building <span className="text-indigo-400 font-semibold">Deep Learning (LSTM)</span> architectures for stock forecasting and <span className="text-indigo-400 font-semibold">NLP models</span> for fraud detection, 
              I have demonstrated the ability to align technical innovation with business objectives. My background includes a successful tenure as a 
              <span className="text-indigo-400 font-semibold">Data Analyst Intern at Tech Vaseegrah</span>, where I developed full-stack billing solutions and interactive dashboards.
            </p>
          </div>
          
          <div className="bg-indigo-500/5 border border-indigo-500/20 p-8 rounded-3xl">
            <h4 className="text-white font-bold mb-4">Core Focus Areas</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                Predictive Modeling (LSTM & ML)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                Natural Language Processing (NLP)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                Full-Stack Data Web Apps (Flask)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                Time-Series & Sentiment Analysis
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* EDUCATION JOURNEY TIMELINE */}
      <section id="education" className="bg-gray-900/40 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 border-l-4 border-indigo-500 pl-4 text-white">Education Journey</h2>
          <div className="relative border-l-2 border-indigo-800 ml-4 space-y-16">
            {education.map((edu, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative pl-10">
                <div className={`absolute w-6 h-6 rounded-full -left-[13px] top-0 border-4 border-gray-950 ${edu.status === 'Current' ? 'bg-indigo-500 animate-pulse' : 'bg-indigo-900'}`}></div>
                <div className="p-8 bg-black/40 border border-gray-800 rounded-3xl shadow-xl hover:border-indigo-500/50 transition-colors">
                  <span className={`text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider ${edu.status === 'Current' ? 'bg-indigo-500/20 text-indigo-400' : 'bg-gray-800 text-gray-400'}`}>
                    {edu.status}
                  </span>
                  <h3 className="text-2xl font-bold text-indigo-400 mt-4">{edu.degree}</h3>
                  <p className="text-gray-300 font-medium mt-1">{edu.school}</p>
                  <p className="text-sm text-gray-500 mt-1">{edu.date} | {edu.location}</p>
                  {edu.grade && <p className="mt-4 text-indigo-300 font-bold text-lg">{edu.grade}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-12 border-l-4 border-indigo-500 pl-4 text-white">Technical Proficiency</h2>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            {skills.map((skill, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span>{skill.name}</span>
                  <span className="text-indigo-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="h-full bg-gradient-to-r from-indigo-600 to-purple-500"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-black/40 border border-gray-800 rounded-3xl">
              <h4 className="text-indigo-400 font-bold mb-3">Programming</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Python, SQL, JavaScript, HTML, CSS (Tailwind)</p>
            </div>
            <div className="p-6 bg-black/40 border border-gray-800 rounded-3xl">
              <h4 className="text-indigo-400 font-bold mb-3">AI / ML</h4>
              <p className="text-sm text-gray-400 leading-relaxed">ML, Deep Learning (LSTM), NLP, Model Evaluation</p>
            </div>
            <div className="p-6 bg-black/40 border border-gray-800 rounded-3xl">
              <h4 className="text-indigo-400 font-bold mb-3">Tools</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Pandas, NumPy, Matplotlib, Flask, SQLite, Git</p>
            </div>
            <div className="p-6 bg-black/40 border border-gray-800 rounded-3xl">
              <h4 className="text-indigo-400 font-bold mb-3">Soft Skills</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Problem-Solving, Communication, Adaptability</p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="bg-gray-900/40 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-white">Experience</h2>
          <div className="space-y-12">
            {experience.map((exp, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative border-l-2 border-indigo-500 pl-8">
                <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-[9px] top-1"></div>
                <h3 className="text-2xl font-bold text-indigo-400">{exp.role}</h3>
                <p className="text-gray-300 font-medium">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-4">{exp.date}</p>
                <ul className="space-y-2 text-gray-400">
                  {exp.points.map((p, j) => <li key={j}>• {p}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-12 text-white">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.div key={i} whileHover={{ y: -10, borderColor: "#6366f1" }} onClick={() => setSelectedProject(proj)} className="p-8 bg-gray-900/30 border border-gray-800 rounded-3xl cursor-pointer transition-all duration-300 group">
              <h4 className="text-2xl font-bold text-white group-hover:text-indigo-400">{proj.title}</h4>
              <div className="flex flex-wrap gap-2 mt-4">
                {proj.tech.map(t => <span key={t} className="text-[10px] uppercase tracking-widest bg-indigo-500/10 px-2 py-1 rounded text-indigo-300 font-bold border border-indigo-500/20">{t}</span>)}
              </div>
              <p className="mt-6 text-gray-500 text-sm italic">Details & GitHub →</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>

      <footer className="py-12 text-center text-gray-600 text-sm border-t border-gray-900">
        <p>📧 rakesh28.dev@gmail.com</p>
        <p className="mt-2 font-medium">© 2026 RAKESH G | Periyar Maniammai Institute of Science & Technology</p>
      </footer>
    </div>
  );
}