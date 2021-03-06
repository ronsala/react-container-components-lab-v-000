import React, { PureComponent } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'EEYQ8MPQrsMfbYXAML1Fo4yyjbSxdIvl';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends PureComponent {
  state = {
    reviews: []
  }

  componentDidMount() {
    fetch(URL)
    .then(response => response.json())
    .then(reviewData => this.setState({ reviews: reviewData.results }))
  }

  render() {
    return <div className="latest-movie-reviews">
        <h2>Latest Reviews</h2><MovieReviews reviews={this.state.reviews} />
      </div>
  }
}

export default LatestMovieReviewsContainer;