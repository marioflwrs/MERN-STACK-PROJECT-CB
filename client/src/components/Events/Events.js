import React from 'react';
import './Events.css';

const Events = () => {
    const eventList = [
        {id: 'el1', text: 'event 1'},
        {id: 'el2', text: 'event 2'},
        {id: 'el3', text: 'event 3'},
    ]

    const addNewEventHandler = (newEvent) => {
        eventList.push(newEvent);
        console.log(eventList);
    };


    return (
        <div>
          <div className="event-cards-container">
            <Createevent onCreateEvent={addNewEventHandler} />
            <Viewevents elist={eventList} />
          </div>
        </div>
    );
}


const Createevent = props => {
    const addEventHandler = event => {
        event.preventDefault();

        const newEvent = {
            id: Math.random().toString(),
            text: 'My new event!'
        };

        props.onCreateEvent(newEvent);
    };

    return (
        <div>
            <div className="event-container">
                <h1>Create Event</h1>
                <form className="new-event" onSubmit={addEventHandler}>
                    <input type="text" />
                    <button type="submit">Add Event</button>
                </form>
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

export default Events;