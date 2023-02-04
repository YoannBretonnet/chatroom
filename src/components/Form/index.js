import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from 'react';

import {changeInputMessage} from 'src/store/actions';
import './form.scss';


import {Send} from 'react-feather';

function Form () {
  const isLogged = useSelector( (state) => state.nickname !== null)
  const inputMessage = useSelector ((state) => state.inputMessageValue)
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect( () => {
    inputRef.current.focus();
  }, []);
  
  const handleSubmit = (event) => {
    event.preventDefault();   

    // verification that the string doesn't contain any spaces
    if (inputMessage.trim() !== '') {
    dispatch({type: 'ADD_MESSAGE'});
    }
  };
  

    return (
      <form 
        className="message-form"
        onSubmit= {handleSubmit}
        >
        <input 
          className="message-input"
          ref= {inputRef}
          required
          disabled= {!isLogged}
          type='text'
          value={inputMessage}
          placeholder= 'Write your message...'
          onChange={(event) => 
            dispatch(changeInputMessage(event.target.value))
            }
        />
        <button 
        type='submit'
        className="message-button"
        disabled= {!isLogged}
         > 
        <Send 
          size= {25}
        />
        </button>
     </form>
    );
}   

export default Form ;