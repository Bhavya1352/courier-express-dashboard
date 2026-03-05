import { Package } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2">
          <Package className="w-6 h-6 text-primary" />
          <span className="text-lg font-display font-bold text-foreground">
            Swift<span className="text-primary">Fleet</span>
          </span>
        </Link>
        <div className="flex gap-8 text-sm text-muted-foreground">
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          <Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
        </div>
        <p className="text-xs text-muted-foreground">
          © 2026 SwiftFleet. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
