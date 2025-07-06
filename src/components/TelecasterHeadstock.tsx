import React from 'react'

export default function TelecasterHeadstock() {
  return (
    <svg
      viewBox="0 0 600 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-3xl mx-auto"
    >
      {/* Headstock shape */}
      <path
        d="M20 180 Q50 20 150 40 Q250 60 350 20 Q450 0 580 80 L560 180 Z"
        fill="#f3e6d8"
        stroke="#bfa76f"
        strokeWidth={6}
        filter="url(#woodgrain)"
      />

      {/* Wood grain texture (simple) */}
      <defs>
        <filter id="woodgrain" x="0" y="0" width="600" height="200" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>

      {/* Text with mother-of-pearl and golden border */}
      <text
        x="300"
        y="110"
        textAnchor="middle"
        fontFamily="Cinzel, serif"
        fontWeight="700"
        fontSize="48"
        letterSpacing="0.05em"
        style={{ filter: 'url(#goldenBorder)' }}
        className="mother-of-pearl"
      >
        TeleanaCasterWILD
      </text>

      {/* Golden border filter */}
      <defs>
        <filter id="goldenBorder" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB" >
          <feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="#fbbf24" floodOpacity="1" />
          <feDropShadow dx="-2" dy="-2" stdDeviation="1" floodColor="#fbbf24" floodOpacity="1" />
          <feDropShadow dx="2" dy="-2" stdDeviation="1" floodColor="#f59e0b" floodOpacity="1" />
          <feDropShadow dx="-2" dy="2" stdDeviation="1" floodColor="#f59e0b" floodOpacity="1" />
        </filter>
      </defs>
    </svg>
  )
}
