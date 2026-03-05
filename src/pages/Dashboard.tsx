import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Package, User, Shield, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useDirection } from "@/contexts/DirectionContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Dashboard = () => {
  const { isRTL } = useDirection();

  return (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section dir="ltr" className="pt-32 pb-24">
      <div className="container max-w-4xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Package className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            {isRTL ? (
              <>
                ,Choose Your <span className="text-gradient">Dashboard.</span>
              </>
            ) : (
              <>
                Choose Your <span className="text-gradient">Dashboard</span>
              </>
            )}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Access your personalized dashboard based on your role and requirements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* User Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-8 text-center hover:glow-border transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-6">
              <User className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">User Dashboard</h2>
            <p className="text-muted-foreground mb-6">
              Track your shipments, manage orders, view delivery history, and handle payments.
            </p>
            <ul className="text-sm text-muted-foreground mb-8 space-y-2">
              <li>• Track active shipments</li>
              <li>• View delivery history</li>
              <li>• Manage account balance</li>
              <li>• Download invoices</li>
            </ul>
            <Button variant="hero" size="lg" className="w-full" asChild>
              <Link to="/user-dashboard">
                Access User Dashboard
              </Link>
            </Button>
          </motion.div>

          {/* Admin Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-8 text-center hover:glow-border transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-red-400" />
            </div>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Admin Dashboard</h2>
            <p className="text-muted-foreground mb-6">
              Monitor system performance, manage fleet operations, view analytics, and control users.
            </p>
            <ul className="text-sm text-muted-foreground mb-8 space-y-2">
              <li>• System overview & analytics</li>
              <li>• Fleet management</li>
              <li>• User administration</li>
              <li>• Performance monitoring</li>
            </ul>
            <Button variant="heroOutline" size="lg" className="w-full" asChild>
              <Link to="/admin-dashboard">
                Access Admin Dashboard
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Quick Access Dropdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="lg">
                Quick Access <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="min-w-[200px]">
              <DropdownMenuItem asChild>
                <Link to="/user-dashboard" className="cursor-pointer">
                  <User className="w-4 h-4 mr-2" />
                  User Dashboard
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/admin-dashboard" className="cursor-pointer">
                  <Shield className="w-4 h-4 mr-2" />
                  Admin Dashboard
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/get-started" className="cursor-pointer">
                  <Package className="w-4 h-4 mr-2" />
                  New Shipment
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </motion.div>
      </div>
    </section>
    <Footer />
  </div>
  );
};

export default Dashboard;
