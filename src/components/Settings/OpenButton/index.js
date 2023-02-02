import './openbutton.scss'
import { toggleSettings } from 'src/store/actions';
import { useDispatch } from "react-redux";

function OpenButton() {
    const dispatch = useDispatch();
    const handleOnClick = () => {
        dispatch(toggleSettings());
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