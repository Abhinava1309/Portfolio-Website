import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

interface HeroSectionProps {
  name?: string;
  title?: string;
  quote?: string;
  profileImage?: string;
}

const HeroSection = ({
  name = "Hello. I'm Abhinava Ghosh",
  title = "Passionate Software Developer & Data Analyst",
  quote = "I'm a creative explorer guided by clean design, deep research, and innovative visuals.",
  profileImage = "/images/portrait-enhanced.jpg",
}: HeroSectionProps) => {
  return (
    <section className="min-h-screen w-full bg-black flex flex-col justify-between py-8 px-4 md:px-12 lg:px-24">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#E3CBA5] text-2xl font-semibold"
        >
          Abhinava<sup>®</sup>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between flex-grow">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 mt-8 md:mt-0"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {name}
          </h1>
          <h2 className="text-xl md:text-2xl text-[#E3CBA5] mb-6">{title}</h2>
          <Button className="bg-[#E3CBA5] text-black hover:bg-[#d4b88e] px-8 py-6 rounded-full text-lg">
            Hire Me
          </Button>
        </motion.div>

        {/* Right Side - Profile Image & Quote */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex flex-col items-center"
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#E3CBA5]">
              <img
                src="https://i.ibb.co/Ps1MrTqy/portrait-enhanced.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black px-4 py-2 rounded-full"
            >
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Abhinava1309"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E3CBA5] hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/abhinava-ghosh-054766283/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E3CBA5] hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=susmitasurcoc600@gmail.com&su=Hello&body=Hi%20there!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E3CBA5] hover:text-white transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-white text-center mt-12 max-w-md italic"
          >
            "{quote}"
          </motion.p>
        </motion.div>
      </div>

      {/* Navigation Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="flex justify-center mt-12"
      >
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#E3CBA5]"></div>
          <div className="w-3 h-3 rounded-full bg-gray-600"></div>
          <div className="w-3 h-3 rounded-full bg-gray-600"></div>
          <div className="w-3 h-3 rounded-full bg-gray-600"></div>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <ArrowDown className="text-[#E3CBA5]" size={24} />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
