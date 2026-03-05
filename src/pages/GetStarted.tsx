import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Package, Truck, Clock, Shield, ArrowRight, User, Mail, Phone, MapPin, Building } from "lucide-react";
import { useDirection } from "@/contexts/DirectionContext";

const steps = [
  { step: "01", title: "Account Setup", desc: "Create your SwiftFleet account in under 2 minutes" },
  { step: "02", title: "Verify Details", desc: "Quick KYC verification for secure shipping" },
  { step: "03", title: "Start Shipping", desc: "Book your first pickup and start delivering" },
];

const plans = [
  {
    name: "Personal",
    price: "₹45",
    desc: "Perfect for individuals and small businesses",
    features: ["Up to 50 shipments/month", "Standard delivery", "Basic tracking", "Email support"],
    popular: false,
  },
  {
    name: "Business",
    price: "₹32",
    desc: "Ideal for growing businesses",
    features: ["Up to 500 shipments/month", "Express delivery", "Real-time tracking", "Priority support", "Bulk discounts"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For large-scale operations",
    features: ["Unlimited shipments", "Same-day delivery", "Dedicated manager", "Custom integration", "SLA guarantee"],
    popular: false,
  },
];

const GetStarted = () => {
  const { isRTL } = useDirection();

  return (
  <div className="min-h-screen bg-background">
    <Navbar />
    
    {/* Hero Section */}
    <section dir="ltr" className="pt-32 pb-16">
      <div className="container max-w-4xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            {isRTL ? (
              <>
                ,Start Shipping with <span className="text-gradient">SwiftFleet.</span>
              </>
            ) : (
              <>
                Start Shipping with <span className="text-gradient">SwiftFleet</span>
              </>
            )}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join 10,000+ businesses who trust SwiftFleet for their delivery needs. 
            Get started in minutes with no setup fees or minimum commitments.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Steps */}
    <section className="pb-16">
      <div className="container max-w-4xl">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-display font-bold text-primary">{step.step}</span>
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Registration Form */}
    <section className="pb-24">
      <div className="container max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="glass rounded-2xl p-8"
          >
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">Create Your Account</h2>
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
                <label className="text-sm text-foreground font-medium mb-2 block">Business Type</label>
                <select className="w-full px-3 py-2 bg-secondary border border-border rounded-md text-foreground">
                  <option>Individual/Personal</option>
                  <option>Small Business</option>
                  <option>E-commerce Store</option>
                  <option>Enterprise</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm text-foreground font-medium mb-2 block">Company Name (Optional)</label>
                <Input placeholder="Your Company Name" className="bg-secondary border-border" />
              </div>
              
              <div>
                <label className="text-sm text-foreground font-medium mb-2 block">Pickup Address</label>
                <Textarea 
                  placeholder="Enter your pickup address..." 
                  rows={3} 
                  className="bg-secondary border-border" 
                />
              </div>
              
              <div>
                <label className="text-sm text-foreground font-medium mb-2 block">Expected Monthly Volume</label>
                <select className="w-full px-3 py-2 bg-secondary border border-border rounded-md text-foreground">
                  <option>1-50 shipments</option>
                  <option>51-200 shipments</option>
                  <option>201-500 shipments</option>
                  <option>500+ shipments</option>
                </select>
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                Create Account <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                By creating an account, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">Why Choose SwiftFleet?</h2>
            
            {[
              { icon: Package, title: "No Setup Fees", desc: "Start shipping immediately with zero upfront costs" },
              { icon: Truck, title: "4-Hour Pickup", desc: "Schedule pickup and we'll be there within 4 hours" },
              { icon: Clock, title: "Real-Time Tracking", desc: "Track every package with live GPS updates" },
              { icon: Shield, title: "Insurance Included", desc: "All shipments covered up to ₹5,000 automatically" },
            ].map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass rounded-xl p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
            
            <div className="glass rounded-xl p-6 text-center">
              <h3 className="font-display font-semibold text-foreground mb-2">First 10 Shipments Free!</h3>
              <p className="text-sm text-muted-foreground">
                New accounts get 10 free shipments to try our service risk-free.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Pricing Plans */}
    <section className="py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Choose Your Plan</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Upgrade or downgrade anytime.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass rounded-2xl p-6 relative ${plan.popular ? "glow-border" : ""}`}
            >
              {plan.popular && (
                <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="font-display font-bold text-foreground text-xl mb-2">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.desc}</p>
              <div className="mb-6">
                <span className="text-3xl font-display font-bold text-primary">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-sm text-muted-foreground">/shipment</span>}
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant={plan.popular ? "hero" : "heroOutline"} className="w-full">
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
  );
};

export default GetStarted;