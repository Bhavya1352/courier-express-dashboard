import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImg from "@/assets/hero-delivery.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
    {/* Ambient glow */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

    <div className="container grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
          <Star className="w-4 h-4" />
          SWIFTFLEET PRO V2.0
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] mb-6">
          Lightning Fast{" "}
          <span className="text-gradient">Courier Delivery.</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
          Experience next-gen logistics. Our AI-powered fleet management and real-time tracking ensure your packages arrive faster, safer, and smarter than ever.
        </p>

        <div className="flex flex-wrap gap-4 mb-10">
          <Button variant="hero" size="lg">
            Track Package <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
          <Button variant="heroOutline" size="lg">
            View Fleet Status
          </Button>
        </div>

        <div className="flex items-center gap-4 pt-6 border-t border-border">
          <div className="flex -space-x-3">
            {[10, 20, 30, 40].map((i) => (
              <img
                key={i}
                src={`https://i.pravatar.cc/100?img=${i}`}
                alt="Customer"
                className="w-10 h-10 rounded-full border-2 border-background"
              />
            ))}
          </div>
          <div>
            <div className="flex gap-0.5 text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Trusted by 10k+ businesses worldwide
            </p>
          </div>
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
            src={heroImg}
            alt="Swift delivery truck"
            className="w-full h-[500px] object-cover"
          />
          {/* Overlay stats */}
          <div className="absolute top-6 right-6 glass rounded-xl px-4 py-3 text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Delivery Rate</p>
            <p className="text-2xl font-display font-bold text-primary">99.7%</p>
          </div>
          <div className="absolute bottom-6 left-6 glass rounded-xl px-4 py-3 text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Avg. Delivery</p>
            <p className="text-2xl font-display font-bold text-foreground">2.4 hrs</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
