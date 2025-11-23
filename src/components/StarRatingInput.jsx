import { useState } from "react";
import "../css/starRating.css"; // Styles below

export default function StarRatingInput({ value, onChange }) {
    const [hover, setHover] = useState(0);

    return (
        <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => {
                const isFilled = hover >= star || (!hover && value >= star);

                return (
                    <span
                        key={star}
                        className={`star ${isFilled ? "full" : ""}`}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                        onClick={() => onChange(star)}
                    >
                        ★
                    </span>
                );
            })}
        </div>
    );
}