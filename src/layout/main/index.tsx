import { useEffect, useState, FC } from 'react'
import './index.scss'
import { useLocation, useNavigate, useOutlet } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

function MainLayout() {
  const location = useLocation()
  const navigate = useNavigate()
  const [isHomePage, setIsHomePage] = useState(true)
  const locationPath = location.pathname?.split('/')[1]

  useEffect(() => {
    const page = location.pathname
    setIsHomePage(page === '/')
  }, [location])

  const onLogoClick = () => {
    if (!isHomePage) {
      navigate('/')
    }
  }

  const AnimatedOutlet: FC = () => {
    const o = useOutlet()
    const [outlet] = useState(o)

    return <>{outlet}</>
  }

  return (
    <div className={`layout-main ${isHomePage ? '' : 'collapse'}`}>
      <div className='logo' onClick={onLogoClick}>IELTS TOOLS</div>
      <AnimatePresence mode='wait'>
        <motion.div
          initial={{ opacity: 0, x: isHomePage ? 0 : '-100px', y: isHomePage ? '100px' : 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: isHomePage ? 0 : '-100px', y: isHomePage ? '100px' : 0 }}
          transition={{ type: 'tween' }}
          key={locationPath}
        >
          <AnimatedOutlet />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default MainLayout
