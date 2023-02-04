import './openbutton.scss'
import { toggleSettings } from 'src/store/actions';
import { useDispatch, useSelector } from "react-redux";

function OpenButton() {
    const {areOpen} = useSelector ((state) => state.settings);
    const dispatch = useDispatch();
    const handleOnClick = () => {
        dispatch(toggleSettings());
        }

    return (
        <button
        className={!areOpen? 'openbutton openbutton--open' : 'openbutton'}
        onClick={(handleOnClick)}
        >
            X
        </button>
    );
}

export default OpenButton;