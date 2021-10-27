import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from '@mui/material/colors';
import { deletePost, getOnePost } from '../redux/actions/actionsPosts';
import { useDispatch } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
export default function FoodCard({p}) {
    const dispatch = useDispatch()
  return (
    <Card sx={{ maxWidth: 345 }} style={{marginTop:50}}>
      <CardMedia
        component="img"
        alt="food"
        height="50"
        src="../images/food.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {p&&p.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        {p&&p.quantity}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {p&&p.description}
        </Typography>
      </CardContent>
      <CardActions>
      <DeleteIcon style={{cursor:"Pointer"}} onClick={()=>dispatch(deletePost(p._id))} sx={{ color: red[500] }} fontSize="large"  />
      <Link to={`/edit/${p._id}`}>
      <EditIcon onClick={()=>dispatch(getOnePost(p._id))} color="secondary" fontSize="large" style={{cursor:"Pointer"}}/>
      </Link>
      </CardActions>
    </Card>
  );
}