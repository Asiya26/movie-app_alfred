import React, { useEffect, useState, useContext} from 'react'
import axios from 'axios';
import MovieCard from '../components/MovieCard/MovieCard';
import { MovieContext } from '../components/context/MoviesContext';

const baseUrl = 'https://api.themoviedb.org/3'
const moviesUrl = `${baseUrl}/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`;  
// const moviesUrl = `${baseUrl}api.themoviedb.org/3/movie/550?api_key=57402b2206088d50bc8bd7183a5536be`

const Home = () => {
  const {movies, setMovies} = useContext(MovieContext)
  

  useEffect(() => {
    fetchMovies(moviesUrl);
  }, [])


  const fetchMovies = async(url) => {
    const res = await axios.get(url);
    
    setMovies(res.data.results)


  }
  
  return (
    <div className='d-flex justify-content-center flex-wrap page' style={ {background:'#555'} }>
      { movies.map(movie => <MovieCard key={ movie.id } movie={ movie} />)}
    </div>
  )
}

export default Home