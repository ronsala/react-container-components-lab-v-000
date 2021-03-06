// Code MovieReviews Here
import React, { PureComponent } from 'react';

const Review = props => {
  return <div>
    <strong>{ props.review.display_title }</strong> by { props.review.byline } -- link: <a href={ props.review.link.url } target="_blank">{ props.review.link.url }</a>
  </div>
}

export default Review;