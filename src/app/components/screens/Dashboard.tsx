import { Link } from "react-router";
import { Bell, Activity, Moon, Heart, Droplet, Wind, TrendingUp, LogOut } from "lucide-react";
import { motion } from "motion/react";

export function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen py-8 pb-24"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-[#9ca3af] text-sm mb-1">ยินดีต้อนรับกลับมา</h2>
          <h1 className="text-white text-2xl">แดชบอร์ด</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 bg-[#16161f] border border-white/10 rounded-xl text-[#9ca3af] hover:text-white transition-colors">
            <Bell className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Risk Score Circle */}
      <div className="mb-6">
        <div className="bg-[#16161f] border border-[#ec4899]/30 rounded-3xl p-8 relative overflow-hidden shadow-xl shadow-[#ec4899]/20">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#ec4899]/30 to-transparent blur-2xl"></div>
          <div className="relative flex flex-col items-center">
            <RiskScoreCircle score={28} status="low" />
            <h3 className="text-white mt-6 mb-2">ความเสี่ยงไมเกรน</h3>
            <p className="text-[#9ca3af] text-sm">คุณอยู่ในโซนปลอดภัยวันนี้</p>
          </div>
        </div>
      </div>

      {/* Health Metrics */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <MetricCard
          icon={<Activity className="w-5 h-5" />}
          label="ระดับความเครียด"
          value="ต่ำ"
          percentage={32}
          color="green"
        />
        <MetricCard
          icon={<Moon className="w-5 h-5" />}
          label="คุณภาพการนอน"
          value="ดี"
          percentage={78}
          color="pink"
        />
        <MetricCard
          icon={<Heart className="w-5 h-5" />}
          label="HRV"
          value="ปกติ"
          percentage={65}
          color="pink"
        />
        <MetricCard
          icon={<Droplet className="w-5 h-5" />}
          label="การดื่มน้ำ"
          value="ดี"
          percentage={70}
          color="pink"
        />
      </div>

      {/* Health Signals Summary */}
      <div className="bg-[#16161f] border border-white/10 rounded-2xl p-5 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white">สัญญาณสุขภาพวันนี้</h3>
          <TrendingUp className="w-5 h-5 text-[#10b981]" />
        </div>
        <div className="space-y-3 mb-4">
          <SignalItem icon={<Wind className="w-4 h-4" />} label="คุณภาพอากาศดี" status="positive" />
          <SignalItem icon={<Moon className="w-4 h-4" />} label="นอนหลับ 7.5 ชั่วโมง" status="positive" />
          <SignalItem icon={<Activity className="w-4 h-4" />} label="ระดับความเครียดต่ำ" status="positive" />
        </div>
        <div className="text-xs text-[#9ca3af] pt-3 border-t border-white/10">
          วิเคราะห์ล่าสุด: 2 นาทีที่แล้ว
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Link to="/triggers" className="bg-gradient-to-br from-[#ec4899] to-[#f472b6] rounded-2xl p-5 text-white hover:opacity-90 hover:shadow-lg hover:shadow-[#ec4899]/50 transition-all">
          <Activity className="w-6 h-6 mb-2" />
          <div className="text-sm">ดูปัจจัยกระตุ้น</div>
        </Link>
        <Link to="/history" className="bg-gradient-to-br from-[#f472b6] to-[#ec4899] rounded-2xl p-5 text-white hover:opacity-90 hover:shadow-lg hover:shadow-[#f472b6]/50 transition-all">
          <TrendingUp className="w-6 h-6 mb-2" />
          <div className="text-sm">ประวัติ</div>
        </Link>
      </div>

      {/* Logout Button */}
      <Link 
        to="/" 
        className="w-full bg-[#16161f] border border-[#ef4444]/30 text-[#ef4444] py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#ef4444]/10 transition-colors mb-6"
      >
        <LogOut className="w-5 h-5" />
        <span>ออกจากระบบ</span>
      </Link>

      {/* Bottom Navigation */}
      <BottomNav />
    </motion.div>
  );
}

function RiskScoreCircle({ score, status }: { score: number; status: "low" | "moderate" | "high" }) {
  const colors = {
    low: { stroke: "#10b981", glow: "#10b981" },
    moderate: { stroke: "#f59e0b", glow: "#f59e0b" },
    high: { stroke: "#ef4444", glow: "#ef4444" },
  };

  const circumference = 2 * Math.PI * 70;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative w-40 h-40">
      <svg className="transform -rotate-90 w-40 h-40">
        <circle
          cx="80"
          cy="80"
          r="70"
          stroke="#1e1e2a"
          strokeWidth="12"
          fill="none"
        />
        <circle
          cx="80"
          cy="80"
          r="70"
          stroke={colors[status].stroke}
          strokeWidth="12"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000"
          style={{ filter: `drop-shadow(0 0 8px ${colors[status].glow}40)` }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-4xl text-white">{score}%</div>
        <div className="text-xs text-[#9ca3af] uppercase tracking-wide mt-1">{status} Risk</div>
      </div>
    </div>
  );
}

function MetricCard({ icon, label, value, percentage, color }: { icon: React.ReactNode; label: string; value: string; percentage: number; color: string }) {
  const colors = {
    green: "from-[#10b981]/20 to-[#10b981]/5",
    blue: "from-[#3b82f6]/20 to-[#3b82f6]/5",
    purple: "from-[#7c3aed]/20 to-[#7c3aed]/5",
    yellow: "from-[#f59e0b]/20 to-[#f59e0b]/5",
    pink: "from-[#ec4899]/20 to-[#ec4899]/5",
  };

  return (
    <div className={`bg-gradient-to-br ${colors[color as keyof typeof colors]} border border-white/10 rounded-2xl p-4`}>
      <div className="flex items-center gap-2 mb-3 text-[#9ca3af]">
        {icon}
      </div>
      <div className="text-white text-xl mb-1">{value}</div>
      <div className="text-[#9ca3af] text-xs mb-2">{label}</div>
      <div className="w-full bg-[#1e1e2a] rounded-full h-1.5">
        <div
          className={`h-1.5 rounded-full bg-gradient-to-r ${color === 'green' ? 'from-[#10b981] to-[#10b981]' : color === 'blue' ? 'from-[#3b82f6] to-[#60a5fa]' : color === 'purple' ? 'from-[#7c3aed] to-[#a78bfa]' : color === 'pink' ? 'from-[#ec4899] to-[#ec4899]' : 'from-[#f59e0b] to-[#fbbf24]'}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

function SignalItem({ icon, label, status }: { icon: React.ReactNode; label: string; status: "positive" | "negative" }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`p-2 rounded-lg ${status === "positive" ? "bg-[#10b981]/20 text-[#10b981]" : "bg-[#ef4444]/20 text-[#ef4444]"}`}>
        {icon}
      </div>
      <div className="text-sm text-[#e8e8f0]">{label}</div>
    </div>
  );
}

function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#16161f]/95 backdrop-blur-xl border-t border-white/10 px-4 py-3">
      <div className="max-w-md mx-auto flex items-center justify-around">
        <Link to="/dashboard" className="flex flex-col items-center gap-1 text-[#ec4899] relative">
          <Activity className="w-5 h-5" />
          <span className="text-xs">หน้าแรก</span>
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-[#ec4899] shadow-md shadow-[#ec4899]/50"></div>
        </Link>
        <Link to="/triggers" className="flex flex-col items-center gap-1 text-[#9ca3af] hover:text-white transition-colors">
          <TrendingUp className="w-5 h-5" />
          <span className="text-xs">ปัจจัย</span>
        </Link>
        <Link to="/history" className="flex flex-col items-center gap-1 text-[#9ca3af] hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
          <span className="text-xs">ประวัติ</span>
        </Link>
        <Link to="/device" className="flex flex-col items-center gap-1 text-[#9ca3af] hover:text-white transition-colors">
          <Heart className="w-5 h-5" />
          <span className="text-xs">อุปกรณ์</span>
        </Link>
      </div>
    </div>
  );
}