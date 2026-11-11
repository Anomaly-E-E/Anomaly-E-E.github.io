import ScrollReveal from "@/components/common/ScrollReveal";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Simulation & Integration Software Developer (Work-Study)",
    company: "Western University Lab",
    location: "London, ON",
    period: "Sep 2026 – Present",
    bullets: [
      "Developing Python tooling on the simulator's SDK and API to automate scenario setup, control simulation parameters, and log vehicle and driver data for research analysis.",
      "Building Unity scenarios (construction zones, lane closures, changing traffic) to evaluate driver and autonomous vehicle behavior in the lab's digital twin environment.",
      "Integrating the driving simulator with VR headsets (Meta Quest, OpenXR/SteamVR), calibrating head tracking and viewpoint alignment for driver-in-the-loop testing.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Fortune Technologies",
    location: "Sharjah, UAE",
    period: "May 2025 – Aug 2025",
    bullets: [
      "Built an inventory management web application with REST APIs in Java/Spring Boot and MySQL, replacing Excel-based tracking and reducing operational overhead by 40%.",
      "Designed the database schema and optimized SQL queries with indexing to speed up data retrieval.",
      "Automated contract deadline monitoring with Spring Scheduler daily expiry checks, cutting missed renewals by 30%, and wrote unit tests to ensure reliable delivery.",
    ],
  },
];

const leadership = [
  {
    role: "Program Design & Delivery Lead",
    org: "OnTalent Lab, Western Chapter",
    period: "Nov 2025 – Present",
    summary:
      "Lead STEMM workshops for K to 12 students across Ontario, mentor FIRST Robotics teams, and led a full website revamp.",
  },
  {
    role: "VP of Technology",
    org: "Western Engineering Competition",
    period: "Sep 2025 – Present",
    summary:
      "Run the competition's website, registration and file submission platform, and handle on site troubleshooting during live events.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative scroll-mt-20 py-32 px-6">
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
                      <p className="text-xs text-muted-foreground font-mono mt-1 sm:mt-0">
                        {exp.period} · {exp.location}
                      </p>
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

        <ScrollReveal>
          <h4 className="text-xl md:text-2xl font-bold mt-20 mb-6">
            Leadership & <span className="text-primary">Teams</span>
          </h4>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-4">
          {leadership.map((item, i) => (
            <ScrollReveal key={item.org} delay={i * 0.1}>
              <div className="h-full p-5 rounded-xl bg-card border border-border hover:border-glow transition-all duration-300">
                <p className="font-semibold text-foreground">{item.role}</p>
                <p className="text-sm text-primary/80 font-mono">{item.org}</p>
                <p className="text-xs text-muted-foreground font-mono mt-1 mb-3">{item.period}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.summary}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
