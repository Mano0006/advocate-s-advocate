import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/biography", label: "Biography" },
  { href: "/practice", label: "Practice & Expertise" },
  { href: "/manifesto", label: "Bar Council Election" },
  { href: "/publications", label: "Publications" },
  { href: "/public-service", label: "Public Service" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20); // change when scrolling 20px+
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-white border-gray-200 shadow-sm"
          : "bg-primary/95 backdrop-blur-md border-navy-light/30"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                scrolled ? "bg-gold" : "bg-gold"
              }`}
            >
              <Scale
                className={`w-5 h-5 ${
                  scrolled ? "text-navy-dark" : "text-navy-dark"
                }`}
              />
            </div>
            <div className="hidden sm:block">
              <p
                className={`font-display text-lg font-semibold leading-tight ${
                  scrolled ? "text-navy-dark" : "text-primary-foreground"
                }`}
              >
                Dr. N. Vijayaraj
              </p>
              <p className="text-gold text-xs tracking-wider uppercase">
                Advocate
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.href
                    ? "bg-gold/20 text-gold"
                    : scrolled
                    ? "text-navy-dark/80 hover:text-gold hover:bg-gold/10"
                    : "text-primary-foreground/80 hover:text-gold hover:bg-gold/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`lg:hidden hover:bg-gold/20 ${
              scrolled ? "text-navy-dark" : "text-primary-foreground"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`lg:hidden border-t ${
              scrolled
                ? "bg-white border-gray-200"
                : "bg-primary border-navy-light/30"
            }`}
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                      location.pathname === link.href
                        ? "bg-gold/20 text-gold"
                        : scrolled
                        ? "text-navy-dark hover:text-gold hover:bg-gold/10"
                        : "text-primary-foreground/80 hover:text-gold hover:bg-gold/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
