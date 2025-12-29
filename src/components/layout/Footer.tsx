import { Link } from "react-router-dom";
import { Scale, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                <Scale className="w-5 h-5 text-navy-dark" />
              </div>
              <div>
                <p className="font-display text-lg font-semibold">Dr. N. Vijayaraj</p>
                <p className="text-gold text-xs tracking-wider uppercase">Advocate</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              28 years of dedicated service to the legal profession. Practising Advocate before the Hon'ble High Court of Madras.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-gold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "/biography", label: "Biography" },
                { href: "/practice", label: "Legal Practice" },
                { href: "/manifesto", label: "Bar Council Election" },
                { href: "/publications", label: "Publications" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-gold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-primary-foreground/70">
                  High Court of Madras, Chennai, Tamil Nadu
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span className="text-primary-foreground/70">+91 9884442080 </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span className="text-primary-foreground/70">vijaycourt@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Bar Council Info */}
          <div>
            <h4 className="font-display text-gold text-lg mb-4">Credentials</h4>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <p>Enrolment No: Ms.820/98</p>
              <p>Bar Council of Tamil Nadu & Puducherry</p>
              <p>Notary Public, Govt. of India</p>
              <p>Special Public Prosecutor</p>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-light/30 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Dr. N. Vijayaraj. All rights reserved.
          </p>
          <p className="text-sm text-gold font-medium">
            Vote for Integrity • Vote for Change • Vote 1st Preference
          </p>
        </div>
      </div>
    </footer>
  );
}
