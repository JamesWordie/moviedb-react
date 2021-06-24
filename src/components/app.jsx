import React from 'react';
import moviedb from '../api/moviedb'
import SearchBar from './search-bar';

class App extends React.Component {
  state = { movies: [] }

  handleSubmit = async (term) => {
    const response = await moviedb.get('/search/movies/?api_key=b297b6c0f7debecdc9160656baef7066', {
      params: { query: term }
    });

    console.log(response)

    // this.setState({ movies: response.data.results });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App;
