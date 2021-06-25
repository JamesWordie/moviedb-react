import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class MovieCard extends React.Component {
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
          <StarRatingComponent
            editing={false}
            renderStarIcon={() => <span><i class="star icon"></i></span>}
            starCount={5}
            value={Math.ceil(vote_average/2)}
          />
        </div>
      </div>
    )
  }
}

export default MovieCard;
