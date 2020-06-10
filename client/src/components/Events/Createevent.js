import React, { useState } from 'react';

const Createevent = props => {
    const [enteredText, setEnteredText] = useState('');

    const textChangeHandler = event => {
        setEnteredText(event.target.value);
    };

const addEventHandler = event => {

        event.preventDefault();

        const newEvent = {
            id: Math.random().toString(),
            text: enteredText
        };

        setEnteredText('');

        props.onCreateEvent(newEvent);
    };    return (
        <div>
            <div className="event-container">
                <h1>Create Event</h1>
                <form className="new-event" onSubmit={addEventHandler}>
                    <input type="text" value={enteredText} onChange={textChangeHandler} />
                    <button type="submit">Add Event</button>
                    
                </form>
            </div>
        </div>  
    );
}

export default Createevent;