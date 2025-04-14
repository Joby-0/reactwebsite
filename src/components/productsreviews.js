import React from 'react'
// Star rating component
const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const totalStars = 5;
  
    return (
      <>
        {Array.from({ length: fullStars }, (_, i) => (
          <i key={i} className="bi bi-star-fill text-warning me-1"></i>
        ))}
        {hasHalfStar && <i className="bi bi-star-half text-warning me-1"></i>}
        {Array.from({ length: totalStars - fullStars - (hasHalfStar ? 1 : 0) }, (_, i) => (
          <i key={i} className="bi bi-star text-warning me-1"></i>
        ))}
      </>
    );
  };
  
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
    </li>
  );
  
  // Individual review
  const Review = ({ name, rating, text }) => (
    <div className="p-2 mb-4  rounded-3 border">
      <div className="d-flex justify-content-between">
        <h3>{name}</h3>
        <div><StarRating rating={rating} /></div>
      </div>
      <p>{text}</p>
    </div>
  );

export default function Productsreviews() {
    const ratingSummary = [
        { stars: 5, percent: 36 },
        { stars: 4, percent: 42 },
        { stars: 3, percent: 12 },
        { stars: 2, percent: 21 },
        { stars: 1, percent: 5 },
      ];
    
      const reviews = [
        {
          name: "Monica Svensson",
          rating: 3.5,
          text: "Jag köpte iPhone 16 Max Pro för några veckor sedan och jag är otroligt imponerad! Telefonen är snabb, har en fantastisk skärm och känns väldigt premium. Kameran är otrolig – jag har tagit några fantastiska bilder både i dagsljus och i svagt ljus. Det känns verkligen som att Apple har förbättrat både hårdvara och mjukvara jämfört med tidigare modeller.",
        },
        {
          name: "Person name",
          rating: 3.5,
          text: "Example review text here. You can update this with real content later.",
        },
        {
            name: "Person name",
            rating: 3.5,
            text: "Example review text here. You can update this with real content later.",
          },
          
      ];
    
      return (
        <section id="reviews">
          <div className="p-4 mb-4 bg-body-tertiary rounded-3">
            <div className="row">
              <h1>Reviews</h1>
              <div className="col-md-4">
                <h2>3,7</h2>
                <p>from 3 reviews</p>
                <ul className="list-group list-group-flush">
                  {ratingSummary.map((rate) => (
                    <RatingBar key={rate.stars} stars={rate.stars} percent={rate.percent} />
                  ))}
                </ul>
                <button className="btn btn-primary p-2 w-100 mt-4">Write a review</button>
              </div>
              <div className="col-md-8">
                {reviews.map((review, index) => (
                  <Review
                    key={index}
                    name={review.name}
                    rating={review.rating}
                    text={review.text}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      );
}

