import { motion } from "framer-motion";
import { FileText, MessageSquare, Factory, Plane, Monitor, Languages } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: FileText,
    title: "Chinese ↔ English Translation",
    who: "Businesses, law firms, and agencies",
    problem: "Miscommunication in contracts, documents, and correspondence can cost millions.",
    why: "Accurate, context-aware translation by a native-level speaker ensures every detail is preserved.",
  },
  {
    icon: Languages,
    title: "Chinese ↔ Hindi Translation",
    who: "Indian manufacturers & traders",
    problem: "Language barriers between Chinese suppliers and Hindi-speaking teams slow down operations.",
    why: "Direct Chinese-Hindi interpretation eliminates the need for double translation.",
  },
  {
    icon: MessageSquare,
    title: "Business Meetings & Negotiations",
    who: "Corporates, investors, and joint ventures",
    problem: "Nuance and tone get lost in high-stakes negotiations without a skilled interpreter.",
    why: "Professional interpretation ensures your intent, authority, and proposals are communicated precisely.",
  },
  {
    icon: Factory,
    title: "Factory Visits & Manufacturing",
    who: "Import-export businesses and quality inspectors",
    problem: "Technical miscommunication on the factory floor leads to defective products and delays.",
    why: "Specialized manufacturing vocabulary and on-site experience keep your production on track.",
  },
  {
    icon: Plane,
    title: "Trade Fairs & Delegations",
    who: "Government bodies, chambers of commerce, exhibitors",
    problem: "Missing connections at trade events due to language gaps costs real business opportunities.",
    why: "Fluent, professional interpretation maximizes every conversation at exhibitions and summits.",
  },
  {
    icon: Monitor,
    title: "Remote Interpretation",
    who: "Anyone needing virtual language support",
    problem: "International video calls stall without real-time language assistance.",
    why: "Seamless interpretation via Zoom, WeChat, or Teams — as effective as being in the room.",
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
            Comprehensive Chinese language services tailored for every business scenario — from boardrooms to factory floors.
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
