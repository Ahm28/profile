import { createTheme, Grid, ThemeProvider, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import Footer from '../components/Footer'
import ResponsiveAppBar from '../components/Navbar/AppBar'


const theme = createTheme({
  typography: {
    fontFamily: ['"Inter"', 'sans-serif'].join(',')
  }
})

export default function About() {
  document.title = 'About'

  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar active='about'/>

      <Container sx={{mb: 4}}>
      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <img src='/assets/images/about-image.png' width='323px'/>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <Typography variant='h3' sx={{fontWeight: 700, mt: 5, textAlign: {xs: 'center', sm: 'start'}}}>I'm Ahmad Mughni <br /> A <span style={{color: '#FDB827'}}> Frontend Developer</span></Typography>
        </Grid>
      </Grid>

      <Box sx={{mt: 4}}>
        <Typography sx={{fontWeight: 700, my: 2}}>The standard Lorem Ipsum passage, used since the 1500s</Typography>
        <Typography paragraph variant='caption'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Typography>

        <Typography sx={{fontWeight: 700, my:2}}>The standard Lorem Ipsum passage, used since the 1500s</Typography>
        <Typography paragraph variant='caption'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Typography>

        <Typography sx={{fontWeight: 700, my:2}}>The standard Lorem Ipsum passage, used since the 1500s</Typography>
        <Typography paragraph variant='caption'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Typography>
      </Box>
      </Container>

      <Footer />
    </ThemeProvider>
  )
}
