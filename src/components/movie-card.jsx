import React from 'react';

class MovieCard extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = { movies: [] };

  // }

  render() {
    const { title, overview, vote_average, poster_path } = this.props.movie;
    const imageUrl = `https://image.tmdb.org/t/p/w200${poster_path}`;

    return (
      <div className="ui card">
        <div className="image">
          <img
            src={imageUrl}
            alt={poster_path}
          />
        </div>
        <div className="content">
          <h3 className="header">{title}</h3>
          <div className="description">
            {overview}
          </div>
        </div>
        <div className="extra content">
          {vote_average}/10
        </div>
      </div>
    )
  }
}

export default MovieCard;
