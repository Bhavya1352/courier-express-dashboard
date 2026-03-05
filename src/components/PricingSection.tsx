import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹999",
    desc: "Perfect for small businesses.",
    features: [
      "Up to 100 deliveries/month",
      "Basic GPS Tracking",
      "Email Support",
      "Standard Routing",
      "Monthly Reports",
    ],
  },
  {
    name: "Business",
    price: "₹4,999",
    desc: "Most chosen by growing brands.",
    features: [
      "All Starter Features",
      "Unlimited Deliveries",
      "AI Route Optimization",
      "Priority Support",
      "Real-time Dashboard",
      "API Access",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "₹14,999",
    desc: "Full-scale logistics operations.",
    features: [
      "All Business Features",
      "Dedicated Fleet Manager",
      "Custom Integrations",
      "24/7 Support",
      "SLA Guarantee",
      "Cold-Chain Support",
    ],
  },
];

const PricingSection = () => (
  <section className="py-24">
    <div className="container">
      <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3 text-center">
        💰 Simple Pricing
      </p>
      <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
        Service Packages
      </h2>
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
        Tailored logistics for every scale of operation.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`glass rounded-2xl p-8 relative ${p.popular ? "glow-border" : ""}`}
          >
            {p.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                Best Value
              </span>
            )}
            <h3 className="font-display font-semibold text-foreground text-lg">
              {p.name}
            </h3>
            <p className="text-4xl font-display font-bold text-foreground mt-4 mb-2">
              {p.price}
              <span className="text-sm text-muted-foreground font-normal">/mo</span>
            </p>
            <p className="text-sm text-muted-foreground mb-6">{p.desc}</p>
            <ul className="space-y-3 mb-8">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button variant={p.popular ? "hero" : "heroOutline"} className="w-full">
              Get Started
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
