import { motion } from "framer-motion";

const SkillsSection = () => {
  const skills = [
    { name: "React", level: 85, category: "Frontend" },
    { name: "JavaScript", level: 80, category: "Frontend" },
    { name: "Tailwind CSS", level: 90, category: "Frontend" },
    { name: "HTML/CSS", level: 95, category: "Frontend" },
    { name: "Git/GitHub", level: 75, category: "Tools" },
    { name: "Vite", level: 70, category: "Tools" },
    { name: "REST APIs", level: 75, category: "Backend" },
    { name: "Responsive Design", level: 90, category: "Frontend" },
  ];

  const categories = ["Frontend", "Tools", "Backend"];

  return (
    <div className="space-y-8">
      {categories.map((category) => (
        <div key={category}>
          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            {category}
          </h4>
          <div className="space-y-4">
            {skills
              .filter((skill) => skill.category === category)
              .map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-[#FF6B35] font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-[#FF6B35] to-[#FF8A5B] rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
