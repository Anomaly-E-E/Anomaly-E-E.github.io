import ScrollReveal from "@/components/common/ScrollReveal";
import { Shield, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "FalcoAI",
    subtitle: "Code Security Vulnerabilities Scanner",
    description:
      "Full-stack AI-powered static code analysis platform that detects security vulnerabilities across Python, JavaScript, Java, and more — with severity classification and line-level context.",
    tech: ["React", "Node.js", "Express", "Supabase", "Gemini API"],
    highlights: [
      "Secure auth with JWT, bcrypt & email verification",
      "Modular REST API backed by PostgreSQL",
      "Rate limiting & secure credit enforcement",
    ],
    icon: Shield,
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

        {projects.map((project, i) => (
          <ScrollReveal key={i} delay={0.1}>
            <div className="group relative p-8 rounded-2xl bg-card border border-border hover:border-glow transition-all duration-500 box-glow">
              {/* Accent gradient */}
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
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary/50 mt-0.5 shrink-0">▹</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
