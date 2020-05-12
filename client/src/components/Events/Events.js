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
            <div className="event-container">
                <h1>View Events</h1>
                    <div className="event-list-container">
                        <h3>Event Title</h3>
                        <h4>Location</h4>
                        <h4>Date</h4>
                        <h4>Organizer</h4>
                    </div>
            </div> 
        </div>
    );
}

const Createevent = () => {
    return (
        <div>
            <div className="event-container">
                <h1>Create Event</h1>
                <CreateeventBegin />
            </div>
        </div>
    );
}

const CreateeventBegin = () => {
    return (
        <div>
            <h1>Create Event Begin</h1>
        </div>
    );
}

export default Events;