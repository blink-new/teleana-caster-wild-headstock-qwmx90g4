import React from 'react'

const headstockImage = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"

export default function HeadstockWithText() {
  return (
    <div className="relative max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
      {/* Background Image */}
      <img
        src={headstockImage}
        alt="Telecaster Headstock"
        className="w-full h-auto object-contain"
        style={{ filter: 'brightness(0.85)' }}
      />

      {/* Overlay to slightly darken original text area for better contrast */}
      <div
        className="absolute"
        style={{
          top: '70px',
          left: '90px',
          width: '420px',
          height: '60px',
          backgroundColor: 'rgba(40, 40, 40, 0.4)',
          borderRadius: '12px',
          pointerEvents: 'none',
          mixBlendMode: 'multiply',
          transform: 'rotate(-8deg)'
        }}
      />

      {/* Text Overlay */}
      <div
        className="absolute"
        style={{
          top: '70px',
          left: '90px',
          width: '420px',
          height: '60px',
          fontFamily: 'Cinzel, serif',
          fontWeight: 700,
          fontSize: '3.5rem',
          letterSpacing: '0.1em',
          color: 'transparent',
          WebkitTextStroke: '1.5px #bfa76f', // golden border
          background: 'linear-gradient(135deg, #f8fafc, #e2e8f0, #cbd5e1, #94a3b8)', // nacre gradient
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          textShadow: '0 0 8px rgba(255, 255, 255, 0.6)',
          transform: 'rotate(-8deg)',
          pointerEvents: 'none',
          userSelect: 'none'
        }}
      >
        TeleanaCasterWILD
      </div>
    </div>
  )
}
