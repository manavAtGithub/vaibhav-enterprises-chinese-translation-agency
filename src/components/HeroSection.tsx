import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Globe, Users, Languages } from "lucide-react";

const stats = [
  { icon: Globe, label: "10+ Years Experience" },
  { icon: Users, label: "500+ Projects Delivered" },
  { icon: Languages, label: "Chinese ↔ English / Hindi" },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-teal-light via-background to-secondary"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-6"
          >
            Professional Chinese (Mandarin){" "}
            <span className="text-primary">Translator & Interpreter</span> – India
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Our team delivers expert interpretation for Business Meetings, Manufacturing, Import–Export,
            Factory Visits, Trade Fairs & Remote Sessions across India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button asChild size="lg" className="text-base px-8">
              <a href="#contact">Request a Call Back</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <a href="#contact">Get a Quote</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex items-center justify-center gap-3 bg-background/70 backdrop-blur rounded-lg py-4 px-6 border border-border shadow-sm"
              >
                <s.icon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
