import { useState, useEffect } from "react";
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
          <a href="#contact" className="hover:text-indigo-400 transition">Connect</a>
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
              <a href="#contact" onClick={() => setIsOpen(false)}>Connect</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const PortfolioBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! I'm Rakesh's AI assistant. Ask me about his projects, education, or skills!" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setTimeout(() => {
      let botResponse = "That's a great question! Rakesh is skilled in Python, ML, and NLP. Check his 'Projects' section for more details.";
      const query = input.toLowerCase();
      if (query.includes("project")) botResponse = "Rakesh has built an LSTM Stock Predictor, a Fake Review Detector, and an RL-based Hill Climb AI!";
      if (query.includes("education")) botResponse = "He is currently pursuing an M.Sc. in Data Science at Periyar Maniammai Institute of Science & Technology.";
      if (query.includes("intern") || query.includes("experience")) botResponse = "He interned as a Data Analyst at Tech Vaseegrah and trained with Rexroth Bosch Group.";
      setMessages((prev) => [...prev, { role: "bot", text: botResponse }]);
    }, 1000);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200]">
      <button onClick={() => setIsOpen(!isOpen)} className="bg-indigo-600 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-2xl hover:bg-indigo-700 transition-all hover:scale-110">
        {isOpen ? "✕" : "💬"}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, scale: 0.8, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.8, y: 20 }} className="absolute bottom-20 right-0 w-80 h-96 bg-gray-900 border border-gray-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-white">
            <div className="bg-indigo-600 p-4 font-bold text-center">Rakesh-Bot AI</div>
            <div className="flex-1 p-4 overflow-y-auto space-y-4 text-sm">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl ${m.role === "user" ? "bg-indigo-600" : "bg-gray-800 border border-gray-700 text-gray-300"}`}>{m.text}</div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSend} className="p-4 border-t border-gray-800 bg-gray-950 flex gap-2">
              <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask me anything..." className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 outline-none focus:border-indigo-500 text-xs" />
              <button type="submit" className="bg-indigo-600 px-3 py-2 rounded-lg text-xs font-bold">Send</button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProjectModal = ({ project, onClose }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative bg-gray-900 border border-gray-700 p-8 rounded-3xl max-w-lg w-full shadow-2xl text-white">
      <h3 className="text-3xl font-bold text-indigo-400">{project.title}</h3>
      <p className="mt-6 text-gray-300 leading-relaxed">{project.desc}</p>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-indigo-400 underline">View Repository on GitHub →</a>
      )}
      <button onClick={onClose} className="mt-8 w-full py-3 bg-indigo-600 rounded-xl font-bold hover:bg-indigo-700 transition">Close Details</button>
    </motion.div>
  </div>
);

// --- Main Page ---

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  const skills = [
    { name: "Python", level: 95 },
    { name: "SQL & Database (Neo4j)", level: 90 },
    { name: "Machine Learning (Scikit-learn)", level: 85 },
    { name: "Deep Learning (TensorFlow/LSTM)", level: 80 },
    { name: "Full Stack (Flask/Next.js)", level: 85 },
  ];

  const projects = [
    { title: "Stock Market Prediction (LSTM)", tech: ["Python", "LSTM", "Deep Learning"], desc: "Designed and trained LSTM models for time series forecasting of stock prices using historical market data. Implemented data preprocessing, feature engineering, and model tuning to improve prediction accuracy.", link: "https://github.com/Rakesh-developer28/stock_prediction" },
    { title: "Fake Product Review Detection", tech: ["NLP", "Python", "ML"], desc: "Developed a machine learning model to classify product reviews as real or fake using NLP techniques for text preprocessing and feature extraction." },
    { title: "Menu vs Delivery NLP Analysis", tech: ["Python", "NLP", "Analytics"], desc: "Analyzed food app reviews to compare menu quality vs delivery impact using sentiment analysis and keyword extraction.", link: "https://github.com/Rakesh-developer28/menu-delivery-nlp-analysis" },
    { title: "Neural Pilot – Hill Climb AI", tech: ["Python", "TensorFlow", "Deep RL"], desc: "Built a Deep Reinforcement Learning agent for a physics-based control problem using TensorFlow, Pygame, and Pymunk.", link: "https://github.com/Rakesh-developer28/Neural-Pilot-Hill-Climb-AI" },
    { title: "Finance Tracker", tech: ["Python", "Flask", "SQLite", "Chart.js"], desc: "Personal finance tracker mini-project using Flask, SQLite, and Chart.js for real-time visualization.", link: "https://github.com/Rakesh-developer28/finance_tracker" }
  ];

  const education = [
    { degree: "Master of Science in Data Science", school: "Periyar Maniammai Institute of Science & Technology", date: "07/2025 – Present", location: "Thanjavur, India", status: "Current" },
    { degree: "Bachelor of Science in Data Science", school: "Periyar Maniammai Institute of Science & Technology", date: "08/2022 – 05/2025", location: "Thanjavur, India", grade: "CGPA: 7.51 / 10.0", status: "Completed" }
  ];

  const experience = [
    { role: "Data Analyst Intern", company: "Tech Vaseegrah", date: "07/2024 – 08/2024", points: ["Analyzed and visualized business data using Python, Excel, and SQL.", "Built a real-world billing and dashboard web application using Flask.", "Integrated user authentication and billing modules with database connectivity."] },
    { role: "AI & ML Trainee", company: "Rexroth Bosch Group", date: "Dec 2024 – Jan 2025", points: ["Intensive training on industrial AI applications.", "Worked with real-world sensor datasets to build predictive ML models.", "Applied deep learning concepts to industrial manufacturing cases."] }
  ];

  const certifications = [
    "Data Analysis with Python (Pandas, NumPy, Matplotlib)",
    "Google Analytics for Advanced (Tracking & Segmentation)",
    "Hands-on Big Data Analysis & Data Science",
    "Technical Workshop: Neural Networks (Neurons to Networks)"
  ];

  const volunteering = [
    { 
      role: "Class Representative", 
      org: "Periyar Maniammai Institute of Science & Technology", 
      date: "07/2025 – Present", 
      points: [
        "Organized workshops, seminars, and technical events to enhance student skills.", 
        "Collaborated with the university technical team to improve internal software systems.", 
        "Promoted department growth through strategic planning and technical coordination."
      ] 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-indigo-500">
      <Navbar />
      <PortfolioBot />

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent leading-tight">AI • ML • Data Science</h1>
          <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed italic">"Transforming complex datasets into intelligent systems and actionable insights."</p>
          <p className="mt-4 text-gray-300 font-medium tracking-wide">RAKESH G • M.Sc. Data Science Student</p>
          <div className="mt-10 flex justify-center gap-6 flex-wrap">
            <a href="#projects" className="px-8 py-3 bg-indigo-600 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/20 text-white">View Projects</a>
            <a href="resume.pdf" download className="px-8 py-3 border border-gray-700 rounded-xl font-bold hover:border-indigo-500 transition hover:bg-gray-900 text-white">Download Resume</a>
          </div>
        </motion.div>
      </section>

      {/* SUMMARY */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-indigo-500 pl-4 text-white">Professional Summary</h2>
        <div className="grid lg:grid-cols-3 gap-12 text-gray-400 text-lg leading-relaxed">
          <div className="lg:col-span-2">
            <p className="mb-6">I am a skilled and detail-oriented <span className="text-indigo-400 font-semibold">Data Science fresher</span> currently pursuing an M.Sc. at <span className="text-indigo-400">Periyar Maniammai Institute of Science & Technology</span>. I have a proven track record of delivering real-world projects by developing solutions and analyzing complex datasets to create actionable insights.</p>
            <p>Adept at aligning technical expertise with business needs, I specialize in <span className="text-indigo-400">Deep Learning (LSTM)</span>, <span className="text-indigo-400">NLP</span>, and <span className="text-indigo-400">Reinforcement Learning</span>. I am eager to contribute innovative data-driven solutions to a dynamic organization.</p>
          </div>
          <div className="bg-indigo-500/5 border border-indigo-500/20 p-8 rounded-3xl h-fit">
            <h4 className="text-white font-bold mb-4">Core Focus Areas</h4>
            <ul className="space-y-3 text-sm">
              <li>• Predictive Modeling (LSTM)</li>
              <li>• Natural Language Processing</li>
              <li>• Deep Reinforcement Learning</li>
              <li>• Full-Stack Data Apps (Flask)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* EDUCATION JOURNEY */}
      <section id="education" className="bg-gray-900/40 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 border-l-4 border-indigo-500 pl-4 text-white">Education Journey</h2>
          <div className="relative border-l-2 border-indigo-800 ml-4 space-y-16">
            {education.map((edu, i) => (
              <motion.div key={i} className="relative pl-10" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className={`absolute w-6 h-6 rounded-full -left-[13px] top-0 border-4 border-gray-950 ${edu.status === 'Current' ? 'bg-indigo-500 animate-pulse' : 'bg-indigo-900'}`}></div>
                <div className="p-8 bg-black/40 border border-gray-800 rounded-3xl shadow-xl hover:border-indigo-500 transition-colors">
                  <span className="text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-400">{edu.status}</span>
                  <h3 className="text-2xl font-bold text-indigo-400 mt-4">{edu.degree}</h3>
                  <p className="text-gray-300 font-medium">{edu.school}</p>
                  <p className="text-sm text-gray-500">{edu.date} | {edu.location}</p>
                  {edu.grade && <p className="mt-4 text-indigo-300 font-bold text-lg">{edu.grade}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-12 border-l-4 border-indigo-500 pl-4 text-white">Technical Toolbox</h2>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            {skills.map((skill, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-sm font-medium"><span>{skill.name}</span><span className="text-indigo-400">{skill.level}%</span></div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1 }} className="h-full bg-gradient-to-r from-indigo-600 to-purple-500" />
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-black/40 border border-gray-800 rounded-3xl"><h4 className="text-indigo-400 font-bold mb-3">Programming</h4><p className="text-sm text-gray-400">Python, SQL, JavaScript, HTML, CSS (Tailwind)</p></div>
            <div className="p-6 bg-black/40 border border-gray-800 rounded-3xl"><h4 className="text-indigo-400 font-bold mb-3">Data & AI</h4><p className="text-sm text-gray-400">ML, NLP, LSTM, Neo4j, PowerBI, Excel</p></div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="bg-gray-900/40 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-white">Experience</h2>
          <div className="space-y-12">
            {experience.map((exp, i) => (
              <motion.div key={i} className="relative border-l-2 border-indigo-500 pl-8" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-[9px] top-1"></div>
                <h3 className="text-2xl font-bold text-indigo-400">{exp.role}</h3>
                <p className="text-gray-300 font-medium">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-4">{exp.date}</p>
                <ul className="space-y-2 text-gray-400">{exp.points.map((p, j) => <li key={j}>• {p}</li>)}</ul>
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
            <motion.div key={i} onClick={() => setSelectedProject(proj)} whileHover={{ y: -10 }} className="p-8 bg-gray-900/30 border border-gray-800 rounded-3xl cursor-pointer hover:border-indigo-500 transition-all group">
              <h4 className="text-2xl font-bold text-white group-hover:text-indigo-400 mb-4">{proj.title}</h4>
              <div className="flex flex-wrap gap-2">{proj.tech.map(t => <span key={t} className="text-[10px] uppercase tracking-widest bg-indigo-500/10 px-2 py-1 rounded text-indigo-300 font-bold border border-indigo-500/20">{t}</span>)}</div>
              <p className="mt-6 text-gray-500 text-sm italic group-hover:text-gray-400">View Detail & GitHub →</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS & VOLUNTEERING */}
      <section className="bg-gray-900/40 py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8 border-l-4 border-indigo-500 pl-4 text-white">Certifications</h2>
            <ul className="space-y-4">
              {certifications.map((c, i) => <li key={i} className="text-gray-400 bg-black/40 p-4 border border-gray-800 rounded-xl transition hover:border-indigo-500">• {c}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-8 border-l-4 border-indigo-500 pl-4 text-white">Leadership</h2>
            {volunteering.map((v, i) => (
              <div key={i} className="bg-black/40 p-8 border border-gray-800 rounded-3xl shadow-xl">
                <h3 className="text-xl font-bold text-indigo-400">{v.role}</h3>
                <p className="text-gray-500 text-sm mb-4">{v.org} | {v.date}</p>
                <ul className="space-y-2 text-gray-400 text-sm">{v.points.map((p, j) => <li key={j}>• {p}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONNECT */}
      <section id="contact" className="py-24 text-center">
        <h2 className="text-4xl font-bold mb-12 border-l-4 border-indigo-500 pl-4 inline-block text-white">Let's Connect</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <a href="mailto:rakesh28.dev@gmail.com" className="flex items-center gap-4 text-xl hover:text-indigo-400 transition bg-black/40 p-6 rounded-3xl border border-gray-800 w-full md:w-auto"><span className="p-3 bg-indigo-500/10 rounded-full text-indigo-500">📧</span> rakesh28.dev@gmail.com</a>
          <a href="https://www.linkedin.com/in/rakeshgdev" target="_blank" className="flex items-center gap-4 text-xl hover:text-indigo-400 transition bg-black/40 p-6 rounded-3xl border border-gray-800 w-full md:w-auto"><span className="p-3 bg-indigo-500/10 rounded-full text-indigo-500">🔗</span> LinkedIn Profile</a>
          <a href="https://github.com/Rakesh-developer28" target="_blank" className="flex items-center gap-4 text-xl hover:text-indigo-400 transition bg-black/40 p-6 rounded-3xl border border-gray-800 w-full md:w-auto"><span className="p-3 bg-indigo-500/10 rounded-full text-indigo-500">📁</span> GitHub Account</a>
        </div>
      </section>

      <AnimatePresence>{selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}</AnimatePresence>

      <footer className="py-12 text-center text-gray-600 text-sm border-t border-gray-900">
        <p className="font-medium uppercase tracking-widest tracking-[0.2em]">© 2026 RAKESH G | Periyar Maniammai Institute of Science & Technology</p>
      </footer>
    </div>
  );
}