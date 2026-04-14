import { HeroSection } from "./components/HeroSection.jsx";
import { ProjectCard } from "./components/ProjectCard.jsx";
import { SkillsSection } from "./components/SkillsSection.jsx";
import { AboutSection } from "./components/AboutSection.jsx";
import { CVDownload } from "./components/CVDownload.jsx";

// Import de tes vraies images
import eAssist from "../imports/e-assist.png";
import portfolio from "../imports/portfolio.png";
import eHira from "../imports/e-hira.png";

const projects = [
  {
    title: "E-Assist V3",
    description: "Application web de gestion de tâches automatisée via un tableau Kanban. Permet d'organiser les projets, suivre les tâches et améliorer la productivité de l'équipe.",
    image: eAssist,                    // ← Ton image réelle
    tags: ["React", "Node.js", "MySQL", "Kanban"],
    githubUrl: "https://github.com/Jaikciylegars95/E-ASSIST-V3",
    liveUrl: ""
  },
  {
    title: "E-Hira",
    description: "Application mobile multiplateforme de gestion de partitions musicales. Permet aux musiciens de stocker, organiser et consulter leurs partitions numériques facilement.",
    image: eHira,                      // ← Ton image réelle
    tags: ["Flutter", "Laravel", "SQLite", "MySQL"],
    githubUrl: "https://github.com/Jaikciylegars95/E-Hira",
    liveUrl: ""
  },
  {
    title: "Portfolio Personnel",
    description: "Site web personnel moderne et épuré développé avec React et Tailwind CSS. Design responsive avec animations fluides.",
    image: portfolio,                  // ← Ton image réelle
    tags: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Jaikciylegars95",
    liveUrl: "https://jacky-heriniaina.vercel.app"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <HeroSection />

      {/* Projects Section */}
      <section id="projets" className="relative py-20 md:py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Projets Récents
            </h2>
            <p className="text-lg md:text-xl text-gray-400">
              Quelques réalisations dont je suis fier
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                {...project} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>

      <SkillsSection />
      <CVDownload />
      <AboutSection />

      {/* Footer */}
      <footer className="relative border-t border-gray-800 py-8 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <p className="font-mono text-sm md:text-base">
            © 2026 RANDRIAMANANTENA Jacky Heriniaina. Développé avec React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
