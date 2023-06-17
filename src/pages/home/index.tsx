import './index.scss'
import { TypeAnimation } from 'react-type-animation'
import Button from '@mui/material/Button'
import { IconButton, Tooltip } from '@mui/material'
import {
  Apple as AppleIcon,
  GitHub as GitHubIcon,
  Email as EmailIcon,
  DesktopWindows as DesktopWindowsIcon
} from '@mui/icons-material'
import { version } from "../../../package.json"
import { Link } from 'react-router-dom'

const IconButtonLink = (props: any) => {
  return (
    <Tooltip title={props.title} placement="top">
      <IconButton
        style={{ color: '#FFF' }}
        onClick={() => window.open(props.href)}
      >
        {props.children}
      </IconButton>
    </Tooltip>
  )
}

function Home() {
  return (
    <div className="page-home">
      <TypeAnimation
        sequence={[
          'Awesome tools for IELTS examinee',
          2000,
          'Awesome tools for IELTS practice',
          2000,
        ]}
        style={{fontSize: '1.5em'}}
        repeat={Infinity}
      />

      <div className="feature-container">
        <Link to="/corpus">
          <Button variant="contained" style={{
            backgroundColor: '#fff',
            color: '#CC2C34',
          }}>
            Corpus
          </Button>
        </Link>
      </div>
      <div className="download-container">
        <IconButtonLink title="Download macOS client" href="https://google.com">
          <AppleIcon />
        </IconButtonLink>
        <IconButtonLink title="Download windows client" href="https://google.com">
          <DesktopWindowsIcon />
        </IconButtonLink>
        <IconButtonLink title="Source code" href="https://github.com/roger-twan/ielts-tools">
          <GitHubIcon />
        </IconButtonLink>
        <IconButtonLink title="Contact me" href="mailto:roger.twan@gmail.com">
          <EmailIcon />
        </IconButtonLink>
      </div>
      <p>Version: {version}</p>
    </div>
  )
}

export default Home
