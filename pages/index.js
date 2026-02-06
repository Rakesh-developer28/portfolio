import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Custom Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl tracking-tighter uppercase">Rakesh G</h1>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-indigo-400 transition">About</a>
          <a href="#experience" className="hover:text-indigo-400 transition">Experience</a>
          <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
          {isOpen ? "✕" : "☰"}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900 border-b border-gray-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 text-center">
              <a href="#about" onClick={() => setIsOpen(false)}>About</a>
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

  const projects = [
    {
      title: "Stock Market Prediction (LSTM)",
      tech: ["Python", "LSTM", "Deep Learning"],
      desc: "Designed and trained LSTM models for time series forecasting of stock prices using historical market data. Implemented data preprocessing, feature engineering, and model tuning to improve prediction accuracy. Created interactive visualizations to showcase trends, model performance, and future price forecasts.",
      link: "https://github.com/Rakesh-developer28/stock_prediction"
    },
    {
      title: "Fake Product Review Detection",
      tech: ["NLP", "Python", "ML"],
      desc: "Developed a machine learning model to classify product reviews as real or fake using review text, sentiment, rating, and verification status. Applied NLP techniques for text preprocessing and feature extraction."
    },
    {
      title: "Menu vs Delivery NLP Analysis",
      tech: ["Python", "NLP", "Data Analytics"],
      desc: "NLP analysis of food app reviews to compare menu quality vs delivery impact.",
      link: "https://github.com/Rakesh-developer28/menu-delivery-nlp-analysis"
    }
  ];

  const education = [
    {
      degree: "Master of Science in Data Science",
      school: "Periyar Maniammai Institute of Science & Technology", // Updated
      date: "07/2025 – Present",
      location: "Thanjavur, Tamil Nadu"
    },
    {
      degree: "Bachelor of Science in Data Science",
      school: "Periyar Maniammai Institute of Science & Technology", // Updated
      date: "08/2022 – 05/2025",
      location: "Thanjavur, Tamil Nadu",
      grade: "CGPA: 7.51 / 10.0"
    }
  ];

  const volunteering = {
    role: "Department Ambassador / Class Representative", // Combined roles
    organization: "Periyar Maniammai Institute of Science & Technology", // Updated
    date: "2024 – Present",
    points: [
      "Organized workshops, seminars, and tech events to enhance student skills.",
      "Collaborated with the university tech team to improve software systems.",
      "Promoted department growth through strategic planning and technical support."
    ]
  };

  const experience = [
    {
      role: "Data Analyst Intern",
      company: "Tech Vaseegrah",
      date: "07/2024 – 08/2024",
      points: [
        "Analyzed and visualized business data to support strategic decisions using Python, Excel, and SQL.",
        "Built a real-world billing and dashboard web application using Flask, improving workflow efficiency.",
        "Integrated user authentication, data visualization, and billing modules with database connectivity.",
        "Created interactive dashboards and reports for internal use, enhancing decision-making speed."
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
          <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Turning complex datasets into intelligent systems and actionable insights.
          </p>
          <p className="mt-4 text-gray-300 font-medium tracking-wide">
            RAKESH G • Data Science Student
          </p>
          <div className="mt-10 flex justify-center gap-6 flex-wrap">
            <a href="#projects" className="px-8 py-3 bg-indigo-600 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg">View Projects</a>
            <a href="resume.pdf" download className="px-8 py-3 border border-gray-700 rounded-xl font-bold hover:border-indigo-500 transition">Download Resume</a>
          </div>
        </motion.div>
      </section>

      {/* SUMMARY */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-indigo-500 pl-4">Professional Summary</h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-5xl">
          Skilled and detail-oriented fresher with experience in software development and data analytics. 
          Successfully delivered real-world projects by developing solutions and analyzing complex datasets to create actionable insights. 
          Adept at aligning technical expertise with business needs and eager to contribute innovative solutions in a dynamic organization.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="bg-gray-900/40 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Experience</h2>
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

      {/* PROJECTS SECTION */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10, borderColor: "#6366f1" }} 
              onClick={() => setSelectedProject(proj)}
              className="p-8 bg-gray-900/30 border border-gray-800 rounded-3xl cursor-pointer transition-all duration-300 group"
            >
              <h4 className="text-2xl font-bold text-white group-hover:text-indigo-400">{proj.title}</h4>
              <div className="flex flex-wrap gap-2 mt-4">
                {proj.tech.map(t => <span key={t} className="text-[10px] uppercase tracking-widest bg-indigo-500/10 px-2 py-1 rounded text-indigo-300 font-bold border border-indigo-500/20">{t}</span>)}
              </div>
              <p className="mt-6 text-gray-500 text-sm italic">Click to read more details →</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="bg-gray-900/40 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 border-l-4 border-indigo-500 pl-4">Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, i) => (
              <div key={i} className="p-8 bg-black/40 border border-gray-800 rounded-3xl">
                <h3 className="text-xl font-bold text-indigo-400">{edu.degree}</h3>
                <p className="text-gray-300 mt-2">{edu.school}</p>
                <p className="text-sm text-gray-500">{edu.date} | {edu.location}</p>
                {edu.grade && <p className="mt-4 text-indigo-300 font-bold">{edu.grade}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL OVERLAY */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>

      <footer className="py-12 text-center text-gray-600 text-sm border-t border-gray-900">
        <p>Email: rakesh28.dev@gmail.com | Phone: +91 9342717472</p>
        <p className="mt-2 font-medium">© 2026 RAKESH G | Data Science Student</p>
      </footer>
    </div>
  );
}