// ** MUI Imports
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'

// ** Footer Content Component
import FooterContent from './FooterContent'

const Footer = props => {
  // ** Props
  const { settings, footerContent: userFooterContent } = props

  // ** Hook
  const theme = useTheme()

  // ** Vars
  const { contentWidth } = settings

  return (
    <h1>.</h1>
  )
}

export default Footer
