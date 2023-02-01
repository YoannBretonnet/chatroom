import { useDispatch, useSelector } from "react-redux";

import {changeInputMessage} from 'src/store/actions';
import './form.scss';


import {Send} from 'react-feather';

function Form () {
  const inputMessage = useSelector ((state) => state.inputMessageValue)
  const dispatch = useDispatch();
  
  const handleSubmit = (event) => {
    event.preventDefault();  
    dispatch({type: 'ADD_MESSAGE'});
  };
  

    return (
      <form 
        onSubmit= {handleSubmit}
        >
        <input 
          type='text'
          value={inputMessage}
          placeholder= 'Saisissez votre message...'
          onChange={(event) => 
            dispatch(changeInputMessage(event.target.value))
            }
        />
        <button type='submit' disabled={!inputMessage}> 
        <Send 
          size= {25}
        />
        </button>
     </form>
    );
}   

export default Form ;