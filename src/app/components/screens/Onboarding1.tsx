import { Link } from "react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

export function Onboarding1() {
  const [selected, setSelected] = useState("");

  const options = [
    "15–20 ปี",
    "21–30 ปี",
    "31–40 ปี",
    "มากกว่า 40 ปี",
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
          <div className="flex-1 h-1 bg-white/10 rounded-full"></div>
          <div className="flex-1 h-1 bg-white/10 rounded-full"></div>
          <div className="flex-1 h-1 bg-white/10 rounded-full"></div>
        </div>
        <p className="text-[#9ca3af] text-sm">ขั้นตอนที่ 1 จาก 4</p>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h1 className="text-white text-2xl mb-2">คุณอยู่ในช่วงอายุใด</h1>
        <p className="text-[#9ca3af] text-sm">ข้อูลนี้จะช่วยให้ AI วิเคราะห์ได้แม่นยำขึ้น</p>
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
              <span>{option}</span>
              {selected === option && (
                <div className="w-5 h-5 rounded-full bg-[#ec4899] flex items-center justify-center shadow-md shadow-[#ec4899]/50">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Next Button */}
      <Link
        to="/onboarding/2"
        className={`w-full py-4 rounded-2xl text-center font-medium flex items-center justify-center gap-2 transition-all ${
          selected
            ? "bg-gradient-to-r from-[#ec4899] to-[#f472b6] text-white hover:opacity-90 shadow-lg shadow-[#ec4899]/50"
            : "bg-[#16161f] border border-white/10 text-[#9ca3af] cursor-not-allowed"
        }`}
      >
        <span>ถัดไป</span>
        <ChevronRight className="w-5 h-5" />
      </Link>
    </motion.div>
  );
}