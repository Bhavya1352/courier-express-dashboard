import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, Target, Award, TrendingUp, Truck, Shield, Clock, MapPin, Package, Globe, CheckCircle2, Star } from "lucide-react";
import { useDirection } from "@/contexts/DirectionContext";

const values = [
  { icon: Target, title: "Mission Driven", desc: "Redefining logistics with technology that puts reliability first." },
  { icon: Users, title: "Customer First", desc: "Every decision we make is centered around your delivery experience." },
  { icon: Award, title: "Excellence", desc: "We hold ourselves to the highest standards in every package we handle." },
  { icon: TrendingUp, title: "Innovation", desc: "Constantly pushing boundaries with AI, IoT, and automation." },
];

const stats = [
  { value: "50,000+", label: "Daily Deliveries" },
  { value: "500+", label: "Cities Covered" },
  { value: "99.7%", label: "On-Time Rate" },
  { value: "10,000+", label: "Business Partners" },
];

const services = [
  { icon: Truck, title: "Express Delivery", desc: "Same-day and next-day delivery across major cities" },
  { icon: Shield, title: "Secure Handling", desc: "End-to-end security with insurance coverage" },
  { icon: Clock, title: "Real-Time Tracking", desc: "Live GPS tracking with accurate ETAs" },
  { icon: MapPin, title: "Wide Coverage", desc: "Serving 500+ cities and 25,000+ pin codes" },
  { icon: Package, title: "Bulk Solutions", desc: "Enterprise-grade logistics for high-volume shippers" },
  { icon: Globe, title: "Pan-India Network", desc: "Comprehensive delivery network across all states" },
];

const milestones = [
  { year: "2018", title: "Founded in Mumbai", desc: "Started with a vision to revolutionize Indian logistics" },
  { year: "2019", title: "First 1000 Deliveries", desc: "Achieved our first milestone with local businesses" },
  { year: "2020", title: "Multi-City Expansion", desc: "Expanded operations to 50+ cities across India" },
  { year: "2021", title: "Technology Integration", desc: "Launched AI-powered route optimization system" },
  { year: "2022", title: "10,000+ Partners", desc: "Crossed 10,000 business partnerships milestone" },
  { year: "2023", title: "50,000 Daily Deliveries", desc: "Processing over 50,000 packages daily" },
];

const About = () => {
  const { isRTL } = useDirection();

  return (
  <div className="min-h-screen bg-background">
    <Navbar />
    
    {/* Hero Section */}
    <section dir="ltr" className="pt-32 pb-16">
      <div className="container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">About SwiftFleet</p>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            {isRTL ? (
              <>
                ,Built for <span className="text-gradient">Speed & Trust</span>.
              </>
            ) : (
              <>
                Built for <span className="text-gradient">Speed & Trust.</span>
              </>
            )}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            SwiftFleet was founded in 2018 with a single mission: eliminate the uncertainty in last-mile delivery. Today, we power logistics for 10,000+ businesses across 500+ cities, processing over 50,000 deliveries daily with a 99.7% on-time rate.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-12">
            From hyperlocal deliveries to nationwide freight, we provide end-to-end courier and logistics solutions that scale with your business. Our technology-first approach combines AI route optimization, real-time tracking, and automated dispatch to deliver exceptional results.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Stats Section */}
    <section className="py-16 border-y border-border">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Values Section */}
    <section className="py-24">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Our Core Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These principles guide every decision we make and every package we deliver.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <v.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Services Overview */}
    <section className="py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">What We Offer</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive courier and delivery solutions for businesses of all sizes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <service.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-display font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-24">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Our Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From a small startup to India's leading courier platform.
          </p>
        </div>
        
        <div className="space-y-8">
          {milestones.map((milestone, i) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 items-start"
            >
              <div className="flex-shrink-0 w-20 text-right">
                <span className="text-2xl font-display font-bold text-primary">{milestone.year}</span>
              </div>
              <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary mt-2"></div>
              <div className="flex-1">
                <h3 className="font-display font-semibold text-foreground mb-1">{milestone.title}</h3>
                <p className="text-sm text-muted-foreground">{milestone.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Story Section */}
    <section className="py-24">
      <div className="container max-w-4xl">
        <div className="glass rounded-2xl p-8">
          <h2 className="text-3xl font-display font-bold text-foreground mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              What started as a two-person team with one delivery van has grown into a nationwide logistics network. We saw how traditional courier services were failing modern businesses — missed deliveries, zero transparency, and no accountability.
            </p>
            <p>
              We built SwiftFleet to change that. By combining AI route optimization, real-time GPS tracking, and a customer-first approach, we've created a delivery experience that businesses can actually rely on.
            </p>
            <p>
              Today, we operate a fleet of 1,200+ vehicles across 500+ cities, powered by cutting-edge technology and driven by a team of 5,000+ logistics professionals. Every package tells a story, and we make sure it has a happy ending.
            </p>
            <p>
              Our mission remains the same: to make every delivery fast, secure, and transparent. Whether you're shipping a single package or managing enterprise-level logistics, SwiftFleet is your trusted partner in growth.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <Footer />
  </div>
  );
};

export default About;
