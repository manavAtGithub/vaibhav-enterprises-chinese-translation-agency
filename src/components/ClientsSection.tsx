import { motion } from "framer-motion";

const galleryItems = [
  "Factory Inspection",
  "Supplier Negotiation",
  "Trade Expo",
  "Government Delegation",
  "Quality Audit",
  "Business Summit",
];

const clients = [
  "Huawei Technologies",
  "SANY Group",
  "ZTE Corporation",
  "Confederation of Indian Industry",
  "India-China Chamber of Commerce",
  "Various SMEs & Trade Agencies",
];

const ClientsSection = () => {
  return (
    <section id="clients" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Clients & <span className="text-primary">Work Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading corporations, government agencies, and SMEs across diverse industries.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-14">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="aspect-video bg-accent rounded-xl flex items-center justify-center border border-border"
            >
              <span className="text-accent-foreground/60 text-sm font-medium text-center px-4">{item}</span>
            </motion.div>
          ))}
        </div>

        {/* Client logos/names */}
        <div className="text-center">
          <h3 className="font-serif font-semibold text-xl text-foreground mb-6">Trusted By</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {clients.map((c) => (
              <div
                key={c}
                className="px-5 py-3 bg-secondary rounded-lg text-sm font-medium text-muted-foreground border border-border"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
