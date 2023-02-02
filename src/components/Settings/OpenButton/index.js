import './openbutton.scss'
import { switchSettings } from 'src/store/actions';
import { useDispatch } from "react-redux";

function OpenButton() {
    const dispatch = useDispatch();
    const handleOnClick = () => {
        dispatch(switchSettings());
        }

    return (
        <button
        className="openbutton"
        onClick={(handleOnClick)}
        >
            X
        </button>
    );
}

export default OpenButton;