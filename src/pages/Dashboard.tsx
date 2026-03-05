import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Package, Truck, Clock, MapPin, TrendingUp, AlertTriangle } from "lucide-react";

const stats = [
  { icon: Package, label: "Total Shipments", value: "12,847", change: "+12%" },
  { icon: Truck, label: "Active Fleet", value: "1,247", change: "+5%" },
  { icon: Clock, label: "Avg. Delivery", value: "2.4 hrs", change: "-18%" },
  { icon: MapPin, label: "Cities Covered", value: "534", change: "+8%" },
];

const recentDeliveries = [
  { id: "SF-29481", dest: "Mumbai, MH", status: "Delivered", time: "12 min ago" },
  { id: "SF-29482", dest: "Delhi, DL", status: "In Transit", time: "24 min ago" },
  { id: "SF-29483", dest: "Bangalore, KA", status: "Delivered", time: "38 min ago" },
  { id: "SF-29484", dest: "Chennai, TN", status: "Out for Delivery", time: "45 min ago" },
  { id: "SF-29485", dest: "Pune, MH", status: "Delivered", time: "1 hr ago" },
];

const Dashboard = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-32 pb-24">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Dashboard</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Fleet <span className="text-gradient">Overview</span>
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <s.icon className="w-8 h-8 text-primary" />
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  s.change.startsWith("+") ? "bg-primary/10 text-primary" : "bg-green-500/10 text-green-400"
                }`}>
                  {s.change}
                </span>
              </div>
              <p className="text-3xl font-display font-bold text-foreground">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent deliveries */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 glass rounded-2xl p-6"
          >
            <h2 className="font-display font-semibold text-foreground mb-4">Recent Deliveries</h2>
            <div className="space-y-3">
              {recentDeliveries.map((d) => (
                <div key={d.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                  <div className="flex items-center gap-3">
                    <Package className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{d.id}</p>
                      <p className="text-xs text-muted-foreground">{d.dest}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      d.status === "Delivered"
                        ? "bg-primary/10 text-primary"
                        : d.status === "In Transit"
                        ? "bg-blue-500/10 text-blue-400"
                        : "bg-yellow-500/10 text-yellow-400"
                    }`}>
                      {d.status}
                    </span>
                    <p className="text-xs text-muted-foreground mt-1">{d.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Alerts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-2xl p-6"
          >
            <h2 className="font-display font-semibold text-foreground mb-4">System Alerts</h2>
            <div className="space-y-4">
              {[
                { msg: "Route optimization complete for Zone B", type: "success" },
                { msg: "High traffic alert: Delhi NCR region", type: "warning" },
                { msg: "Fleet maintenance due: Vehicle SF-042", type: "info" },
                { msg: "New pickup request from FreshBox", type: "success" },
              ].map((a, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-2 h-2 mt-1.5 rounded-full flex-shrink-0 ${
                    a.type === "success" ? "bg-primary" : a.type === "warning" ? "bg-yellow-400" : "bg-blue-400"
                  }`} />
                  <p className="text-sm text-muted-foreground">{a.msg}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-secondary">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">Performance</span>
              </div>
              <p className="text-3xl font-display font-bold text-primary">98.4%</p>
              <p className="text-xs text-muted-foreground">Fleet efficiency this week</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Dashboard;
