import React from 'react';
import Slider from 'react-slick';

const EventsCarousal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const events = [
    'https://via.placeholder.com/300x200/FF5733/FFFFFF?text=Event+1',
    'https://via.placeholder.com/300x200/33FF57/FFFFFF?text=Event+2',
    'https://via.placeholder.com/300x200/3357FF/FFFFFF?text=Event+3',
    'https://via.placeholder.com/300x200/F1C40F/FFFFFF?text=Event+4',
    'https://via.placeholder.com/300x200/9B59B6/FFFFFF?text=Event+5',
  ];

  return (
    <div style={{ width: '90%', margin: '0 auto' }}>
      <Slider {...settings}>
        {events.map((img, index) => (
          <div key={index} style={{ padding: '10px' }}>
            <div
              style={{
                width: '100%',
                height: '200px',
                overflow: 'hidden',
                borderRadius: '10px',
                border: '2px solid #ddd',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img src={img} alt={`Event ${index + 1}`} style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EventsCarousal;
