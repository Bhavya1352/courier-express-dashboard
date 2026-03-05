import { motion } from "framer-motion";

const cities = ["Mumbai", "Delhi", "Bangalore", "Singapore", "Dubai", "London"];
const stats = [
  { value: "50k+", label: "Deliveries/Day" },
  { value: "99.7%", label: "On-Time Rate" },
  { value: "2.4hr", label: "Avg. Delivery" },
  { value: "Elite", label: "Fleet Rating" },
];

const GlobalNetworkSection = () => (
  <section className="py-24">
    <div className="container">
      <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
        The Global Logistics Network.
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        Precision has no borders. We maintain direct logistics links across major hubs worldwide.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {cities.map((c) => (
          <span
            key={c}
            className="px-5 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors cursor-default"
          >
            {c}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl p-6 text-center"
          >
            <p className="text-3xl font-display font-bold text-primary mb-1">
              {s.value}
            </p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GlobalNetworkSection;
