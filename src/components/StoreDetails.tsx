import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import fishhouse from '../assets/images/fishhouse.jpeg';

interface Props {
  stores: {
    name: string;
    images: string;
  };
}

export default function StoreDetails({ stores }: Props) {
  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={fishhouse}
          alt="store picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {stores.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            바다 향기가 솔솔나는 오션's 횟집, 땅 고기도 팔아요.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
