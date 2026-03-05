import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Zap, Shield, Clock, Users, Star, CheckCircle2, Truck, Globe, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { useDirection } from "@/contexts/DirectionContext";

const features = [
  { icon: Zap, title: "Lightning Fast", desc: "Same-day delivery across 500+ cities" },
  { icon: Shield, title: "100% Secure", desc: "End-to-end insurance coverage" },
  { icon: Clock, title: "Real-Time Tracking", desc: "Live GPS updates every 30 seconds" },
  { icon: Globe, title: "Pan-India Network", desc: "25,000+ pin codes covered" },
];

const stats = [
  { value: "2M+", label: "Packages Delivered" },
  { value: "500+", label: "Cities Served" },
  { value: "99.8%", label: "Success Rate" },
  { value: "24/7", label: "Customer Support" },
];

const Index = () => {
  const { isRTL } = useDirection();

  return (
  <div className="min-h-screen bg-background">
    <Navbar />
    
    {/* Hero Section */}
    <section dir="ltr" className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-orange-500/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
            <Package className="w-4 h-4" />
            INDIA'S TRUSTED COURIER PARTNER
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] mb-6">
            {isRTL ? (
              <>
                ,Your Package{" "}
                <span className="text-gradient">Our Priority.</span>
              </>
            ) : (
              <>
                Your Package,{" "}
                <span className="text-gradient">Our Priority</span>
              </>
            )}
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
            Experience hassle-free shipping with SwiftFleet's advanced logistics network. 
            From pickup to delivery, we ensure your packages reach safely and on time.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Button variant="hero" size="lg" asChild>
              <Link to="/get-started">
                Start Shipping <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/dashboard">
                Track Package
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{feature.title}</p>
                  <p className="text-xs text-muted-foreground">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden glow-border">
            <img
              src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80&auto=format&fit=crop"
              alt="SwiftFleet delivery service"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={stat.label} className="glass rounded-xl px-4 py-3 text-center">
                  <p className="text-xl font-display font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Quick Services */}
    <section className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">
            Quick <span className="text-gradient">Shipping Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of delivery options designed for every need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Zap,
              title: "Express Delivery",
              desc: "Same-day delivery within city limits. Perfect for urgent shipments.",
              time: "2-6 hours",
              price: "₹99",
            },
            {
              icon: Truck,
              title: "Standard Shipping",
              desc: "Reliable delivery across India with real-time tracking.",
              time: "1-3 days",
              price: "₹49",
            },
            {
              icon: Package,
              title: "Bulk Logistics",
              desc: "Cost-effective solutions for high-volume shipments.",
              time: "2-5 days",
              price: "₹29",
            },
          ].map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center hover:glow-border transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{service.desc}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs text-muted-foreground">{service.time}</span>
                <span className="text-lg font-display font-bold text-primary">{service.price}</span>
              </div>
              <Button variant="heroOutline" size="sm" className="w-full">
                Select Plan
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Trust Indicators */}
    <section className="py-16 border-y border-border">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { icon: Users, value: "50K+", label: "Happy Customers" },
            { icon: Package, value: "2M+", label: "Packages Delivered" },
            { icon: Star, value: "4.9/5", label: "Customer Rating" },
            { icon: BarChart3, value: "99.8%", label: "Success Rate" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl font-display font-bold text-primary mb-1">{item.value}</p>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-24">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-display font-bold mb-4">
            Ready to Ship with <span className="text-gradient">SwiftFleet?</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of businesses who trust us with their deliveries. 
            Start shipping today with no setup fees.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/get-started">
                Get Started Free <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/contact">
                Contact Sales
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
  );
};

export default Index;
