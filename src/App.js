import React, { useState } from 'react';

import HeadsCarousal from './components/HeadsCarousal';
import EventsCarousal from './components/EventCarousal';
const App = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState('heads');

  return (
    <div>

      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>React Carousel with Tabs</h1>

      {/* Tab Navigation */}
      <div style={{ display: 'flex', justifyContent: 'left', marginBottom: '20px' ,backgroundColor:'lightpink'}}>
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

export default App;
