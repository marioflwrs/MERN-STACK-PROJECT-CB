import React from 'react';
import './Events.css';

const Jams = () => {
    return (
        <div>
          <div className="event-cards-container">
              <div className="event-card-create event-card"><button>Create Event</button></div>
              <div className="event-card-view event-card"><button>View Events</button></div>
          </div>          
        </div>
    );
}

export default Jams;