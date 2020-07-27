import React, { useCallback, useReducer } from 'react';
import Input from '../FormElements/Input';
import Button from '../FormElements/Button';

import { 
    VALIDATOR_REQUIRE, 
    VALIDATOR_MINLENGTH 
} from '../../shared/util/validators';


const formReducer = (state, action) => {
    switch(action.type) {
        case 'INPUT_CHANGE':
            let formIsValid = true;
            for (const inputId in state.inputs) {
                if (inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid;
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: { value: action.value, isValid: action.isValid }
                },
                isValid: formIsValid
            };
        
        default:
            return state;
    }
};

const Createevent = () => {
    
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
            title: {
                value: '',
                isValid: false
            }
        },

        isValid: {
            description: {
                value: '',
                isValid: false
            }
        },
        isValid: false
    });

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
            type: 'INPUT_CHANGE', 
            value: value, 
            isValid: isValid, 
            inputId: id
        });
    }, []);


    return (
        <form className="event-form event-container">
            <Input 
                id="title"
                element="input" 
                type="text" 
                label="Title" 
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]} 
                errorText="Please enter a valid title. (Minimum of 5 characters)"
                onInput={inputHandler}
            />
            <Input 
                id="description"
                element="textarea"  
                label="Description" 
                validators={[VALIDATOR_MINLENGTH(5)]} 
                errorText="Please enter a description (at least 5 characters)."
                onInput={inputHandler}
            />
            <Button type="submit" disabled={!formState.isValid}>
                Add Event
            </Button>
        </form>
    
    );
}

export default Createevent;