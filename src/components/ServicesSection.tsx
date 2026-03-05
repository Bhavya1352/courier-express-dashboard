import { motion } from "framer-motion";
import { Truck, Clock, Shield, MapPin, BarChart3, Zap } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Express Delivery",
    desc: "Same-day and next-day delivery across 500+ cities with real-time GPS tracking.",
    badge: "Most Popular",
    img: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=500&q=70&auto=format&fit=crop",
  },
  {
    icon: Shield,
    title: "Secure Parcels",
    desc: "End-to-end encrypted chain-of-custody with tamper-proof packaging solutions.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&q=70&auto=format&fit=crop",
  },
  {
    icon: MapPin,
    title: "Last-Mile Solutions",
    desc: "AI-optimized routes for the final stretch. Reduce delivery time by up to 40%.",
    img: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=500&q=70&auto=format&fit=crop",
  },
  {
    icon: Clock,
    title: "Scheduled Pickups",
    desc: "Automated recurring pickups synced to your warehouse management system.",
    badge: "Premium",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=500&q=70&auto=format&fit=crop",
  },
  {
    icon: BarChart3,
    title: "Fleet Analytics",
    desc: "Real-time dashboards tracking fuel, routes, driver performance & delivery KPIs.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=70&auto=format&fit=crop",
  },
  {
    icon: Zap,
    title: "Hyperlocal Dispatch",
    desc: "Under 60-minute delivery for food, pharma, and e-commerce within city limits.",
    img: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=500&q=70&auto=format&fit=crop",
  },
];

const ServicesSection = () => (
  <section className="py-24">
    <div className="container">
      <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">
        What We Offer
      </p>
      <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
        Advanced Service Menu
      </h2>
      <p className="text-muted-foreground max-w-xl mb-16">
        Digitally managed, GPS-verified logistics for businesses of every scale.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative glass rounded-2xl overflow-hidden hover:glow-border transition-all duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {s.badge && (
              <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                {s.badge}
              </span>
            )}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <s.icon className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-display font-semibold text-foreground">
                  {s.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
              <button className="mt-4 text-sm text-primary font-medium hover:underline">
                Learn More →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
