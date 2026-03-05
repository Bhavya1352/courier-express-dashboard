import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Proprietary AI route-optimization algorithms",
  "Full GPS data mapping & real-time ETA",
  "Live fleet performance metrics dashboard",
  "Direct-to-mobile delivery notifications",
];

const TrackingSection = () => (
  <section className="py-24">
    <div className="container grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">
          Real-time Tracking
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
          Digital Brain{" "}
          <span className="text-gradient">for your Fleet.</span>
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Every package entering our network is synced with our cloud-logistics hub. We monitor over 4,000 data points live to predict delays before they happen.
        </p>
        <ul className="space-y-4 mb-8">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-3 text-foreground">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm">{f}</span>
            </li>
          ))}
        </ul>
        <Button variant="hero" size="lg">
          Explore Tracking
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="glass rounded-2xl p-6 space-y-6"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-display font-semibold text-foreground">
            Dispatch Hub v4.0
          </span>
          <span className="flex items-center gap-1.5 text-xs text-primary">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Live
          </span>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "On-Time Rate", value: "99.7%" },
            { label: "Active Fleet", value: "1,247" },
            { label: "Avg. ETA", value: "34 min" },
          ].map((stat) => (
            <div key={stat.label} className="bg-secondary rounded-xl p-4 text-center">
              <p className="text-2xl font-display font-bold text-primary">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Fake terminal */}
        <div className="bg-background rounded-xl p-4 font-mono text-xs text-muted-foreground space-y-1.5">
          <p className="text-primary">GPS Telemetry</p>
          <p>›0x4F: ROUTE_SYNC_OK</p>
          <p>›0x92: PARCEL_SCANNED</p>
          <p>›0x1A: DISPATCH_READY</p>
          <p>›0x3B: DELIVERY_OPTIMAL</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default TrackingSection;
