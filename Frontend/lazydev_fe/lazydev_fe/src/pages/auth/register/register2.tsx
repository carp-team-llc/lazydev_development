"use client"

import type React from "react"
import { useState } from "react"
import { ArrowLeft, X } from 'lucide-react'
import useRegister from "../../../hooks/API/Auth/useRegister"
import { useNavigate } from "react-router-dom"

interface FormData {
  email: string
  username: string
  password: string
  confirmPassword: string
  month: string
  date: string
  year: string
  termsAccepted: boolean
  marketingConsent: boolean
}

export default function CreateAccountForm() {
  const { onRegister, isLoading, isError, error } = useRegister();
  const navigateTo = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    month: "",
    date: "",
    year: "",
    termsAccepted: false,
    marketingConsent: false,
  })

  const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
  ]
  const dates = Array.from({ length: 31 }, (_, i) => i + 1)
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData((prev) => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!formData.termsAccepted) {
      alert("You must accept the Terms of Use and Privacy Policy!");
      return;
    }
  
    if (!formData.month || !formData.date || !formData.year) {
      alert("Please select your full date of birth!");
      return;
    }
  
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      await onRegister({
        email: formData.email,
        username: formData.username,
        password: formData.password,
      });
      alert("Account created successfully!");
      navigateTo("/login");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-600 to-gray-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-8">
          <button className="text-gray-400 hover:text-gray-600">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center mb-6">
          
          {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/lazydev-big.png"
            alt="Logo"
            className="w-16 h-16 bg-gray-200 rounded-full"
          />
        </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold mb-1">Create an account</h2>
          <p className="text-sm text-gray-500">
            Already have an account? <a href="#" className="text-blue-600 hover:underline">Log in</a>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
        <div>
            <label className="block text-sm mb-2">Your email  </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Your username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Your password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Confirm your password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">What&apos;s your date of birth?</label>
            <div className="grid grid-cols-3 gap-3">
              <select
                name="month"
                value={formData.month}
                onChange={handleInputChange}
                className="px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              >
                <option value="">Month</option>
                {months.map((month) => (
                  <option key={month} value={month}>{month}</option>
                ))}
              </select>
              <select
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              >
                <option value="">Date</option>
                {dates.map((date) => (
                  <option key={date} value={date}>{date}</option>
                ))}
              </select>
              <select
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                className="px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              >
                <option value="">Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-3">
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleInputChange}
                className="mt-1 border-gray-300 rounded text-amber-400 focus:ring-amber-400"
              />
              <span className="text-sm">
                By creating an account, I agree to our Terms of use and Privacy Policy
              </span>
            </label>

            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="marketingConsent"
                checked={formData.marketingConsent}
                onChange={handleInputChange}
                className="mt-1 border-gray-300 rounded text-amber-400 focus:ring-amber-400"
              />
              <span className="text-sm">
                By creating an account, I am also consenting to receive SMS messages and emails, including product new feature updates, events, and marketing promotions.
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-400 text-black font-medium py-2.5 px-4 rounded-xl hover:bg-amber-500 transition-colors"
            disabled={isLoading}
          >
            {isLoading ? "Creating..." : "Create an account"}
          </button>

          {isError && (
            <p className="text-red-500 text-sm text-center">
              {error?.message || "Something went wrong!"}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}