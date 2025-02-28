"use client"

import type React from "react"
import { useState } from "react"

interface FormData {
  newpassword: string
  confirmnewpassword: string
}

export default function SignInForm() {
  const [formData, setFormData] = useState<FormData>({
    newpassword: "",
    confirmnewpassword: "",
  })

  // Tách trạng thái hiển thị riêng cho từng ô mật khẩu
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)

    if (formData.newpassword !== formData.confirmnewpassword) {
      alert("Passwords do not match!")
      return
    }

    // Thực hiện cập nhật mật khẩu...
    alert("Password updated successfully!")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-600 to-gray-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative p-6">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/lazydev-big.png"
            alt="Logo"
            className="w-12 h-12 bg-gray-200 rounded-full"
          />
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold mb-1">Forgot Password</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* New Password */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">New Password</label>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                name="newpassword"
                value={formData.newpassword}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm"
              >
                {showNewPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Confirm New Password */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Confirm New Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmnewpassword"
                value={formData.confirmnewpassword}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-white py-2 px-4 rounded-xl hover:bg-yellow-500 transition-colors font-medium"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  )
}
