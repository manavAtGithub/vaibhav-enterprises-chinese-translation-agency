import { motion } from "framer-motion";
import { ShieldCheck, Handshake, Factory } from "lucide-react";
import aboutPhoto from "@/assets/nitesh-raj.jpeg";

const highlights = [
  {
    icon: Handshake,
    title: "Industrial & Corporate Expertise",
    desc: "Extensive experience supporting Steel Plants, Chemical Manufacturing Units, Engineering Projects, Corporate Negotiations, and Private Consultations across India.",
  },
  {
    icon: ShieldCheck,
    title: "Confidential & Professional",
    desc: "Strict professional ethics, NDA compliance, and trusted communication support for government, private, and industrial assignments.",
  },
  {
    icon: Factory,
    title: "Technical Interpretation Strength",
    desc: "Hands-on expertise in PLC systems, MCC & Drive Panels, Coke Oven Battery Projects, CDQ Expansion, Chemical Processes, and Machinery Installation.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-accent rounded-2xl aspect-[4/5] overflow-hidden"
          >
            {aboutPhoto ? (
              <img
                src={aboutPhoto}
                alt="Agency professional interpretation work"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <span className="text-accent-foreground/50 text-sm font-medium">
                  Professional Photo
                </span>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              About <br />{" "}
              <span className="text-primary">
                Vaibhav Language Translation Services
              </span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With over 13 years of professional Chinese interpretation and
              translation experience, Vaibhav Language Translation Services
              specializes in industrial, corporate, and government-level
              language solutions across India. Our expertise spans{" "}
              <b>
                {" "}
                Steel Plants, Chemical Manufacturing Units, Engineering
                Installations, Import–Export Businesses, and Private Consultancy
                assignments.
              </b>
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Our team has supported major industrial projects including{" "}
              <b>
                Coke Oven Battery expansion, CDQ systems, machinery
                commissioning, and chemical plant operations
              </b>
              . We have facilitated communication between Indian and Chinese
              engineers on technical systems such as{" "}
              <b>
                PLC, MCC & Drive Panels, industrial automation, and
                manufacturing processes including Bromination and Grignard
                chemistry
              </b>
              .
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              In addition to on-site factory interpretation and boardroom
              negotiations, we provide one-to-one consultation, document
              translation, business meeting support, government coordination,
              and remote interpretation services — ensuring accurate, culturally
              aligned communication in every engagement.
            </p>

            <div className="space-y-5">
              {highlights.map((h) => (
                <div key={h.title} className="flex gap-4 items-start">
                  <div className="p-2 rounded-lg bg-accent flex-shrink-0">
                    <h.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">
                      {h.title}
                    </h3>
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
