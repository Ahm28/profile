import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/system';
import NorthEastOutlinedIcon from '@mui/icons-material/NorthEastOutlined';

export default function CardComponent(props) {
  const { data } = props

  return (
    <Card sx={{ maxWidth: 425, backgroundColor: '#FFFFFF1A', border: '1px solid #FFFFFF59', color: '#fff', height: {md: 181, xs: 340} }}>
      <CardActionArea>
       
       <Box sx={{display: {sm: 'block', md: 'flex'}}}>
       <CardMedia
          component="img"
          image={data ? data.image : 'https://st3.depositphotos.com/7438112/14964/i/950/depositphotos_149640460-stock-photo-sample-stamp-on-white-background.jpg'}
          alt="green iguana"
          sx={{width: { md: 181, xs: '100%' }, height: { md: 181, xs: 140} }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {data? data.title : 'Title Card'}
          </Typography>
          <Typography variant="caption">
            {data ? data.desc_thumb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'}
          </Typography>
        </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
}
