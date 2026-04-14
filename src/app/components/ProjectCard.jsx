import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

export function ProjectCard({ title, description, image, tags, githubUrl, liveUrl, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
      whileHover={{ y: -10 }}
      className="group relative h-full"
    >
      <div className="relative overflow-hidden rounded-xl md:rounded-2xl bg-gray-900 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col">
        {/* Image */}
        <div className="relative h-48 md:h-64 overflow-hidden flex-shrink-0">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60" />
        </div>

        {/* Content */}
        <div className="p-4 md:p-6 space-y-3 md:space-y-4 flex-1 flex flex-col">
          <h3 className="text-xl md:text-2xl text-white group-hover:text-blue-400 transition-colors duration-200">
            {title}
          </h3>

          <p className="text-sm md:text-base text-gray-400 leading-relaxed flex-1">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 md:px-3 py-1 text-xs md:text-sm bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 font-mono"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-2 md:pt-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Github className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm">Code</span>
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm">Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
