import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Userspic from './static/Users.png';
import {Link} from 'react-router-dom';

export default function Users() {
  return (
    <Card sx={{ maxWidth: 380 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Userspic}
          alt="error"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Users
          </Typography>
          <Typography variant="body2" color="text.secondary">
            users info here
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       <Link to ="/Login"><Button size="small" color="primary">
          View
        </Button></Link>
      </CardActions>
    </Card>
  );
}