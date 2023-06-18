import { useState, FC } from 'react'
import './index.scss'
import { useLocation, useOutlet } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import CorpusMenu from './menu'

function CorpusLayout() {
  const location = useLocation()

  const AnimatedOutlet: FC = () => {
    const o = useOutlet()
    const [outlet] = useState(o)

    return <>{outlet}</>
  }

  return (
    <div className="layout-corpus">
      <CorpusMenu className="menu" />
      <div className='content'>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: '-10px' }}
            animate={{ opacity: 1, x: 0  }}
            exit={{ opacity: 0, x: '-10px' }}
            transition={{
              type: 'tween',
            }}
            key={location.pathname}
          >
            <AnimatedOutlet />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default CorpusLayout
