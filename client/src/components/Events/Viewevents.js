import React from 'react';

//Components
import './Createevent';


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

export default Viewevents;