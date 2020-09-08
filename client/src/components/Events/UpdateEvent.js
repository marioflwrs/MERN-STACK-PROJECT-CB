import React from 'react';
import { useParams } from 'react-router-dom';

import Input from '../FormElements/Input';
import Button from '../FormElements/Button';
import {VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from '../../shared/util/validators';

const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: 'BreakOff',
        description: '3v3 for $500',
        imageUrl: 'https://se-infra-imageserver2.azureedge.net/clink/images/0c255524-0b35-46b0-a5b1-d9492a48d741d9665437-d7b4-409d-8928-b29e78e71604.png?preset=large-w',
        address:'3400 N Charles St, Baltimore, MD 21218, USA',
        location: {
            lat:39.3299,
            lng: 76.6205
        },
        creator: 'u1'
    },
    {
        id: 'e2',
        title: 'Unbreakable',
        description: '5v5 for $1000',
        imageUrl: 'https://lastfm.freetls.fastly.net/i/u/ar0/d235b0a294c3421bc2be3ecc616cff7e.webp',
        address:'4400 University Dr, Fairfax, VA 22030, USA',
        location: {
            lat:38.8308,
            lng: -77.3075
        },
        creator: 'u2' 
    }

]

const UpdateEvent = () => {
    const eventId = useParams().EventId;

    const identifiedEvent = DUMMY_EVENTS.find( p => p.id === eventId);

    if(!identifiedEvent) {
        return (
            <div className="center">
                <h2>Could not find event!</h2>
            </div>  
        );
    }

    return (
        <form>
            <Input 
                id="title" 
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errortext="Please enter a valid title."
                onInput={() => {}}
                value={identifiedEvent.title}
                valid={true}
            />

            <Input 
                id="description" 
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errortext="Please enter a valid description (min 5 characters)."
                onInput={() => {}}
                value={identifiedEvent.description}
                valid={true}
            />

            <Button type="submit" disabled={true}>
                UPDATE EVENT
            </Button>
        </form>
    );
};


export default UpdateEvent