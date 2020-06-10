import React, { useState } from 'react';

//Components
import Createevent from './Createevent';
import ViewEvents from './Viewevents';

//Styling
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
            <ViewEvents elist={eventList} />
          </div>
        </div>
    );
}







export default Events;