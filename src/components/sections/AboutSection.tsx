import ScrollReveal from "@/components/common/ScrollReveal";
import { GraduationCap, MapPin } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">About</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            Who I <span className="text-primary">Am</span>
          </h3>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a second-year Software Engineering student at Western who got into programming 
              through breaking things and figuring out how to fix them. That curiosity led me to 
              ICS/OT cybersecurity — I'm fascinated by how industrial control systems work and 
              what it takes to defend them.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Outside of classes, I write robotics software with WE Mars, build tools like FalcoAI 
              for automated code security analysis, and run engineering competitions. I care about 
              writing software that actually holds up under pressure.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              <div className="p-5 rounded-xl bg-card border border-border hover:border-glow transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="text-primary" size={20} />
                  <h4 className="font-semibold text-foreground">Education</h4>
                </div>
                <p className="text-sm text-muted-foreground">B.Eng Software Engineering</p>
                <p className="text-sm text-muted-foreground">University of Western Ontario</p>
                <p className="text-xs text-primary/60 font-mono mt-1">Expected April 2028</p>
              </div>

              <div className="p-5 rounded-xl bg-card border border-border hover:border-glow transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="text-accent" size={20} />
                  <h4 className="font-semibold text-foreground">Location</h4>
                </div>
                <p className="text-sm text-muted-foreground">Toronto, Canada</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
