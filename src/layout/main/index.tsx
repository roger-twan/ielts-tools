import { useEffect, useState } from 'react';
import './index.scss'
import { Outlet, useLocation } from 'react-router-dom'

function MainLayout() {
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState(false)

  useEffect(() => {
    const page = location.pathname
    setIsHomePage(page === '/')
  }, [location])

  return (
    <div className={`layout-main ${isHomePage ? '' : 'collapse'}`}>
      <div className='logo'>IELTS TOOLS</div>
      <Outlet />
    </div>
  )
}

export default MainLayout
