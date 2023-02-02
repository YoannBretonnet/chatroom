import OpenButton from "./OpenButton";
import { useSelector, useDispatch } from "react-redux";
import { changeEmailValue } from 'src/store/actions';
import './settings.scss'

function Settings() {
    const isOpen = useSelector ((state) => state.settings.areOpen);
    const emailValue = useSelector ((state) => state.settings.emailValue);
    const passwordValue = useSelector ((state) => state.settings.passwordValue)
    const dispatch = useDispatch();

    return (
        // affichage conditionnel si l'état du state settingsAreOpen est true
        isOpen?
        <div className="settings">
            <OpenButton />
            <form
            className='settings-form'>
            <input
            placeholder="Email"
            type='text'
            value={emailValue}
            onChange= {(event) => {
                dispatch (changeEmailValue(event.target.value))
            }}
            />
            <input
            placeholder="Mot de passe"
            type='password'
            value={passwordValue}
            />
            <button
            className='settings-form__button'
            type='submit'>
            Envoyer
            </button>
        </form>
        </div>
        // 
        // affichage conditionnel si l'état du state settingsAreOpen est false
        :
        <div className="settings__close">
        <OpenButton />
         </div>

    );
}

export default Settings;