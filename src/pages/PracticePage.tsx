import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Scale,
  Gavel,
  Building2,
  Shield,
  Users,
  FileText,
  Landmark,
  BadgeCheck,
} from "lucide-react";

const practiceAreas = [
  {
    icon: Gavel,
    title: "Criminal Law",
    description: "Primary specialization with extensive experience in handling criminal matters across all courts.",
  },
  {
    icon: Shield,
    title: "POTA & Bomb Blast Cases",
    description: "Appointed as Special Public Prosecutor for sensitive and high-profile cases.",
  },
  {
    icon: Building2,
    title: "Corporate Representation",
    description: "Representing corporations and public-sector undertakings before various courts and forums.",
  },
  {
    icon: Users,
    title: "Mediation & Arbitration",
    description: "High Court trained Mediator handling complex arbitration matters.",
  },
  {
    icon: FileText,
    title: "Public Interest Litigation",
    description: "Filed numerous PILs serving both the general public and the legal fraternity.",
  },
  {
    icon: Landmark,
    title: "Constitutional Law",
    description: "Extensive practice in constitutional matters before the Hon'ble High Court.",
  },
];

const courts = [
  { name: "Hon'ble High Court of Madras", type: "Primary" },
  { name: "City Civil Courts", type: "Regular" },
  { name: "Sessions Courts across Tamil Nadu", type: "Regular" },
  { name: "Magistrate Courts", type: "Regular" },
  { name: "Various Forums across India", type: "Special" },
];

const appointments = [
  {
    title: "Special Public Prosecutor",
    issuer: "Government of Tamil Nadu",
    description: "For Bomb Blast Cases, POTA Cases, and other sensitive matters",
  },
  {
    title: "Notary Public",
    issuer: "Government of India",
    description: "Authorized to perform notarial acts",
  },
  {
    title: "Oath Commissioner",
    issuer: "Government of Tamil Nadu",
    description: "Empowered to administer oaths",
  },
  {
    title: "DLSA Chennai 'B' Panel Advocate",
    issuer: "District Legal Services Authority",
    description: "Providing legal aid services",
  },
  {
    title: "High Court Trained Mediator",
    issuer: "High Court of Madras",
    description: "Certified to conduct court-annexed mediation",
  },
];

export default function PracticePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Legal Practice & Expertise
            </h1>
            <p className="text-gold text-lg">
              28 Years of Distinguished Service in Criminal Law
            </p>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Areas of Practice"
            subtitle="Comprehensive legal expertise across multiple domains"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-elegant border border-border/50 hover:shadow-lg hover:border-gold/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                  <area.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {area.title}
                </h3>
                <p className="text-muted-foreground">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courts Section */}
      <section className="py-20 bg-cream-dark/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                title="Courts of Practice"
                subtitle="Active practice across multiple jurisdictions"
                align="left"
              />

              <p className="text-muted-foreground mb-8">
                Since establishing independent practice in 2000, I have expanded my practice 
                from Alandur and Saidapet Magistrate Courts to George Town, Egmore, and 
                Tambaram Courts. Today, I actively practice before multiple courts handling 
                a wide spectrum of cases.
              </p>

              <div className="space-y-4">
                {courts.map((court, index) => (
                  <motion.div
                    key={court.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 bg-card rounded-lg p-4 border border-border/50"
                  >
                    <Scale className="w-5 h-5 text-gold shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{court.name}</p>
                      <span className="text-xs text-gold uppercase tracking-wider">{court.type}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-2xl p-8 text-primary-foreground"
            >
              <div className="flex items-center gap-3 mb-6">
                <BadgeCheck className="w-8 h-8 text-gold" />
                <h3 className="font-display text-2xl font-bold">Official Appointments</h3>
              </div>
              
              <div className="space-y-6">
                {appointments.map((appointment, index) => (
                  <motion.div
                    key={appointment.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="border-b border-navy-light/30 pb-4 last:border-0 last:pb-0"
                  >
                    <h4 className="font-semibold text-gold">{appointment.title}</h4>
                    <p className="text-primary-foreground/70 text-sm">{appointment.issuer}</p>
                    <p className="text-primary-foreground/60 text-sm mt-1">{appointment.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant border border-border/50 text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              Track Record of Excellence
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="font-display text-4xl md:text-5xl font-bold text-gold">100s</p>
                <p className="text-muted-foreground">Sensational Cases</p>
              </div>
              <div>
                <p className="font-display text-4xl md:text-5xl font-bold text-gold">28+</p>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="font-display text-4xl md:text-5xl font-bold text-gold">5+</p>
                <p className="text-muted-foreground">Court Jurisdictions</p>
              </div>
              <div>
                <p className="font-display text-4xl md:text-5xl font-bold text-gold">3</p>
                <p className="text-muted-foreground">MHAA Terms</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
