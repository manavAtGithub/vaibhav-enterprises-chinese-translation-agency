import { motion } from "framer-motion";
import { FileText, MessageSquare, Factory, Plane, Monitor, Languages } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: FileText,
    title: "Technical & Industrial Document Translation",
    who: "Steel plants, chemical manufacturers, engineering firms, legal teams",
    problem:
      "Errors in technical manuals, contracts, PLC documentation, or commissioning guides can halt operations and create compliance risks.",
    why: "We provide precise translation of technical drawings, machinery manuals, BOQ documents, contracts, chemical process documentation, and engineering reports — preserving terminology accuracy and operational intent.",
  },
  {
    icon: Languages,
    title: "Chinese ↔ English / Hindi Interpretation",
    who: "Industrial teams, private clients, traders, and government bodies",
    problem:
      "Double translation or untrained interpreters lead to misinterpretation of technical instructions and business commitments.",
    why: "Our interpreters deliver direct, real-time Chinese-English-Hindi communication during meetings, factory visits, private consultations, and official assignments — ensuring clarity and accuracy without distortion.",
  },
  {
    icon: Languages,
    title: "Japanese ↔ English / Hindi Interpretation",
    who: "Industrial teams, private clients, traders, and government bodies",
    problem:
      "Double translation or untrained interpreters lead to misinterpretation of technical instructions and business commitments.",
    why: "Our interpreters deliver direct, real-time Chinese-English-Hindi communication during meetings, factory visits, private consultations, and official assignments — ensuring clarity and accuracy without distortion.",
  },
  {
    icon: MessageSquare,
    title: "Business Negotiations & Corporate Meetings",
    who: "Corporates, investors, import–export businesses, and SMEs",
    problem:
      "High-stakes negotiations fail when tone, authority, or contractual nuance is misunderstood.",
    why: "We support boardroom discussions, supplier negotiations, JV meetings, and executive calls with professional interpretation that protects your commercial interests and strategic intent.",
  },
  {
    icon: Factory,
    title: "Industrial Projects & Plant Commissioning",
    who: "Steel plants, chemical units, machinery installers, EPC contractors",
    problem:
      "Miscommunication during installation, commissioning, or automation setup can cause costly delays and safety risks.",
    why: "We provide on-site interpretation for Coke Oven Battery projects, CDQ systems, PLC & MCC panel installations, machinery commissioning, and manufacturing process coordination between Indian and Chinese engineers.",
  },
  {
    icon: Plane,
    title: "Government Delegations & Trade Engagements",
    who: "Government departments, chambers of commerce, exporters, delegations",
    problem:
      "Diplomatic, regulatory, or trade discussions lose impact without culturally accurate interpretation.",
    why: "Our team facilitates professional interpretation for official meetings, trade fairs, policy discussions, and cross-border industrial collaborations across India and China.",
  },
  {
    icon: Monitor,
    title: "Remote & One-to-One Interpretation",
    who: "Private clients, startups, consultants, international partners",
    problem:
      "Virtual meetings and urgent discussions stall when real-time language support is unavailable.",
    why: "We provide seamless remote interpretation via Zoom, WeChat, and Teams, along with personalized one-to-one consultation and document review support for business and private requirements.",
  },
];


const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Translation & Interpretation <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive Chinese language services tailored for every business scenario — from boardrooms to factory floors. Delivered by our expert team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-border bg-background">
                <CardContent className="p-6">
                  <div className="p-3 rounded-xl bg-accent w-fit mb-4">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-foreground mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    <span className="font-medium text-foreground">For:</span> {s.who}
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    <span className="font-medium text-foreground">Problem:</span> {s.problem}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Solution:</span> {s.why}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
