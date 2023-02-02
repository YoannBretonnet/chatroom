import OpenButton from "./OpenButton";
import { useSelector, useDispatch } from "react-redux";
import { changeSettingsFields } from 'src/store/actions';
import './settings.scss'

function Settings() {
    const {areOpen, emailValue, passwordValue} = useSelector ((state) => state.settings);
      
    const dispatch = useDispatch();

    return (
        // affichage conditionnel si l'état du state settingsAreOpen est true
        areOpen?
        <div className="settings">
            <OpenButton />
            <form
            className='settings-form'
            onSubmit={(event) => {
                event.preventDefault();
                // on lance ici notre connexion à l'API
                dispatch({type: 'SUBMIT_LOGIN'});
            }}>
            <input
            placeholder="Email" 
            type='text'
            value={emailValue}
            onChange= {(event) => {
                dispatch (changeSettingsFields(event.target.value, 'emailValue'))
            }}
            />
            <input
            placeholder="Mot de passe"
            type='password'
            value={passwordValue}
            onChange= {(event) => {
                dispatch (changeSettingsFields(event.target.value, 'passwordValue'))
            }}
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