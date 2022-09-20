import { Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import moment from 'moment'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <Container>
        <Box sx={{display: 'flex',  flexDirection: {xs:'column', md: 'row'}, color: 'white', justifyContent: {xs: 'center', md: 'space-around'}, textAlign: 'center', my: 1}}>

          <Box sx={{order: {xs: 3, md: 2}}}>
          <Typography variant='caption'>Copyright @ {moment(Date.now()).format('YYYY')} all right reserved.</Typography>
          </Box>

          <Box sx={{display: 'flex', order: {xs: 1, md: 2}, justifyContent: 'center'}}>
            <a href='https://www.linkedin.com/in/ahmad-mughni-m/' target='_blank'>
              <LinkedInIcon sx={{color: 'white'}} />
            </a>
            <a href='https://github.com/Ahm28' target='_blank'>
              <GitHubIcon sx={{color: 'white', ml: 1}} />
            </a>
          </Box>
        </Box>
      </Container>
    </footer>
  )
}
