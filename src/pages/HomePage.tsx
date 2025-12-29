import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCard } from "@/components/ui/StatCard";
import {
  Scale,
  Award,
  BookOpen,
  Users,
  Briefcase,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react";
import advocatePortrait from "@/assets/advocate-portrait.jpg";

const stats = [
  { icon: Briefcase, number: "28+", label: "Years of Experience" },
  { icon: Scale, number: "1000+", label: "Cases Handled" },
  { icon: BookOpen, number: "6", label: "Books Published" },
  { icon: Users, number: "3", label: "MHAA Terms Served" },
];

const highlights = [
  "Senior Advocate, Hon'ble High Court of Madras",
  "Special Public Prosecutor - Govt. of Tamil Nadu",
  "Notary Public - Government of India",
  "Ph.D. in Law from Bharath University",
  "Former MHAA Executive Committee Member",
  "High Court Trained Mediator",
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-hero-gradient overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="min-h-[90vh] flex items-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-20">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-medium mb-6"
                >
                  <Scale className="w-4 h-4" />
                  <span>Bar Council Election 2025</span>
                </motion.div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                  Dr. N. Vijayaraj
                  <span className="block text-gold mt-2">Advocate</span>
                </h1>

                <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                  28 years of unwavering dedication to the legal profession. 
                  Candidate for <span className="text-gold font-semibold">Tamil Nadu & Puducherry Bar Council</span>.
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <Link to="/manifesto">
                    <Button variant="hero" size="xl">
                      View My Manifesto
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="heroOutline" size="xl">
                      Contact Me
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center gap-6 text-primary-foreground/70 text-sm">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-gold" />
                    <span>Enrolment: Ms.820/98</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-gold" />
                    <span>Ph.D. in Law</span>
                  </div>
                </div>
              </motion.div>

              {/* Portrait */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="order-1 lg:order-2 flex justify-center"
              >
                <div className="relative">
                  {/* Decorative ring */}
                  <div className="absolute -inset-4 rounded-full border-2 border-gold/30 animate-pulse" />
                  <div className="absolute -inset-8 rounded-full border border-gold/10" />
                  
                  {/* Image container */}
                  <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gold shadow-2xl">
                    <img
                      src={advocatePortrait}
                      alt="Dr. N. Vijayaraj - Senior Advocate"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gold text-navy-dark px-6 py-3 rounded-full font-bold shadow-gold whitespace-nowrap"
                  >
                    Vote 1st Preference
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              className="fill-background"
            />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background relative -mt-1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                icon={stat.icon}
                number={stat.number}
                label={stat.label}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-cream-dark/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                title="A Legacy of Legal Excellence"
                subtitle="From the agricultural fields of Thanjavur to the halls of the High Court"
                align="left"
              />
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                I am the first-generation lawyer from my family, driven by a deep passion for law. 
                My journey from CIT Coimbatore to Dr. Ambedkar Government Law College shaped my 
                commitment to justice and the legal fraternity.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                With mentorship from Thiru R. Margabandhu (Former MP & Bar Council Chairman) and 
                extensive academic credentials including Ph.D. in Law, I have dedicated my career 
                to serving both the legal profession and the public.
              </p>

              <Link to="/biography">
                <Button variant="gold" size="lg">
                  Read Full Biography
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-2xl p-8 shadow-elegant border border-border/50"
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Star className="w-6 h-6 text-gold" />
                Key Highlights
              </h3>
              <ul className="space-y-4">
                {highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span className="text-foreground">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, hsl(38 92% 50% / 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 50%, hsl(38 92% 50% / 0.2) 0%, transparent 50%)`,
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Your Vote is Your Voice
            </h2>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-10">
              I humbly seek your support, trust, and valuable first preferential vote 
              to serve the advocates' fraternity with commitment, integrity, and purpose.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/manifesto">
                <Button variant="gold" size="xl">
                  View My Manifesto
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/public-service">
                <Button variant="heroOutline" size="xl">
                  Free Coaching Programs
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
