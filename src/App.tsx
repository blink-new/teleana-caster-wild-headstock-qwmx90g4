import { motion } from 'framer-motion'

const headstockImage = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Exemple image télécaster

function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full rounded-lg shadow-2xl overflow-hidden">
        {/* Background Image */}
        <img
          src={headstockImage}
          alt="Telecaster Headstock"
          className="w-full h-auto object-contain"
          style={{ filter: 'brightness(0.9)' }}
        />

        {/* Overlay Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-20 left-16 right-16 text-center pointer-events-none"
          style={{
            fontFamily: 'Cinzel, serif',
            fontWeight: 700,
            fontSize: '3.5rem',
            letterSpacing: '0.1em',
            color: 'transparent',
            WebkitTextStroke: '1.5px #bfa76f', // bordure dorée
            background: 'linear-gradient(135deg, #f8fafc, #e2e8f0, #cbd5e1, #94a3b8)', // effet nacré
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            textShadow: '0 0 8px rgba(255, 255, 255, 0.6)',
            transform: 'rotate(-8deg)',
            userSelect: 'none',
          }}
        >
          TeleanaCasterWILD
        </motion.div>
      </div>
    </div>
  )
}

export default App
