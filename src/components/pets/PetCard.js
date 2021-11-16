import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const PetCard = ({ pet }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={ pet.image_url }
        alt="picture of a pet"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { pet.name }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { pet.species } { pet.sex }<br />
          { pet.breed }<br />
          { pet.age }<br />
        </Typography>
      </CardContent>
      <CardActions>
        {pet.adopted ? null : <Button size="small">Adopt</Button>}
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default PetCard;