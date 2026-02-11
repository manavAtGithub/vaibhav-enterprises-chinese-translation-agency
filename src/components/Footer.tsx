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
            <h3 className="font-serif text-xl font-bold mb-3">
              Vaibhav Language Translation Services
            </h3>
            <p className="text-sm text-background/70 leading-relaxed">
              Professional Chinese (Mandarin) Translation & Interpretation
              agency based in India. Serving businesses, agencies, and
              government organizations.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
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
            © {new Date().getFullYear()} Vaibhav Language Translation Services —
            Chinese Translation & Interpretation Services. All rights reserved.
            <p className="text-xs text-gray-400 mt-2">
              Website by{" "}
              <a
                href="https://your-portfolio-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 hover:text-teal-600 transition-colors duration-200 underline-offset-2 hover:underline"
              >
                Manav
              </a>
            </p>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
