import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from 'react';

import {changeInputMessage} from 'src/store/actions';
import './form.scss';


import {Send} from 'react-feather';

function Form () {
  const inputMessage = useSelector ((state) => state.inputMessageValue)
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect( () => {
    inputRef.current.focus();
  }, []);
  
  const handleSubmit = (event) => {
    event.preventDefault();  

    // on vérifie que la string n'est pas consituée d'espaces vides
    if (inputMessage.trim() !== '') {
    dispatch({type: 'ADD_MESSAGE'});
    }
  };
  

    return (
      <form 
        onSubmit= {handleSubmit}
        >
        <input 
          ref= {inputRef}
          required
          type='text'
          value={inputMessage}
          placeholder= 'Saisissez votre message...'
          onChange={(event) => 
            dispatch(changeInputMessage(event.target.value))
            }
        />
        <button type='submit' > 
        <Send 
          size= {25}
        />
        </button>
     </form>
    );
}   

export default Form ;