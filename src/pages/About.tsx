import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, Target, Award, TrendingUp } from "lucide-react";

const values = [
  { icon: Target, title: "Mission Driven", desc: "Redefining logistics with technology that puts reliability first." },
  { icon: Users, title: "Customer First", desc: "Every decision we make is centered around your delivery experience." },
  { icon: Award, title: "Excellence", desc: "We hold ourselves to the highest standards in every package we handle." },
  { icon: TrendingUp, title: "Innovation", desc: "Constantly pushing boundaries with AI, IoT, and automation." },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-32 pb-24">
      <div className="container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">About Us</p>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Built for <span className="text-gradient">Speed & Trust.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            SwiftFleet was founded in 2020 with a single mission: eliminate the uncertainty in last-mile delivery. Today, we power logistics for 10,000+ businesses across 50+ cities, processing over 50,000 deliveries daily with a 99.7% on-time rate.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <v.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="glass rounded-2xl p-8">
          <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            What started as a two-person team with one delivery van has grown into a nationwide logistics network. We saw how traditional courier services were failing modern businesses — missed deliveries, zero transparency, and no accountability.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We built SwiftFleet to change that. By combining AI route optimization, real-time GPS tracking, and a customer-first approach, we've created a delivery experience that businesses can actually rely on. Every package tells a story, and we make sure it has a happy ending.
          </p>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default About;
