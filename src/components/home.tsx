import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="min-h-screen"
      >
        <HeroSection />
      </motion.section>

      {/* About Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="py-20"
      >
        <AboutSection />
      </motion.section>

      {/* Projects Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="py-20"
      >
        <ProjectsSection />
      </motion.section>

      {/* Contact Section (includes Skills, Stats, Testimonial, and Contact Form) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="py-20"
      >
        <ContactSection />
      </motion.section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              Copyright © 2025 | Abhinava
            </p>
            <div className="flex space-x-6">
              <a
                href="https://github.com/Abhinava1309/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#E3CBA5] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/abhinava-ghosh-054766283/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#E3CBA5] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=susmitasurcoc600@gmail.com&su=Hello&body=Hi%20there!"
                className="text-gray-400 hover:text-[#E3CBA5] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=susmitasurcoc600@gmail.com&su=Hello&body=Hi%20there!"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#E3CBA5] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-behance"
                >
                  <path d="M3 9h6v3H3z" />
                  <path d="M13 10a3 3 0 0 0 6 0v0a3 3 0 0 0-6 0v0z" />
                  <path d="M3 15h8v-3" />
                  <path d="M14 15h7v-3" />
                  <path d="M3 6h7" />
                  <path d="M16 6h5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
