import { useState } from 'react'
import { motion } from 'framer-motion'

function App() {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleHeadstockClick = () => {
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-elegant font-bold text-white mb-2">
            Guitar Headstock Designer
          </h1>
          <p className="text-lg text-slate-300 font-elegant">
            Custom Telecaster Headstock with Mother-of-Pearl Styling
          </p>
        </motion.div>

        {/* Guitar Headstock */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex justify-center cursor-pointer"
          onClick={handleHeadstockClick}
        >
          {/* Main Headstock Shape */}
          <div className="relative">
            {/* Headstock Body */}
            <div className="relative bg-gradient-to-br from-amber-800 via-amber-700 to-amber-900 rounded-t-3xl rounded-b-lg shadow-2xl p-8 border-4 border-yellow-400">
              {/* Wood Grain Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-600/20 to-transparent rounded-t-3xl rounded-b-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/10 to-transparent rounded-t-3xl rounded-b-lg"></div>
              
              {/* Main Text */}
              <motion.div
                animate={isAnimating ? { scale: [1, 1.05, 1], opacity: [1, 0.8, 1] } : {}}
                transition={{ duration: 0.6, repeat: 4 }}
                className="text-center relative z-10"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-antaresias tracking-wider transform -rotate-1 drop-shadow-2xl">
                  {/* Mother-of-Pearl Base Text */}
                  <span className="relative inline-block">
                    <span className="mother-of-pearl">
                      TeleanaCasterWILD
                    </span>
                    
                    {/* Iridescent Overlay */}
                    <span className="absolute inset-0 iridescent opacity-60">
                      TeleanaCasterWILD
                    </span>
                    
                    {/* Golden Border Effect */}
                    <span 
                      className="absolute inset-0 text-yellow-400 -z-10" 
                      style={{ 
                        textShadow: '3px 3px 0px #fbbf24, -3px -3px 0px #fbbf24, 3px -3px 0px #fbbf24, -3px 3px 0px #fbbf24, 2px 2px 0px #f59e0b, -2px -2px 0px #f59e0b, 2px -2px 0px #f59e0b, -2px 2px 0px #f59e0b' 
                      }}
                    >
                      TeleanaCasterWILD
                    </span>
                  </span>
                </div>
              </motion.div>
              
              {/* Decorative Corner Elements */}
              <div className="absolute top-3 left-3 w-4 h-4 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full shadow-lg border border-yellow-200"></div>
              <div className="absolute top-3 right-3 w-4 h-4 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full shadow-lg border border-yellow-200"></div>
              <div className="absolute bottom-3 left-3 w-4 h-4 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full shadow-lg border border-yellow-200"></div>
              <div className="absolute bottom-3 right-3 w-4 h-4 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full shadow-lg border border-yellow-200"></div>
              
              {/* Center Decorative Elements */}
              <div className="absolute top-1/2 left-2 transform -translate-y-1/2 w-2 h-8 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full shadow-md"></div>
              <div className="absolute top-1/2 right-2 transform -translate-y-1/2 w-2 h-8 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full shadow-md"></div>
            </div>
            
            {/* Tuning Pegs */}
            <div className="absolute -right-10 top-8 flex flex-col gap-4">
              {Array.from({ length: 3 }, (_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="w-10 h-10 bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 rounded-full shadow-lg border-2 border-slate-200"
                >
                  <div className="w-full h-full bg-gradient-to-br from-slate-400 to-slate-600 rounded-full flex items-center justify-center">
                    <div className="w-6 h-1 bg-slate-700 rounded-full"></div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="absolute -left-10 top-8 flex flex-col gap-4">
              {Array.from({ length: 3 }, (_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="w-10 h-10 bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 rounded-full shadow-lg border-2 border-slate-200"
                >
                  <div className="w-full h-full bg-gradient-to-br from-slate-400 to-slate-600 rounded-full flex items-center justify-center">
                    <div className="w-6 h-1 bg-slate-700 rounded-full"></div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Neck Connection */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-gradient-to-b from-amber-800 to-amber-900 rounded-b-lg border-2 border-yellow-400 shadow-lg"></div>
          </div>
        </motion.div>

        {/* Feature Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 shadow-2xl">
            <h3 className="text-2xl font-elegant font-bold text-white mb-4">Design Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-300">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-3 shadow-lg">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-full opacity-90 mother-of-pearl"></div>
                </div>
                <p className="font-elegant font-semibold text-lg">Mother-of-Pearl Styling</p>
                <p className="text-sm text-slate-400">Iridescent nacre finish with subtle color shifts</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-600 rounded-full flex items-center justify-center mb-3 shadow-lg">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-full"></div>
                </div>
                <p className="font-elegant font-semibold text-lg">Golden Borders</p>
                <p className="text-sm text-slate-400">Elegant gold accents and decorative elements</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 rounded-full flex items-center justify-center mb-3 shadow-lg">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-200 to-amber-400 rounded-full"></div>
                </div>
                <p className="font-elegant font-semibold text-lg">Telecaster Style</p>
                <p className="text-sm text-slate-400">Classic headstock shape with modern aesthetics</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-slate-700/30 rounded-lg border border-slate-600">
              <p className="text-sm text-slate-300 font-elegant">
                <strong>Font Style:</strong> Cinzel (Antaresias-inspired) • <strong>Technique:</strong> Mother-of-pearl inlay with gold trim
              </p>
              <p className="mt-2 text-xs text-slate-400">
                💡 Click on the headstock to see the shimmer effect!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default App