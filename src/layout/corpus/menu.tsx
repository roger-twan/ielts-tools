import './menu.scss'
import { MenuItem, MenuList, ListItemIcon } from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  Dashboard as DashboardIcon,
  Home as HomeIcon
} from '@mui/icons-material'

interface MenuProps {
  className?: string
}
function CorpusMenu(props: MenuProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <div
      className={`layout-corpus-menu ${props.className}`}
    >
      <p className='menu-title'>Corpus</p>
      <MenuList>
        <MenuItem
          className='menu-item'
          onClick={() => navigate('/corpus')}
          selected={currentPath === '/corpus'}
        >
          <ListItemIcon>
            <DashboardIcon sx={{color: 'white'}} />
          </ListItemIcon>
          Dashboard
        </MenuItem>
        <MenuItem
          className='menu-item'
          onClick={() => navigate('/corpus/table')}
          selected={currentPath === '/corpus/table'}
        >
          <ListItemIcon>
            <HomeIcon sx={{color: 'white'}} />
          </ListItemIcon>
          Table
        </MenuItem>
      </MenuList>
    </div>
  )
}

export default CorpusMenu
