import React from "react";
import theme from "../themes/theme";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, Paper, styled, Rating } from "@mui/material";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const BASE_URL = "http://image.tmdb.org/t/p/original"
const MovieCard = ({movie}) => {

    return(
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
    <Item>1</Item>
  </Grid>
  <Grid item xs={6}>
    <Item>2</Item>
  </Grid>
  <Grid item xs={6}>
    <Item>3</Item>
  </Grid>
  <Grid item xs={6}>
    <Item>4</Item>
  </Grid>
</Grid>
      
      
      // <Grid rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      //   <Grid item xs = '6'>
        
      //     <Card id={movie.id}  sx={{  display: 'flex', width:'700px', margin : 5}}>
      //       <CardMedia
      //         component="img"
      //         sx={{ width: '150px', height:'225' }}
      //         image={`${BASE_URL}${movie.poster_path}`}
      //         alt="Movie Cover"
      //       />
      //       <Box sx={{ 
      //         display: 'flex', 
      //         flexDirection: 'column',
      //         flexWrap: 'wrap',
      //         justifyContent : "space-between" }}>
      //         <CardContent sx={{ flex: '1 0 auto' }}>
      //           <Typography component="div" variant="h5">
      //             {movie.title}
      //           </Typography>
      //           <Typography variant="subtitle1" color="text.secondary" component = "div">
      //             {movie.release_date}
      //           </Typography>
      //           <Typography variant="subtitle1" color="text.secondary" component="div">
      //             {movie.overview}
      //           </Typography>
      //           <Box sx = {{
      //               width : '200px',
      //               display : 'flex',
      //               algin: 'center'
      //             }}>
      //             <Rating name="read-only" precision={0.1} value={movie.vote_average / 2} max={5} readOnly />
      //             <Box sx={{ ml: 2 }}>{movie.vote_average}</Box>
      //           </Box>
      //         </CardContent>
      //       </Box>
      //     </Card>
      //  </Grid>
      // </Grid>
      
    )
}

export default MovieCard