import { motion } from "framer-motion";
import { ArrowDown, GraduationCap, MapPin, Shield, Terminal, Linkedin, Github } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pb-12">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/55 via-background/30 to-background/15" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display italic text-primary text-sm md:text-base mb-4 tracking-[0.25em] uppercase"
        >
          Software Engineer &amp; Cybersecurity
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          style={{ textShadow: "0 2px 40px rgba(0,0,0,0.5)" }}
        >
          Arshan Shareef
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-3 text-sm text-foreground/70 mb-6"
        >
          <span className="inline-flex items-center gap-1.5">
            <GraduationCap size={15} className="text-primary/80" />
            Software Engineering @ Western
          </span>
          <span className="text-primary/40">|</span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={15} className="text-primary/80" />
            Toronto, Canada
          </span>
        </motion.div>

        {/* Interest tags */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          <span className="inline-flex items-center gap-2 text-xs px-4 py-2 rounded-full border border-foreground/15 bg-foreground/5 backdrop-blur-sm text-foreground/80">
            <Terminal size={13} className="text-primary" />
            Software Development
          </span>
          <span className="inline-flex items-center gap-2 text-xs px-4 py-2 rounded-full border border-foreground/15 bg-foreground/5 backdrop-blur-sm text-foreground/80">
            <Shield size={13} className="text-primary" />
            ICS / OT Cybersecurity
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all text-sm"
          >
            Explore My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-foreground/20 text-foreground/90 rounded-lg hover:bg-foreground/5 backdrop-blur-sm transition-all text-sm"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float"
      >
        <a href="#about">
          <ArrowDown className="text-primary/50" size={20} />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
