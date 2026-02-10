import { motion } from "framer-motion";
import { ShieldCheck, Handshake, BookOpen } from "lucide-react";

const highlights = [
  { icon: Handshake, title: "Cultural Bridge", desc: "Deep understanding of both Chinese and Indian business cultures ensures seamless communication." },
  { icon: ShieldCheck, title: "Confidentiality", desc: "Strict professional ethics and NDA compliance for all sensitive business dealings." },
  { icon: BookOpen, title: "Industry Expertise", desc: "Specialized vocabulary across manufacturing, trade, technology, and legal domains." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-accent rounded-2xl aspect-[4/5] flex items-center justify-center"
          >
            <span className="text-accent-foreground/50 text-sm font-medium">Professional Photo</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              About <span className="text-primary">Nitesh Raj</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With over a decade of experience bridging communication between Chinese-speaking clients and Indian businesses, Nitesh Raj is one of India's most trusted Mandarin interpreters. His expertise spans boardroom negotiations, factory floors, and international trade events.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Having worked with Fortune 500 companies, government delegations, and SMEs alike, Nitesh delivers accurate, context-aware interpretation that goes beyond words — ensuring deals close, partnerships form, and operations run smoothly.
            </p>

            <div className="space-y-5">
              {highlights.map((h) => (
                <div key={h.title} className="flex gap-4 items-start">
                  <div className="p-2 rounded-lg bg-accent flex-shrink-0">
                    <h.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{h.title}</h3>
                    <p className="text-muted-foreground text-sm">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
