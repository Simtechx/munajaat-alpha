import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function MunajaatPage() {
  const [selectedDay, setSelectedDay] = useState('Sunday')

  const days = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 
    'Thursday', 'Friday', 'Saturday'
  ]

  const sampleContent = {
    Arabic: [
      "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَآلِ مُحَمَّدٍ",
      "رَبِّ اشْرَحْ لِي صَدْرِي"
    ],
    English: [
      "In the name of Allah, the Most Gracious, the Most Merciful",
      "O Allah, send blessings upon Muhammad and the family of Muhammad",
      "My Lord, expand for me my chest"
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            ← Back to Home
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">Munājāt</h1>
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>
      </header>

      {/* Day Selector */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-2 mb-8">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedDay === day
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            {selectedDay}'s Invocations
          </h2>
          
          <div className="space-y-8">
            {sampleContent.Arabic.map((arabic, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <div className="text-right mb-4">
                  <p className="text-2xl font-scheherazade leading-relaxed text-gray-800">
                    {arabic}
                  </p>
                </div>
                <div className="text-left">
                  <p className="text-lg font-poppins text-gray-600 leading-relaxed">
                    {sampleContent.English[index]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MunajaatPage