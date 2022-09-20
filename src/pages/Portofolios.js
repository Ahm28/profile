import { createTheme, Grid, ThemeProvider, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import ResponsiveAppBar from "../components/Navbar/AppBar"
import dataJson from "../json/portfolios.json"

import _ from 'lodash'
import CardComponent from "../components/Card/Card"
import Footer from "../components/Footer"

const theme = createTheme({
  typography: {
    fontFamily: ['"Inter"', 'sans-serif'].join(',')
  }
})

export default function Portofolios(){
  document.title = 'Portofolio'

  const portfolios_data = dataJson.portofolios;

  return(
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar active={'portfolios'} />

      <Container>

        <Box sx={{textAlign: 'center', display: {sm: 'none', xs: 'flex'}, justifyContent: 'center'}}>
          <Typography variant="h4" sx={{fontWeight: 700}}>What i've done</Typography>
        </Box>

        <Box sx={{my: 5}}>
          <Grid container spacing={2}>
              {_.map(portfolios_data, value => {
                return (
                  <Grid item xs={12} sm={4} key={value._id}>
                    <CardComponent data={value} />
                  </Grid>
                )
              })}
          </Grid>
        </Box>
      </Container>

      <Footer />
    </ThemeProvider>
  )
}