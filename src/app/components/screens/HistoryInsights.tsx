import { Link } from "react-router";
import { Calendar, TrendingDown, TrendingUp, AlertCircle } from "lucide-react";
import { motion } from "motion/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const weeklyData = [
  { day: "Mon", risk: 35 },
  { day: "Tue", risk: 42 },
  { day: "Wed", risk: 28 },
  { day: "Thu", risk: 55 },
  { day: "Fri", risk: 38 },
  { day: "Sat", risk: 22 },
  { day: "Sun", risk: 25 },
];

const monthlyData = [
  { week: "W1", episodes: 2 },
  { week: "W2", episodes: 1 },
  { week: "W3", episodes: 3 },
  { week: "W4", episodes: 1 },
];

export function HistoryInsights() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen py-8 pb-24"
    >
      {/* Header */}
      <div className="mb-8">
        <Link to="/dashboard" className="text-[#9ca3af] text-sm mb-4 inline-block hover:text-white transition-colors">
          ← กลับไปหน้าแดชบอร์ด
        </Link>
        <h1 className="text-white text-2xl mb-2">ประวัติและข้อมูลเชิงลึก</h1>
        <p className="text-[#9ca3af]">ติดตามสถิติของคุณตามช่วงเวลา</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <StatCard value="7" label="ครั้งที่เกิด" subtext="เดือนนี้" trend="down" />
        <StatCard value="28%" label="ความเสี่ยงเฉลี่ย" subtext="รายสัปดาห์" trend="down" />
        <StatCard value="12" label="วัน" subtext="ปลอดไมเกรน" trend="up" />
      </div>

      {/* Weekly Risk Chart */}
      <div className="bg-[#16161f] border border-white/10 rounded-2xl p-5 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-white mb-1">แนวโน้มความเสี่ยงรายสัปดาห์</h3>
            <p className="text-[#9ca3af] text-sm">7 วันที่ผ่านมา</p>
          </div>
          <TrendingDown className="w-5 h-5 text-[#10b981]" />
        </div>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={weeklyData} key="weekly-risk-chart">
              <defs>
                <linearGradient id="weeklyRiskGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ec4899" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e1e2a" vertical={false} />
              <XAxis dataKey="day" stroke="#9ca3af" fontSize={12} />
              <YAxis stroke="#9ca3af" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#16161f",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "0.5rem",
                  color: "#e8e8f0",
                }}
              />
              <Area
                type="monotone"
                dataKey="risk"
                stroke="#ec4899"
                strokeWidth={2}
                fill="url(#weeklyRiskGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Monthly Episodes */}
      <div className="bg-[#16161f] border border-white/10 rounded-2xl p-5 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-white mb-1">ติดตามอาการ</h3>
            <p className="text-[#9ca3af] text-sm">รายเดือน</p>
          </div>
          <Calendar className="w-5 h-5 text-[#ec4899]" />
        </div>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyData} key="monthly-episodes-chart">
              <CartesianGrid strokeDasharray="3 3" stroke="#1e1e2a" vertical={false} />
              <XAxis dataKey="week" stroke="#9ca3af" fontSize={12} />
              <YAxis stroke="#9ca3af" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#16161f",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "0.5rem",
                  color: "#e8e8f0",
                }}
              />
              <Line
                type="monotone"
                dataKey="episodes"
                stroke="#ef4444"
                strokeWidth={3}
                dot={{ fill: "#ef4444", r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Episodes */}
      <div className="mb-6">
        <h3 className="text-white mb-4">อาการล่าสุด</h3>
        <div className="space-y-3">
          <EpisodeCard
            date="4 มีนาคม 2026"
            severity="ปานกลาง"
            duration="4.5 ชม."
            triggers={["นอนหลับไม่เพียงพอ", "ความเครียด"]}
          />
          <EpisodeCard
            date="28 กุมภาพันธ์ 2026"
            severity="เล็กน้อย"
            duration="2 ชม."
            triggers={["แสงจ้า"]}
          />
          <EpisodeCard
            date="22 กุมภาพันธ์ 2026"
            severity="รุนแรง"
            duration="6 ชม."
            triggers={["ความเครียดสูง", "ขาดน้ำ", "การนอน"]}
          />
        </div>
      </div>

      {/* Insights */}
      <div className="bg-gradient-to-br from-[#3b82f6]/20 to-[#6366f1]/10 border border-[#3b82f6]/30 rounded-2xl p-5">
        <div className="flex items-start gap-3">
          <div className="bg-[#3b82f6]/20 p-3 rounded-xl text-[#60a5fa]">
            <TrendingDown className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-white mb-2">ความคืบหน้า</h4>
            <p className="text-[#9ca3af] text-sm">
              ข่าวดี! อาการไมเกรนของคุณลดลง 40% เมื่อเทียบกับเดือนที่แล้ว 
              ทำตามขั้นตอนการป้งกันต่อไป
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function StatCard({ value, label, subtext, trend }: { value: string; label: string; subtext: string; trend: "up" | "down" }) {
  return (
    <div className="bg-[#16161f] border border-white/10 rounded-xl p-4">
      <div className="flex items-center gap-1 mb-2">
        <div className="text-2xl text-white">{value}</div>
        {trend === "down" ? (
          <TrendingDown className="w-4 h-4 text-[#10b981]" />
        ) : (
          <TrendingUp className="w-4 h-4 text-[#10b981]" />
        )}
      </div>
      <div className="text-xs text-[#e8e8f0] mb-0.5">{label}</div>
      <div className="text-xs text-[#9ca3af]">{subtext}</div>
    </div>
  );
}

function EpisodeCard({ date, severity, duration, triggers }: { date: string; severity: string; duration: string; triggers: string[] }) {
  const severityColor = {
    "เล็กน้อย": "text-[#f59e0b] bg-[#f59e0b]/20",
    "ปานกลาง": "text-[#f97316] bg-[#f97316]/20",
    "รุนแรง": "text-[#ef4444] bg-[#ef4444]/20",
  };

  return (
    <div className="bg-[#16161f] border border-white/10 rounded-2xl p-4">
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="text-white mb-1">{date}</div>
          <div className="text-[#9ca3af] text-sm">ระยะเวลา {duration}</div>
        </div>
        <div className={`${severityColor[severity as keyof typeof severityColor]} px-3 py-1 rounded-full text-xs`}>
          {severity}
        </div>
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        <AlertCircle className="w-4 h-4 text-[#9ca3af]" />
        {triggers.map((trigger, i) => (
          <span key={i} className="text-xs bg-[#1e1e2a] text-[#9ca3af] px-2 py-1 rounded-lg">
            {trigger}
          </span>
        ))}
      </div>
    </div>
  );
}