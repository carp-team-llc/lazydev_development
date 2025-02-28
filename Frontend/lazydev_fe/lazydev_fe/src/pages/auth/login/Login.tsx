"use client"

import type React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useLogin from "../../../hooks/API/Auth/useLogin"

interface FormData {
  email: string
  password: string
  rememberMe: boolean
}

export default function SignInForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const navigateTo = useNavigate()
  const { onLogin } = useLogin()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      await onLogin(formData)
      navigateTo("/dashboard") // Chuyển hướng sau khi đăng nhập thành công
    } catch (err) {
      setError("Invalid email or password") // Xử lý lỗi
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-600 to-gray-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md relative p-6">
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
          <h2 className="text-xl font-semibold mb-1">Sign in</h2>
          <p className="text-sm text-gray-500">
            Don't have an account?{" "}
            <a href="#" className="text-yellow-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1"> email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                className="rounded border-gray-300 text-yellow-400 focus:ring-yellow-400"
              />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Forgot your password
            </a>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 text-black py-2 px-4 rounded-xl hover:bg-yellow-500 transition-colors font-medium"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">OR</span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-black rounded-xl hover:bg-gray-50 transition-colors">
              <img
                src="https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/github.png"
                alt="Github"
                className=" ml-2 w-5 h-5 flex-shrink-0"
              />
              <span>Continue with Github</span>
            </button>

            <button className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-black rounded-xl hover:bg-gray-50 transition-colors">
              <img
                src="https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/gitlab.png"
                alt="Gitlab"
                className="w-5 h-5 flex-shrink-0"
              />
              <span>Continue with Gitlab</span>
            </button>

            <button className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-black rounded-xl hover:bg-gray-50 transition-colors">
              <img
                src="https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/Brand%3DGoogle%2C%20Color%3DON.png"
                alt="Google"
                className=" ml-3 w-5 h-5 flex-shrink-0"
              />
              <span>Continue with Google</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
