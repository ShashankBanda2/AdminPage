import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Todopic from './static/Todoo.png';
import {Link} from 'react-router-dom';

export default function Todo() {
  return (
    <Card sx={{ maxWidth: 380 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Todopic}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Todo
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Todo info here
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