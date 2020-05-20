import React from 'react';
import './Events.css';

const Events = () => {
    const eventList = [
        {id: 'el1', text: 'event 1'},
        {id: 'el2', text: 'event 2'},
        {id: 'el3', text: 'event 3'},
    ]
    return (
        <div>
          <div className="event-cards-container">
            <Viewevents elist={eventList} />
            <Createevent />
          </div>
        </div>
    );
}

const Viewevents = props => {
    console.log(props.elist);
    return (
        <div>
            <h1>View Events</h1>
            <ul className="event-list">{
                props.elist.map((list) => {
                    return <li key={list.id}>{list.text}</li>
                })
            }</ul>
        </div>
    );
}

const Createevent = () => {
    return (
        <div>
            <div className="event-container">
                <h1>Create Event</h1>
            </div>
        </div>
    );
}

export default Events;