import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  GraduationCap,
  Users,
  Megaphone,
  Heart,
  Shield,
  HandHeart,
  BookOpen,
  ArrowRight,
  CheckCircle,
  Calendar,
  MapPin,
  Clock,
} from "lucide-react";

const publicServices = [
  {
    icon: GraduationCap,
    title: "Honorary Visiting Faculty",
    description: "Serving as Honorary Visiting Faculty at a private law college in Chennai",
  },
  {
    icon: Shield,
    title: "Police Academy Training",
    description: "Regular classes at the Police Academy on legal procedures",
  },
  {
    icon: Users,
    title: "Judicial Officers Training",
    description: "Delivering training sessions for Judicial Officers",
  },
  {
    icon: HandHeart,
    title: "DLSA Panel Advocate",
    description: "DLSA Chennai 'B' Panel Advocate providing legal aid services",
  },
  {
    icon: Megaphone,
    title: "Advocate Rights Activism",
    description: "Consistently participated in dharnas and protests for advocate welfare",
  },
  {
    icon: Heart,
    title: "24/7 Advocate Support",
    description: "Standing by fellow advocates in difficulties, offering help and guidance",
  },
];

const coachingPrograms = [
  {
    title: "Judicial Service Examination",
    description: "Comprehensive coaching for aspiring judicial officers",
    duration: "6 months intensive program",
    features: ["Mock tests", "Interview preparation", "Study materials", "Previous year analysis"],
  },
  {
    title: "APP Examination Preparation",
    description: "Preparation for Assistant Public Prosecutor examination",
    duration: "4 months program",
    features: ["Subject-wise coaching", "Case study analysis", "Mock interviews", "Doubt clearing sessions"],
  },
  {
    title: "Manithaneyam Academy",
    description: "Free coaching through the renowned Manithaneyam Academy",
    duration: "Ongoing programs",
    features: ["Free of cost", "Expert faculty", "Regular assessments", "Career guidance"],
  },
];

export default function PublicServicePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enrollment Request Submitted!",
      description: "We will contact you shortly with more details about the program.",
    });
    setFormData({ name: "", email: "", phone: "", program: "", message: "" });
  };

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
              Public Service Record
            </h1>
            <p className="text-gold text-lg">
              Dedicated to the Community, Committed to the Profession
            </p>
          </motion.div>
        </div>
      </section>

      {/* Public Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Service to the Community"
            subtitle="A lifetime of dedication to public service and professional upliftment"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publicServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-elegant border border-border/50 hover:shadow-lg hover:border-gold/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Coaching Programs */}
      <section id="coaching" className="py-20 bg-cream-dark/50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Free Coaching Programs"
            subtitle="Empowering the next generation of legal professionals"
          />

          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {coachingPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl overflow-hidden shadow-elegant border border-border/50"
              >
                <div className="bg-primary p-6">
                  <BookOpen className="w-10 h-10 text-gold mb-4" />
                  <h3 className="font-display text-xl font-bold text-primary-foreground">
                    {program.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gold mb-4">
                    <Clock className="w-4 h-4" />
                    <span>{program.duration}</span>
                  </div>
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enrollment Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto bg-card rounded-2xl p-8 shadow-elegant border border-border/50"
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
              Enroll Now
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-background"
                />
                <select
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">Select Program</option>
                  <option value="judicial">Judicial Service Examination</option>
                  <option value="app">APP Examination</option>
                  <option value="manithaneyam">Manithaneyam Academy</option>
                </select>
              </div>
              <Textarea
                placeholder="Additional Message (Optional)"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-background"
                rows={4}
              />
              <Button type="submit" variant="gold" size="lg" className="w-full">
                Submit Enrollment Request
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* MHAA Service */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto"
          >
            <Users className="w-16 h-16 text-gold mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              MHAA Executive Committee Member
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              I had the privilege of being elected as an Executive Committee Member of MHAA 
              for three terms. Throughout my tenure, I have consistently taken part in all 
              programmes, dharnas, and protests organised for the welfare and rights of the 
              advocate community.
            </p>
            <p className="text-gold font-semibold text-xl">
              "Whenever my fellow advocates faced difficulties, I stood by them 24×7"
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
