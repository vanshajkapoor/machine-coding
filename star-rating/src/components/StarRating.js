import React, { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const resetStarRating = () => setRating(0);
  return (
    <div className="star-widget">
      <ul className="star-container">
        <li onMouseOut={() => setHover(0)} onMouseOver={() => setHover(1)} onClick={() => setRating(1)}>
          {hover > 0 ? (hover >= 1 ? '★' : '☆') : rating >= 1 ? '★' : '☆'}
        </li>
        <li onMouseOut={() => setHover(0)} onMouseOver={() => setHover(2)} onClick={() => setRating(2)}>
          {hover > 0 ? (hover >= 2 ? '★' : '☆') : rating >= 2 ? '★' : '☆'}
        </li>
        <li onMouseOut={() => setHover(0)} onMouseOver={() => setHover(3)} onClick={() => setRating(3)}>
          {hover > 0 ? (hover >= 3 ? '★' : '☆') : rating >= 3 ? '★' : '☆'}
        </li>
        <li onMouseOut={() => setHover(0)} onMouseOver={() => setHover(4)} onClick={() => setRating(4)}>
          {hover > 0 ? (hover >= 4 ? '★' : '☆') : rating >= 4 ? '★' : '☆'}
        </li>
        <li onMouseOut={() => setHover(0)} onMouseOver={() => setHover(5)} onClick={() => setRating(5)}>
          {hover > 0 ? (hover >= 5 ? '★' : '☆') : rating >= 5 ? '★' : '☆'}
        </li>
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
