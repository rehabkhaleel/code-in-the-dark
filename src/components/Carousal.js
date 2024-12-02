import React from 'react';
import Slider from 'react-slick';

const Carousal = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Enable infinite scrolling
    speed: 700, // Animation speed in ms
    slidesToShow: 5, // Default number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed in ms
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Medium screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Small screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Dummy data for images
  const images = [
    'https://via.placeholder.com/150/FF0000/FFFFFF?text=1',
    'https://via.placeholder.com/150/00FF00/FFFFFF?text=2',
    'https://via.placeholder.com/150/0000FF/FFFFFF?text=3',
    'https://via.placeholder.com/150/FFFF00/FFFFFF?text=4',
    'https://via.placeholder.com/150/FF00FF/FFFFFF?text=5',
    'https://via.placeholder.com/150/00FFFF/FFFFFF?text=6',
    'https://via.placeholder.com/150/000000/FFFFFF?text=7',
    'https://via.placeholder.com/150/888888/FFFFFF?text=8',
  ];

  return (
    <div style={{ margin: '20px auto', width: '90%' }}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} style={{ padding: '10px' }}>
            <div
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                overflow: 'hidden',
                margin: '0 auto',
                border: '5px solid #ddd',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousal;
