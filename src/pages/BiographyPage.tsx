import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  GraduationCap,
  Briefcase,
  Award,
  BookOpen,
  MapPin,
  Calendar,
  Users,
  Scale,
} from "lucide-react";
import advocatePortrait from "@/assets/advocate-portrait.jpg";

const timeline = [
  {
    year: "1993",
    title: "Legal Education Begins",
    description: "Joined Dr. Ambedkar Government Law College, Chennai after leaving engineering at CIT, Coimbatore",
    icon: GraduationCap,
  },
  {
    year: "1998",
    title: "Bar Council Enrolment",
    description: "Enrolled in the Bar Council with Enrolment No. Ms.820/98",
    icon: Scale,
  },
  {
    year: "1998-2000",
    title: "Mentorship Period",
    description: "Trained under Thiru R. Margabandhu (Former MP & Bar Council Chairman) and Thiru R. Duraisamy",
    icon: Users,
  },
  {
    year: "2000",
    title: "Independent Practice",
    description: "Established independent practice at Alandur and Saidapet Magistrate Courts",
    icon: Briefcase,
  },
  {
    year: "2011",
    title: "District Judge Exam",
    description: "Successfully cleared the Direct District Judge Examination",
    icon: Award,
  },
  {
    year: "2018",
    title: "Bar Council Election",
    description: "Contested Bar Council Election, narrowly missed winning by a small margin",
    icon: Calendar,
  },
];

const qualifications = [
  { degree: "M.A. (History)", institution: "Annamalai University" },
  { degree: "M.Com", institution: "Alagappa University" },
  { degree: "M.B.A. (Labour Laws)", institution: "NIBM" },
  { degree: "M.L. (Labour & Administrative Law)", institution: "Tamil Nadu Dr. Ambedkar Law University" },
  { degree: "M.Sc. (Applied Psychology)", institution: "Annamalai University" },
  { degree: "D.L.L.", institution: "Diploma in Labour Law" },
  { degree: "D.I.R.P.M.", institution: "Diploma in Industrial Relations & Personnel Management" },
  { degree: "Ph.D. in Law", institution: "Bharath University, Chennai" },
];

export default function BiographyPage() {
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
              Professional Biography
            </h1>
            <p className="text-gold text-lg">
              A Journey of Dedication, Learning, and Service
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Biography */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24">
                <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-gold/20">
                  <img
                    src={advocatePortrait}
                    alt="Dr. N. Vijayaraj"
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-6 bg-card rounded-xl p-6 shadow-elegant border border-border/50">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">Quick Facts</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-gold mt-0.5" />
                      <span className="text-muted-foreground">Hails from Thanjavur District</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <GraduationCap className="w-4 h-4 text-gold mt-0.5" />
                      <span className="text-muted-foreground">First-generation Lawyer</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Calendar className="w-4 h-4 text-gold mt-0.5" />
                      <span className="text-muted-foreground">28+ Years in Legal Practice</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <BookOpen className="w-4 h-4 text-gold mt-0.5" />
                      <span className="text-muted-foreground">Author of 6 Law Books</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Biography Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="prose prose-lg max-w-none">
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">Origins & Early Life</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I hail from an agricultural family in Thanjavur District, and I am the first-generation 
                  lawyer from my family to enter this noble profession. I completed my schooling in Kumbakonam, 
                  a city known for its rich cultural heritage and educational institutions.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Though I initially joined an engineering course at CIT, Coimbatore, my deep passion for 
                  law led me to pursue my legal studies at Dr. Ambedkar Government Law College, Chennai, in 1993.
                </p>

                <h2 className="font-display text-3xl font-bold text-foreground mb-6 mt-12">Mentorship & Training</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  My legal journey began under the esteemed mentorship of <span className="text-foreground font-semibold">
                  Thiru R. Margabandhu</span> (Former MP & Former Chairman, TN & Puducherry Bar Council) and 
                  <span className="text-foreground font-semibold"> Thiru R. Duraisamy</span>. Their guidance 
                  shaped my understanding of law and instilled in me the values of integrity and dedication 
                  to the profession.
                </p>

                <h2 className="font-display text-3xl font-bold text-foreground mb-6 mt-12">Academic Journey</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  While practising, I continued to advance my academic credentials, earning multiple degrees 
                  and diplomas that have enhanced my expertise across various domains of law and related fields.
                </p>
              </div>

              {/* Qualifications Grid */}
              <div className="grid md:grid-cols-2 gap-4 mt-8">
                {qualifications.map((qual, index) => (
                  <motion.div
                    key={qual.degree}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-lg p-4 border border-border/50 hover:shadow-elegant transition-shadow duration-300"
                  >
                    <p className="font-semibold text-foreground">{qual.degree}</p>
                    <p className="text-sm text-muted-foreground">{qual.institution}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-cream-dark/50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Career Milestones"
            subtitle="Key moments in my legal journey"
          />

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-12 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {index !== timeline.length - 1 && (
                  <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-gold/30" />
                )}
                
                {/* Icon */}
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-gold flex items-center justify-center shadow-gold">
                  <item.icon className="w-5 h-5 text-navy-dark" />
                </div>

                {/* Content */}
                <div className="bg-card rounded-xl p-6 shadow-elegant border border-border/50">
                  <span className="text-gold font-bold text-lg">{item.year}</span>
                  <h3 className="font-display text-xl font-bold text-foreground mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
