import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Truck,
  Clock,
  Shield,
  MapPin,
  Package,
  CheckCircle2,
  Star,
  Phone,
  Zap,
  BarChart3,
  Globe2,
  Warehouse,
  Snowflake,
  Users,
  Headphones,
  BadgeCheck,
  Route,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useDirection } from "@/contexts/DirectionContext";

/* ─── Image URLs ───────────────────────────── */
const IMG = {
  hero: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80&auto=format&fit=crop",
  express: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=75&auto=format&fit=crop",
  secure: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?w=600&q=75&auto=format&fit=crop",
  lastMile: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=600&q=75&auto=format&fit=crop",
  scheduled: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&q=75&auto=format&fit=crop",
  analytics: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=75&auto=format&fit=crop",
  bulk: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600&q=75&auto=format&fit=crop",
  warehouse: "https://images.unsplash.com/photo-1565891741441-64926e441838?w=600&q=75&auto=format&fit=crop",
  coldChain: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=75&auto=format&fit=crop",
  whyUs: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80&auto=format&fit=crop",
  howItWorks: "https://images.unsplash.com/photo-1616432043562-3671ea2e5242?w=800&q=80&auto=format&fit=crop",
  cta: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=900&q=80&auto=format&fit=crop",
  fleetImg: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=80&auto=format&fit=crop",
  aboutDelivery: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80&auto=format&fit=crop",
  tracking: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80&auto=format&fit=crop",
};

/* ─── Hero ─────────────────────────────────── */
const Hero = () => {
  const { isRTL } = useDirection();
  
  return (
  <section dir="ltr" className="relative min-h-[100svh] md:min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
    <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[140px] pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/6 rounded-full blur-[120px] pointer-events-none" />

    <div className="container grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
          <Zap className="w-4 h-4" />
          #1 COURIER &amp; DELIVERY PLATFORM IN INDIA
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6">
          {isRTL ? (
            <>
              <span className="block">
                ,Fast Reliable
              </span>
              <span className="block">
                <span className="text-gradient">Courier .Services</span>
              </span>
            </>
          ) : (
            <>
              <span className="block">
                Fast & Reliable
              </span>
              <span className="block">
                <span className="text-gradient">Courier Services</span>
              </span>
            </>
          )}
        </h1>

        <p className="text-lg text-muted-foreground max-w-lg mb-4 leading-relaxed">
          From doorstep pickups to cross-city express — our AI-powered logistics network
          ensures every parcel reaches its destination faster, safer, and smarter.
        </p>
        <p className="text-base text-muted-foreground max-w-lg mb-8 leading-relaxed">
          Whether you're an e-commerce startup shipping 10 orders a day or an enterprise moving
          50,000 parcels daily — ShipFast scales with you. Our proprietary dispatch engine,
          real-time route optimization, and 500+ city network give you a competitive edge
          that traditional couriers simply can't match.
        </p>

        <div className="flex flex-wrap gap-4 mb-10">
          <Button variant="hero" size="lg">
            Ship a Package <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
          <Button variant="heroOutline" size="lg">
            Track Your Order
          </Button>
        </div>

        {/* Trust bar */}
        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border sm:flex sm:items-center sm:gap-6">
          <div className="text-center">
            <p className="text-2xl font-display font-bold text-primary">50K+</p>
            <p className="text-xs text-muted-foreground">Daily Deliveries</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-border" />
          <div className="text-center">
            <p className="text-2xl font-display font-bold text-foreground">500+</p>
            <p className="text-xs text-muted-foreground">Cities Covered</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-border" />
          <div className="text-center">
            <p className="text-2xl font-display font-bold text-foreground">99.7%</p>
            <p className="text-xs text-muted-foreground">On-Time Rate</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-border" />
          <div className="text-center">
            <p className="text-2xl font-display font-bold text-foreground">25K+</p>
            <p className="text-xs text-muted-foreground">Pin Codes</p>
          </div>
        </div>
      </motion.div>

      {/* Hero Image + Overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative"
      >
        <div className="relative rounded-2xl overflow-hidden glow-border">
          <img
            src={IMG.hero}
            alt="Courier delivery fleet"
            className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          {/* Overlay stat cards */}
          <div className="absolute top-6 right-6 glass rounded-xl px-4 py-3 text-center hidden sm:block">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Delivery Rate</p>
            <p className="text-2xl font-display font-bold text-primary">99.7%</p>
          </div>
          <div className="absolute top-6 left-6 glass rounded-xl px-4 py-3 text-center hidden sm:block">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Active Fleet</p>
            <p className="text-2xl font-display font-bold text-foreground">1,247</p>
          </div>
          <div className="absolute bottom-6 left-6 glass rounded-xl px-4 py-3 text-center hidden sm:block">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Avg. Delivery</p>
            <p className="text-2xl font-display font-bold text-foreground">2.4 hrs</p>
          </div>
          <div className="absolute bottom-6 right-6 glass rounded-xl px-4 py-3 text-center hidden sm:block">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Live Tracking</p>
            <p className="text-xs text-primary font-medium flex items-center gap-1.5 mt-1">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" /> Active Now
            </p>
          </div>
        </div>

        <div className="sm:hidden grid grid-cols-2 gap-3 mt-3">
          <div className="glass rounded-xl px-3 py-2.5 text-center">
            <p className="text-[11px] text-muted-foreground uppercase tracking-wider">Delivery Rate</p>
            <p className="text-lg font-display font-bold text-primary">99.7%</p>
          </div>
          <div className="glass rounded-xl px-3 py-2.5 text-center">
            <p className="text-[11px] text-muted-foreground uppercase tracking-wider">Active Fleet</p>
            <p className="text-lg font-display font-bold text-foreground">1,247</p>
          </div>
          <div className="glass rounded-xl px-3 py-2.5 text-center">
            <p className="text-[11px] text-muted-foreground uppercase tracking-wider">Avg. Delivery</p>
            <p className="text-lg font-display font-bold text-foreground">2.4 hrs</p>
          </div>
          <div className="glass rounded-xl px-3 py-2.5 text-center">
            <p className="text-[11px] text-muted-foreground uppercase tracking-wider">Live Tracking</p>
            <p className="text-xs text-primary font-medium flex items-center justify-center gap-1.5 mt-1">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" /> Active Now
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
};

/* ─── Brand Logos ───────────────────────────── */
const Brands = () => {
  const names = ["AMAZON LOGISTICS", "FLIPKART", "SWIGGY", "ZOMATO", "BIGBASKET", "MEESHO", "MYNTRA", "PHARMEASY", "NYKAA", "AJIO"];
  return (
    <section className="py-8 border-y border-border overflow-hidden">
      <div className="flex marquee">
        {[...names, ...names].map((b, i) => (
          <span
            key={i}
            className="text-muted-foreground/40 text-sm font-display font-semibold tracking-[0.2em] uppercase whitespace-nowrap mx-12"
          >
            {b}
          </span>
        ))}
      </div>
    </section>
  );
};

/* ─── Services ─────────────────────────────── */
const services = [
  {
    icon: Truck,
    title: "Express Delivery",
    desc: "Same-day & next-day shipping across 500+ cities with real-time GPS tracking, live ETA updates, and automatic delay-prevention rerouting. Our express fleet operates 24/7 to keep your supply chain moving.",
    badge: "Most Popular",
    img: IMG.express,
  },
  {
    icon: Shield,
    title: "Secure Parcels",
    desc: "End-to-end tamper-proof packaging with chain-of-custody verification, insurance coverage up to ₹50L, and digital proof of every handoff. High-value and fragile items get white-glove treatment.",
    img: IMG.secure,
  },
  {
    icon: MapPin,
    title: "Last-Mile Delivery",
    desc: "AI-optimized routing for the final stretch — slashing delivery times by up to 40%. Our hyperlocal fleet includes bikes, EVs, and mini-vans to navigate any terrain or traffic condition.",
    img: IMG.lastMile,
  },
  {
    icon: Clock,
    title: "Scheduled Pickups",
    desc: "Automated recurring pickups synced with your warehouse, ERP, or e-commerce platform. Set daily, weekly, or custom schedules and never miss a dispatch window again.",
    badge: "Premium",
    img: IMG.scheduled,
  },
  {
    icon: BarChart3,
    title: "Fleet Analytics",
    desc: "Real-time dashboards for fuel consumption, route efficiency, driver performance, and delivery KPIs. Exportable reports, automated alerts, and trend analysis to optimize your logistics spend.",
    img: IMG.analytics,
  },
  {
    icon: Package,
    title: "Bulk Shipments",
    desc: "Volume-optimized logistics for B2B pallets, warehousing, and multi-city distribution. Dedicated fleet allocation, priority lanes, and custom SLAs for enterprise-scale operations.",
    img: IMG.bulk,
  },
  {
    icon: Warehouse,
    title: "Warehousing & Fulfillment",
    desc: "Multi-city warehouse network with pick-pack-ship capability. Inventory management, returns processing, and direct integration with Shopify, WooCommerce, and Amazon Seller Central.",
    img: IMG.warehouse,
  },
  {
    icon: Snowflake,
    title: "Cold-Chain Logistics",
    desc: "IoT-monitored temperature-controlled delivery for pharma, food, and perishable goods. Real-time temperature alerts, compliance documentation, and end-to-end cold-chain integrity.",
    badge: "Specialized",
    img: IMG.coldChain,
  },
];

const Services = () => (
  <section className="py-24">
    <div className="container">
      <div className="text-center mb-16">
        <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Our Services</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Complete Courier &amp; Delivery Solutions
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Everything you need to ship, track, and deliver — from local parcels to nationwide freight.
          We cover every logistics vertical so you can focus on growing your business.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="group glass rounded-2xl overflow-hidden hover:glow-border transition-all duration-300 relative"
          >
            <div className="h-44 overflow-hidden">
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {s.badge && (
              <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                {s.badge}
              </span>
            )}
            <div className="p-5">
              <div className="flex items-center gap-2.5 mb-2">
                <s.icon className="w-5 h-5 text-primary" />
                <h3 className="font-display font-semibold text-foreground text-base">{s.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
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

/* ─── How It Works ─────────────────────────── */
const steps = [
  {
    num: "01",
    title: "Book Pickup",
    desc: "Schedule a pickup online, via app, or call our 24/7 helpline. We arrive at your doorstep within 60 minutes — no minimum order required. Bulk or single parcel, we handle it all.",
    img: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=500&q=75&auto=format&fit=crop",
  },
  {
    num: "02",
    title: "We Pick & Pack",
    desc: "Your parcel is carefully weighed, measured, and labelled with a unique tracking ID. It's scanned into our cloud logistics hub and assigned the optimal route for delivery.",
    img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&q=75&auto=format&fit=crop",
  },
  {
    num: "03",
    title: "Track Live",
    desc: "Follow your package in real-time with GPS tracking, live ETA, checkpoint notifications via SMS & email. Our AI predicts and prevents delays before they happen.",
    img: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?w=500&q=75&auto=format&fit=crop",
  },
  {
    num: "04",
    title: "Delivered!",
    desc: "Digital proof of delivery with e-signature, photo confirmation, and instant delivery receipt. Your customer gets notified, and your dashboard updates automatically.",
    img: "https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?w=500&q=75&auto=format&fit=crop",
  },
];

const HowItWorks = () => (
  <section className="py-24">
    <div className="container">
      <div className="text-center mb-16">
        <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">
          How It Works
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Four Simple Steps to Ship Anything
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Getting started with SwiftFleet takes less than 2 minutes. No complex setup,
          no lengthy paperwork — just seamless shipping from start to finish.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl overflow-hidden group"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-lg font-display font-bold text-primary">
                  {s.num}
                </span>
                <h3 className="font-display font-semibold text-foreground text-lg">{s.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Why Choose Us ────────────────────────── */
const reasons = [
  { icon: Zap, title: "Lightning Fast", desc: "AI-powered dispatch with under 60-minute city delivery. Our fleet reacts in real-time to traffic, weather, and demand surges." },
  { icon: Shield, title: "100% Secure", desc: "Tamper-proof packaging, real-time CCTV surveillance at every hub, and insurance coverage on all shipments up to ₹50 Lakh." },
  { icon: Globe2, title: "Pan-India Reach", desc: "500+ cities, 25,000+ pin codes covered across all 28 states. From metro cities to tier-3 towns, we deliver everywhere." },
  { icon: Phone, title: "24/7 Support", desc: "Dedicated multilingual support team available round the clock via phone, chat, and email. Average response time under 30 seconds." },
  { icon: Route, title: "Smart Routing", desc: "Our proprietary AI engine analyzes 40+ variables in real-time to find the optimal delivery route, saving fuel and time." },
  { icon: BadgeCheck, title: "SLA Guarantee", desc: "We put our money where our mouth is — service credits for any SLA breach. 99.7% on-time delivery rate and counting." },
];

const WhyChooseUs = () => (
  <section className="py-24">
    <div className="container grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">
          Why SwiftFleet
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
          Built for <span className="text-gradient">Modern Delivery.</span>
        </h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          We combine cutting-edge technology with on-ground reliability to create a courier
          experience that's faster, smarter, and more transparent than anything you've used before.
        </p>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Our fleet of 1,200+ vehicles, 6 regional hubs, and AI-powered dispatch system
          processes over 50,000 deliveries daily with an industry-leading 99.7% success rate.
          From a single parcel to full truckload — we've got it covered.
        </p>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden mb-8">
          <img
            src={IMG.whyUs}
            alt="SwiftFleet delivery operations"
            className="w-full h-64 object-cover"
          />
        </div>

        <ul className="space-y-4 mb-8">
          {[
            "AI route optimization saves 35% on delivery time",
            "Real-time GPS tracking on every single parcel",
            "Instant SMS & email notifications at every checkpoint",
            "Digital proof-of-delivery with e-signature & photo",
            "Seamless API integration with all major e-commerce platforms",
            "Dedicated account manager for business clients",
          ].map((f) => (
            <li key={f} className="flex items-center gap-3 text-foreground">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm">{f}</span>
            </li>
          ))}
        </ul>
        <Button variant="hero" size="lg">
          Start Shipping <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </motion.div>

      <div className="grid grid-cols-2 gap-4">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-2xl p-5 hover:glow-border transition-all duration-300"
          >
            <r.icon className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-display font-semibold text-foreground mb-1">{r.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Fleet Showcase ───────────────────────── */
const FleetShowcase = () => (
  <section className="py-24">
    <div className="container grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative rounded-2xl overflow-hidden glow-border"
      >
        <img
          src={IMG.fleetImg}
          alt="SwiftFleet delivery vehicles"
          className="w-full h-[300px] sm:h-[380px] lg:h-[450px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 flex justify-between">
          <div className="glass rounded-xl px-4 py-3 text-center">
            <p className="text-xl font-display font-bold text-primary">1,247</p>
            <p className="text-xs text-muted-foreground">Active Vehicles</p>
          </div>
          <div className="glass rounded-xl px-4 py-3 text-center">
            <p className="text-xl font-display font-bold text-primary">350+</p>
            <p className="text-xs text-muted-foreground">Electric Vehicles</p>
          </div>
          <div className="glass rounded-xl px-4 py-3 text-center">
            <p className="text-xl font-display font-bold text-primary">6</p>
            <p className="text-xs text-muted-foreground">Regional Hubs</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">
          Our Fleet
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
          Technology Meets <span className="text-gradient">Reliability.</span>
        </h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Our diverse fleet includes two-wheelers for hyperlocal delivery, electric vehicles for
          eco-friendly last-mile, cargo vans for mid-size shipments, and full trucks for bulk freight.
        </p>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Every vehicle is GPS-equipped, IoT-monitored, and maintained on a strict preventive schedule.
          Our drivers undergo rigorous training in safe handling, customer interaction, and emergency protocols.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {[
            { value: "24/7", label: "Fleet Operations" },
            { value: "< 30min", label: "Avg. Pickup Time" },
            { value: "98.5%", label: "Fleet Utilization" },
            { value: "0.02%", label: "Damage Rate" },
          ].map((s) => (
            <div key={s.label} className="bg-secondary rounded-xl p-4 text-center">
              <p className="text-xl font-display font-bold text-primary">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <Button variant="hero" size="lg">
          View Fleet Details <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </motion.div>
    </div>
  </section>
);

/* ─── Stats Banner ─────────────────────────── */
const StatsBanner = () => (
  <section className="py-16 border-y border-border">
    <div className="container">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
        {[
          { value: "50,000+", label: "Deliveries Per Day" },
          { value: "500+", label: "Cities Served" },
          { value: "10,000+", label: "Business Clients" },
          { value: "99.7%", label: "Satisfaction Rate" },
          { value: "25,000+", label: "Pin Codes" },
          { value: "1,247", label: "Active Vehicles" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="text-center"
          >
            <p className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">{s.value}</p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── About Section ────────────────────────── */
const AboutSection = () => (
  <section className="py-24">
    <div className="container grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">
          About SwiftFleet
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
          Redefining <span className="text-gradient">Indian Logistics</span> Since 2018.
        </h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          SwiftFleet was born from a simple frustration — why can't courier delivery be fast,
          transparent, and reliable? Founded in Mumbai in 2018, we set out to build a logistics
          network powered by AI, real-time data, and a relentless focus on customer experience.
        </p>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Today, we operate across 500+ cities with 6 regional hubs, 1,200+ vehicles, and a
          team of 5,000+ logistics professionals. Our technology-first approach has helped us
          achieve an industry-leading 99.7% on-time delivery rate and serve over 10,000
          businesses across e-commerce, healthcare, food, and enterprise sectors.
        </p>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          From hyperlocal 60-minute deliveries to cross-country bulk freight, we provide
          end-to-end logistics solutions that scale with your business. Our mission is simple:
          make every delivery a delightful experience.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button variant="hero" size="lg">
            Our Story <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
          <Button variant="heroOutline" size="lg">
            Meet the Team
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative rounded-2xl overflow-hidden"
      >
        <img
          src={IMG.aboutDelivery}
          alt="SwiftFleet team and delivery operations"
          className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent rounded-2xl" />
        <div className="absolute bottom-6 left-6 glass rounded-xl px-5 py-3">
          <p className="text-xs text-muted-foreground">Founded</p>
          <p className="text-lg font-display font-bold text-primary">2018 · Mumbai</p>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─── Testimonials ─────────────────────────── */
const testimonials = [
  {
    quote: "SwiftFleet cut our delivery time from 3 days to same-day. Game changer for our e-commerce business. We've seen a 45% increase in repeat customers since switching.",
    name: "Rahul K.",
    role: "CEO, QuickMart India",
    avatar: "https://i.pravatar.cc/100?img=11",
  },
  {
    quote: "The real-time tracking dashboard gives our customers full visibility. Support calls dropped by 60% and customer satisfaction is at an all-time high of 4.9 stars.",
    name: "Priya S.",
    role: "Ops Manager, FreshBox",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    quote: "Professional, fast, and reliable. Digital proof of delivery eliminated all our disputes. The API integration with our Shopify store took just 15 minutes.",
    name: "Anita R.",
    role: "Founder, StyleStore",
    avatar: "https://i.pravatar.cc/100?img=9",
  },
  {
    quote: "Cold-chain monitoring gave us full confidence to expand our pharma delivery vertical nationwide. Temperature compliance has been 100% since day one.",
    name: "Dr. Arun M.",
    role: "Director, MedSwift Pharma",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    quote: "We went from 500 to 5,000 deliveries/day without any operational hiccups. SwiftFleet's auto-scaling dispatch engine is genuinely enterprise-grade.",
    name: "Vikram T.",
    role: "CTO, UrbanBites",
    avatar: "https://i.pravatar.cc/100?img=33",
  },
  {
    quote: "The shipment calculator saved us hours of negotiation. Transparent pricing with no hidden fees. Our logistics cost dropped by 28% in the first quarter.",
    name: "Sneha M.",
    role: "Supply Chain Lead, TrendyWear",
    avatar: "https://i.pravatar.cc/100?img=23",
  },
];

const Testimonials = () => (
  <section className="py-24">
    <div className="container">
      <div className="text-center mb-16">
        <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Testimonials</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          What Our Clients Say
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Trusted by 10,000+ businesses across India — from D2C startups to Fortune 500 enterprises.
          Here's what they have to say about their SwiftFleet experience.
        </p>
      </div>

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
            <div className="flex gap-0.5 text-primary mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-sm text-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-primary/20" />
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

/* ─── Live Tracking Preview ────────────────── */
const TrackingPreview = () => (
  <section className="py-24">
    <div className="container grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">
          Real-Time Tracking
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
          Know Where Your <span className="text-gradient">Package Is. Always.</span>
        </h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Our cloud-based tracking system monitors over 4,000 data points in real time.
          Every parcel entering our network is geo-tagged, time-stamped, and synced with
          our AI dispatch hub. We predict delays before they happen and reroute automatically.
        </p>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Your customers get live GPS tracking, SMS/email updates at every checkpoint,
          and accurate ETAs that update every 30 seconds. Reduce WISMO (Where Is My Order)
          calls by up to 70% and boost customer satisfaction scores.
        </p>

        <ul className="space-y-3 mb-8">
          {[
            "Live GPS location with 30-second refresh",
            "AI-powered delay prediction & rerouting",
            "Multi-channel notifications (SMS, Email, WhatsApp)",
            "Customer-facing tracking page with your branding",
            "Webhook events for real-time system integration",
          ].map((f) => (
            <li key={f} className="flex items-center gap-3 text-foreground">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm">{f}</span>
            </li>
          ))}
        </ul>
        <Button variant="hero" size="lg">
          Try Live Tracking <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </motion.div>

      {/* Tracking visual */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-5"
      >
        <div className="rounded-2xl overflow-hidden glow-border">
          <img
            src={IMG.tracking}
            alt="Real-time tracking dashboard"
            className="w-full h-56 object-cover"
          />
        </div>

        <div className="glass rounded-2xl p-6 glow-border space-y-5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-display font-semibold text-foreground">📦 Live Tracking</span>
          <span className="flex items-center gap-1.5 text-xs text-primary">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" /> In Transit
          </span>
        </div>

        <div className="space-y-4">
          {[
            { label: "Picked Up", time: "10:30 AM", loc: "Mumbai Distribution Center", done: true },
            { label: "Sorted at Hub", time: "11:45 AM", loc: "Mumbai Sorting Facility", done: true },
            { label: "In Transit", time: "01:15 PM", loc: "Mumbai-Pune Express Corridor", done: true },
            { label: "Arrived at City Hub", time: "03:00 PM", loc: "Pune Regional Hub", done: true },
            { label: "Out for Delivery", time: "03:45 PM", loc: "Pune City — Zone 4", done: false },
            { label: "Delivered", time: "—", loc: "Customer Doorstep", done: false },
          ].map((s, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full mt-0.5 ${s.done ? "bg-primary" : "bg-border"}`} />
                {i < 5 && <div className={`w-0.5 h-7 ${s.done ? "bg-primary/40" : "bg-border"}`} />}
              </div>
              <div className="-mt-0.5">
                <p className={`text-sm font-medium ${s.done ? "text-foreground" : "text-muted-foreground"}`}>{s.label}</p>
                <p className="text-xs text-muted-foreground">{s.time} · {s.loc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { label: "ETA", value: "4:20 PM" },
            { label: "Distance Left", value: "12 km" },
            { label: "Status", value: "On Time" },
          ].map((st) => (
            <div key={st.label} className="bg-secondary rounded-xl p-3 text-center">
              <p className="text-lg font-display font-bold text-primary">{st.value}</p>
              <p className="text-xs text-muted-foreground">{st.label}</p>
            </div>
          ))}
        </div>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─── CTA ──────────────────────────────────── */
const CTA = () => (
  <section className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-3xl overflow-hidden glow-border"
      >
        <img
          src={IMG.cta}
          alt="Start shipping with SwiftFleet"
          className="w-full h-[300px] sm:h-[360px] lg:h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Ready to Ship <span className="text-gradient">Smarter?</span>
            </h2>
            <p className="text-muted-foreground mb-4 max-w-lg mx-auto">
              Join 10,000+ businesses who trust SwiftFleet for their delivery operations.
              Get started in under 2 minutes — no setup fees, no minimum orders.
            </p>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto text-sm">
              First 100 deliveries free for new business accounts. Cancel anytime.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg">
                Get Started Free <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button variant="heroOutline" size="lg">
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─── Page ─────────────────────────────────── */
const Home1 = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <Brands />
    <Services />
    <HowItWorks />
    <FleetShowcase />
    <WhyChooseUs />
    <StatsBanner />
    <TrackingPreview />
    <AboutSection />
    <Testimonials />
    <CTA />
    <Footer showHighlights={false} />
  </div>
);

export default Home1;
