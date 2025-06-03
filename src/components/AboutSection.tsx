import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Code, Palette, PenTool, Layout } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description = "" }: ServiceCardProps) => {
  return (
    <Card className="bg-black border-[#E3CBA5]/20 hover:border-[#E3CBA5]/50 transition-all duration-300">
      <CardContent className="p-6 flex flex-col items-start gap-3">
        <div className="text-[#E3CBA5] mb-2">{icon}</div>
        <h3 className="text-white text-lg font-medium">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const services = [
    {
      icon: <PenTool size={24} />,
      title: "Software Development",
      description:
        "Building efficient, scalable, and reliable software solutions with clean code and modern development practices.",
    },
    {
      icon: <Palette size={24} />,
      title: "Web Development",
      description:
        "Designing and developing responsive, user-focused web applications with clean code and modern frameworks.",
    },
    {
      icon: <Code size={24} />,
      title: "Data Analysis",
      description:
        "Extracting insights from complex data sets using analytical tools, visualization techniques, and statistical methods.",
    },
    {
      icon: <Layout size={24} />,
      title: "Database Management",
      description:
        "Designing, organizing, and maintaining structured databases to ensure data integrity, accessibility, and performance.",
    },
  ];

  return (
    <section className="w-full bg-black py-20 px-4 md:px-8 lg:px-16" id="about">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Who Am I Section */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Who <span className="text-[#E3CBA5]">Am I?</span>
            </h2>
            <Separator className="w-20 bg-[#E3CBA5] h-1" />

            <div className="flex flex-col md:flex-row gap-8 mt-4">
              <div className="w-full md:w-1/3">
                <div className="aspect-square overflow-hidden rounded-md bg-gray-900">
                  <img
                    src="https://i.ibb.co/PGs6dVwp/abhi.jpg"
                    alt="Abhinava Ghosh"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>

              <div className="w-full md:w-2/3">
                <p className="text-gray-300 leading-relaxed">
                 I am a B.Tech Computer Science student from JIS University (2022–2026) with a strong passion for visual storytelling, clean and functional design, and user-centered experiences. I've built responsive web projects, sharpened my skills in modern design systems, and constantly strive to merge technology with creativity.
                </p>
                <div className="mt-6 flex gap-4">
                  <div className="h-20 w-20 rounded-full bg-black/50 border border-[#E3CBA5]/30 flex items-center justify-center">
                    <span className="text-[#E3CBA5] text-xl font-bold">3+</span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-white font-medium">Years of</span>
                    <span className="text-[#E3CBA5]">Developing Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* What I Do Section */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              What <span className="text-[#E3CBA5]">I Do?</span>
            </h2>
            <Separator className="w-20 bg-[#E3CBA5] h-1" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {services.map((service, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
