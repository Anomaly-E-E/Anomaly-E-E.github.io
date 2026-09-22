import ScrollReveal from "@/components/common/ScrollReveal";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const skillGroups = [
  {
    label: "Languages",
    skills: ["Java", "JavaScript", "Python", "C++", "C#", "SQL", "HTML/CSS"],
  },
  {
    label: "Frameworks & Libraries",
    skills: ["React", "Node.js", "Express", "Spring Boot", "ROS2"],
  },
  {
    label: "Tools & Data",
    skills: ["Docker", "Git", "Linux", "AWS", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Power BI", "Tableau"],
  },
  {
    label: "Security",
    skills: ["OWASP Top 10", "JWT/OAuth", "bcrypt", "Wireshark", "Static Code Analysis", "Rate Limiting"],
  },
];

const certifications = [
  { name: "OT Cybersecurity Foundation", status: "Completed" },
  { name: "ISA/IEC 62443 Masterclass", status: "Completed" },
  { name: "CompTIA Security+", status: "In Progress" },
  { name: "AWS Cloud Practitioner", status: "In Progress" },
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
        <ScrollReveal delay={0.2}>
          <h3 className="text-2xl md:text-3xl font-bold mt-20 mb-8">
            <span className="text-primary">Certifications</span>
          </h3>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => {
            const done = cert.status === "Completed";
            return (
              <ScrollReveal key={cert.name} delay={i * 0.1}>
                <div className="flex items-center gap-4 p-5 rounded-xl bg-card border border-primary/30 hover:border-primary/60 transition-all duration-300 box-glow">
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/15 flex items-center justify-center">
                    <Award className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-base md:text-lg font-semibold text-foreground">{cert.name}</p>
                    <span
                      className={`inline-block mt-1 text-xs font-mono px-2.5 py-0.5 rounded-full border ${
                        done
                          ? "bg-primary/15 text-primary border-primary/40"
                          : "bg-secondary text-foreground/70 border-border"
                      }`}
                    >
                      {cert.status}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
