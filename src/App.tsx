import { motion } from 'framer-motion'

export default function App() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-black relative"
      style={{ backgroundImage: 'url(/telecaster-headstock.jpg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-[40%] left-[12%] text-5xl md:text-7xl font-bold font-antaresias text-transparent bg-clip-text mother-of-pearl border-gold border-2 px-4 py-1 rounded-lg shadow-lg"
        style={{
          WebkitTextStroke: '1.5px #bfa76f',
          textShadow: '2px 2px 4px rgba(191, 167, 111, 0.8)',
          backgroundImage: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 15%, #cbd5e1 30%, #94a3b8 45%, #64748b 60%, #475569 75%, #334155 90%, #1e293b 100%)'
        }}
      >
        TeleanaCasterWILD
      </motion.div>
    </div>
  )
}
