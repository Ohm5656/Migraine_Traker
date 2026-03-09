import { Link } from "react-router";
import { Bluetooth, Battery, Wifi, CheckCircle2, AlertCircle, Activity } from "lucide-react";
import { motion } from "motion/react";

export function DeviceConnection() {
  const isConnected = true;
  const batteryLevel = 78;

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
        <h1 className="text-white text-2xl mb-2">เชื่อมต่ออุปกรณ์</h1>
        <p className="text-[#9ca3af]">NeuroGuard Sensor Band</p>
      </div>

      {/* Device Visual */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="bg-gradient-to-br from-[#ec4899]/20 to-[#f472b6]/10 border border-[#ec4899]/30 rounded-3xl p-8 mb-6 relative overflow-hidden shadow-xl shadow-[#ec4899]/20"
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#ec4899]/20 blur-3xl rounded-full"></div>
        <div className="relative flex flex-col items-center">
          {/* Device Illustration */}
          <div className="relative mb-6">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-32 h-32 bg-gradient-to-br from-[#ec4899] to-[#f472b6] rounded-full flex items-center justify-center shadow-lg shadow-[#ec4899]/50"
            >
              <Activity className="w-16 h-16 text-white" />
            </motion.div>
            {isConnected && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-[#10b981] rounded-full p-2"
              >
                <CheckCircle2 className="w-5 h-5 text-white" />
              </motion.div>
            )}
          </div>
          <h3 className="text-white text-xl mb-2">NeuroGuard Band</h3>
          <p className="text-[#9ca3af] text-sm mb-4">รุ่น: NG-2024 Pro</p>
          <div className={`${isConnected ? "bg-[#10b981]/20 text-[#10b981]" : "bg-[#ef4444]/20 text-[#ef4444]"} px-4 py-2 rounded-full text-sm flex items-center gap-2`}>
            <div className={`w-2 h-2 rounded-full ${isConnected ? "bg-[#10b981]" : "bg-[#ef4444]"} animate-pulse`}></div>
            {isConnected ? "เชื่อมต่อแล้ว" : "ไม่ได้เชื่อมต่อ"}
          </div>
        </div>
      </motion.div>

      {/* Device Stats */}
      {isConnected && (
        <div className="grid grid-cols-3 gap-3 mb-6">
          <DeviceStatCard
            icon={<Battery className="w-5 h-5" />}
            label="แบตเตอรี่"
            value={`${batteryLevel}%`}
            color="green"
          />
          <DeviceStatCard
            icon={<Bluetooth className="w-5 h-5" />}
            label="สัญญาณ"
            value="แรง"
            color="pink"
          />
          <DeviceStatCard
            icon={<Wifi className="w-5 h-5" />}
            label="ซิงค์"
            value="2 นาที"
            color="pink"
          />
        </div>
      )}

      {/* Device Info */}
      <div className="bg-[#16161f] border border-white/10 rounded-2xl p-5 mb-6">
        <h3 className="text-white mb-4">ข้อมูลอุปกรณ์</h3>
        <div className="space-y-3">
          <InfoRow label="หมายเลขเครื่อง" value="NG2024X-A847F2" />
          <InfoRow label="เวอร์ชันเฟิร์มแวร์" value="v2.4.1" />
          <InfoRow label="ซิงค์ล่าสุด" value="2 นาทีที่แล้ว" />
          <InfoRow label="การเก็บข้อมูล" value="กำลังทำงาน" status="active" />
        </div>
      </div>

      {/* Sensor Readings */}
      <div className="bg-[#16161f] border border-white/10 rounded-2xl p-5 mb-6">
        <h3 className="text-white mb-4">ค่าที่วัดได้ปัจจุบัน</h3>
        <div className="grid grid-cols-2 gap-4">
          <ReadingCard label="อัตราการเต้นหัวใจ" value="72 bpm" />
          <ReadingCard label="HRV" value="65 ms" />
          <ReadingCard label="อุณหภูมิ" value="36.8°C" />
          <ReadingCard label="การเคลื่อนไหว" value="ต่ำ" />
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3">
        {isConnected ? (
          <>
            <Link
              to="/dashboard"
              className="block w-full bg-gradient-to-r from-[#ec4899] to-[#f472b6] text-white py-4 rounded-2xl text-center hover:opacity-90 hover:shadow-lg hover:shadow-[#ec4899]/50 transition-all"
            >
              ไปยังหน้าแดชบอร์ด
            </Link>
            <button className="w-full bg-[#16161f] border border-white/10 text-white py-4 rounded-2xl hover:bg-[#1e1e2a] transition-colors">
              ซิงค์ข้อมูลตอนนี้
            </button>
            <button className="w-full bg-[#16161f] border border-[#ef4444]/30 text-[#ef4444] py-4 rounded-2xl hover:bg-[#ef4444]/10 transition-colors">
              ยกเลิกการเชื่อมต่อ
            </button>
          </>
        ) : (
          <button className="w-full bg-gradient-to-r from-[#ec4899] to-[#f472b6] text-white py-4 rounded-2xl hover:opacity-90 hover:shadow-lg hover:shadow-[#ec4899]/50 transition-all">
            เชื่อมต่ออุปกรณ์
          </button>
        )}
      </div>

      {/* Tips */}
      <div className="mt-6 bg-[#16161f] border border-white/10 rounded-2xl p-5">
        <div className="flex items-start gap-3">
          <div className="bg-[#3b82f6]/20 p-2 rounded-lg text-[#60a5fa]">
            <AlertCircle className="w-5 h-5" />
          </div>
      
        </div>
      </div>
    </motion.div>
  );
}

function DeviceStatCard({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: string; color: "green" | "blue" | "purple" | "pink" }) {
  const colors = {
    green: "from-[#10b981]/20 to-[#10b981]/5 text-[#10b981]",
    blue: "from-[#3b82f6]/20 to-[#3b82f6]/5 text-[#3b82f6]",
    purple: "from-[#7c3aed]/20 to-[#7c3aed]/5 text-[#7c3aed]",
    pink: "from-[#ec4899]/20 to-[#ec4899]/5 text-[#ec4899]",
  };

  return (
    <div className={`bg-gradient-to-br ${colors[color]} border border-white/10 rounded-xl p-4`}>
      <div className="mb-2">{icon}</div>
      <div className="text-white text-lg mb-0.5">{value}</div>
      <div className="text-[#9ca3af] text-xs">{label}</div>
    </div>
  );
}

function InfoRow({ label, value, status }: { label: string; value: string; status?: "active" | "inactive" }) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-[#9ca3af] text-sm">{label}</div>
      <div className="flex items-center gap-2">
        {status && (
          <div className={`w-2 h-2 rounded-full ${status === "active" ? "bg-[#10b981]" : "bg-[#9ca3af]"}`}></div>
        )}
        <div className="text-white text-sm">{value}</div>
      </div>
    </div>
  );
}

function ReadingCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[#1e1e2a] rounded-xl p-3">
      <div className="text-[#9ca3af] text-xs mb-1">{label}</div>
      <div className="text-white text-lg">{value}</div>
    </div>
  );
}