import React, { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const resetStarRating = () => setRating(0);
  return (
    <div className="star-widget">
      <ul className="star-container">
        <li onClick={() => setRating(1)}>{rating >= 1 ? '★' : '☆'}</li>
        <li onClick={() => setRating(2)}>{rating >= 2 ? '★' : '☆'}</li>
        <li onClick={() => setRating(3)}>{rating >= 3 ? '★' : '☆'}</li>
        <li onClick={() => setRating(4)}>{rating >= 4 ? '★' : '☆'}</li>
        <li onClick={() => setRating(5)}>{rating >= 5 ? '★' : '☆'}</li>
      </ul>
      <div>Rating : {rating}/5 </div>
      {rating > 0 && (
        <button className="clear-star" onClick={resetStarRating}>
          Clear
        </button>
      )}
    </div>
  );
};

export default StarRating;
