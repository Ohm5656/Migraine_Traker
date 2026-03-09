import { Link } from "react-router";
import { User, Mail, Lock } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen flex flex-col justify-center py-8"
    >
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-white text-3xl mb-2">สร้างบัญชีใหม่</h1>
        <p className="text-[#9ca3af] text-sm">กรอกข้อมูลเพื่อเริ่มต้นใช้งาน</p>
      </div>

      {/* Sign Up Form */}
      <div className="space-y-4 mb-6">
        {/* Name Input */}
        <div>
          <label className="text-[#9ca3af] text-sm mb-2 block">ชื่อ</label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="ชื่อของคุณ"
              className="w-full bg-[#16161f] border border-white/10 text-white rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-[#ec4899] focus:shadow-lg focus:shadow-[#ec4899]/20 transition-all"
            />
          </div>
        </div>

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

        {/* Confirm Password Input */}
        <div>
          <label className="text-[#9ca3af] text-sm mb-2 block">ยืนยันรหัสผ่าน</label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-[#16161f] border border-white/10 text-white rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-[#ec4899] focus:shadow-lg focus:shadow-[#ec4899]/20 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Create Account Button */}
      <Link
        to="/onboarding/1"
        className="w-full bg-gradient-to-r from-[#ec4899] to-[#f472b6] text-white py-4 rounded-2xl text-center font-medium mb-4 hover:opacity-90 hover:shadow-lg hover:shadow-[#ec4899]/50 transition-all block"
      >
        สร้างบัญชี
      </Link>

      {/* Back to Login */}
      <Link
        to="/"
        className="text-center text-[#9ca3af] text-sm hover:text-white transition-colors"
      >
        มีบัญชีอยู่แล้ว? <span className="text-[#ec4899]">เข้าสู่ระบบ</span>
      </Link>
    </motion.div>
  );
}