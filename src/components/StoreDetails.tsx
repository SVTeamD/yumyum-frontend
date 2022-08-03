import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { IMAGE_URI } from '../apis/configs/constants';
interface Props {
  stores: {
    id: number;
    category: string;
    name: string;
    photo_url: string;
  };
}

export default function StoreDetails({ stores }: Props) {
  React.useEffect(() => {
    console.log(`${IMAGE_URI}/${stores.id}/store/${stores.photo_url}`);
  }, []);
  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={`${IMAGE_URI}/${stores.id}/store/${stores.photo_url}`}
          alt="store picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {stores.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {stores.category}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
