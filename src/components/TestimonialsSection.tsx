import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "SwiftFleet transformed our delivery ops. Our on-time rate jumped from 78% to 99.5% in just 3 months.",
    name: "Rahul K.",
    role: "CEO, QuickMart India",
  },
  {
    quote: "The AI routing alone saved us ₹2L per month in fuel costs. The dashboard is incredibly intuitive.",
    name: "Priya S.",
    role: "Ops Manager, FreshBox",
  },
  {
    quote: "Cold-chain monitoring gave us full confidence to expand our pharma delivery vertical nationwide.",
    name: "Dr. Arun M.",
    role: "Director, MedSwift Pharma",
  },
  {
    quote: "Professional, fast, and reliable. The proof-of-delivery system eliminated all our disputes.",
    name: "Anita R.",
    role: "Founder, StyleStore",
  },
  {
    quote: "We went from 500 to 5,000 deliveries/day without any operational hiccups. Incredible scaling.",
    name: "Vikram T.",
    role: "CTO, UrbanBites",
  },
];

const TestimonialsSection = () => (
  <section className="py-24">
    <div className="container">
      <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
        Client Experiences
      </h2>
      <p className="text-muted-foreground text-center mb-16">
        Heard from the businesses who trust us with their deliveries.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-2xl p-6"
          >
            <p className="text-sm text-foreground leading-relaxed mb-6 italic">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-display font-bold text-sm">
                {t.name[0]}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
