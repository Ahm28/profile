import { Box, createTheme, Grid, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import CardComponent from '../components/Card/Card'
import ResponsiveAppBar from '../components/Navbar/AppBar'

export default function AddPorto() {
  const theme = createTheme({
    typography: {
      fontFamily: ['"Inter"', 'sans-serif'].join(',')
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar active={'portfolios'} />

      <Grid container>
        <Grid item xs={12} sm={6}>
          <div className="relative flex flex-col justify-center min-h-screen overflow-hidden mx-4">
              <div className="w-full p-6 m-auto rounded-md shadow-md lg:max-w-xl" style={{backgroundColor: '#FFFFFF1A', border: '1px solid #FFFFFF59'}}>
                  <h1 className="text-3xl font-semibold text-center text-white">
                    Add Portofolio
                  </h1>
                  <form className="mt-6">
                      <div className="mb-2">
                          <label
                              for="email"
                              className="block text-sm font-semibold text-gray-300"
                          >
                              Title
                          </label>
                          <input
                              type="email"
                              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                              placeholder='Input Title Portfolio'
                          />
                      </div>
                      <div className='mb-2'>
                        <div className='mb-2'>
                          <p className='block text-sm font-semibold text-gray-300'>Image Thumbnail</p>
                        </div>
                          <label
                              className="relative flex flex-col items-center justify-center w-full text-xs border rounded-md h-14 hover:cursor-pointer"
                              for='image'
                            >
                            <p>Pilih File</p>
                            <small>PNG, JPG, maks. 1MB</small>
                          </label>
                          <input
                            type="file"
                            className="hidden"
                            name='image'
                            id='image'
                            accept=".jpeg,.jpg,.png"
                          />
                      </div>

                      <div className="mb-2">
                        <label for="exampleFormControlTextarea1" class="block text-sm font-semibold text-gray-300"
                          >Description</label>
                        <textarea
                          className="form-control block w-full px-4 py-2 mt-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlTextarea1"
                          rows="4"
                          placeholder="Input Your Description"
                        ></textarea>
                      </div>
                      
                      <div className="mt-6">
                          <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#FDB827] rounded-md hover:bg-[#E49D05] focus:outline-none focus:bg-[#FDB827]">
                              Add Portofolio
                          </button>
                      </div>
                  </form>
              </div>
          </div>
        </Grid>
        <Grid item sx={12} sm={6}>
          <div className='relative flex flex-col lg:justify-center min-h-screen overflow-hidden mx-4'>
            <Box sx={{textAlign: {xs: 'center', sm: 'start'}, mb: 12}}>
              <Typography variant='h3'>Preview</Typography>
            </Box>
            <CardComponent />
          </div>
        </Grid> 
      </Grid>
    </ThemeProvider>
  )
}
