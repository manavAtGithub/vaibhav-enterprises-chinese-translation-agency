const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-3">Vaibhav Enterprises</h3>
            <p className="text-sm text-background/70 leading-relaxed">
              Professional Chinese (Mandarin) Translation & Interpretation agency based in India. Serving businesses, agencies, and government organizations.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Email: nitesh@example.com</li>
              <li>Phone: +91 99999 99999</li>
              <li>WhatsApp: +91 99999 99999</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 text-center">
          <p className="text-xs text-background/50">
            © {new Date().getFullYear()} Vaibhav Enterprises — Chinese Translation & Interpretation Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
