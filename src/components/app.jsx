import React from 'react';
import moviedb from '../api/moviedb'
import SearchBar from './search-bar';
import MovieList from './movie-list';

class App extends React.Component {
  state = { movies: [] }

  handleSubmit = async (term) => {
    const response = await moviedb.get('/search/movie', {
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        query: term
      }
    });

    this.setState({ movies: response.data.results });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.handleSubmit} />
        <MovieList movies={this.state.movies} />
      </div>
    )
  }
}

export default App;


// https://image.tmdb.org/t/p/w500/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg
