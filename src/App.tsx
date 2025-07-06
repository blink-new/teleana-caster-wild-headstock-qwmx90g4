import HeadstockWithText from './components/HeadstockWithText'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-5xl"
      >
        <HeadstockWithText />
      </motion.div>
    </div>
  )
}

export default App