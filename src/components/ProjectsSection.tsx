import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  image: string;
  category: string;
}

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const projects: Project[] = [
    {
      id: "1",
      title: "Helmet & Number Plate Detection App",
      type: "AI/ML, Streamlit UI",
      description: "Real-time object detection using YOLOv3 and CNN.",
      image:
        "https://images.unsplash.com/photo-1576153192396-180ecef2a715?w=800&q=80",
      category: "AI/ML",
    },
    {
      id: "2",
      title: "Smart Resume Generator",
      type: "Flask Web App",
      description: "ATS-optimized resume builder with scoring system.",
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
      category: "ML",
    },
    {
      id: "3",
      title: "E-commerce App UI",
      type: "Design + Layout",
      description: "Aesthetic online shop layout with product highlights.",
      image:
        "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&q=80",
      category: "ui-ux",
    },
    {
      id: "4",
      title: "Accommodation App UI",
      type: "Mobile-first Design",
      description:
        "Minimalist design with clean navigation for housing listings.",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      category: "ui-ux",
    },
    {
      id: "5",
      title: "3D Product Visualization",
      type: "3D Modeling",
      description: "Realistic 3D product renders for marketing materials.",
      image:
        "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&q=80",
      category: "3d-design",
    },
    {
      id: "6",
      title: "Motion Graphics Intro",
      type: "Animation",
      description: "Dynamic animated intro for brand videos.",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
      category: "animation",
    },
    {
      id: "7",
      title: "Tech Startup Branding",
      type: "Logo Design",
      description: "Modern logo and visual identity for tech company.",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
      category: "logo-design",
    },
    {
      id: "8",
      title: "Restaurant Brand Identity",
      type: "Logo Design",
      description: "Complete branding package for upscale restaurant.",
      image:
        "https://images.unsplash.com/photo-1583396060233-3d13dbadf242?w=800&q=80",
      category: "logo-design",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section className="py-20 px-6 md:px-12 bg-black text-white" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my recent work across different design disciplines
          </p>
        </div>

        <Tabs
          defaultValue="all"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <div className="flex justify-center mb-10">
            <TabsList className="bg-gray-900 p-1">
              <TabsTrigger value="all" className="text-sm px-4 py-2">
                All Projects
              </TabsTrigger>
              <TabsTrigger value="ui-ux" className="text-sm px-4 py-2">
                Blockchain
              </TabsTrigger>
              <TabsTrigger value="3d-design" className="text-sm px-4 py-2">
                Webdev
              </TabsTrigger>
              <TabsTrigger value="animation" className="text-sm px-4 py-2">
                AI/ML
              </TabsTrigger>
              <TabsTrigger value="logo-design" className="text-sm px-4 py-2">
                Pyhton
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <ProjectGrid
              projects={filteredProjects}
              variants={containerVariants}
              itemVariants={itemVariants}
            />
          </TabsContent>
          <TabsContent value="ui-ux" className="mt-0">
            <ProjectGrid
              projects={filteredProjects}
              variants={containerVariants}
              itemVariants={itemVariants}
            />
          </TabsContent>
          <TabsContent value="3d-design" className="mt-0">
            <ProjectGrid
              projects={filteredProjects}
              variants={containerVariants}
              itemVariants={itemVariants}
            />
          </TabsContent>
          <TabsContent value="animation" className="mt-0">
            <ProjectGrid
              projects={filteredProjects}
              variants={containerVariants}
              itemVariants={itemVariants}
            />
          </TabsContent>
          <TabsContent value="logo-design" className="mt-0">
            <ProjectGrid
              projects={filteredProjects}
              variants={containerVariants}
              itemVariants={itemVariants}
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

interface ProjectGridProps {
  projects: Project[];
  variants: any;
  itemVariants: any;
}

const ProjectGrid = ({
  projects,
  variants,
  itemVariants,
}: ProjectGridProps) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project) => (
        <motion.div key={project.id} variants={itemVariants}>
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden bg-gray-900 border-0 group h-full">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300"></div>
      </div>
      <CardContent className="p-5">
        <h3 className="text-lg font-semibold text-white mb-1">
          {project.title}
        </h3>
        <p className="text-xs text-[#E3CBA5] mb-2">{project.type}</p>
        <p className="text-sm text-gray-400">{project.description}</p>
      </CardContent>
    </Card>
  );
};

export default ProjectsSection;
