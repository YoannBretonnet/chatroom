import { useDispatch, useSelector } from "react-redux";

function Form () {
  const inputMessage = useSelector ((state) => state.inputMessageValue)
  const dispatch = useDispatch();

    return (
      <form>
        <input 
          type='text'
          value={inputMessage}
          onChange={(event) => 
          dispatch({
            type: 'CHANGE_INPUT_MESSAGE',
            newValue: event.target.value
          })}
        />
        <button type='submit'> {">"} </button>
     </form>
    );
}   

export default Form ;