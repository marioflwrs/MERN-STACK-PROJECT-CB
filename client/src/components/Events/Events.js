import React, { useState } from 'react';

//Components
import Createevent from './Createevent';
import ViewEvents from './Viewevents';

//Styling
import './Events.css';




const Events = () => {

    const [eventList] = useState([
        {id: 'el1', text: 'event 1'},
        {id: 'el2', text: 'event 2'},
        {id: 'el3', text: 'event 3'},
    ]);
    


    return (
        <div>
          <div className="event-cards-container">
            <Createevent />
            <ViewEvents elist={eventList} />
          </div>
        </div>
    );
}







export default Events;