import React from 'react';
import './Events.css';

const Events = () => {
    return (
        <div>
          <div className="event-cards-container">
            <Viewevents />
            <Createevent />
          </div>
        </div>
    );
}

const Viewevents = () => {
    return (
        <div>
            <h1>View Events Component yoyo</h1>
        </div>
    );
}

const Createevent = () => {
    return (
        <div>
            <h1>Create Events Component yoyo</h1>
        </div>
    );
}

export default Events;