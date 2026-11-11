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
      </div>
    </section>
  );
};

export default ExperienceSection;
