import { createTheme, Grid, ThemeProvider, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import ResponsiveAppBar from "../components/Navbar/AppBar"
import dataJson from "../json/portfolios.json"

import _ from 'lodash'
import CardComponent from "../components/Card/Card"
import Footer from "../components/Footer"


export default function Portofolios(){
  const theme = createTheme({
    typography: {
      fontFamily: ['"Inter"', 'sans-serif'].join(',')
    }
  })

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
            {
              portfolios_data.length !== 0 ? ( 
                _.map(portfolios_data, value => {  
                  return (
                      <Grid item xs={12} sm={4} key={value._id}>
                        <CardComponent data={value} />
                    </Grid>
                  )
                })
                ) : (
                  <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '75vh' }}>
                  <img src='/assets/images/no-data.png' alt="No Data" width='300' />
                  <Typography variant="h3" sx={{fontWeight: 700}}>No Data</Typography>
                </Grid>
              )
            }
            </Grid>
        </Box>
      </Container>

      <Footer />
    </ThemeProvider>
  )
}