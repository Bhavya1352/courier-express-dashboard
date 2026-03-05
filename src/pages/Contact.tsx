import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Headphones, MessageSquare, Truck, Package, Shield, Users } from "lucide-react";
import { useDirection } from "@/contexts/DirectionContext";

const contactMethods = [
  { 
    icon: Mail, 
    title: "Email Support", 
    value: "support@swiftfleet.com",
    desc: "Get detailed responses within 2 hours",
    available: "24/7 Available"
  },
  { 
    icon: Phone, 
    title: "Phone Support", 
    value: "+91 1800-SWIFT-1 (1800-794-381)",
    desc: "Speak directly with our logistics experts",
    available: "Mon-Sat, 9 AM - 9 PM"
  },
  { 
    icon: MessageSquare, 
    title: "WhatsApp Business", 
    value: "+91 98765 43210",
    desc: "Quick queries and shipment updates",
    available: "24/7 Available"
  },
  { 
    icon: MapPin, 
    title: "Head Office", 
    value: "SwiftFleet Logistics Hub",
    desc: "Plot 45, Sector 62, Noida, UP 201301",
    available: "Mon-Sat, 10 AM - 6 PM"
  },
];

const departments = [
  {
    icon: Package,
    title: "New Shipments",
    desc: "Get started with your first delivery or bulk shipping solutions",
    contact: "sales@swiftfleet.com",
    phone: "+91 98765 43211"
  },
  {
    icon: Headphones,
    title: "Customer Support",
    desc: "Track packages, delivery issues, or general inquiries",
    contact: "support@swiftfleet.com",
    phone: "+91 98765 43212"
  },
  {
    icon: Truck,
    title: "Enterprise Solutions",
    desc: "Custom logistics solutions for high-volume businesses",
    contact: "enterprise@swiftfleet.com",
    phone: "+91 98765 43213"
  },
  {
    icon: Shield,
    title: "Claims & Insurance",
    desc: "Report damaged or lost packages, insurance claims",
    contact: "claims@swiftfleet.com",
    phone: "+91 98765 43214"
  },
];

const offices = [
  {
    city: "Mumbai",
    address: "SwiftFleet Western Hub, Andheri East, Mumbai - 400069",
    phone: "+91 22 4567 8901",
    coverage: "Maharashtra, Goa, Gujarat"
  },
  {
    city: "Bangalore",
    address: "SwiftFleet Southern Hub, Electronic City, Bangalore - 560100",
    phone: "+91 80 4567 8902",
    coverage: "Karnataka, Tamil Nadu, Kerala, Andhra Pradesh"
  },
  {
    city: "Delhi NCR",
    address: "SwiftFleet Northern Hub, Sector 62, Noida - 201301",
    phone: "+91 11 4567 8903",
    coverage: "Delhi, Punjab, Haryana, Rajasthan, UP"
  },
  {
    city: "Kolkata",
    address: "SwiftFleet Eastern Hub, Salt Lake, Kolkata - 700091",
    phone: "+91 33 4567 8904",
    coverage: "West Bengal, Odisha, Jharkhand, Bihar"
  },
];

const Contact = () => {
  const { isRTL } = useDirection();

  return (
  <div className="min-h-screen bg-background">
    <Navbar />
    
    {/* Hero Section */}
    <section dir="ltr" className="pt-32 pb-16">
      <div className="container max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Contact SwiftFleet</p>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            {isRTL ? (
              <>
                ,Get in <span className="text-gradient">Touch</span>.
              </>
            ) : (
              <>
                Get in <span className="text-gradient">Touch.</span>
              </>
            )}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Need help with shipping, tracking, or have questions about our courier services? 
            Our logistics experts are here to assist you 24/7.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Contact Form & Info */}
    <section className="pb-24">
      <div className="container max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Send us a Message</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-foreground font-medium mb-2 block">First Name</label>
                    <Input placeholder="John" className="bg-secondary border-border" />
                  </div>
                  <div>
                    <label className="text-sm text-foreground font-medium mb-2 block">Last Name</label>
                    <Input placeholder="Doe" className="bg-secondary border-border" />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-foreground font-medium mb-2 block">Email Address</label>
                  <Input type="email" placeholder="john@company.com" className="bg-secondary border-border" />
                </div>
                <div>
                  <label className="text-sm text-foreground font-medium mb-2 block">Phone Number</label>
                  <Input type="tel" placeholder="+91 98765 43210" className="bg-secondary border-border" />
                </div>
                <div>
                  <label className="text-sm text-foreground font-medium mb-2 block">Inquiry Type</label>
                  <select className="w-full px-3 py-2 bg-secondary border border-border rounded-md text-foreground">
                    <option>General Inquiry</option>
                    <option>New Shipment</option>
                    <option>Track Package</option>
                    <option>Enterprise Solutions</option>
                    <option>Claims & Support</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-foreground font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell us about your shipping needs, tracking issues, or any questions you have..." 
                    rows={5} 
                    className="bg-secondary border-border" 
                  />
                </div>
                <Button variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  We typically respond within 2 hours during business hours.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">Reach Out Directly</h2>
            {contactMethods.map((item, i) => (
              <motion.div 
                key={item.title} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-primary font-medium mb-1">{item.value}</p>
                  <p className="text-xs text-muted-foreground mb-2">{item.desc}</p>
                  <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">{item.available}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

    {/* Department Contacts */}
    <section className="py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Department Contacts</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect directly with the right team for faster resolution of your queries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {departments.map((dept, i) => (
            <motion.div
              key={dept.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <dept.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-foreground mb-2">{dept.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{dept.desc}</p>
                  <div className="space-y-1">
                    <p className="text-sm text-primary font-medium">{dept.contact}</p>
                    <p className="text-sm text-muted-foreground">{dept.phone}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Regional Offices */}
    <section className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Regional Offices</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visit our regional hubs across India for in-person assistance and logistics support.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {offices.map((office, i) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-foreground mb-1">{office.city}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{office.address}</p>
                  <p className="text-sm text-primary font-medium mb-2">{office.phone}</p>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium">Coverage:</span> {office.coverage}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Emergency Contact */}
    <section className="py-16 border-y border-border">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-display font-bold text-foreground mb-2">24/7 Emergency Support</h3>
          <p className="text-muted-foreground mb-4">
            For urgent delivery issues, lost packages, or time-sensitive shipments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg">
              <Phone className="w-4 h-4 mr-2" />
              Call Emergency: +91 1800-URGENT
            </Button>
            <Button variant="heroOutline" size="lg">
              <MessageSquare className="w-4 h-4 mr-2" />
              WhatsApp: +91 98765 00000
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
    
    <Footer />
  </div>
  );
};

export default Contact;
