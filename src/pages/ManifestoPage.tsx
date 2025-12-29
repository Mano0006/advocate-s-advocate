import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Heart,
  GraduationCap,
  Briefcase,
  Building,
  Users,
  CheckCircle,
  ArrowRight,
  Target,
  Lightbulb,
} from "lucide-react";

const manifestoPromises = [
  {
    icon: Shield,
    title: "Advocate Welfare Protection",
    points: [
      "Comprehensive health insurance coverage for advocates and families",
      "Emergency financial assistance fund for advocates in distress",
      "Pension schemes for senior advocates",
      "Life insurance benefits enhancement",
    ],
  },
  {
    icon: GraduationCap,
    title: "Education & Training",
    points: [
      "Free coaching classes for Judicial Service & APP aspirants",
      "Regular legal education workshops and seminars",
      "Support for advocates pursuing higher education",
      "Digital literacy programs for senior advocates",
    ],
  },
  {
    icon: Briefcase,
    title: "Professional Development",
    points: [
      "Enhanced library facilities with digital resources",
      "Modern infrastructure in Bar Association halls",
      "Continuing legal education programs",
      "Mentorship programs for young advocates",
    ],
  },
  {
    icon: Building,
    title: "Infrastructure & Facilities",
    points: [
      "Air-conditioned waiting rooms in all court complexes",
      "Improved restroom facilities",
      "Parking facilities for advocates",
      "Digital court room access facilities",
    ],
  },
  {
    icon: Users,
    title: "Community Support",
    points: [
      "Scholarship programs for advocates' children",
      "Housing assistance schemes",
      "Legal aid center support and expansion",
      "Retired advocates welfare programs",
    ],
  },
  {
    icon: Heart,
    title: "Health & Well-being",
    points: [
      "Regular health camps and check-ups",
      "Stress management and counseling support",
      "Tie-ups with hospitals for discounted treatment",
      "Medical emergency support system",
    ],
  },
];

const visionPoints = [
  "Transform the Bar Council into a proactive body for advocate welfare",
  "Bridge the gap between senior and junior advocates",
  "Ensure transparent and accountable governance",
  "Strengthen the voice of advocates at policy-making levels",
  "Foster unity and solidarity among the legal fraternity",
];

export default function ManifestoPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 30%, hsl(38 92% 50% / 0.3) 0%, transparent 50%)`,
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gold/20 text-gold px-6 py-3 rounded-full text-lg font-semibold mb-6"
            >
              <Target className="w-5 h-5" />
              Bar Council Election 2025
            </motion.div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Election Manifesto
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
              A comprehensive vision for the welfare and advancement of the advocate community. 
              Practical initiatives, innovative schemes, and result-oriented measures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-8 h-8 text-gold" />
                <span className="text-gold font-semibold uppercase tracking-wider">My Vision</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Bar Council That Works For You
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With 28 years of dedicated service to the legal profession and having stood by 
                my fellow advocates through every challenge, I bring forward a vision of 
                transformative change for our community.
              </p>

              <ul className="space-y-4">
                {visionPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                    <span className="text-foreground">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-primary rounded-2xl p-8 md:p-10 text-center"
            >
              <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                My Commitment
              </h3>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6">
                If elected, I assure you that I will faithfully implement every promise I make 
                and will work tirelessly to ensure these plans are transformed into effective 
                action for the benefit of all advocates.
              </p>
              <div className="inline-block bg-gold text-navy-dark px-8 py-4 rounded-xl font-bold text-lg shadow-gold">
                Vote 1st Preference
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manifesto Promises */}
      <section className="py-20 bg-cream-dark/50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Key Initiatives & Promises"
            subtitle="Practical, result-oriented measures for advocate welfare"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {manifestoPromises.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-elegant border border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  {item.title}
                </h3>
                <ul className="space-y-2">
                  {item.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Together, Let's Build a Stronger Legal Community
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10">
              Your first preferential vote will enable me to implement these initiatives 
              and work for the betterment of every advocate in Tamil Nadu and Puducherry.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="gold" size="xl">
                  Contact Me
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/public-service">
                <Button variant="heroOutline" size="xl">
                  View My Service Record
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
