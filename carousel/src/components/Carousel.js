import React, { useState, useEffect } from 'react';

const ImageContainer = ({ imageSrc, altName }) => {
  return <img className="carousel-image" src={imageSrc} alt={altName} />;
};

const Carousel = ({ items }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(handleNext, 2000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [currentImage]);

  function handleNext() {
    if (currentImage + 1 >= items?.length) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  }

  const handlePrevious = () => {
    if (currentImage <= 0) {
      setCurrentImage(items.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };

  const handleDots = (id) => {
    setCurrentImage(id);
  };

  return (
    <div className="main-container">
      <div className="inner-container">
        <button onClick={handlePrevious}>Previous</button>
        <ImageContainer imageSrc={items?.[currentImage]?.link} altName={items?.[currentImage]?.imageName} />
        <button onClick={handleNext}>Next</button>
      </div>

      <div className="dots">
        {items?.map((item, idx) => {
          return (
            <button key={item?.id} onClick={() => handleDots(idx)}>
              {idx === currentImage ? '◉' : '○'}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
