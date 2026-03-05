import { motion } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";

const ComparisonSection = () => (
  <section className="py-24">
    <div className="container max-w-4xl">
      <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
        Precision over Protocol.
      </h2>
      <p className="text-muted-foreground text-center mb-16">
        Why our delivery service is fundamentally different from standard couriers.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-6"
      >
        {/* Standard */}
        <div className="glass rounded-2xl p-8">
          <h3 className="font-display font-semibold text-muted-foreground mb-6">
            Standard Courier
          </h3>
          <ul className="space-y-4">
            {[
              "Manual route planning",
              "No real-time updates",
              "Paper-based receipts",
              "Fixed delivery windows",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-muted-foreground text-sm">
                <X className="w-4 h-4 text-destructive flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* SwiftFleet */}
        <div className="glass rounded-2xl p-8 glow-border">
          <h3 className="font-display font-semibold text-primary mb-6">
            SwiftFleet Precision
          </h3>
          <ul className="space-y-4">
            {[
              "AI-optimized dynamic routing",
              "Live GPS tracking dashboard",
              "Digital proof of delivery",
              "Predictive ETA with ML models",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-foreground text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <p className="text-xs text-muted-foreground text-center mt-8">
        * Average delivery time reduction of 35% detected after switching to SwiftFleet.
      </p>
    </div>
  </section>
);

export default ComparisonSection;
