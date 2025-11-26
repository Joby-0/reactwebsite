import React from 'react'
import Review from './reviewComponent.jsx';
import { Placeholder } from 'react-bootstrap';


// Rating bar
const RatingBar = ({ stars, percent }) => (
  <li className="list-group-item d-flex align-items-center">
    <span>{stars}</span>
    <div className="progress m-2 flex-grow-1">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${percent}%` }}
        aria-valuenow={percent}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <span>{percent}%</span>
  </li>
);





export default function Productsreviews({ reviewData, ReviewModal,reviewsModal }) {

  const ratingSummary = [
    { stars: 5, count: reviewData.nrOfFiveStar },
    { stars: 4, count: reviewData.nrOfFourStar },
    { stars: 3, count: reviewData.nrOfThreeStar },
    { stars: 2, count: reviewData.nrOfTwoStar },
    { stars: 1, count: reviewData.nrOfOneStar }
  ].map(r => ({
    stars: r.stars,
    percent:
      reviewData.dbItemsCount === 0
        ? 0
        : Math.round((r.count / reviewData.dbItemsCount) * 100)
  }));

  const handleReviewModal = (value) => {

    ReviewModal(value)
  };


  return (
    <section id="reviews">
      <div className="p-4 mb-4 bg-body-tertiary rounded-3">
        <div className="row">
          <h1>Reviews</h1>
          <div className="col-md-4">
            <h2>{reviewData.avgRating} stars</h2>
            <p>from {reviewData.dbItemsCount} reviews</p>
            <ul className="list-group list-group-flush">
              {ratingSummary.map((rate) => (
                <RatingBar key={rate.stars} stars={rate.stars} percent={rate.percent} />
              ))}
            </ul>
            <button onClick={() => handleReviewModal(true)} className="btn btn-primary p-2 w-100 mt-4">Write a review</button>
          </div>
          <div className="col-md-8">
            {reviewData?.pageItems ? (
              reviewData.pageItems.map((review, index) => (
                <Review
                  key={index}
                  Created_at={review.created_at}
                  profile={review.ProfileImage}
                  name={review.userName}
                  rating={review.starRating}
                  text={review.comment}
                />
              ))

            ) : (
              <Placeholder as='div' animation='glow'>
                <Placeholder style={{height:150}} xs={12}/>
                <Placeholder className="my-3" style={{height:150}} xs={12}/>
                <Placeholder style={{height:150}} xs={12}/>

              </Placeholder>
            )}
            {reviewData.dbItemsCount > 3 && (
              <div className="d-flex justify-content-center my-3">
                <button
                  type="button"
                  className="btn btn-link"
                onClick={() => reviewsModal()} // your click handler
                >
                  Show all reviews
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}

