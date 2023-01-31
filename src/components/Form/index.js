import { useSelector } from "react-redux";

function Form () {
  const inputMessage = useSelector ((state) => state.inputMessageValue)

    return (
      <form>
        <input 
          type='text'
          value={inputMessage}
        />
        <button type='submit'> {">"} </button>
     </form>
    );
}   

export default Form ;