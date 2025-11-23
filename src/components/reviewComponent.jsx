import { timeAgo } from "../services/Helpers/timeagoHelper";
import StarRating from "./starRating";

// Individual review
const Review = ({ name, rating, text, profile, Created_at, onReadMore }) => {
  const maxLength = 200; // max characters before truncating

  const isLongText = text.length > maxLength;
  const displayedText = isLongText ? text.slice(0, maxLength) + "..." : text;

  return (
    <div className="p-3 mb-4 rounded-3 border shadow-sm">
      <div className="d-flex justify-content-between align-items-start">
        <div className="d-flex">
          <img
            alt={name}
            src={profile}
            className="rounded-circle me-3"
            style={{ width: "60px", height: "60px", objectFit: "cover" }}
          />
          <div>
            <h5 className="mb-1">{name}</h5>
            <small className="text-muted">{timeAgo(Created_at)}</small>
          </div>
        </div>
        <div><StarRating rating={rating} /></div>
      </div>

      <p className="mt-3 mb-0 text-break">{displayedText}</p>

      {isLongText && (
        <button
          className="btn btn-link p-0 mt-1"
          onClick={onReadMore} // handler to open modal
        >
          Read more
        </button>
      )}
    </div>
  );
};

export default Review;
