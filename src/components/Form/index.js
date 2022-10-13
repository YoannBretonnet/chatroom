import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeInputMessage } from 'src/store/actions';
import { addMessage } from 'src/store/actions';

function Form() {

    const dispatch = useDispatch();
    const value = useSelector((state) => state.inputMessageValue);

    const handleChange = (event) => {
        event.preventDefault();
        dispatch(changeInputMessage(event.target.value));
      };
      
      const handleSubmit = (event) =>  {
          event.preventDefault();
          dispatch(addMessage());
      }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={value}
            onChange= {handleChange}
            />
            <button type="submit">
                {'>'}
            </button>
            
        </form>
    );
}

export default Form;