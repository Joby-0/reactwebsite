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

export default StarRating;

