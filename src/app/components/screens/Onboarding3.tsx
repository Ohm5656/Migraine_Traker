import { Link } from "react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

export function Onboarding3() {
  const [selected, setSelected] = useState("");

  const options = [
    "เคยได้รับการวินิจฉัยว่าเป็นไมเกรน",
    "ปวดหัวบ่อย แต่ไม่แน่ใจว่าเป็นไมเกรน",
    "ไม่เคยมีอาการไมเกรน",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen flex flex-col py-8"
    >
      {/* Progress */}
      <div className="mb-8">
        <div className="flex gap-2 mb-6">
          <div className="flex-1 h-1 bg-[#ec4899] rounded-full shadow-sm shadow-[#ec4899]/50"></div>
          <div className="flex-1 h-1 bg-[#ec4899] rounded-full shadow-sm shadow-[#ec4899]/50"></div>
          <div className="flex-1 h-1 bg-[#ec4899] rounded-full shadow-sm shadow-[#ec4899]/50"></div>
          <div className="flex-1 h-1 bg-white/10 rounded-full"></div>
        </div>
        <p className="text-[#9ca3af] text-sm">ขั้นตอนที่ 3 จาก 4</p>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h1 className="text-white text-2xl mb-2">คุณเคยมีอาการไมเกรนหรือไม่</h1>
        <p className="text-[#9ca3af] text-sm">ช่วยให้เราเข้าใจประวัติสุขภาพของคุณ</p>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-auto">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => setSelected(option)}
            className={`w-full p-5 rounded-2xl border-2 text-left transition-all ${
              selected === option
                ? "bg-[#ec4899]/20 border-[#ec4899] text-white shadow-lg shadow-[#ec4899]/30"
                : "bg-[#16161f] border-white/10 text-[#9ca3af] hover:border-white/20"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm">{option}</span>
              {selected === option && (
                <div className="w-5 h-5 rounded-full bg-[#ec4899] flex items-center justify-center flex-shrink-0 ml-3 shadow-md shadow-[#ec4899]/50">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-3">
        <Link
          to="/onboarding/2"
          className="w-16 h-16 bg-[#16161f] border border-white/10 rounded-2xl flex items-center justify-center text-[#9ca3af] hover:text-white transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <Link
          to="/onboarding/4"
          className={`flex-1 py-4 rounded-2xl text-center font-medium flex items-center justify-center gap-2 transition-all ${
            selected
              ? "bg-gradient-to-r from-[#ec4899] to-[#f472b6] text-white hover:opacity-90 shadow-lg shadow-[#ec4899]/50"
              : "bg-[#16161f] border border-white/10 text-[#9ca3af] cursor-not-allowed"
          }`}
        >
          <span>ถัดไป</span>
          <ChevronRight className="w-5 h-5" />
        </Link>
      </div>
    </motion.div>
  );
}