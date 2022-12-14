import { createTheme, ThemeProvider, Typography, Link } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import Footer from '../components/Footer'
import ResponsiveAppBar from '../components/Navbar/AppBar'

const theme = createTheme({
  typography: {
    fontFamily: ['"Inter"', 'sans-serif'].join(',')
  }
})


export default function Contact() {
  document.title = 'Contact'
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar active='contact' />
        <Container>
          <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '78vh', my: 5}}>
            <Box sx={{display: {xs: 'none', sm: 'block'}}}>
              <img src='/assets/images/contact-image.png' width='263px' />
            </Box>
            <Box sx={{mx: 3, textAlign: {xs:'center', sm: 'start'}}}>
              <Typography variant='h3' sx={{fontWeight: 700}}>You can reach me any time &#128578;</Typography>

              <Box sx={{mt: 4}}>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</Typography>


                  <Typography sx={{mt: 2}}>Github : <Link href='https://github.com/Ahm28' target='_blank' sx={{textDecoration: 'none', color: 'white', fontWeight: 700, '&:hover': {color: '#FDB827'}}}>&nbsp;Ahm28</Link></Typography>
                  
                  <Typography sx={{my: 2}}>LinkedIn : <Link href='https://www.linkedin.com/in/ahmad-mughni-m/' target='_blank' sx={{textDecoration: 'none', color: 'white', fontWeight: 700, '&:hover': {color: '#FDB827'}}}>Ahmad Mughni</Link></Typography>
                  <Typography sx={{my: 2}}>Telegram : <Link href='https://t.me/ahmadmughni' target='_blank' sx={{textDecoration: 'none', color: 'white', fontWeight: 700, '&:hover': {color: '#FDB827'}}}> @ahmadmughni</Link></Typography>
                  <Typography>Email : <Link href='mailto:ahmad.mughni1905@gmail.com' target='_blank' sx={{textDecoration: 'none', color: 'white', fontWeight: 700, '&:hover': {color: '#FDB827'}}}> ahmad.mughni1905@gmail.com</Link></Typography>
              </Box>

            </Box>
          </Box>
        </Container>
      <Footer />
    </ThemeProvider>
  )
}
