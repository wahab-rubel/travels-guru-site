// src/components/Slider.js
import React, { useState } from "react";

const destinations = [
  {
    name: "Cox's Bazar",
    description: "World's longest natural sea beach in Bangladesh.",
    image: "https://via.placeholder.com/600x400", // Replace with your image URL
  },
  {
    name: "Sreemangal",
    description: "The Tea Capital of Bangladesh, full of greenery.",
    image: "https://via.placeholder.com/600x400",
  },
  {
    name: "Sundarbans",
    description: "The largest mangrove forest and home of the Royal Bengal Tiger.",
    image: "https://via.placeholder.com/600x400",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? destinations.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === destinations.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative max-w-4xl mx-auto mt-10">
      {/* Slider Content */}
      <div
        className="h-64 rounded-lg bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `url(${destinations[currentIndex].image})`,
        }}
      >
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-end p-6 text-white">
          <h2 className="text-2xl font-bold">{destinations[currentIndex].name}</h2>
          <p>{destinations[currentIndex].description}</p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        onClick={prevSlide}
      >
        &#9664;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        onClick={nextSlide}
      >
        &#9654;
      </button>
    </div>
  );
};

export default Slider;
