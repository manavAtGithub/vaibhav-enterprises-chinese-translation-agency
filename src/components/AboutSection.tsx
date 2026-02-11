import { motion } from "framer-motion";
import { ShieldCheck, Handshake, BookOpen } from "lucide-react";

const highlights = [
  { icon: Handshake, title: "Cultural Bridge", desc: "Our team's deep understanding of both Chinese and Indian business cultures ensures seamless communication." },
  { icon: ShieldCheck, title: "Confidentiality", desc: "Strict professional ethics and NDA compliance for all sensitive business dealings across every engagement." },
  { icon: BookOpen, title: "Industry Expertise", desc: "Specialized vocabulary across manufacturing, trade, technology, and legal domains — delivered by experienced professionals." },
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
            <span className="text-accent-foreground/50 text-sm font-medium">Agency Photo</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              About <span className="text-primary">Vaibhav Enterprises</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With over a decade of experience bridging communication between Chinese-speaking clients and Indian businesses, Vaibhav Enterprises is one of India's most trusted Chinese language services agencies. Our team of experienced translators and interpreters covers boardroom negotiations, factory floors, and international trade events.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We have served Fortune 500 companies, government delegations, and SMEs alike, delivering accurate, context-aware interpretation that goes beyond words — ensuring deals close, partnerships form, and operations run smoothly.
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
