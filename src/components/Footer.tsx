import {
  Package,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  Truck,
  Shield,
  Headphones,
} from "lucide-react";
import { Link } from "react-router-dom";

type FooterProps = {
  showHighlights?: boolean;
};

const Footer = ({ showHighlights = true }: FooterProps) => (
  <footer className="relative border-t border-border bg-secondary/30 pt-20 pb-8 overflow-hidden">
    {/* Background glow */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

    <div className="container relative z-10">
      {showHighlights && (
        <div className="glass rounded-2xl p-8 md:p-10 mb-16 glow-border">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-display font-semibold text-foreground">Free Pickup</p>
                <p className="text-sm text-muted-foreground">On orders above ₹500</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-display font-semibold text-foreground">Secure Shipping</p>
                <p className="text-sm text-muted-foreground">Insurance up to ₹50 Lakh</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Headphones className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-display font-semibold text-foreground">24/7 Support</p>
                <p className="text-sm text-muted-foreground">Always here to help</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main footer grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
        {/* Brand column */}
        <div className="lg:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-5">
            <Package className="w-7 h-7 text-primary" />
            <span className="text-xl font-display font-bold text-foreground">
              Swift<span className="text-primary">Fleet</span>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            India's fastest-growing courier & logistics platform. AI-powered dispatch,
            real-time tracking, and delivery across 500+ cities.
          </p>
          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              { icon: Facebook, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Youtube, href: "#" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-semibold text-foreground mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { label: "Home", to: "/" },
              { label: "About Us", to: "/about" },
              { label: "Contact", to: "/contact" },
              { label: "Dashboard", to: "/dashboard" },
              { label: "Track Order", to: "/dashboard" },
              { label: "Get Quote", to: "/contact" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display font-semibold text-foreground mb-5">Our Services</h4>
          <ul className="space-y-3">
            {[
              "Express Delivery",
              "Same-Day Shipping",
              "Bulk Logistics",
              "Cold Chain Delivery",
              "Warehouse Storage",
              "Last-Mile Delivery",
            ].map((s) => (
              <li key={s}>
                <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer inline-flex items-center gap-1.5 group">
                  <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                  {s}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-display font-semibold text-foreground mb-5">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground leading-relaxed">
                SwiftFleet HQ, Plot 42, Sector 62,<br />Noida, UP 201309, India
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm text-muted-foreground">+91 1800-123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm text-muted-foreground">support@swiftfleet.in</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm text-muted-foreground">24/7 — 365 days</span>
            </li>
          </ul>

          {/* Newsletter mini */}
          <div className="mt-6">
            <p className="text-sm font-medium text-foreground mb-2">Newsletter</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 h-10 rounded-l-lg bg-secondary border border-border px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <button className="h-10 px-4 rounded-r-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 SwiftFleet Logistics Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Refund Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
