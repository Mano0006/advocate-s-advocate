import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Building,
  Calendar,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    details: ["High Court of Madras", "Chennai, Tamil Nadu"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 98844 42080"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["vijaycourt@gmail.com"],
  },
  {
    icon: Clock,
    title: "Consultation Hours",
    details: ["Monday - Saturday", "10:00 AM - 6:00 PM"],
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. We will respond to your inquiry shortly.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
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
              Contact & Consultation
            </h1>
            <p className="text-gold text-lg">
              Reach Out for Legal Consultation or Campaign Support
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                title="Get in Touch"
                subtitle="I look forward to hearing from you"
                align="left"
              />

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Credentials Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-primary rounded-xl p-6 text-primary-foreground"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Building className="w-6 h-6 text-gold" />
                  <h3 className="font-display text-xl font-bold">Official Credentials</h3>
                </div>
                <div className="space-y-2 text-primary-foreground/80">
                  <p><span className="text-gold">Enrolment No:</span> Ms.820/98</p>
                  <p><span className="text-gold">Bar Council:</span> Tamil Nadu & Puducherry</p>
                  <p><span className="text-gold">Notary:</span> Government of India</p>
                  <p><span className="text-gold">Role:</span> Special Public Prosecutor</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-elegant border border-border/50"
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Send a Message
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
                    className="bg-background"
                  />
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select Subject</option>
                    <option value="legal">Legal Consultation</option>
                    <option value="campaign">Campaign Support</option>
                    <option value="coaching">Free Coaching Programs</option>
                    <option value="media">Media Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-background"
                  rows={6}
                />
                <Button type="submit" variant="gold" size="lg" className="w-full">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Campaign Support CTA */}
      <section className="py-20 bg-cream-dark/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <Calendar className="w-16 h-16 text-gold mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Bar Council Election 2025
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              I sincerely seek your support, trust, and your valuable first preferential vote 
              to serve our noble legal fraternity with commitment, integrity, and purpose.
            </p>
            <div className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-xl shadow-lg">
              <p className="text-gold font-bold text-xl mb-1">Vote 1st Preference</p>
              <p className="text-sm">Dr. N. Vijayaraj — Symbol/No: [To be updated]</p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
