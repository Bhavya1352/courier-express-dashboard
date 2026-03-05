import { motion } from "framer-motion";
import { Cpu, Navigation, Gauge, Snowflake } from "lucide-react";

const modules = [
  {
    icon: Cpu,
    title: "AI Route Engine",
    desc: "Machine learning optimized routes with 99.8% efficiency.",
  },
  {
    icon: Navigation,
    title: "GPS Fleet Tracking",
    desc: "Millimeter-accurate satellite tracking for every vehicle.",
  },
  {
    icon: Gauge,
    title: "Load Optimization",
    desc: "Dynamic load balancing for maximum capacity utilization.",
  },
  {
    icon: Snowflake,
    title: "Cold-Chain Logistics",
    desc: "IoT-monitored temperature-controlled delivery systems.",
  },
];

const TechStackSection = () => (
  <section className="py-24">
    <div className="container">
      <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3 text-center">
        Our Core Engine
      </p>
      <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
        The Innovation Stack.
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
        We don't just deliver packages; we build logistics ecosystems. Our infrastructure is powered by the same tech used by top global courier networks.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {modules.map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl p-6 hover:glow-border transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <m.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">
              {m.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {m.desc}
            </p>
            <p className="text-xs text-muted-foreground/50 font-mono mt-4 uppercase tracking-wider">
              Module_{i + 1}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStackSection;
