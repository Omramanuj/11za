import React, { useState, useEffect } from 'react';

const slides = [
    "https://11za.com/wp-content/uploads/2024/01/product.png", 
    "https://11za.com/wp-content/uploads/2024/01/product.png"

];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 4000); 

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-64 overflow-hidden">
      <img src={slides[currentSlide]} alt={`Slide ${currentSlide}`} className="w-full h-full object-cover"/>
    </div>
  );
};

export default Slider;
