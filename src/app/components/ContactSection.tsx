import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-20 md:py-32 bg-black">
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

      {/* Glowing effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Travaillons Ensemble
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            Une idée de projet ? Discutons-en
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white mb-1">Email</h3>
                  <a
                    href="mailto:jackyheriniaina02@gmail.com"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    jackyheriniaina02@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white mb-1">Téléphone</h3>
                  <a
                    href="tel:+261348698524"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    +261 34 86 985 24
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white mb-1">Localisation</h3>
                  <p className="text-gray-400">
                    Lot II L 18 Ter Andravoahangy Est<br />
                    Antananarivo, Madagascar
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-gray-400 leading-relaxed">
                Je suis disponible pour des opportunités de développement web et mobile.
                N'hésitez pas à me contacter pour discuter de votre projet ou d'une collaboration.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl md:rounded-2xl blur-xl" />
              <form className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl md:rounded-2xl p-6 md:p-8 space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs md:text-sm text-gray-400 mb-2 font-mono">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm md:text-base focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm text-gray-400 mb-2 font-mono">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm md:text-base focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs md:text-sm text-gray-400 mb-2 font-mono">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm md:text-base focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Décrivez votre projet..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 md:px-8 py-3 md:py-4 bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base rounded-lg transition-colors duration-200"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
