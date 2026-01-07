import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { projects } from "./data/projects";
import TypeWriter from "./components/TypeWriter";
import { useTheme } from "./context/ThemeContext";
import ContactForm from "./components/ContactForm";
import SkillsSection from "./components/SkillsSection";

function App() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm z-50 transition-colors">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo with Orange Brackets */}
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              <span className="text-[#FF6B35]">&lt;</span>
              Adeniyi
              <span className="text-[#FF6B35]">/&gt;</span>
            </h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#projects"
                className="text-gray-600 dark:text-gray-300 hover:text-[#FF6B35] dark:hover:text-[#FF6B35] transition-colors"
              >
                Projects
              </a>
              <a
                href="#about"
                className="text-gray-600 dark:text-gray-300 hover:text-[#FF6B35] dark:hover:text-[#FF6B35] transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-600 dark:text-gray-300 hover:text-[#FF6B35] dark:hover:text-[#FF6B35] transition-colors"
              >
                Contact
              </a>

              {/* Dark Mode Toggle Button */}
              <button
                onClick={toggleDarkMode}
                className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110 active:scale-95"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </button>
            </div>

            {/* Mobile Menu Button & Dark Mode Toggle */}
            <div className="flex md:hidden items-center gap-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </button>

              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
              >
                <div className="px-6 py-4 space-y-4">
                  <a
                    href="#projects"
                    onClick={closeMobileMenu}
                    className="block text-gray-600 dark:text-gray-300 hover:text-[#FF6B35] dark:hover:text-[#FF6B35] transition-colors py-2"
                  >
                    Projects
                  </a>
                  <a
                    href="#about"
                    onClick={closeMobileMenu}
                    className="block text-gray-600 dark:text-gray-300 hover:text-[#FF6B35] dark:hover:text-[#FF6B35] transition-colors py-2"
                  >
                    About
                  </a>
                  <a
                    href="#contact"
                    onClick={closeMobileMenu}
                    className="block text-gray-600 dark:text-gray-300 hover:text-[#FF6B35] dark:hover:text-[#FF6B35] transition-colors py-2"
                  >
                    Contact
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Big Typing Animation with Orange "Adeniyi" */}
            <div className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 min-h-[80px] md:min-h-[100px] flex items-center justify-center">
              <TypeWriter
                text="Hi, I'm Adeniyi"
                delay={100}
                accentWord="Adeniyi"
              />
            </div>

            {/* Subtitle - Smaller */}
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Frontend Developer
            </h2>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Building clean, functional web applications with React and modern
              JavaScript
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="#projects"
                className="px-8 py-3 bg-[#FF6B35] hover:bg-[#FF8A5B] text-white font-semibold rounded-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:border-[#FF6B35] dark:hover:border-[#FF6B35] hover:text-[#FF6B35] dark:hover:text-[#FF6B35] transition-all transform hover:scale-105 active:scale-95"
              >
                Get in Touch
              </a>
              <a
                href="https://docs.google.com/document/d/1UixceeULsa2DKOrOnXiDCZ8XGdAsHvcwnE4_iGGS-o4/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#FF6B35] text-[#FF6B35] dark:text-[#FF6B35] font-semibold rounded-lg hover:bg-[#FF6B35] hover:text-white transition-all transform hover:scale-105 active:scale-95"
              >
                <Download className="w-5 h-5" />
                Resume
              </a>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors"
        >
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
                >
                  {/* Project Image */}
                  <div className="h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">
                          {project.title}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 bg-[#FF6B35] hover:bg-[#FF8A5B] text-white rounded-lg transition-all text-sm font-medium shadow-md hover:shadow-lg"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-[#FF6B35] hover:text-[#FF6B35] transition-all text-sm font-medium"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                About Me
              </h3>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg">
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                  I'm a self-taught frontend developer focused on building
                  clean, functional web applications. Currently deepening my
                  skills in React and modern JavaScript while working toward
                  landing my first developer role.
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                  My approach is simple: build projects, learn from them, share
                  the process publicly, and keep improving. Each project teaches
                  me something new about state management, API integration, user
                  experience, and writing maintainable code.
                </p>

                {/* Skills */}
                <div className="mt-8">
                  <SkillsSection />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-12 text-center">
                I'm actively looking for frontend developer opportunities. Feel
                free to reach out!
              </p>

              {/* Contact Form */}
              <ContactForm />

              {/* Social Links */}
              <div className="mt-12 text-center">
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Or connect with me on:
                </p>
                <div className="flex justify-center gap-6 flex-wrap">
                  <a
                    href="https://github.com/NiyiCodes0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all transform hover:scale-110 active:scale-95 shadow-lg"
                  >
                    <FaGithub size={28} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/adeniyidev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-110 active:scale-95 shadow-lg"
                  >
                    <FaLinkedin size={28} />
                  </a>
                  <a
                    href="https://twitter.com/Adeniyi_Morak"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-all transform hover:scale-110 active:scale-95 shadow-lg"
                  >
                    <FaTwitter size={28} />
                  </a>
                  <a
                    href="mailto:your.email@example.com"
                    className="p-4 bg-[#FF6B35] text-white rounded-lg hover:bg-[#FF8A5B] transition-all transform hover:scale-110 active:scale-95 shadow-lg"
                  >
                    <HiMail size={28} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-black text-gray-400 dark:text-gray-500 py-8 px-4 text-center transition-colors">
          <p className="font-medium">
            © 2025 Adeniyi Morak. Built with React & Tailwind CSS.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
