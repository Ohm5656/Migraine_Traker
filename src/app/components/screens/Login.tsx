import { Link } from "react-router";
import { Mail, Lock } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen flex flex-col justify-center py-8"
    >
      {/* Logo / Header */}
      <div className="text-center mb-12">
        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#ec4899] to-[#f472b6] rounded-3xl flex items-center justify-center shadow-lg shadow-[#ec4899]/50">
          <div className="text-4xl">🧠</div>
        </div>
        <h1 className="text-white text-3xl mb-2">NeuroGuard</h1>
        <p className="text-[#9ca3af] text-sm">ระบบป้องกันไมเกรนด้วย AI</p>
      </div>

      {/* Login Form */}
      <div className="space-y-4 mb-6">
        {/* Email Input */}
        <div>
          <label className="text-[#9ca3af] text-sm mb-2 block">อีเมล</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full bg-[#16161f] border border-white/10 text-white rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-[#ec4899] focus:shadow-lg focus:shadow-[#ec4899]/20 transition-all"
            />
          </div>
        </div>

        {/* Password Input */}
        <div>
          <label className="text-[#9ca3af] text-sm mb-2 block">รหัสผ่าน</label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-[#16161f] border border-white/10 text-white rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-[#ec4899] focus:shadow-lg focus:shadow-[#ec4899]/20 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Login Button */}
      <Link
        to="/dashboard"
        className="w-full bg-gradient-to-r from-[#ec4899] to-[#f472b6] text-white py-4 rounded-2xl text-center font-medium mb-4 hover:opacity-90 hover:shadow-lg hover:shadow-[#ec4899]/50 transition-all block"
      >
        เข้าสู่ระบบ
      </Link>

      {/* Sign Up Button */}
      <Link
        to="/signup"
        className="w-full bg-[#16161f] border border-white/10 text-white py-4 rounded-2xl text-center font-medium hover:bg-[#1e1e2a] transition-colors block"
      >
        สร้างบัญชีใหม่
      </Link>

    </motion.div>
  );
}