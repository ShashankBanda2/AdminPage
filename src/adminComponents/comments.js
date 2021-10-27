import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import commentspic from './static/commentss.jpg';
import {Link} from 'react-router-dom';

export default function Comments() {
  return (
    <Card sx={{ maxWidth: 380 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={commentspic}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Comments
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Comments info here
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to ="/Login"> <Button size="small" color="primary">
          View
        </Button></Link>
      </CardActions>
    </Card>
  );
}