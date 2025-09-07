import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold font-poppins text-gray-800 mb-6">
          Munājāt Companion
        </h1>
        <p className="text-xl font-poppins text-gray-600 mb-8">
          A spiritual app for daily invocations and prayers
        </p>
        <div className="space-y-4">
          <Link
            to="/munajaat"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage