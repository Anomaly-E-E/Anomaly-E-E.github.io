import ScrollReveal from "@/components/common/ScrollReveal";
import TiltCard from "@/components/common/TiltCard";
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
    subtitle: "ML Intrusion Detection · Western Cyber Society · Oct 2026 – Present",
    description:
      "An intrusion detection system trained on real network traffic from the CICIDS dataset. I own the data pipeline.",
    tech: [],
    highlights: [
      "Ingesting, cleaning and preparing large traffic datasets for model training",
      "Presenting with the team at the Canadian Tech Summit (Jan 2027)",
    ],
    icon: Network,
    link: "",
  },
  {
    title: "FalcoAI",
    subtitle: "AI-Powered Code Security Scanner",
    description:
      "A full-stack web app that uses Gemini to scan code for security vulnerabilities across 4+ languages, with severity ratings and line level context.",
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
    subtitle: "Humanitarian Crisis Globe · 2nd Place, MSA Hacks 2026",
    description:
      "A real time 3D globe that maps active humanitarian crises from live API data, with funding gaps and aid status for each one. Verified charity links let users donate directly and watch their impact animate from donor to destination.",
    tech: ["React", "TypeScript", "Node.js", "Mapbox GL JS"],
    highlights: [
      "Interactive 3D globe with crises mapped to exact locations",
      "Live animation showing each donation travel from donor to destination",
      "Crisis severity classification with funding gaps and aid status",
    ],
    icon: Globe,
    link: "https://basirah-wine.vercel.app/",
  },
];

const moreProjects = [
  {
    title: "No One Needs To Lie",
    subtitle: "Murder Mystery Game",
    description:
      "A real time murder mystery game in Unity. Built an enemy vision cone with raycasting and vector math that triggers chase sequences with accelerating enemy speed.",
    tech: ["C#", "Unity", "Gemini Nano"],
    icon: Gamepad2,
  },
  {
    title: "Data Dashboards",
    subtitle: "Power BI and Tableau",
    description:
      "Dashboards on 2M+ U.S. commercial flights and 23M+ rows of Seattle Airbnb data, showing delay rates by airline and what actually drives rental prices.",
    tech: ["Power BI", "DAX", "Tableau", "Python"],
    icon: BarChart3,
  },
  {
    title: "Peat Cup Permutator",
    subtitle: "2nd Place in ES1050, picked by the client",
    description:
      "A semi automatic hole punching machine our team of five built for Western Agrotunnel. It cut their manual prep time by 80% and the client put it into use.",
    tech: ["Arduino", "AutoCAD", "Autodesk Inventor"],
    icon: Wrench,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative scroll-mt-20 py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Projects</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Things I've <span className="text-primary">Built</span>
          </h3>
        </ScrollReveal>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.05}>
              <TiltCard className="group relative p-8 rounded-2xl bg-card border border-border hover:border-glow transition-colors duration-500 box-glow">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
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
                        className="self-start shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all text-sm"
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

                  {project.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <h4 className="text-xl md:text-2xl font-bold mt-20 mb-6">
            More <span className="text-primary">Projects</span>
          </h4>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {moreProjects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1}>
              <div className="h-full flex flex-col p-6 rounded-xl bg-card border border-border hover:border-glow transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <project.icon className="text-primary shrink-0" size={18} />
                  <div>
                    <p className="font-semibold text-foreground">{project.title}</p>
                    <p className="text-xs text-primary/70 font-mono">{project.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground border border-border">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
