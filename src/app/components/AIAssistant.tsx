import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Brain, X, Coffee, Droplets, Sun, Wind, MessageCircle } from "lucide-react";
import { Link } from "react-router";

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const notificationCount = 3; // จำนวนคำแนะนำใหม่

  return (
    <>
      {/* Floating AI Button - Fixed to viewport */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-15 right-4 z-[9999]"
        style={{ width: '56px', height: '56px' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative w-full h-full bg-gradient-to-br from-[#ec4899] to-[#f472b6] rounded-full shadow-2xl shadow-[#ec4899]/60 hover:shadow-[#ec4899]/80 transition-all flex items-center justify-center">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <Brain className="w-6 h-6 text-white" />
          </motion.div>
          
          {/* Outer glow pulse effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#ec4899] to-[#f472b6] rounded-full blur-md -z-10"
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          />
          
          {/* Inner pulse effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#ec4899] to-[#f472b6] rounded-full -z-10"
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
          />
        </div>
        
        {/* Badge notification */}
        {notificationCount > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 bg-gradient-to-br from-[#ef4444] to-[#dc2626] text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-lg shadow-[#ef4444]/50 border-2 border-[#0a0a0f] min-w-[20px] text-center"
          >
            {notificationCount}
          </motion.div>
        )}
      </motion.button>

      {/* AI Advice Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Panel */}
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-50 max-w-md mx-auto"
            >
              <div className="bg-[#16161f] border-t border-[#ec4899]/30 rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto shadow-2xl shadow-[#ec4899]/30">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-[#ec4899] to-[#f472b6] p-3 rounded-full shadow-lg shadow-[#ec4899]/50">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">ผู้ช่วย AI</h3>
                      <p className="text-[#9ca3af] text-sm">คำแนะนำสุขภาพส่วนบุคคล</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-[#1e1e2a] rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-[#9ca3af]" />
                  </button>
                </div>

                {/* Current Status */}
                <div className="bg-gradient-to-br from-[#10b981]/20 to-[#10b981]/5 border border-[#10b981]/30 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse"></div>
                    <span className="text-[#10b981] text-sm font-medium">ความเสี่ยงไมเกรนต่ำ</span>
                  </div>
                  <p className="text-white/80 text-sm">
                    AI กำลังตรวจสอบสุขภาพของคุณอย่างต่อเนื่อง
                  </p>
                </div>

                {/* Recommendations */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-white font-medium mb-3">คำแนะนำจาก AI</h4>
                  
                  <RecommendationCard
                    icon={<Coffee className="w-5 h-5" />}
                    title="พักสายตา"
                    description="คุณทำงานมา 2.5 ชั่วโมงแล้ว"
                    time="แนะนำใน 30 นาที"
                    priority="medium"
                  />
                  
                  <RecommendationCard
                    icon={<Droplets className="w-5 h-5" />}
                    title="ดื่มน้ำ"
                    description="ดื่มน้ำครั้งล่าสุด 1.5 ชั่วโมงก่อน"
                    time=""
                    priority="high"
                  />
                  
                  <RecommendationCard
                    icon={<Sun className="w-5 h-5" />}
                    title="ลดความสว่างหน้าจอ"
                    description="แสงหน้าจอของคุณค่อนข้างสูง"
                    time=""
                    priority="medium"
                  />
                  
                  <RecommendationCard
                    icon={<Wind className="w-5 h-5" />}
                    title="ฝึกหายใจ"
                    description="ผ่อนคลายความเครียด 1 นาที"
                    time=""
                    priority="low"
                  />
                </div>

                {/* Ask AI Button */}
                <Link to="/ai-chat" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-gradient-to-r from-[#ec4899] to-[#f472b6] text-white py-4 rounded-xl hover:opacity-90 hover:shadow-lg hover:shadow-[#ec4899]/50 transition-all flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    <span>ถามผู้ช่วย AI</span>
                  </button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function RecommendationCard({ icon, title, description, time, priority }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  time: string;
  priority: "high" | "medium" | "low";
}) {
  const priorityColors = {
    high: "from-[#ef4444]/20 to-[#ef4444]/5 border-[#ef4444]/30 text-[#ef4444]",
    medium: "from-[#f59e0b]/20 to-[#f59e0b]/5 border-[#f59e0b]/30 text-[#f59e0b]",
    low: "from-[#3b82f6]/20 to-[#3b82f6]/5 border-[#3b82f6]/30 text-[#3b82f6]",
  };

  return (
    <div className={`bg-gradient-to-br ${priorityColors[priority]} border rounded-xl p-3.5`}>
      <div className="flex items-start gap-3">
        <div className="p-2 bg-[#1e1e2a]/50 rounded-lg flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h5 className="text-white text-sm font-medium mb-1">{title}</h5>
          <p className="text-[#9ca3af] text-xs leading-relaxed">{description}</p>
          {time && (
            <p className="text-[#9ca3af] text-xs mt-1.5 opacity-75">{time}</p>
          )}
        </div>
      </div>
    </div>
  );
}