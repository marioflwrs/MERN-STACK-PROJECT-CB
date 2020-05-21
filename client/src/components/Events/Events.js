import React, { useState } from 'react';
import './Events.css';




const Events = () => {

    const [eventList, setEventList] = useState([
        {id: 'el1', text: 'event 1'},
        {id: 'el2', text: 'event 2'},
        {id: 'el3', text: 'event 3'},
    ]);
    
    //eslint-disable-next-line
    {/* 
    addNewEventHandler pushes the new 
    created event onto the sample data list "eventList". 
    Adds onto the hardcoded array. 
    */}
    
    const addNewEventHandler = (newEvent) => {
        //code below works but is not bullet proof for manipulation of state.
        //setEventList(eventList.concat(newEvent));
        //code below is a safer approach if your state update depends on the previous state  
        setEventList(prevEventList => prevEventList.concat(newEvent));
    };
    
    //eslint-disable-next-line
    {/* 
        Directing onCreateEvent to the addNewEventHandler to the createEvent component 
        Viewevents has elist directing to eventList
    */}
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
    let enteredText = '';

    const addEventHandler = event => {
        event.preventDefault();

        const newEvent = {
            id: Math.random().toString(),
            text: enteredText
        };
        console.log(newEvent);

        props.onCreateEvent(newEvent);
    };

    const textChangeHandler = event => {
        enteredText = event.target.value;
    };

    return (
        <div>
            <div className="event-container">
                <h1>Create Event</h1>
                <form className="new-event" onSubmit={addEventHandler}>
                    <input type="text" onChange={textChangeHandler} />
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