import { motion } from "motion/react";
import { Code2, Database, Globe, Server, Smartphone, Wrench } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: Globe,
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]
  },
  {
    category: "Backend",
    icon: Server,
    items: ["PHP", "Laravel", "Node.js"]
  },
  {
    category: "Mobile",
    icon: Smartphone,
    items: ["Flutter", "React Native"]
  },
  {
    category: "Database",
    icon: Database,
    items: ["MySQL", "SQLite"]
  },
  {
    category: "Systèmes",
    icon: Wrench,
    items: ["Windows", "Linux", "Maintenance"]
  },
  {
    category: "Autres",
    icon: Code2,
    items: ["Réseaux", "Sécurité informatique", "Git"]
  }
];

export function SkillsSection() {
  return (
    <section id="competences" className="relative py-20 md:py-32 bg-black">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Compétences Techniques
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            Technologies et outils que je maîtrise
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 120 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl md:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="p-2 md:p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                    </div>
                    <h3 className="text-lg md:text-xl text-white">
                      {skill.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-2 md:px-3 py-1 md:py-1.5 text-xs md:text-sm bg-gray-800 text-gray-300 rounded-lg border border-gray-700 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-200 font-mono"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
