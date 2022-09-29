import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Box, ThemeProvider } from '@mui/material';

import Navbar from './components/Navbar';
import theme from './themes/theme';
import MovieCard from './components/MovieCard';
import movieJSON from './data/movies.json'
import { useState } from 'react';


const App = () => {
  const [movies, setMovies] = useState(movieJSON.results)
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar></Navbar>
        <Box sx = {{marginTop : 10}}>
        {
          movies.map((movie)=>{
            return<MovieCard movie = {movie} />
          })
        }
      </Box>
      </div>
      
      
    </ThemeProvider>
  );
}

export default App;
