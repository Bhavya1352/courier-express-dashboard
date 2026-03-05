import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Package, Truck, Clock, MapPin, Plus, Search, Filter, Download, Eye, CheckCircle2, AlertCircle, XCircle, DollarSign } from "lucide-react";
import { useDirection } from "@/contexts/DirectionContext";

const userStats = [
  { icon: Package, label: "My Shipments", value: "247", change: "+12%" },
  { icon: Truck, label: "In Transit", value: "18", change: "+3%" },
  { icon: CheckCircle2, label: "Delivered", value: "229", change: "+15%" },
  { icon: Clock, label: "Avg. Delivery", value: "2.1 days", change: "-8%" },
  { icon: MapPin, label: "Cities Shipped", value: "34", change: "+5%" },
  { icon: DollarSign, label: "Total Spent", value: "₹34,567", change: "+22%" },
];

const recentShipments = [
  { id: "SF-24801", to: "Mumbai, MH", from: "Delhi, DL", status: "Delivered", date: "2 hours ago", amount: "₹89", weight: "2.5 kg" },
  { id: "SF-24802", to: "Bangalore, KA", from: "Mumbai, MH", status: "In Transit", date: "1 day ago", amount: "₹156", weight: "1.2 kg" },
  { id: "SF-24803", to: "Chennai, TN", from: "Kolkata, WB", status: "Out for Delivery", date: "2 days ago", amount: "₹67", weight: "0.8 kg" },
  { id: "SF-24804", to: "Pune, MH", from: "Delhi, DL", status: "Delivered", date: "3 days ago", amount: "₹134", weight: "3.1 kg" },
  { id: "SF-24805", to: "Hyderabad, TS", from: "Mumbai, MH", status: "Failed", date: "4 days ago", amount: "₹78", weight: "1.7 kg" },
  { id: "SF-24806", to: "Ahmedabad, GJ", from: "Delhi, DL", status: "Processing", date: "5 days ago", amount: "₹92", weight: "2.3 kg" },
];

const monthlyData = [
  { month: "Jan", shipments: 45, spent: 6780 },
  { month: "Feb", shipments: 52, spent: 7890 },
  { month: "Mar", shipments: 38, spent: 5670 },
  { month: "Apr", shipments: 61, spent: 8940 },
  { month: "May", shipments: 47, spent: 7120 },
  { month: "Jun", shipments: 55, spent: 8230 },
];

const savedAddresses = [
  { name: "Home", address: "123 MG Road, Bangalore - 560001", type: "Residential" },
  { name: "Office", address: "45 Cyber City, Gurgaon - 122002", type: "Commercial" },
  { name: "Warehouse", address: "Plot 67, MIDC, Pune - 411019", type: "Industrial" },
];

const UserDashboard = () => {
  const { isRTL } = useDirection();

  return (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-32 pb-24">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">User Dashboard</p>
              <h1 className="text-4xl md:text-5xl font-display font-bold">
                {isRTL ? (
                  <>
                    ,My <span className="text-gradient">Shipments.</span>
                  </>
                ) : (
                  <>
                    My <span className="text-gradient">Shipments</span>
                  </>
                )}
              </h1>
            </div>
            <Button variant="hero" size="lg" className="mt-4 md:mt-0">
              <Plus className="w-4 h-4 mr-2" />
              New Shipment
            </Button>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {userStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  stat.change.startsWith("+") ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"
                }`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-3xl font-display font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-2xl p-6 mb-8"
        >
          <h2 className="font-display font-semibold text-foreground mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { icon: Plus, title: "Create Shipment", desc: "Book a new pickup" },
              { icon: Search, title: "Track Package", desc: "Find your shipment" },
              { icon: Download, title: "Download Invoice", desc: "Get billing details" },
              { icon: MapPin, title: "Pickup Schedule", desc: "Manage pickups" },
            ].map((action, i) => (
              <div key={action.title} className="bg-secondary rounded-xl p-4 text-center hover:bg-secondary/80 transition-colors cursor-pointer">
                <action.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-medium text-foreground text-sm mb-1">{action.title}</p>
                <p className="text-xs text-muted-foreground">{action.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Shipments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 glass rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display font-semibold text-foreground">Recent Shipments</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-1" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Eye className="w-4 h-4 mr-1" />
                  View All
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              {recentShipments.map((shipment) => (
                <div key={shipment.id} className="flex items-center justify-between p-4 bg-secondary rounded-xl">
                  <div className="flex items-center gap-4">
                    <Package className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-foreground">{shipment.id}</p>
                      <p className="text-sm text-muted-foreground">{shipment.from} → {shipment.to}</p>
                      <p className="text-xs text-muted-foreground">{shipment.weight}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                      shipment.status === "Delivered"
                        ? "bg-green-500/10 text-green-400"
                        : shipment.status === "In Transit"
                        ? "bg-blue-500/10 text-blue-400"
                        : shipment.status === "Out for Delivery"
                        ? "bg-yellow-500/10 text-yellow-400"
                        : shipment.status === "Processing"
                        ? "bg-purple-500/10 text-purple-400"
                        : "bg-red-500/10 text-red-400"
                    }`}>
                      {shipment.status}
                    </span>
                    <p className="text-sm text-muted-foreground mt-1">{shipment.date}</p>
                    <p className="text-sm font-medium text-primary">{shipment.amount}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Account Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            {/* Account Balance */}
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display font-semibold text-foreground mb-4">Account Balance</h3>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-primary mb-2">₹2,847</p>
                <p className="text-sm text-muted-foreground mb-4">Available Credit</p>
                <Button variant="hero" size="sm" className="w-full">
                  Add Funds
                </Button>
              </div>
            </div>

            {/* Monthly Summary */}
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display font-semibold text-foreground mb-4">Monthly Trends</h3>
              <div className="space-y-4">
                {monthlyData.slice(-3).map((month) => (
                  <div key={month.month} className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{month.month}</span>
                    <div className="text-right">
                      <p className="text-sm font-medium text-foreground">{month.shipments} shipments</p>
                      <p className="text-xs text-muted-foreground">₹{month.spent.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Saved Addresses */}
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display font-semibold text-foreground mb-4">Saved Addresses</h3>
              <div className="space-y-3">
                {savedAddresses.map((addr, i) => (
                  <div key={i} className="p-3 bg-secondary rounded-lg">
                    <div className="flex justify-between items-start mb-1">
                      <p className="text-sm font-medium text-foreground">{addr.name}</p>
                      <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">{addr.type}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{addr.address}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Notifications */}
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display font-semibold text-foreground mb-4">Notifications</h3>
              <div className="space-y-3">
                {[
                  { icon: CheckCircle2, msg: "Package SF-24801 delivered", type: "success" },
                  { icon: AlertCircle, msg: "Pickup scheduled for tomorrow", type: "warning" },
                  { icon: XCircle, msg: "Delivery attempt failed", type: "error" },
                ].map((notif, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <notif.icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                      notif.type === "success" ? "text-green-400" : 
                      notif.type === "warning" ? "text-yellow-400" : "text-red-400"
                    }`} />
                    <p className="text-sm text-muted-foreground">{notif.msg}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Personalized user-only insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid lg:grid-cols-2 gap-6 mt-8"
        >
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display font-semibold text-foreground">Shipping Preferences</h3>
              <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Personal</span>
            </div>
            <div className="space-y-4">
              {[
                { label: "Preferred Pickup Slot", value: "9:00 AM - 11:00 AM" },
                { label: "Primary Delivery Type", value: "Express (Same Day)" },
                { label: "Default Packaging", value: "Eco Secure Box" },
                { label: "Notification Mode", value: "WhatsApp + Email" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="text-sm font-medium text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display font-semibold text-foreground">Savings & Rewards</h3>
              <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-400">Gold Tier</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-secondary rounded-xl p-4 text-center">
                <p className="text-2xl font-display font-bold text-primary">₹1,420</p>
                <p className="text-xs text-muted-foreground">Saved This Month</p>
              </div>
              <div className="bg-secondary rounded-xl p-4 text-center">
                <p className="text-2xl font-display font-bold text-green-400">2,850</p>
                <p className="text-xs text-muted-foreground">Reward Points</p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                "Use 1,000 points for free express delivery",
                "Get 5% off on bulk shipments above 20 orders",
                "Priority support enabled for your account",
              ].map((benefit) => (
                <p key={benefit} className="text-sm text-muted-foreground">• {benefit}</p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    <Footer />
  </div>
  );
};

export default UserDashboard;