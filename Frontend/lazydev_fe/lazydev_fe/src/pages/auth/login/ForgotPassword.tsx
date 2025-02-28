"use client"

import type React from "react"
import { useState } from "react"

interface FormData {
  Email: string
  
}

export default function SignInForm() {
  const [formData, setFormData] = useState<FormData>({
    Email: "",
   
  })
  const [showPassword, setShowPassword] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
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
          <h2 className="text-xl font-semibold mb-1"> Forgot Password</h2>
          
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="text"
              name="Email"
              value={formData.Email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>

          
          <button
            type="submit"
            className="w-full bg-yellow-400 text-white py-2 px-4 rounded-xl hover:bg-yellow-500 transition-colors font-medium"
          >
            Forgot Password
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

