import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Project Engineering Head",
    company: "Integrated Steel Manufacturing Unit",
    text: "They supported our Coke Oven Battery expansion and commissioning phase with precise technical interpretation between Indian and Chinese engineers. Their understanding of PLC systems, MCC panels, and plant operations ensured smooth execution without communication gaps.",
  },
  {
    name: "Operations Director",
    company: "Chemical Manufacturing Company",
    text: "During machinery installation and chemical process coordination, their interpreters accurately translated complex discussions involving Bromination and Grignard chemistry. This minimized downtime and prevented costly operational misunderstandings.",
  },
  {
    name: "Trade & Investment Coordinator",
    company: "Export Promotion Council",
    text: "We engaged the team for industrial delegation meetings and cross-border trade discussions. Their structured, professional interpretation maintained clarity in technical, regulatory, and commercial negotiations throughout the engagement.",
  },
];


const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            What Clients <span className="text-primary">Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted feedback from businesses and organizations across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Card className="h-full border-border bg-background">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                    "{t.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.company}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
