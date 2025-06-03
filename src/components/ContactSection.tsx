import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Star, Send } from "lucide-react";

interface Skill {
  name: string;
  rating: number;
  category: string;
}

interface Stat {
  value: number;
  label: string;
  suffix: string;
}

interface ContactSectionProps {
  skills?: Skill[];
  stats?: Stat[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    image: string;
  };
}

const ContactSection: React.FC<ContactSectionProps> = ({
  skills = [
    { name: "Web Development", rating: 4, category: "HTML, CSS, Bootstrap" },
    {
      name: "Graphic Tools",
      rating: 5,
      category: "Adobe Photoshop, Illustrator, Figma",
    },
    { name: "Programming", rating: 4, category: "Python, Java, C/C++" },
    { name: "Data Analytics", rating: 4, category: "Excel, Pandas, NumPy" },
  ],
  stats = [
    { value: 2000, label: "Project Views", suffix: "+" },
    { value: 53, label: "Happy Clients", suffix: "+" },
    { value: 3, label: "Awards", suffix: "+" },
    { value: 3, label: "Years Experience", suffix: "+" },
  ],
  testimonial = {
    quote:
      "Very happy to work with Abhinava. He understands design language perfectly and delivers top-notch work.",
    author: "Client",
    position: "CEO at GraphixTech",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=client123",
  },
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          size={16}
          className={
            i < rating ? "text-[#E3CBA5] fill-[#E3CBA5]" : "text-gray-500"
          }
        />
      ));
  };

  return (
    <section
      className="bg-black text-white py-20 px-4 md:px-8 lg:px-16"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Skills, Stats, Testimonial */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-[#E3CBA5]">
                My Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <Card key={index} className="bg-zinc-900 border-zinc-800">
                    <CardContent className="p-4">
                      <h3 className="text-lg font-medium mb-1">{skill.name}</h3>
                      <p className="text-sm text-gray-400 mb-2">
                        {skill.category}
                      </p>
                      <div className="flex">{renderStars(skill.rating)}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-[#E3CBA5]">Stats</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <Card key={index} className="bg-zinc-900 border-zinc-800">
                    <CardContent className="p-4 text-center">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                      >
                        <motion.span
                          className="text-2xl md:text-3xl font-bold text-[#E3CBA5] block"
                          initial={{ number: 0 }}
                          whileInView={{ number: stat.value }}
                          viewport={{ once: true }}
                          transition={{ duration: 2 }}
                        >
                          {Math.round(useMotionValue(stat.value))}
                          {stat.suffix}
                        </motion.span>
                        <span className="text-sm text-gray-400">
                          {stat.label}
                        </span>
                      </motion.div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 text-[#E3CBA5]">
                Testimonial
              </h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12 border-2 border-[#E3CBA5]">
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.author}
                      />
                      <AvatarFallback className="bg-[#E3CBA5] text-black">
                        {testimonial.author.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="italic mb-4">"{testimonial.quote}"</p>
                      <p className="text-[#E3CBA5] font-medium">
                        {testimonial.author},{" "}
                        <span className="text-gray-400">
                          {testimonial.position}
                        </span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-8"
          >
            <div className="lg:w-1/3">
              <div className="sticky top-20">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                  alt="Profile"
                  className="w-full h-auto rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-6 text-[#E3CBA5]">
                Get in Touch
              </h2>
              <p className="text-gray-400 mb-8">
                Have a project in mind or want to collaborate? Feel free to
                reach out and let's create something amazing together.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-zinc-900 border-zinc-800 focus:border-[#E3CBA5] text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-zinc-900 border-zinc-800 focus:border-[#E3CBA5] text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-zinc-900 border-zinc-800 focus:border-[#E3CBA5] text-white min-h-[150px]"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-[#E3CBA5] text-black hover:bg-[#d4b992] transition-colors w-full md:w-auto px-8 py-2 rounded-md flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Helper function to use motion value in component
function useMotionValue(value: number) {
  const [currentValue, setCurrentValue] = useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentValue(value);
    }, 100);

    return () => clearTimeout(timer);
  }, [value]);

  return currentValue;
}

export default ContactSection;
