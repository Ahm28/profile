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
          image={data.image}
          alt="green iguana"
          sx={{width: { md: 181, xs: '100%' }, height: { md: 181, xs: 140} }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {data.title}
          </Typography>
          <Typography variant="caption">
            {data.desc_thumb}
          </Typography>
        </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
}
