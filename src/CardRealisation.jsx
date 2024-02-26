import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import { API_URL } from './config';

export default function CardRealisation({post}) {
  if(post.attributes.image.data){
      // console.log(post.attributes.image.data[0].attributes.formats.thumbnail.url);
      // console.log(post.attributes.description.length);
  }
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={post.attributes.image.data !== null ? API_URL + post.attributes.image.data[0].attributes.formats.thumbnail.url : "..."}
        // {post.attributes.image && post.attributes.image[0] && post.attributes.image[0].formats && (
        //     <img src={post.attributes.image[0].formats.small.url} alt={post.attributes.title} />
        // )}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3">
            {post.attributes.title !== null ? post.attributes.title : ""}
        </Typography>
        <Typography gutterBottom variant="h5" component="h4">
            {post.attributes.category !== null ? post.attributes.category : ""}
        </Typography>
        <Typography variant="p">
            {post.attributes.description.length >= 400 ? post.attributes.description.substring(0,100) + "...": post.attributes.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/Article/1">
          <div className="showmore"><button>Learn More</button></div>
        </Link>
      </CardActions>
    </Card>
  );
}