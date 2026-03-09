import ScrollReveal from "@/components/common/ScrollReveal";
import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Languages",
    skills: ["Java", "JavaScript", "Python", "C++", "SQL", "HTML/CSS"],
  },
  {
    label: "Frameworks & Libraries",
    skills: ["React", "Node.js", "Express", "Spring Boot", "ROS2"],
  },
  {
    label: "Infrastructure & Tools",
    skills: ["Docker", "Git", "Linux", "AWS", "MySQL", "PostgreSQL"],
  },
  {
    label: "Security & Networking",
    skills: ["Wireshark", "OWASP Top 10", "ICS/SCADA Fundamentals", "JWT/OAuth"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Skills</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            What I <span className="text-primary">Work With</span>
          </h3>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-8">
          {skillGroups.map((group, i) => (
            <ScrollReveal key={group.label} delay={i * 0.1}>
              <div className="p-6 rounded-xl bg-card border border-border hover:border-glow transition-all duration-300">
                <h4 className="font-mono text-sm text-primary mb-4 tracking-wider">{`// ${group.label}`}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + j * 0.05 }}
                      className="text-sm font-mono px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground border border-border hover:border-primary/30 hover:text-primary transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Certifications */}
        <ScrollReveal delay={0.3}>
          <div className="mt-8 p-6 rounded-xl bg-card border border-border">
            <h4 className="font-mono text-sm text-accent mb-3 tracking-wider">{"// Certifications"}</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground flex gap-2">
                <span className="text-accent/50 shrink-0">▹</span>
                OT Cybersecurity Foundation
              </li>
              <li className="text-sm text-muted-foreground flex gap-2">
                <span className="text-accent/50 shrink-0">▹</span>
                CompTIA Security+ (In Progress)
              </li>
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SkillsSection;
