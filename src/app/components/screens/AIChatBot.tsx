import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Send, Brain } from "lucide-react";

export function AIChatBot() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: "สวัสดีครับ ผมเป็นผู้ช่วย AI ของคุณ มีอะไรให้ผมช่วยเหลือเกี่ยวกับการดูแลสุขภาพและป้องกันไมเกรนไหมครับ?",
      time: "10:30"
    }
  ]);

  const handleSend = () => {
    if (message.trim()) {
      // เพิ่มข้อความของผู้ใช้
      const newUserMessage = {
        type: "user",
        text: message,
        time: new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages([...messages, newUserMessage]);
      setMessage("");

      // จำลองการตอบกลับของ AI
      setTimeout(() => {
        const aiResponse = {
          type: "ai",
          text: "ขอบคุณสำหรับคำถามครับ ผมกำลังวิเคราะห์ข้อมูลสุขภาพของคุณเพื่อให้คำแนะนำที่เหมาะสม",
          time: new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 flex flex-col bg-[#0a0a0f] z-50"
    >
      {/* Header */}
      <div className="sticky top-0 z-10 bg-[#16161f]/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Link
              to="/dashboard"
              className="p-2 hover:bg-[#1e1e2a] rounded-xl transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </Link>
            <div className="flex items-center gap-3 flex-1">
              <div className="bg-gradient-to-br from-[#ec4899] to-[#f472b6] p-2.5 rounded-full shadow-lg shadow-[#ec4899]/50">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-white font-medium">ผู้ช่วย AI</h1>
                <p className="text-[#9ca3af] text-xs">พร้อมให้คำแนะนำ</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
          >
            <div className={`max-w-[80%] ${msg.type === "user" ? "order-2" : "order-1"}`}>
              <div
                className={`rounded-2xl px-4 py-3 ${
                  msg.type === "user"
                    ? "bg-gradient-to-br from-[#ec4899] to-[#f472b6] text-white"
                    : "bg-[#16161f] border border-white/10 text-white"
                }`}
              >
                <p className="text-sm leading-relaxed">{msg.text}</p>
              </div>
              <p className="text-[#9ca3af] text-xs mt-1 px-2">{msg.time}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Suggested Questions */}
      <div className="px-4 pb-3">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button
            onClick={() => setMessage("ไมเกรนคืออะไร?")}
            className="flex-shrink-0 px-4 py-2 bg-[#16161f] border border-white/10 rounded-full text-sm text-[#9ca3af] hover:text-white hover:border-[#ec4899]/50 transition-colors"
          >
            ไมเกรนคืออะไร?
          </button>
          <button
            onClick={() => setMessage("วิธีลดความเสี่ยงไมเกรน")}
            className="flex-shrink-0 px-4 py-2 bg-[#16161f] border border-white/10 rounded-full text-sm text-[#9ca3af] hover:text-white hover:border-[#ec4899]/50 transition-colors"
          >
            วิธีลดความเสี่ยง
          </button>
          <button
            onClick={() => setMessage("อาหารที่ควรหลีกเลี่ยง")}
            className="flex-shrink-0 px-4 py-2 bg-[#16161f] border border-white/10 rounded-full text-sm text-[#9ca3af] hover:text-white hover:border-[#ec4899]/50 transition-colors"
          >
            อาหารที่ควรหลีกเลี่ยง
          </button>
        </div>
      </div>

      {/* Input Area */}
      <div className="sticky bottom-0 bg-[#16161f]/95 backdrop-blur-sm border-t border-white/10 px-4 py-4">
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="พิมพ์ข้อความ..."
            className="flex-1 bg-[#1e1e2a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#9ca3af] focus:outline-none focus:border-[#ec4899]/50 transition-colors"
          />
          <button
            onClick={handleSend}
            className="bg-gradient-to-br from-[#ec4899] to-[#f472b6] p-3 rounded-xl shadow-lg shadow-[#ec4899]/50 hover:shadow-[#ec4899]/70 transition-all disabled:opacity-50"
            disabled={!message.trim()}
          >
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}