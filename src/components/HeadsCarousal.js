import React from 'react';
import Slider from 'react-slick';
import '../../src/index.css'; // CSS for the flip effect

const HeadsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 3 },
      },
    ],
  };

  const heads = [
    { img: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Head+1', text: 'Head 1 Details' },
    { img: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Head+2', text: 'Head 2 Details' },
    { img: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Head+3', text: 'Head 3 Details' },
    { img: 'https://via.placeholder.com/150/FFFF00/FFFFFF?text=Head+4', text: 'Head 4 Details' },
    { img: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Head+5', text: 'Head 5 Details' },
  ];

  return (
    <div style={{ width: '90%', margin: '0 auto' }}>
      <Slider {...settings}>
        {heads.map((head, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              {/* Front of the card */}
              <div className="flip-card-front">
                <img src={head.img} alt={`Head ${index + 1}`} />
              </div>
              {/* Back of the card */}
              <div className="flip-card-back">
                <p>{head.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeadsCarousel;
