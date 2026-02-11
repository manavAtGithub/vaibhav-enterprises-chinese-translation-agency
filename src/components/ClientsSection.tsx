import { motion } from "framer-motion";
import dmrcLogo from "@/assets/Delhi_Metro_logo.svg.png"
import iittm from "@/assets/Indian_Institute_of_Travel_and_Tourism_Management_Logo.svg.png"
import jspl from "@/assets/Jindal_Steel_and_Power_Logo.svg.png"
import dtt from "@/assets/Logo_of_Delhi_Tourism.png"
import acre from "@/assets/trs_img_20.png"
import tatasteel from "@/assets/tata-steel-logo-blue-background-wur617j4ikw1llzc-wur617j4ikw1llzc.png"
import hzl from "@/assets/HZL_Logo.png"

const galleryItems = [
  "Factory Inspection",
  "Supplier Negotiation",
  "Trade Expo",
  "Government Delegation",
  "Quality Audit",
  "Business Summit",
];

const clients = [
  { name: "DMRC", logo: dmrcLogo },
  { name: "SANY Group", logo: iittm },
  { name: "ZTE Corporation", logo: jspl },
  { name: "Confederation of Indian Industry", logo: dtt },
  { name: "acre", logo: acre },
  { name: "tata", logo: tatasteel },
  { name: "hzl", logo: hzl },
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
            Trusted by leading corporations, government agencies, and SMEs
            across diverse industries.
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
              <span className="text-accent-foreground/60 text-sm font-medium text-center px-4">
                {item}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Client logos/names */}
        <div className="text-center">
          <h3 className="font-serif font-semibold text-xl text-foreground mb-6">
            Trusted By
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {clients.map((c) => (
              <div
                key={c.name}
                className="bg-secondary rounded-xl border border-border p-4 flex items-center justify-center w-40 h-20 hover:scale-105 transition"
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  className="max-h-10 object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
