import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeInputMessage } from 'src/store/actions';
import { changeInputMessage } from 'src/store/actions';

const dispatch = useDispatch();

const value = useSelector((state) => state[inputName]);

const handleChange = (event) => {
  dispatch(changeInputMessage);
};

const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addMessage);
}

function Form() {
    return (
        <form onSubmit={handleSubmit}>
            <input>
            type="text"
            value={value}
            onChange= {handleChange}
            </input>
            <button type="submit">
                {'>'}
            </button>
            
        </form>
    );
}

export default Form;