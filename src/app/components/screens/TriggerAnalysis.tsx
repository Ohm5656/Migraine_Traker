import { Link } from "react-router";
import { Moon, Zap, Sun, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function TriggerAnalysis() {
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
        <h1 className="text-white text-2xl mb-2">ปัจจัยกระตุ้นของคุณ</h1>
        <p className="text-[#9ca3af]">รูปแบบที่ AI ตรวจพบจากข้อมูล 30 วันที่ผ่านมา</p>
      </div>

      {/* Trigger Score Overview */}
      <div className="bg-gradient-to-br from-[#ec4899]/20 to-[#f472b6]/10 border border-[#ec4899]/30 rounded-3xl p-6 mb-6 shadow-xl shadow-[#ec4899]/20">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-white mb-1">ความไวของปัจจัยกระตุ้น</h3>
            <p className="text-[#9ca3af] text-sm">ากข้อมูล 47 จุด</p>
          </div>
          <TrendingUp className="w-6 h-6 text-[#ec4899]" />
        </div>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl text-white mb-1">8</div>
            <div className="text-xs text-[#9ca3af]">ปัจจัยที่พบ</div>
          </div>
          <div className="text-center">
            <div className="text-2xl text-[#10b981] mb-1">73%</div>
            <div className="text-xs text-[#9ca3af]">ความแม่นยำ</div>
          </div>
          <div className="text-center">
            <div className="text-2xl text-[#3b82f6] mb-1">12</div>
            <div className="text-xs text-[#9ca3af]">ครั้งที่เกิด</div>
          </div>
        </div>
      </div>

      {/* Top Triggers */}
      <div className="mb-6">
        <h3 className="text-white mb-4">ปัจจัยกระตุ้นที่พบบ่อยที่สุด</h3>
        <div className="space-y-3">
          <TriggerCard
            icon={<Moon className="w-6 h-6" />}
            title="นอนหลับไม่เพียงพอ"
            description="นอนน้อยกว่า 6 ชั่วโมง"
            impact={92}
            occurrences={8}
            color="red"
          />
          <TriggerCard
            icon={<Zap className="w-6 h-6" />}
            title="ความเครียดสูง"
            description="ระดับความเครียดสูงนานกว่า 2 ชั่วโมง"
            impact={85}
            occurrences={7}
            color="yellow"
          />
          <TriggerCard
            icon={<Sun className="w-6 h-6" />}
            title="แสงจ้า"
            description="แสงแดดโดยตรงหรือหน้าจอสว่าง"
            impact={71}
            occurrences={6}
            color="orange"
          />
        </div>
      </div>

      {/* Other Triggers */}
      <div className="mb-6">
        <h3 className="text-white mb-4">ปัจจัยอื่นๆ ที่ตรวจพบ</h3>
        <div className="grid grid-cols-2 gap-3">
          <SmallTriggerCard title="ขาดน้ำ" impact={64} />
          <SmallTriggerCard title="ข้ามอาหาร" impact={58} />
          <SmallTriggerCard title="เปลี่ยนแปลงอากาศ" impact={52} />
          <SmallTriggerCard title="เสียงดัง" impact={45} />
          <SmallTriggerCard title="คาเฟอีน" impact={38} />
        </div>
      </div>

      {/* Insights Card */}
      <div className="bg-[#16161f] border border-white/10 rounded-2xl p-5">
        <div className="flex items-start gap-3">
          <div className="bg-gradient-to-br from-[#ec4899]/20 to-[#f472b6]/20 p-3 rounded-xl text-[#ec4899]">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h4 className="text-white mb-2">ข้อมูลเชิงลึกจาก AI</h4>
            <p className="text-[#9ca3af] text-sm mb-3">
              อาการไมเกรนของคุณเกิดบ่อยที่สุดในวันจันทร์และวันพฤหัสบดี โดยปกติในช่วงบ่าย 
              ควรปรับตารางเพื่อลดความเครียดในช่วงเวลาเหล่านี้
            </p>
            <button className="text-[#ec4899] text-sm flex items-center gap-1 hover:gap-2 transition-all">
              เรียนรู้เพิ่มเติม <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function TriggerCard({ icon, title, description, impact, occurrences, color }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  impact: number;
  occurrences: number;
  color: "red" | "yellow" | "orange";
}) {
  const colors = {
    red: {
      bg: "from-[#ef4444]/20 to-[#dc2626]/10",
      border: "border-[#ef4444]/30",
      icon: "bg-[#ef4444]/20 text-[#ef4444]",
      bar: "bg-[#ef4444]",
    },
    yellow: {
      bg: "from-[#f59e0b]/20 to-[#d97706]/10",
      border: "border-[#f59e0b]/30",
      icon: "bg-[#f59e0b]/20 text-[#f59e0b]",
      bar: "bg-[#f59e0b]",
    },
    orange: {
      bg: "from-[#f97316]/20 to-[#ea580c]/10",
      border: "border-[#f97316]/30",
      icon: "bg-[#f97316]/20 text-[#f97316]",
      bar: "bg-[#f97316]",
    },
  };

  return (
    <div className={`bg-gradient-to-br ${colors[color].bg} border ${colors[color].border} rounded-2xl p-5`}>
      <div className="flex items-start gap-4 mb-4">
        <div className={`${colors[color].icon} p-3 rounded-xl flex-shrink-0`}>
          {icon}
        </div>
        <div className="flex-1">
          <h4 className="text-white mb-1">{title}</h4>
          <p className="text-[#9ca3af] text-sm">{description}</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#9ca3af]">Impact Level</span>
          <span className="text-white">{impact}%</span>
        </div>
        <div className="w-full bg-[#1e1e2a] rounded-full h-2">
          <div
            className={`${colors[color].bar} h-2 rounded-full transition-all duration-1000`}
            style={{ width: `${impact}%` }}
          ></div>
        </div>
        <div className="text-xs text-[#9ca3af] mt-2">
          เกิดขึ้น {occurrences} ครั้งในเดือนที่ผ่านมา
        </div>
      </div>
    </div>
  );
}

function SmallTriggerCard({ title, impact }: { title: string; impact: number }) {
  return (
    <div className="bg-[#16161f] border border-white/10 rounded-xl p-4">
      <div className="text-white mb-2">{title}</div>
      <div className="flex items-center gap-2">
        <div className="flex-1 bg-[#1e1e2a] rounded-full h-1.5">
          <div
            className="bg-gradient-to-r from-[#ec4899] to-[#f472b6] h-1.5 rounded-full"
            style={{ width: `${impact}%` }}
          ></div>
        </div>
        <div className="text-xs text-[#9ca3af]">{impact}%</div>
      </div>
    </div>
  );
}