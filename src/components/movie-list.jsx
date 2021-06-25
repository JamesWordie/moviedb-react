import React from 'react';
import MovieCard from './movie-card';

const MovieList = (props) => {
  const movies = props.movies.map((movie) => {
    return <MovieCard movie={movie} key={movie.id} />
  });

  return (
    <div className="movie-list">
      {movies}
    </div>
  );
};

export default MovieList;
