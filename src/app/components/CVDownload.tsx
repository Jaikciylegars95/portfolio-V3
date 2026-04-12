import { motion } from "motion/react";
import { Download } from "lucide-react";

export function CVDownload() {
  const downloadCV = () => {
    // Créer le contenu du CV en HTML
    const cvContent = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV - RANDRIAMANANTENA JACKY HERINIAINA</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 40px 20px; }
        h1 { color: #2563eb; font-size: 28px; margin-bottom: 5px; }
        h2 { color: #1e40af; font-size: 20px; margin-top: 25px; margin-bottom: 15px; border-bottom: 2px solid #2563eb; padding-bottom: 5px; }
        h3 { color: #1e40af; font-size: 16px; margin-top: 15px; margin-bottom: 5px; }
        .header { text-align: center; margin-bottom: 30px; }
        .contact-info { text-align: center; color: #666; margin-bottom: 20px; font-size: 14px; }
        .section { margin-bottom: 25px; }
        .job { margin-bottom: 15px; }
        .job-title { font-weight: bold; color: #1e40af; }
        .company { font-style: italic; color: #666; }
        .date { color: #999; font-size: 14px; }
        ul { margin-left: 20px; margin-top: 5px; }
        .skills { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px; }
        .skill { background: #e0f2fe; color: #0369a1; padding: 5px 15px; border-radius: 20px; font-size: 14px; }
        .profile { background: #f0f9ff; padding: 15px; border-left: 4px solid #2563eb; margin-bottom: 20px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>RANDRIAMANANTENA JACKY HERINIAINA</h1>
        <p style="font-size: 18px; color: #2563eb; margin-top: 5px;">Technicien Informatique | Développeur d'Applications</p>
    </div>

    <div class="contact-info">
        <p>Lot II L 18 Ter Andravoahangy Est, Antananarivo, Madagascar</p>
        <p>+261 34 86 985 24 | jackyheriniaina02@gmail.com | jacky-heriniaina.vercel.app</p>
    </div>

    <div class="section profile">
        <h2>Profil professionnel</h2>
        <p>Passionné et créatif, apte à travailler en équipe avec une bonne aisance relationnelle. Souhaite mettre en œuvre des compétences en développement et création d'applications web afin de contribuer au rayonnement et au développement d'une entreprise innovante.</p>
    </div>

    <div class="section">
        <h2>Compétences techniques</h2>
        <p><strong>Langages :</strong> HTML, CSS, PHP, JavaScript</p>
        <p><strong>Frameworks :</strong> Laravel, React, Node.js, Flutter</p>
        <p><strong>Bases de données :</strong> MySQL, SQLite</p>
        <p><strong>Systèmes d'exploitation :</strong> Windows, Linux</p>
        <p><strong>Autres :</strong> Réseaux et sécurité informatique, Maintenance matériel et logiciel</p>
    </div>

    <div class="section">
        <h2>Formation</h2>
        <div class="job">
            <p class="job-title">Licence en Informatique</p>
            <p class="company">Oniversity FJKM Ravelojaona Ampandrana</p>
            <p class="date">2025</p>
        </div>
    </div>

    <div class="section">
        <h2>Expériences professionnelles</h2>

        <div class="job">
            <p class="job-title">Stagiaire Développeur d'Applications</p>
            <p class="company">Entreprise PixelVault, Nanisana</p>
            <p class="date">2025</p>
            <p>Stage de fin d'études de 3 mois en développement d'applications web.</p>
        </div>

        <div class="job">
            <p class="job-title">Stagiaire en Informatique</p>
            <p class="company">Université ESFPB Androndra Ampamantanana</p>
            <p class="date">2024</p>
            <p>Stage d'apprentissage de 3 mois en maintenance et support informatique.</p>
        </div>

        <div class="job">
            <p class="job-title">Conseiller client – Service technique</p>
            <p class="company">Teleperformance, Ankorondrano</p>
            <p class="date">2021 – 2022</p>
            <p>Support technique et dépannage du service mobile.</p>
        </div>

        <div class="job">
            <p class="job-title">Conseiller client</p>
            <p class="company">Konecta, Ivandry</p>
            <p class="date">2020 – 2021</p>
            <p>Assistance technique et dépannage de réseau à distance. Expert métier et agent de réitération d'appel.</p>
        </div>

        <div class="job">
            <p class="job-title">Assistant formateur</p>
            <p class="company">Konecta, Ivandry</p>
            <p class="date">2019 – 2020</p>
            <p>Suivi du déroulement de la formation des nouvelles recrues. Responsable et tuteur pendant la phase d'apprentissage.</p>
        </div>
    </div>

    <div class="section">
        <h2>Réalisations personnelles</h2>

        <div class="job">
            <p class="job-title">Application Web E-Assist</p>
            <p>Application de gestion de tâches automatisée via un tableau Kanban, développée avec React, Node.js et MySQL.</p>
            <p style="color: #2563eb; margin-top: 5px;">GitHub: Jaikciylegars95/E-ASSIST-V3</p>
        </div>

        <div class="job">
            <p class="job-title">Application mobile E-Hira</p>
            <p>Application multiplateforme de gestion de partitions musicales, développée avec Flutter et Laravel.</p>
            <p style="color: #2563eb; margin-top: 5px;">GitHub: Jaikciylegars95/E-Hira</p>
        </div>

        <div class="job">
            <p class="job-title">Portfolio personnel</p>
            <p>Développement d'un site statique avec JavaScript et React pour un design moderne et épuré.</p>
            <p style="color: #2563eb; margin-top: 5px;">jacky-heriniaina.vercel.app</p>
        </div>

        <div class="job">
            <p class="job-title">Projet Excel automatisé</p>
            <p>Conception d'un système de relevé de notes automatisé avec les fonctionnalités avancées de Microsoft Excel.</p>
        </div>
    </div>

    <div class="section">
        <h2>Langues</h2>
        <p><strong>Français</strong> – Courant</p>
        <p><strong>Anglais</strong> – Intermédiaire</p>
        <p><strong>Allemand</strong> – Notions</p>
    </div>

    <div class="section">
        <h2>Centres d'intérêt</h2>
        <p>Développement web et mobile, Nouvelles technologies, Musique et création numérique</p>
    </div>
</body>
</html>
    `;

    // Créer un blob et télécharger
    const blob = new Blob([cvContent], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'CV_RANDRIAMANANTENA_Jacky_Heriniaina.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section id="cv" className="relative py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Particules flottantes */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6"
        >
          Téléchargez mon CV
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg text-gray-400 mb-6 md:mb-8 px-4"
        >
          Retrouvez toutes mes expériences, compétences et réalisations dans mon CV détaillé
        </motion.p>
        <motion.button
          onClick={downloadCV}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex items-center gap-2 md:gap-3 px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 hover:from-blue-700 hover:via-cyan-700 hover:to-purple-700 text-white rounded-xl transition-all duration-300 shadow-xl shadow-blue-500/40 hover:shadow-2xl hover:shadow-cyan-500/50 text-base md:text-lg font-bold overflow-hidden"
        >
          <Download className="w-5 h-5 md:w-6 md:h-6 relative z-10 group-hover:animate-bounce" />
          <span className="relative z-10">Télécharger mon CV</span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000" />
        </motion.button>
      </div>
    </section>
  );
}
