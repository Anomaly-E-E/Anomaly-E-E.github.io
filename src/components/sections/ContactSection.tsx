import ScrollReveal from "@/components/common/ScrollReveal";
import { Mail, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Contact</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Let's <span className="text-primary">Connect</span>
          </h3>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            I'm always open to new opportunities, collaborations, and conversations. 
            Feel free to reach out — I'd love to hear from you.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex items-center justify-center gap-6">
            <a
              href="mailto:arshan@example.com"
              className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/arshan-shareef-mohammed-4ab94b330/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <a
            href="mailto:arshan@example.com"
            className="inline-block mt-8 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all box-glow text-sm"
          >
            Say Hello
          </a>
        </ScrollReveal>
      </div>

      {/* Footer */}
      <div className="mt-24 text-center">
        <p className="text-xs text-muted-foreground/50 font-mono">
          Designed & Built by Arshan Shareef Mohammed
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
