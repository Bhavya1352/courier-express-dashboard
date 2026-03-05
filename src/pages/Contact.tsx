import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-32 pb-24">
      <div className="container max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Contact Us</p>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Get in <span className="text-gradient">Touch.</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Have questions about our services? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            <div className="glass rounded-2xl p-8 space-y-6">
              <div>
                <label className="text-sm text-foreground font-medium mb-2 block">Full Name</label>
                <Input placeholder="John Doe" className="bg-secondary border-border" />
              </div>
              <div>
                <label className="text-sm text-foreground font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="john@example.com" className="bg-secondary border-border" />
              </div>
              <div>
                <label className="text-sm text-foreground font-medium mb-2 block">Message</label>
                <Textarea placeholder="Tell us about your delivery needs..." rows={5} className="bg-secondary border-border" />
              </div>
              <Button variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="space-y-6">
            {[
              { icon: Mail, title: "Email", value: "support@swiftfleet.com" },
              { icon: Phone, title: "Phone", value: "+91 98765 43210" },
              { icon: MapPin, title: "Office", value: "SwiftFleet HQ, Sector 62, Noida, UP 201301" },
            ].map((item) => (
              <div key={item.title} className="glass rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Contact;
