import { motion } from "framer-motion"

export default function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-gray-900 p-6 rounded-xl max-w-lg w-full"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      >
        <h2 className="text-2xl font-bold text-indigo-400">
          {project.title}
        </h2>
        <p className="mt-4 text-gray-300">{project.desc}</p>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            className="inline-block mt-4 text-indigo-400 underline"
          >
            GitHub →
          </a>
        )}

        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-indigo-600 rounded"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  )
}
