import { Box, Button, createTheme, ThemeProvider, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import ResponsiveAppBar from '../components/Navbar/AppBar'

const theme = createTheme({
  typography: {
    fontFamily: ['"Inter"', 'sans-serif'].join(',')
  }
})

export default function Home() {
  let navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>

    <Box sx={{height: '100vh',  background: 'url(assets/images/bg-hero.png) no-repeat', backgroundSize: '1400px', backgroundPosition: 'cover'}}>
      
      <ResponsiveAppBar active='home' />

      <Container>
        <Box sx={{textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '85vh', color: 'white'}}>
          <Box sx={{ width: '700px'}}>
            <Typography variant='h2' sx={{ fontFamily: 'Inter, sans-serif', fontWeight: '800', fontSize: {xs: '24px', sm: '40px', md: '50px'}}}>Hey there <br /> I am Ahmad Mughni</Typography>
            <Typography paragraph sx={{my: 4, px: 3, fontSize: { sm: '16px', md: '20px'}}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
              <Button variant='contained' sx={{mr: 2, backgroundColor: '#FDB827', color: '#000', textTransform: 'capitalize', fontWeight: 800, '&:hover': {backgroundColor: '#FDB827'}}} onClick={() => navigate('/about')}>About Me</Button>
              <Button variant='contained' sx={{backgroundColor: '#333', textTransform: 'capitalize', fontWeight: 800, '&:hover': {backgroundColor: '#333'}}} onClick={() => navigate('/portfolios')}>&#128578; Let's see portoflios</Button>
          </Box>
        </Box>
      </Container>

      <Footer />
      
    </Box>
    
    </ThemeProvider>

  )
}
