import ScrollReveal from "@/components/common/ScrollReveal";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Development Intern",
    company: "Fortune Technologies",
    location: "Sharjah, UAE",
    period: "May 2025 – Aug 2025",
    bullets: [
      "Architected a secure inventory management system using Java & Spring Boot, replacing manual tracking and reducing overhead by 40%.",
      "Built automated contract monitoring with Spring Scheduler, reducing missed renewals by 30%.",
      "Designed MySQL schema and optimized queries through indexing for faster data retrieval.",
    ],
  },
  {
    role: "Program Design & Delivery Lead",
    company: "OnTalent Lab, Western Chapter",
    location: "London, ON",
    period: "Nov 2025 – Present",
    bullets: [
      "Lead the design and delivery of STEMM workshops for K to 12 students across Ontario.",
      "Mentor student teams through the FIRST Robotics Competition, helping them work through problems under competition deadlines.",
      "Led a full website revamp to make our programs easier to find and more accessible.",
    ],
  },
  {
    role: "VP of Technology",
    company: "Western Engineering Competition",
    location: "London, ON",
    period: "Sep 2025 – Present",
    bullets: [
      "Run the technical side of the competition, including the website, participant registration and the online file submission platform.",
      "Manage the Discord server and handle on site troubleshooting during live events so things keep running smoothly.",
    ],
  },
  {
    role: "Software Team Member",
    company: "WE Mars Club",
    location: "London, ON",
    period: "Jan 2026 – Present",
    bullets: [
      "Developing autonomous navigation and control systems in C++ and Python on Linux with ROS2.",
      "Implementing and testing ROS2 nodes for sensor integration and communication between subsystems.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Experience</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Where I've <span className="text-primary">Worked</span>
          </h3>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-background" />
                  
                  <div className="p-6 rounded-xl bg-card border border-border hover:border-glow transition-all duration-500 group">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h4>
                        <p className="text-sm text-primary/80 font-mono">{exp.company}</p>
                      </div>
                      <p className="text-xs text-muted-foreground font-mono mt-1 sm:mt-0">{exp.period}</p>
                    </div>
                    <ul className="space-y-2">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary/50 mt-1 shrink-0">▹</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
