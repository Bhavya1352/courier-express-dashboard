import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ShoppingCart,
  Store,
  Rocket,
  Clock,
  Shield,
  CheckCircle2,
  Star,
  MessageSquare,
  Layers,
  Plug,
  CreditCard,
  TrendingUp,
  RefreshCcw,
  Headphones,
  LayoutDashboard,
  PieChart,
  GitBranch,
  Gift,
  Sparkles,
  CircleDollarSign,
  Percent,
  BadgeCheck,
  ShoppingBag,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useDirection } from "@/contexts/DirectionContext";

/* ─── Image URLs (all unique to Home2) ─────── */
const IMG = {
  heroSeller: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80&auto=format&fit=crop",
  shopify: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=75&auto=format&fit=crop",
  dashboard: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop",
  packaging: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600&q=75&auto=format&fit=crop",
  seller: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=600&q=75&auto=format&fit=crop",
  returns: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=600&q=75&auto=format&fit=crop",
  growth: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80&auto=format&fit=crop",
  onboarding: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=75&auto=format&fit=crop",
  cod: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=75&auto=format&fit=crop",
  ndr: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=75&auto=format&fit=crop",
  ctaBg: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=900&q=80&auto=format&fit=crop",
};

/* ─── Hero — Seller Focused ────────────────── */
const HeroSeller = () => {
  const { isRTL } = useDirection();

  return (
  <section dir="ltr" className="relative min-h-[100svh] md:min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
    <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-primary/6 rounded-full blur-[150px] pointer-events-none" />
    <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-orange-400/5 rounded-full blur-[120px] pointer-events-none" />

    <div className="container grid lg:grid-cols-2 gap-12 items-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
          <ShoppingCart className="w-4 h-4" />
          BUILT FOR E-COMMERCE SELLERS
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.08] mb-6">
          {isRTL ? (
            <>
              ,Sell More{" "}
              <span className="text-gradient">Ship Faster</span>
              .
            </>
          ) : (
            <>
              Sell More.{" "}
              <span className="text-gradient">Ship Faster.</span>
            </>
          )}
        </h1>

        <p className="text-lg text-muted-foreground max-w-lg mb-4 leading-relaxed">
          The all-in-one shipping partner for Shopify, WooCommerce, and marketplace sellers.
          Connect your store, print labels, and start delivering — all in under 5 minutes.
        </p>
        <p className="text-base text-muted-foreground max-w-lg mb-8 leading-relaxed">
          SwiftFleet Seller Hub handles everything from automated order sync and label generation
          to NDR management, COD reconciliation, and return logistics. Over 8,000 D2C brands
          and independent sellers trust us to power their shipping.
        </p>

        <div className="flex flex-wrap gap-4 mb-10">
          <Button variant="hero" size="lg">
            Connect Your Store <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
          <Button variant="heroOutline" size="lg">
            View Pricing
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border sm:flex sm:items-center sm:gap-6">
          <div className="text-center">
            <p className="text-2xl font-display font-bold text-primary">8,000+</p>
            <p className="text-xs text-muted-foreground">Active Sellers</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-border" />
          <div className="text-center">
            <p className="text-2xl font-display font-bold text-foreground">2M+</p>
            <p className="text-xs text-muted-foreground">Orders/Month</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-border" />
          <div className="text-center">
            <p className="text-2xl font-display font-bold text-foreground">96.5%</p>
            <p className="text-xs text-muted-foreground">Delivery Success</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-border" />
          <div className="text-center">
            <p className="text-2xl font-display font-bold text-foreground">15+</p>
            <p className="text-xs text-muted-foreground">Integrations</p>
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
          <img src={IMG.heroSeller} alt="E-commerce seller shipping packages" className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          <div className="absolute top-6 right-6 glass rounded-xl px-4 py-3 text-center hidden sm:block">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Avg. Ship Cost</p>
            <p className="text-2xl font-display font-bold text-primary">₹42</p>
          </div>
          <div className="absolute top-6 left-6 glass rounded-xl px-4 py-3 text-center hidden sm:block">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Label Time</p>
            <p className="text-2xl font-display font-bold text-foreground">&lt; 10s</p>
          </div>
          <div className="absolute bottom-6 left-6 glass rounded-xl px-4 py-3 text-center hidden sm:block">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">COD Remittance</p>
            <p className="text-2xl font-display font-bold text-foreground">48 hrs</p>
          </div>
          <div className="absolute bottom-6 right-6 glass rounded-xl px-4 py-3 text-center hidden sm:block">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">RTO Rate</p>
            <p className="text-2xl font-display font-bold text-primary">&lt; 5%</p>
          </div>
        </div>

        <div className="sm:hidden grid grid-cols-2 gap-3 mt-3">
          <div className="glass rounded-xl px-3 py-2.5 text-center">
            <p className="text-[11px] text-muted-foreground uppercase tracking-wider">Avg. Ship Cost</p>
            <p className="text-lg font-display font-bold text-primary">₹42</p>
          </div>
          <div className="glass rounded-xl px-3 py-2.5 text-center">
            <p className="text-[11px] text-muted-foreground uppercase tracking-wider">Label Time</p>
            <p className="text-lg font-display font-bold text-foreground">&lt; 10s</p>
          </div>
          <div className="glass rounded-xl px-3 py-2.5 text-center">
            <p className="text-[11px] text-muted-foreground uppercase tracking-wider">COD Remittance</p>
            <p className="text-lg font-display font-bold text-foreground">48 hrs</p>
          </div>
          <div className="glass rounded-xl px-3 py-2.5 text-center">
            <p className="text-[11px] text-muted-foreground uppercase tracking-wider">RTO Rate</p>
            <p className="text-lg font-display font-bold text-primary">&lt; 5%</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
  );
};

/* ─── Integration Partners Marquee ─────────── */
const IntegrationPartners = () => {
  const names = ["SHOPIFY", "WOOCOMMERCE", "MAGENTO", "AMAZON SELLER", "FLIPKART SELLER", "OPENCART", "SHIPROCKET", "RAZORPAY", "ZOHO", "INSTAMOJO", "DUKAAN", "ECWID"];
  return (
    <section className="py-8 border-y border-border overflow-hidden">
      <div className="flex marquee">
        {[...names, ...names].map((b, i) => (
          <span key={i} className="text-muted-foreground/40 text-sm font-display font-semibold tracking-[0.2em] uppercase whitespace-nowrap mx-12">
            {b}
          </span>
        ))}
      </div>
    </section>
  );
};

/* ─── How It Works for Sellers ─────────────── */
const SellerSteps = () => (
  <section className="py-24">
    <div className="container">
      <div className="text-center mb-16">
        <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Get Started</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          From Store to Doorstep in <span className="text-gradient">3 Easy Steps</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          No warehouse needed, no bulk commitments. Just connect your online store and
          let SwiftFleet handle the rest — from pickup to delivery to returns.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            num: "01",
            title: "Connect Your Store",
            desc: "One-click integration with Shopify, WooCommerce, Amazon, Flipkart, and 15+ platforms. Orders sync automatically in real-time — zero manual data entry needed.",
            img: IMG.onboarding,
          },
          {
            num: "02",
            title: "Print & Schedule",
            desc: "Auto-generate shipping labels with a single click. Choose prepaid or COD, schedule pickup from your home or office. Our rider arrives within 4 hours.",
            img: IMG.packaging,
          },
          {
            num: "03",
            title: "Deliver & Get Paid",
            desc: "We handle last-mile delivery, attempts, and returns. COD payments are remitted to your bank in 48 hours. Track everything from your seller dashboard.",
            img: IMG.cod,
          },
        ].map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="glass rounded-2xl overflow-hidden group"
          >
            <div className="h-48 overflow-hidden">
              <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-lg font-display font-bold text-primary">{s.num}</span>
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

/* ─── Pricing Plans ────────────────────────── */
const pricingPlans = [
  {
    name: "Starter",
    desc: "Perfect for new sellers doing up to 100 orders/month. No commitments, pay per shipment.",
    price: "₹45",
    unit: "/shipment",
    features: [
      "Up to 100 orders/month",
      "1 store integration",
      "Standard delivery (3-5 days)",
      "Basic tracking page",
      "Email support",
      "COD available",
    ],
    img: IMG.seller,
  },
  {
    name: "Growth",
    desc: "For scaling brands doing 100-2,000 orders/month. Lower rates, faster delivery, more features.",
    price: "₹32",
    unit: "/shipment",
    popular: true,
    features: [
      "Up to 2,000 orders/month",
      "5 store integrations",
      "Express delivery (1-2 days)",
      "Branded tracking page",
      "Priority phone + chat support",
      "COD + early remittance",
      "NDR management panel",
      "Automated return pickups",
    ],
    img: IMG.growth,
  },
  {
    name: "Enterprise",
    desc: "For high-volume brands doing 2,000+ orders/month. Custom rates, dedicated team, SLA guarantee.",
    price: "Custom",
    unit: "",
    features: [
      "Unlimited orders",
      "Unlimited integrations",
      "Same-day & next-day delivery",
      "White-label tracking page",
      "Dedicated account manager",
      "Custom COD remittance cycle",
      "API & webhook access",
      "Priority SLA guarantee",
    ],
    img: IMG.dashboard,
  },
];

const PricingPlans = () => (
  <section className="py-24">
    <div className="container">
      <div className="text-center mb-16">
        <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Pricing</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Simple, Transparent <span className="text-gradient">Seller Pricing</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          No hidden charges, no weight disputes. Pay per shipment with rates that drop
          as you grow. COD collection, tracking, and basic insurance included in every plan.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {pricingPlans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`glass rounded-2xl overflow-hidden relative ${p.popular ? "glow-border" : ""}`}
          >
            {p.popular && (
              <span className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                Best Value
              </span>
            )}
            <div className="h-44 overflow-hidden">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="font-display font-bold text-foreground text-2xl mb-1">{p.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
              <div className="mb-5">
                <span className="text-4xl font-display font-bold text-primary">{p.price}</span>
                <span className="text-sm text-muted-foreground">{p.unit}</span>
              </div>
              <ul className="space-y-2.5 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Button variant={p.popular ? "hero" : "heroOutline"} className="w-full">
                {p.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Seller Features Grid ─────────────────── */
const SellerFeatures = () => (
  <section className="py-24">
    <div className="container">
      <div className="text-center mb-16">
        <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Seller Tools</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Everything You Need to <span className="text-gradient">Scale Your Store</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          SwiftFleet Seller Hub isn't just a courier — it's a full shipping operating system.
          Manage orders, labels, NDRs, returns, and payments from one unified dashboard.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: Plug,
            title: "15+ Integrations",
            desc: "One-click connect with Shopify, WooCommerce, Amazon, Flipkart, Magento, OpenCart, BigCommerce, and more. Orders sync in real-time.",
            badge: "Popular",
          },
          {
            icon: CreditCard,
            title: "COD Management",
            desc: "Collect cash-on-delivery orders seamlessly. Automated reconciliation, 48-hour remittance cycle, and real-time COD tracking in your dashboard.",
          },
          {
            icon: RefreshCcw,
            title: "Return Logistics",
            desc: "Automated reverse pickup for returned orders. Customer portal for self-service returns. Refund triggers sync to your store automatically.",
          },
          {
            icon: MessageSquare,
            title: "NDR Management",
            desc: "Failed delivery? Our NDR panel lets you take instant action — reschedule, update address, or cancel. Reduces RTO by up to 40%.",
            badge: "New",
          },
          {
            icon: LayoutDashboard,
            title: "Seller Dashboard",
            desc: "One screen to rule them all. View orders, shipments, pickups, returns, and payments. Filter by date, status, carrier, or channel.",
          },
          {
            icon: PieChart,
            title: "Shipping Analytics",
            desc: "Track delivery TAT, RTO percentage, zone-wise performance, and carrier comparison. Weekly PDF reports auto-emailed to your inbox.",
          },
          {
            icon: GitBranch,
            title: "Multi-Carrier Routing",
            desc: "Our algorithm auto-selects the best carrier for each order based on pin code, weight, and delivery speed. You always get the lowest rate.",
          },
          {
            icon: Gift,
            title: "Branded Experience",
            desc: "Custom tracking page with your logo, colors, and product recommendations. Branded SMS/email notifications that feel like your store.",
          },
        ].map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="glass rounded-2xl p-5 hover:glow-border transition-all duration-300 relative"
          >
            {f.badge && (
              <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-0.5 rounded-full">
                {f.badge}
              </span>
            )}
            <f.icon className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-display font-semibold text-foreground mb-1.5">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Dashboard Preview ────────────────────── */
const DashboardPreview = () => (
  <section className="py-24">
    <div className="container grid lg:grid-cols-2 gap-12 items-center">
      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Seller Dashboard</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
          Your <span className="text-gradient">Command Center</span> for Shipping
        </h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          The SwiftFleet Seller Dashboard gives you a bird's-eye view of every order, shipment,
          and payment in real-time. No more switching between courier websites or spreadsheets.
          Everything is in one place.
        </p>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Bulk-print labels for hundreds of orders in seconds. Filter by channel (Shopify, Amazon,
          manual), status (in-transit, delivered, RTO), or date range. Export reports for GST
          filing or accounting. Set up automated rules for carrier selection and pickup scheduling.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {[
            { value: "< 10s", label: "Label Generation" },
            { value: "500+", label: "Bulk Print at Once" },
            { value: "Real-time", label: "Order Sync" },
            { value: "1-click", label: "Pickup Scheduling" },
          ].map((s) => (
            <div key={s.label} className="bg-secondary rounded-xl p-4 text-center">
              <p className="text-xl font-display font-bold text-primary">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <Button variant="hero" size="lg">
          Try Dashboard Free <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
        <div className="rounded-2xl overflow-hidden glow-border">
          <img src={IMG.dashboard} alt="SwiftFleet seller dashboard" className="w-full h-[320px] sm:h-[420px] lg:h-[500px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 hidden sm:flex justify-between">
            <div className="glass rounded-xl px-4 py-3 text-center">
              <p className="text-xl font-display font-bold text-primary">2,847</p>
              <p className="text-xs text-muted-foreground">Orders Today</p>
            </div>
            <div className="glass rounded-xl px-4 py-3 text-center">
              <p className="text-xl font-display font-bold text-primary">94.2%</p>
              <p className="text-xs text-muted-foreground">First-Attempt</p>
            </div>
            <div className="glass rounded-xl px-4 py-3 text-center">
              <p className="text-xl font-display font-bold text-primary">₹4.2L</p>
              <p className="text-xs text-muted-foreground">COD Pending</p>
            </div>
          </div>
        </div>

        <div className="sm:hidden grid grid-cols-3 gap-2 mt-3">
          <div className="glass rounded-xl px-2.5 py-2 text-center">
            <p className="text-base font-display font-bold text-primary">2,847</p>
            <p className="text-[10px] text-muted-foreground">Orders Today</p>
          </div>
          <div className="glass rounded-xl px-2.5 py-2 text-center">
            <p className="text-base font-display font-bold text-primary">94.2%</p>
            <p className="text-[10px] text-muted-foreground">First-Attempt</p>
          </div>
          <div className="glass rounded-xl px-2.5 py-2 text-center">
            <p className="text-base font-display font-bold text-primary">₹4.2L</p>
            <p className="text-[10px] text-muted-foreground">COD Pending</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─── COD & NDR Section ────────────────────── */
const CodNdrSection = () => (
  <section className="py-24">
    <div className="container grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative rounded-2xl overflow-hidden order-2 lg:order-1"
      >
        <img src={IMG.ndr} alt="NDR management dashboard" className="w-full h-[300px] sm:h-[360px] lg:h-[420px] object-cover rounded-2xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent rounded-2xl" />
        <div className="absolute bottom-6 left-6 glass rounded-xl px-5 py-3">
          <p className="text-xs text-muted-foreground">RTO Reduction</p>
          <p className="text-lg font-display font-bold text-primary">40% Lower</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="order-1 lg:order-2"
      >
        <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">COD &amp; NDR</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
          Reduce RTO. <span className="text-gradient">Maximize Revenue.</span>
        </h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          RTO (Return to Origin) is the biggest profit killer for e-commerce sellers. Our
          intelligent NDR management system catches failed deliveries immediately and gives you
          tools to recover them — reschedule, update address, or confirm via automated IVR calls.
        </p>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          For COD orders, we collect cash at the doorstep and remit it to your bank account
          within 48 hours (24 hours for Growth & Enterprise plans). Real-time COD reconciliation
          in your dashboard means no more chasing carriers for payment updates.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { icon: CircleDollarSign, value: "48 hrs", label: "COD Remittance" },
            { icon: Percent, value: "< 5%", label: "Avg. RTO Rate" },
            { icon: RefreshCcw, value: "85%", label: "NDR Recovery" },
          ].map((s) => (
            <div key={s.label} className="glass rounded-xl p-4 text-center">
              <s.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-lg font-display font-bold text-primary">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─── Growth Metrics ───────────────────────── */
const GrowthMetrics = () => (
  <section className="py-16 border-y border-border">
    <div className="container">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
        {[
          { value: "8,000+", label: "Active Sellers" },
          { value: "2M+", label: "Monthly Orders" },
          { value: "96.5%", label: "Delivery Success" },
          { value: "₹42", label: "Avg. Ship Cost" },
          { value: "< 5%", label: "RTO Rate" },
          { value: "4.8/5", label: "Seller Rating" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="text-center"
          >
            <p className="text-3xl font-display font-bold text-primary mb-1">{s.value}</p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Seller Success Stories ───────────────── */
const sellerStories = [
  {
    quote: "We went from 50 orders/day to 500 in 3 months. SwiftFleet's Shopify integration and auto-label feature saved us 4 hours of manual work every single day.",
    name: "Nisha R.",
    role: "Founder, BloomBox Candles",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=44",
  },
  {
    quote: "COD remittance in 48 hours changed our cash flow game. Earlier we'd wait 7-10 days. SwiftFleet is the reason we could reinvest faster and scale to ₹20L/month.",
    name: "Rohan D.",
    role: "Co-Founder, FitGear India",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=52",
  },
  {
    quote: "Our RTO rate dropped from 18% to 4.5% after using the NDR panel. The automated IVR calls and WhatsApp confirmations actually recover orders that would've been lost.",
    name: "Pooja K.",
    role: "Operations, DesiCraft Studio",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=26",
  },
  {
    quote: "The branded tracking page is a game-changer. Customers see our logo, our colors, and even product recommendations. It feels like our own logistics — not a third party.",
    name: "Aman G.",
    role: "CEO, UrbanRoots Clothing",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=68",
  },
  {
    quote: "I sell on Amazon, Flipkart, and Shopify simultaneously. SwiftFleet pulls orders from all three channels into one dashboard. Multi-channel selling was never this easy.",
    name: "Divya S.",
    role: "Founder, PureAura Skincare",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=38",
  },
  {
    quote: "We ship 1,200 fragile glass items daily. Their packaging guidelines and careful handling protocols mean we have less than 0.3% breakage. No other courier comes close.",
    name: "Manoj T.",
    role: "Director, GlassKraft Decor",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=57",
  },
];

const SellerStories = () => (
  <section className="py-24">
    <div className="container">
      <div className="text-center mb-16">
        <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Seller Stories</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Real Sellers. Real Results.
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          From home-based sellers doing 30 orders/day to D2C brands shipping thousands —
          hear how SwiftFleet Seller Hub transformed their shipping experience.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sellerStories.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex gap-0.5 text-primary mb-4">
              {[...Array(r.rating)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-sm text-foreground leading-relaxed mb-6 italic">"{r.quote}"</p>
            <div className="flex items-center gap-3">
              <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full object-cover border-2 border-primary/20" />
              <div>
                <p className="text-sm font-semibold text-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Why Sellers Choose Us ────────────────── */
const WhySellers = () => (
  <section className="py-16 border-y border-border">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { icon: Sparkles, title: "Zero Setup Fee", desc: "Create your account, connect your store, and start shipping. No registration charges, no platform fees." },
          { icon: Clock, title: "4-Hour Pickup", desc: "Schedule a pickup and our rider reaches your doorstep within 4 hours. Evening pickups available in 50+ cities." },
          { icon: BadgeCheck, title: "Weight Guarantee", desc: "We honor the weight you declare. No surprise weight discrepancies or retroactive billing adjustments." },
          { icon: Headphones, title: "Seller Support", desc: "Dedicated seller support team via WhatsApp, phone & email. Issues resolved within 2 hours, not 2 days." },
        ].map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <b.icon className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="font-display font-semibold text-foreground mb-1">{b.title}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── FAQ Section ──────────────────────────── */
const SellerFAQ = () => (
  <section className="py-24">
    <div className="container max-w-3xl">
      <div className="text-center mb-16">
        <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">FAQ</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Questions? <span className="text-gradient">We've Got Answers.</span>
        </h2>
      </div>

      <div className="space-y-4">
        {[
          {
            q: "How quickly can I start shipping after sign-up?",
            a: "Under 5 minutes. Create an account, connect your Shopify/WooCommerce store with one click, and your first order is ready to ship immediately. No KYC or documents needed to start.",
          },
          {
            q: "What are the COD remittance terms?",
            a: "Starter plan: COD remitted within 48 hours of delivery. Growth plan: 24-hour early remittance available. Enterprise: Custom remittance cycles, even same-day for high-volume sellers.",
          },
          {
            q: "How do you handle failed deliveries (NDR)?",
            a: "When a delivery fails, our system automatically triggers an IVR call and WhatsApp message to the buyer to confirm address/reschedule. You can also take manual action from the NDR panel — reschedule, update address, or mark RTO.",
          },
          {
            q: "Is there a minimum order requirement?",
            a: "No minimums at all. Ship 1 order or 10,000 — same service, same rates. We're built for sellers of every size, from Instagram shops to large D2C brands.",
          },
          {
            q: "Can I use my own packaging?",
            a: "Absolutely. Use your branded packaging and we'll handle it as-is. We also offer SwiftFleet-branded packaging at cost price if you need it — available in 5 sizes.",
          },
          {
            q: "What happens if a package is lost or damaged?",
            a: "All shipments include basic insurance up to ₹5,000. Claims are auto-processed within 7 working days. Growth and Enterprise plans include enhanced coverage up to ₹50,000 per shipment.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass rounded-xl p-6"
          >
            <h3 className="font-display font-semibold text-foreground mb-2">{item.q}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── CTA ──────────────────────────────────── */
const SellerCTA = () => (
  <section className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-3xl overflow-hidden glow-border"
      >
        <img src={IMG.ctaBg} alt="Start selling with SwiftFleet" className="w-full h-[300px] sm:h-[360px] lg:h-[400px] object-cover" />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Your Store Deserves <span className="text-gradient">Better Shipping.</span>
            </h2>
            <p className="text-muted-foreground mb-3 max-w-lg mx-auto">
              Join 8,000+ sellers who switched to SwiftFleet and never looked back.
              Start free — no credit card, no contracts, no minimum orders.
            </p>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto text-sm">
              First 50 shipments free for new seller accounts. Full dashboard access from day one.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg">
                Create Seller Account <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button variant="heroOutline" size="lg">
                <ShoppingBag className="w-4 h-4 mr-1" /> See Demo
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─── Page ─────────────────────────────────── */
const Home2 = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSeller />
    <IntegrationPartners />
    <SellerSteps />
    <PricingPlans />
    <SellerFeatures />
    <DashboardPreview />
    <CodNdrSection />
    <GrowthMetrics />
    <WhySellers />
    <SellerStories />
    <SellerFAQ />
    <SellerCTA />
    <Footer showHighlights={false} />
  </div>
);

export default Home2;
