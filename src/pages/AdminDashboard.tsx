import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Package, Users, Truck, DollarSign, TrendingUp, AlertTriangle, Settings, BarChart3, MapPin, Clock, Shield, Zap } from "lucide-react";
import { useDirection } from "@/contexts/DirectionContext";

const adminStats = [
  { icon: Package, label: "Total Orders", value: "12,847", change: "+12%", color: "text-blue-400" },
  { icon: Users, label: "Active Users", value: "8,234", change: "+8%", color: "text-green-400" },
  { icon: Truck, label: "Fleet Size", value: "1,247", change: "+5%", color: "text-purple-400" },
  { icon: DollarSign, label: "Revenue", value: "₹24.5L", change: "+18%", color: "text-primary" },
  { icon: MapPin, label: "Cities Covered", value: "534", change: "+3%", color: "text-orange-400" },
  { icon: BarChart3, label: "Success Rate", value: "98.7%", change: "+2.1%", color: "text-emerald-400" },
];

const recentActivity = [
  { id: "ACT-001", action: "New user registration", user: "Rahul Sharma", time: "2 min ago", type: "user", details: "Verified account from Mumbai" },
  { id: "ACT-002", action: "Fleet vehicle added", user: "System", time: "15 min ago", type: "fleet", details: "Vehicle SF-1248 added to North Zone" },
  { id: "ACT-003", action: "Payment processed", user: "Priya Patel", time: "32 min ago", type: "payment", details: "₹2,450 COD remittance" },
  { id: "ACT-004", action: "Route optimized", user: "AI System", time: "1 hr ago", type: "system", details: "Delhi-NCR routes updated" },
  { id: "ACT-005", action: "Support ticket resolved", user: "Admin Team", time: "2 hrs ago", type: "support", details: "Delivery issue resolved" },
  { id: "ACT-006", action: "Bulk order received", user: "Enterprise Client", time: "3 hrs ago", type: "order", details: "500+ packages from FreshMart" },
];

const fleetStatus = [
  { zone: "North Delhi", active: 45, total: 60, efficiency: 92, revenue: "4.2L" },
  { zone: "South Mumbai", active: 38, total: 45, efficiency: 89, revenue: "3.8L" },
  { zone: "East Bangalore", active: 52, total: 65, efficiency: 95, revenue: "5.1L" },
  { zone: "West Chennai", active: 29, total: 35, efficiency: 87, revenue: "2.9L" },
  { zone: "Central Pune", active: 41, total: 50, efficiency: 91, revenue: "3.6L" },
];

const systemAlerts = [
  { type: "critical", message: "Server load high in Mumbai region", time: "5 min ago", action: "Scale resources" },
  { type: "warning", message: "Vehicle SF-042 maintenance due", time: "1 hr ago", action: "Schedule service" },
  { type: "info", message: "New API integration request", time: "2 hrs ago", action: "Review request" },
  { type: "success", message: "Route optimization completed", time: "3 hrs ago", action: "Monitor performance" },
];

const AdminDashboard = () => {
  const { isRTL } = useDirection();

  return (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-32 pb-24">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Admin Dashboard</p>
              <h1 className="text-4xl md:text-5xl font-display font-bold">
                {isRTL ? (
                  <>
                    ,System <span className="text-gradient">Overview.</span>
                  </>
                ) : (
                  <>
                    System <span className="text-gradient">Overview</span>
                  </>
                )}
              </h1>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
              <Button variant="outline" size="lg">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button variant="hero" size="lg">
                <BarChart3 className="w-4 h-4 mr-2" />
                Analytics
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {adminStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full -mr-10 -mt-10" />
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-500/10 text-green-400">
                  {stat.change}
                </span>
              </div>
              <p className="text-3xl font-display font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-2xl p-6 mb-8"
        >
          <h2 className="font-display font-semibold text-foreground mb-6">Performance Metrics</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Delivery Speed", value: "2.1 hrs", desc: "Average delivery time", trend: "↓ 12%" },
              { icon: Shield, title: "Success Rate", value: "98.7%", desc: "Successful deliveries", trend: "↑ 2.3%" },
              { icon: Clock, title: "On-Time Rate", value: "96.4%", desc: "Delivered on schedule", trend: "↑ 1.8%" },
              { icon: TrendingUp, title: "Growth Rate", value: "24.5%", desc: "Monthly growth", trend: "↑ 5.2%" },
            ].map((metric, i) => (
              <div key={metric.title} className="bg-secondary rounded-xl p-4 text-center">
                <metric.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-2xl font-display font-bold text-foreground mb-1">{metric.value}</p>
                <p className="text-xs text-muted-foreground mb-2">{metric.desc}</p>
                <span className="text-xs font-medium text-green-400">{metric.trend}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 glass rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display font-semibold text-foreground">Recent Activity</h2>
              <Button variant="outline" size="sm">View All</Button>
            </div>
            
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start justify-between p-4 bg-secondary rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activity.type === "user" ? "bg-blue-500/10" :
                      activity.type === "fleet" ? "bg-purple-500/10" :
                      activity.type === "payment" ? "bg-green-500/10" :
                      activity.type === "system" ? "bg-orange-500/10" :
                      activity.type === "order" ? "bg-indigo-500/10" : "bg-red-500/10"
                    }`}>
                      {activity.type === "user" ? <Users className="w-5 h-5 text-blue-400" /> :
                       activity.type === "fleet" ? <Truck className="w-5 h-5 text-purple-400" /> :
                       activity.type === "payment" ? <DollarSign className="w-5 h-5 text-green-400" /> :
                       activity.type === "system" ? <Settings className="w-5 h-5 text-orange-400" /> :
                       activity.type === "order" ? <Package className="w-5 h-5 text-indigo-400" /> :
                       <AlertTriangle className="w-5 h-5 text-red-400" />}
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.user}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.details}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Fleet Status & System Health */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            {/* Fleet Status */}
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display font-semibold text-foreground mb-4">Fleet Status by Zone</h3>
              <div className="space-y-4">
                {fleetStatus.map((zone) => (
                  <div key={zone.zone}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">{zone.zone}</span>
                      <span className="text-xs text-muted-foreground">{zone.active}/{zone.total}</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2 mb-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${(zone.active / zone.total) * 100}%` }}
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-green-400">{zone.efficiency}% efficiency</span>
                      <span className="text-xs font-medium text-primary">₹{zone.revenue}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Alerts */}
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display font-semibold text-foreground mb-4">System Alerts</h3>
              <div className="space-y-3">
                {systemAlerts.map((alert, i) => (
                  <div key={i} className="p-3 bg-secondary rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 mt-1.5 rounded-full flex-shrink-0 ${
                        alert.type === "critical" ? "bg-red-400" :
                        alert.type === "warning" ? "bg-yellow-400" :
                        alert.type === "info" ? "bg-blue-400" : "bg-green-400"
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm text-foreground">{alert.message}</p>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-xs text-muted-foreground">{alert.time}</span>
                          <span className="text-xs text-primary">{alert.action}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Health */}
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display font-semibold text-foreground mb-4">System Health</h3>
              <div className="space-y-4">
                {[
                  { name: "API Response", status: "Excellent", value: "99.9%", color: "text-green-400" },
                  { name: "Database", status: "Good", value: "98.7%", color: "text-blue-400" },
                  { name: "GPS Tracking", status: "Excellent", value: "99.8%", color: "text-green-400" },
                  { name: "Payment Gateway", status: "Good", value: "97.2%", color: "text-yellow-400" },
                ].map((system) => (
                  <div key={system.name} className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-foreground">{system.name}</p>
                      <p className="text-xs text-muted-foreground">{system.status}</p>
                    </div>
                    <span className={`text-sm font-medium ${system.color}`}>{system.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display font-semibold text-foreground mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Manage Users
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Truck className="w-4 h-4 mr-2" />
                  Fleet Management
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Reports
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  System Settings
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Admin-only operational controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid lg:grid-cols-2 gap-6 mt-8"
        >
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display font-semibold text-foreground">SLA Breach Monitor</h3>
              <span className="text-xs px-2 py-1 rounded-full bg-red-500/10 text-red-400">Ops Critical</span>
            </div>
            <div className="space-y-3">
              {[
                { route: "Delhi → Jaipur", delayed: "28 min", risk: "High" },
                { route: "Mumbai → Pune", delayed: "12 min", risk: "Medium" },
                { route: "Chennai → Coimbatore", delayed: "35 min", risk: "High" },
                { route: "Bangalore → Mysuru", delayed: "9 min", risk: "Low" },
              ].map((row) => (
                <div key={row.route} className="p-3 bg-secondary rounded-lg flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">{row.route}</p>
                    <p className="text-xs text-muted-foreground">Delayed: {row.delayed}</p>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      row.risk === "High"
                        ? "bg-red-500/10 text-red-400"
                        : row.risk === "Medium"
                        ? "bg-yellow-500/10 text-yellow-400"
                        : "bg-green-500/10 text-green-400"
                    }`}
                  >
                    {row.risk}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display font-semibold text-foreground">Regional Command Queue</h3>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-400">Live</span>
            </div>
            <div className="space-y-4 mb-5">
              {[
                { title: "North Zone Staffing", owner: "Ops Lead - A. Verma", eta: "ETA 18 min" },
                { title: "COD Reconciliation", owner: "Finance - K. Singh", eta: "ETA 35 min" },
                { title: "RTO Spike Review", owner: "Analytics - P. Iyer", eta: "ETA 22 min" },
                { title: "Hub Scanner Downtime", owner: "Infra - N. Khan", eta: "ETA 10 min" },
              ].map((task) => (
                <div key={task.title} className="border border-border rounded-xl p-3">
                  <p className="text-sm font-medium text-foreground">{task.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{task.owner}</p>
                  <p className="text-xs text-primary mt-1">{task.eta}</p>
                </div>
              ))}
            </div>
            <Button variant="hero" size="sm" className="w-full">
              Open Operations War Room
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
    <Footer showHighlights={false} />
  </div>
  );
};

export default AdminDashboard;