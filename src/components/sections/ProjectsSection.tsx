import ScrollReveal from "@/components/common/ScrollReveal";
import { Shield, Globe, Gamepad2, BarChart3, Wrench, ExternalLink, Bot, Network } from "lucide-react";

const projects = [
  {
    title: "Wingman",
    subtitle: "AI Screen Assistant for macOS",
    description:
      "An AI companion that follows your cursor around the screen. Ask by voice, hands-free, and it explains what you're looking at out loud and with diagrams. Extended from an open-source project.",
    tech: ["Swift", "Node.js", "llama.cpp", "Claude API"],
    highlights: [
      "Agent mode that does the task for you: reads app controls through the macOS Accessibility API, then clicks and types as the LLM decides",
      "Camera mode: point a phone or webcam at something and ask about it",
      "Node.js bridge that routes each request to Claude or a local llama.cpp model",
    ],
    icon: Bot,
    link: "",
  },
  {
    title: "Sentinel",
    subtitle: "ML-Based Intrusion Detection System · Western Cyber Society",
    description:
      "An intrusion detection system trained on real network traffic from the CICIDS dataset. I own the data pipeline, ingesting, cleaning and preparing large datasets for model training.",
    tech: [],
    highlights: [
      "Own the data pipeline from raw traffic captures to training-ready data",
      "Presenting with the team at the Canadian Tech Summit (Jan 2027)",
    ],
    icon: Network,
    link: "",
  },
  {
    title: "FalcoAI",
    subtitle: "AI-Powered Code Security Scanner",
    description:
      "Full-stack AI powered static analysis web app that detects security vulnerabilities across 4+ languages, with severity classification and line level context.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Gemini API"],
    highlights: [
      "Secure auth with JWT, bcrypt and email verification",
      "Modular REST API backed by PostgreSQL",
      "Rate limiting and secure credit enforcement",
    ],
    icon: Shield,
    link: "",
  },
  {
    title: "Basirah",
    subtitle: "Global Humanitarian Crisis Platform · 2nd Place, MSA Hacks 2026 🥈",
    description:
      "A real time 3D globe that maps active humanitarian crises from live API data, showing donors funding gaps and aid status at a glance. Verified charity links let users donate directly and watch their impact animate from donor to destination.",
    tech: ["React", "TypeScript", "Node.js", "Mapbox GL JS"],
    highlights: [
      "Interactive 3D globe with crises mapped to exact locations",
      "Live donation impact visualization with smooth animations",
      "Crisis severity classification with funding gaps and aid status",
    ],
    icon: Globe,
    link: "https://basirah-wine.vercel.app/",
  },
  {
    title: "No One Needs To Lie",
    subtitle: "Murder Mystery Game",
    description:
      "A real time murder mystery game featuring an enemy FOV system built in C# using raycasting and vector angle calculations to detect player entry into a V shaped vision cone, triggering timed chase sequences with accelerating enemy speed via Physics2D collision layers.",
    tech: ["C#", "Unity", "Gemini Nano", "Git"],
    highlights: [
      "Leveraged Gemini Nano to generate and refine sprite characters and tilemap assets with multi state animations via Unity Animator",
      "Architected scalable game systems using OOP principles, encapsulation, and inheritance",
      "Collaborated using Git for version control, feature integration, and iterative delivery across distributed subsystems",
    ],
    icon: Gamepad2,
    link: "",
  },
  {
    title: "Data Dashboards",
    subtitle: "Power BI and Tableau",
    description:
      "Two dashboards built on large public datasets. One looks at 2M+ U.S. commercial flights to show on time, delayed and canceled rates by airline and airport. The other breaks down 23M+ rows of Seattle Airbnb data to find what actually drives price across the city.",
    tech: ["Power BI", "DAX", "Tableau", "Excel", "Python"],
    highlights: [
      "Built a star schema model in Power BI with DAX measures for on time, delayed and canceled percentages",
      "Mapped Airbnb pricing across 27 Seattle zip codes with weekly revenue trends and price per bedroom",
      "Explored 100+ fields to pick out the main revenue drivers and pricing patterns",
    ],
    icon: BarChart3,
    link: "",
  },
  {
    title: "Peat Cup Permutator",
    subtitle: "2nd Place in ES1050, picked by the client",
    description:
      "A semi automatic hole punching machine our team of five built for Western Agrotunnel. It cut their manual prep time by 80% and the client chose it to actually put into use.",
    tech: ["Arduino", "AutoCAD", "Autodesk Inventor"],
    highlights: [
      "Led the CAD modeling and programmed the Arduino actuators",
      "Designed a modular base with jigsaw style pieces so it can be expanded later",
      "Put together the full documentation package so the client can extend it without us",
    ],
    icon: Wrench,
    link: "",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Projects</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Things I've <span className="text-primary">Built</span>
          </h3>
        </ScrollReveal>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <div key={i} className="group relative p-8 rounded-2xl bg-card border border-border hover:border-glow transition-all duration-500 box-glow">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <project.icon className="text-primary" size={20} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-foreground">{project.title}</h4>
                        <p className="text-sm text-primary/70 font-mono">{project.subtitle}</p>
                      </div>
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all text-sm"
                      >
                        Live demo
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                  <ul className={`space-y-2 ${project.tech.length ? "mb-6" : ""}`}>
                    {project.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary/50 mt-0.5 shrink-0">▹</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
