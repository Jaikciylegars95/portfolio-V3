import { motion } from "motion/react";
import { Award, BookOpen, Code2, GraduationCap, Mail, MapPin, Phone, Target, Zap } from "lucide-react";

const stats = [
  { 
    label: "Années d'apprentissage", 
    value: "2+", 
    icon: BookOpen 
  },
  { 
    label: "Projets personnels", 
    value: "8+", 
    icon: Code2 
  },
  { 
    label: "Technologies explorées", 
    value: "10+", 
    icon: Zap 
  },
  { 
    label: "Motivation", 
    value: "1000+", 
    icon: Target 
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Effet de fond animé */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px]"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            À Propos de Moi
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Jeune développeur passionné, en pleine phase d'apprentissage et de création
          </p>
        </motion.div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl md:rounded-2xl p-6 text-center hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                      <Icon className="w-8 h-8 text-blue-400" />
                    </div>
                  </div>
                  <motion.div
                    className="text-3xl md:text-4xl font-bold text-white mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-sm md:text-base text-gray-400">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Contenu principal */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Présentation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Qui suis-je ?
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Je suis un jeune développeur passionné par la création d'applications web et mobiles. 
                Actuellement en phase d'apprentissage intensif, je m'efforce de maîtriser les technologies modernes 
                pour construire des solutions utiles et intuitives.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Chaque projet que je réalise est une opportunité d'apprendre, d'expérimenter et de progresser. 
                Je suis motivé par l'idée de transformer des idées en produits concrets.
              </p>
            </div>

            {/* Citation */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative bg-gray-900/50 backdrop-blur-sm border-l-4 border-blue-500 rounded-r-2xl p-6"
            >
              <div className="absolute top-4 left-4 text-6xl text-blue-500/20">"</div>
              <p className="text-lg text-gray-300 italic pl-8">
                Le début d'un grand voyage commence toujours par un premier pas. 
                Je suis en train de faire ce premier pas avec passion.
              </p>
            </motion.div>
          </motion.div>

          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Contactez-moi
              </h3>

              <div className="space-y-4">
                <motion.a
                  href="mailto:jackyheriniaina02@gmail.com"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300 group"
                >
                  <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white font-medium">jackyheriniaina02@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+261348698524"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300 group"
                >
                  <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Téléphone</p>
                    <p className="text-white font-medium">+261 34 86 985 24</p>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700"
                >
                  <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Localisation</p>
                    <p className="text-white font-medium">Lot II L 18 Ter Andravoahangy Est</p>
                    <p className="text-gray-400 text-sm">Antananarivo, Madagascar</p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="mt-8 pt-8 border-t border-gray-700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-gray-400 text-sm mb-4">
                  Ouvert aux opportunités, collaborations et conseils
                </p>
                <a
                  href="mailto:jackyheriniaina02@gmail.com"
                  className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 hover:from-blue-700 hover:via-cyan-700 hover:to-blue-700 text-white rounded-xl transition-all duration-300 font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 overflow-hidden w-full justify-center"
                >
                  <Mail className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Me contacter</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}