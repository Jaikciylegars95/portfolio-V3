import { motion } from "motion/react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profileImage from "../../imports/image-0.png";

export function HeroSection() {
  const codeSnippet = `const developer = {
  name: "Jacky Heriniaina",
  role: "Développeur Full Stack",
  skills: ["React", "Laravel", "Flutter", "Node.js"],
  passion: "Créer des solutions innovantes"
};`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Glowing orb effect */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Layout responsive avec photo à côté sur mobile */}
        <div className="flex flex-col-reverse md:flex-row md:items-center gap-8 lg:gap-12">
          {/* Photo - Sur mobile elle est en haut à gauche */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0"
          >
            <div className="relative group w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64">
              {/* Glowing circle behind */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

              {/* Animated border circles */}
              <motion.div
                className="absolute inset-0 border-2 border-blue-500/50 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-1 border-2 border-cyan-500/30 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />

              {/* Photo container */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-2 md:border-4 border-gray-800 shadow-2xl">
                <motion.img
                  src={profileImage}
                  alt="RANDRIAMANANTENA Jacky Heriniaina"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6 md:space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-blue-400 font-mono mb-2 md:mb-4 text-sm md:text-base"
              >
{`<Bonjour, je suis />`}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 md:mb-4"
              >
                <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                  RANDRIAMANANTENA
                </span>
                <br />
                <span className="text-blue-400">Jacky Heriniaina</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 font-mono"
              >
                Développeur Full Stack & Mobile
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-base md:text-lg text-gray-300 max-w-xl"
            >
              Passionné par la création d'applications web et mobile innovantes.
              Spécialisé en React, Laravel, Flutter et Node.js.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
            >
              <a
                href="mailto:jackyheriniaina02@gmail.com"
                className="px-6 md:px-8 py-3 md:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-center text-sm md:text-base"
              >
                Me contacter
              </a>
              <a
                href="#cv"
                download
                className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <Download className="w-4 h-4 md:w-5 md:h-5" />
                Télécharger CV
              </a>
              <a
                href="#projets"
                className="px-6 md:px-8 py-3 md:py-4 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors duration-200 text-center text-sm md:text-base"
              >
                Mes projets
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex gap-3 md:gap-4"
            >
              <a
                href="https://github.com/Jaikciylegars95"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 md:p-3 border border-gray-700 hover:border-blue-500 rounded-lg transition-colors duration-200"
              >
                <Github className="w-5 h-5 md:w-6 md:h-6 text-gray-400 hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 md:p-3 border border-gray-700 hover:border-blue-500 rounded-lg transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-gray-400 hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="mailto:jackyheriniaina02@gmail.com"
                className="p-2 md:p-3 border border-gray-700 hover:border-blue-500 rounded-lg transition-colors duration-200"
              >
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-gray-400 hover:text-blue-400 transition-colors" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - Indique à l'utilisateur de faire défiler pour voir plus de contenu */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => document.getElementById("projets")?.scrollIntoView({ behavior: "smooth" })}
      >
        <div className="w-6 h-10 border-2 border-blue-500 rounded-full flex items-start justify-center p-2 hover:border-cyan-400 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
          <motion.div
            className="w-1.5 h-1.5 bg-blue-500 rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

