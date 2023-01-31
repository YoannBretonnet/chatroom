import { useDispatch, useSelector } from "react-redux";

import {changeInputMessage} from 'src/store/actions';

function Form () {
  const inputMessage = useSelector ((state) => state.inputMessageValue)
  const dispatch = useDispatch();

    return (
      <form>
        <input 
          type='text'
          value={inputMessage}
          onChange={(event) => 
            dispatch(changeInputMessage(event.target.value))
            }
        />
        <button type='submit'> {">"} </button>
     </form>
    );
}   

export default Form ;