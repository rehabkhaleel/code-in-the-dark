import React, { useState } from 'react';
import HeadsCarousal from './HeadsCarousal';
import EventsCarousal from './EventCarousal';

const Carousal = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState('heads');

  return (
    <div>

      {/* Tab Navigation */}
      <div style={{ display: 'flex', justifyContent: 'left', marginBottom: '20px', backgroundColor: 'lightpink' }}>
        <button
          onClick={() => setActiveTab('heads')}
          style={{
            padding: '10px 20px',
            margin: '0 10px',
            border: activeTab === 'heads' ? '2px solid black' : '1px solid gray',
            borderRadius: '5px',
            background: activeTab === 'heads' ? 'lightgray' : 'white',
            cursor: 'pointer',
          }}
        >
          Heads
        </button>
        <button
          onClick={() => setActiveTab('events')}
          style={{
            padding: '10px 20px',
            margin: '0 10px',
            border: activeTab === 'events' ? '2px solid black' : '1px solid gray',
            borderRadius: '5px',
            background: activeTab === 'events' ? 'lightblue' : 'white',
            cursor: 'pointer',
          }}
        >
          Events
        </button>
      </div>

      {/* Conditional Rendering of Carousels */}
      {activeTab === 'heads' && <HeadsCarousal />}
      {activeTab === 'events' && <EventsCarousal />}
    </div>
  );
};

export default Carousal;
