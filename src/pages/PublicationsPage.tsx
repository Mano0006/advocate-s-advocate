import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  BookOpen,
  Tv,
  Award,
  FileText,
  Newspaper,
  Mic,
} from "lucide-react";

const books = [
  { title: "Law Book 1", description: "Comprehensive guide on criminal law procedures" },
  { title: "Law Book 2", description: "Analysis of constitutional provisions" },
  { title: "Law Book 3", description: "Labour laws and administrative procedures" },
  { title: "Law Book 4", description: "Public interest litigation handbook" },
  { title: "Law Book 5", description: "Legal research methodology" },
  { title: "Law Book 6", description: "Practical guide for young advocates" },
];

const mediaAppearances = [
  {
    type: "Television",
    description: "Frequent participant in TV discussions on legal issues and matters concerning the legal fraternity",
    icon: Tv,
  },
  {
    type: "Magazine Articles",
    description: "Numerous articles published in reputed magazines on various legal topics",
    icon: Newspaper,
  },
  {
    type: "Resource Person",
    description: "Key resource person in training and sensitization programmes across different branches of law",
    icon: Mic,
  },
];

const accolades = [
  "Recognition from distinguished legal associations",
  "Awards from professional organizations",
  "Appreciation from judicial training academies",
  "Commendation for public service",
  "Recognition for contribution to legal education",
];

export default function PublicationsPage() {
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
              Publications & Media
            </h1>
            <p className="text-gold text-lg">
              Contributing to Legal Literature and Public Discourse
            </p>
          </motion.div>
        </div>
      </section>

      {/* Books Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Authored Law Books"
            subtitle="Six comprehensive books contributing to legal literature"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-elegant border border-border/50 hover:shadow-lg hover:border-gold/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                  <BookOpen className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {book.title}
                </h3>
                <p className="text-muted-foreground">{book.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-cream-dark rounded-xl p-8 text-center"
          >
            <p className="text-muted-foreground italic text-lg">
              "With a strong passion for writing, I have contributed to legal literature 
              with the aim of helping fellow advocates and aspirants understand the 
              intricacies of law in a practical manner."
            </p>
            <p className="text-foreground font-semibold mt-4">— Dr. N. Vijayaraj</p>
          </motion.div>
        </div>
      </section>

      {/* Media Appearances */}
      <section className="py-20 bg-cream-dark/50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Media Presence"
            subtitle="Active participation in legal discourse and public awareness"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {mediaAppearances.map((item, index) => (
              <motion.div
                key={item.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-8 shadow-elegant border border-border/50 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {item.type}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accolades Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                title="Recognition & Awards"
                subtitle="Accolades from distinguished associations"
                align="left"
              />

              <p className="text-muted-foreground mb-8">
                My contributions to legal literature and public discourse have been recognized 
                by many distinguished associations and organizations across the country.
              </p>

              <ul className="space-y-4">
                {accolades.map((accolade, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border/50"
                  >
                    <Award className="w-5 h-5 text-gold shrink-0" />
                    <span className="text-foreground">{accolade}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-2xl p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-8 h-8 text-gold" />
                <h3 className="font-display text-2xl font-bold text-primary-foreground">
                  Articles & Writings
                </h3>
              </div>
              
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                Beyond books, I have authored numerous articles in reputed magazines 
                covering various aspects of law including:
              </p>

              <ul className="space-y-3 text-primary-foreground/80">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  Criminal law procedures and reforms
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  Constitutional developments
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  Labour and administrative law updates
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  Legal fraternity welfare issues
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  Practical guidance for young advocates
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
