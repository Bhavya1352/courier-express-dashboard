import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Package, Menu, X, Globe, ChevronDown } from "lucide-react";
import { useDirection } from "@/contexts/DirectionContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileHomeOpen, setMobileHomeOpen] = useState(false);
  const location = useLocation();
  const { toggleDirection, isRTL } = useDirection();

  const isHomePage = location.pathname === "/" || location.pathname === "/home1" || location.pathname === "/home2";
  const isDashboardPage = location.pathname.includes("/dashboard");

  const navLinks = [
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const navItemClass = (active: boolean) =>
    `px-3.5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
      active
        ? "bg-primary/15 text-primary"
        : "text-muted-foreground hover:text-foreground hover:bg-secondary/70"
    }`;

  return (
    <nav className="fixed top-3 left-4 right-4 z-50 rounded-2xl border border-white/10 bg-background/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent" />

      <div className="container flex items-center justify-between h-[72px] px-3 sm:px-5 md:px-6">
        <Link to="/" className="flex items-center gap-2 sm:gap-2.5 hover-lift">
          <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center">
            <Package className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </span>
          <span className="text-lg sm:text-xl font-display font-bold text-foreground">
            Ship<span className="text-primary">Fast</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-2 rounded-full border border-border/70 bg-secondary/40 px-2 py-1.5">
          {/* Home Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`${navItemClass(isHomePage)} inline-flex items-center gap-1.5 outline-none`}
              >
                Home <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-[170px] border-border/70 bg-background/95 backdrop-blur-xl">
              <DropdownMenuItem asChild>
                <Link to="/home1" className="cursor-pointer">
                  Home 1
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/home2" className="cursor-pointer">
                  Home 2
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={navItemClass(location.pathname === l.to)}
            >
              {l.label}
            </Link>
          ))}

          {/* Dashboard Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`${navItemClass(isDashboardPage)} inline-flex items-center gap-1.5 outline-none`}
              >
                Dashboard <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-[170px] border-border/70 bg-background/95 backdrop-blur-xl">
              <DropdownMenuItem asChild>
                <Link to="/user-dashboard" className="cursor-pointer">
                  User Dashboard
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/admin-dashboard" className="cursor-pointer">
                  Admin Dashboard
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="hidden lg:flex items-center gap-3.5">
          <button
            onClick={toggleDirection}
            className={`w-10 h-10 rounded-xl border transition-all duration-200 flex items-center justify-center ${
              isRTL
                ? "border-primary/50 bg-primary/15 text-primary"
                : "border-border bg-secondary/50 text-muted-foreground hover:text-foreground hover:border-primary/40"
            }`}
            title="Toggle Direction / Punctuation"
          >
            <Globe className="w-5 h-5" />
          </button>
          <Button variant="hero" size="lg" className="hover-glow" asChild>
            <Link to="/get-started">Get Started</Link>
          </Button>
        </div>

        <button
          className="lg:hidden text-foreground p-2 sm:p-2.5 rounded-xl border border-border bg-secondary/40 hover:bg-secondary/70 transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden px-5 pb-5 pt-2 border-t border-border/60 space-y-3 overflow-hidden"
          >
            {/* Mobile Home Dropdown */}
            <div>
              <button
                onClick={() => setMobileHomeOpen(!mobileHomeOpen)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm transition-colors ${
                  isHomePage ? "bg-primary/15 text-primary" : "bg-secondary/40 text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>Home</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileHomeOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {mobileHomeOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4 pr-1 mt-2 space-y-2 overflow-hidden"
                  >
                    <Link
                      to="/home1"
                      onClick={() => setOpen(false)}
                      className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors"
                    >
                      Home 1
                    </Link>
                    <Link
                      to="/home2"
                      onClick={() => setOpen(false)}
                      className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors"
                    >
                      Home 2
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`block px-3.5 py-2.5 rounded-xl text-sm transition-colors ${
                  location.pathname === l.to
                    ? "bg-primary/15 text-primary"
                    : "bg-secondary/40 text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            
            {/* Mobile Dashboard Links */}
            <Link
              to="/user-dashboard"
              onClick={() => setOpen(false)}
              className={`block px-3.5 py-2.5 rounded-xl text-sm transition-colors ${
                location.pathname === "/user-dashboard"
                  ? "bg-primary/15 text-primary"
                  : "bg-secondary/40 text-muted-foreground hover:text-foreground"
              }`}
            >
              User Dashboard
            </Link>
            <Link
              to="/admin-dashboard"
              onClick={() => setOpen(false)}
              className={`block px-3.5 py-2.5 rounded-xl text-sm transition-colors ${
                location.pathname === "/admin-dashboard"
                  ? "bg-primary/15 text-primary"
                  : "bg-secondary/40 text-muted-foreground hover:text-foreground"
              }`}
            >
              Admin Dashboard
            </Link>
            
            <button
              onClick={toggleDirection}
              className={`w-full flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-sm transition-colors ${
                isRTL
                  ? "bg-primary/15 text-primary"
                  : "bg-secondary/40 text-muted-foreground hover:text-foreground"
              }`}
            >
              <Globe className="w-4 h-4" />
              Toggle Direction
            </button>
            
            <Button variant="hero" size="sm" className="w-full hover-glow" asChild>
              <Link to="/get-started" onClick={() => setOpen(false)}>Get Started</Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
