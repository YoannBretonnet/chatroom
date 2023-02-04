import OpenButton from "./OpenButton";
import { useSelector, useDispatch } from "react-redux";
import { changeSettingsFields } from 'src/store/actions';
import './settings.scss'

function Settings() {
    const {areOpen, emailValue, passwordValue, isLoading} = useSelector ((state) => state.settings);
      
    const dispatch = useDispatch();

    return (
        // affichage conditionnel si l'état du state settingsAreOpen est true
            <div className="settings">
                <OpenButton />
                {isLoading&& <p>chargement en cours</p>}
                <div className='settings__container'>
                    <form
                    className= {areOpen? 'settings__form settings__form--open' : 'settings__form ' }
                    onSubmit={(event) => {
                        event.preventDefault();
                        // on lance ici notre connexion à l'API
                        dispatch({type: 'SUBMIT_LOGIN'});
                    }}>
                    <input
                    className='settings__input'
                    placeholder="Email" 
                    type='text'
                    value={emailValue}
                    onChange= {(event) => {
                        dispatch (changeSettingsFields(event.target.value, 'emailValue'))
                    }}
                    />
                    <input
                    className='settings__input'
                    placeholder="Mot de passe"
                    type='password'
                    value={passwordValue}
                    onChange= {(event) => {
                        dispatch (changeSettingsFields(event.target.value, 'passwordValue'))
                    }}
                    />
                    <button
                    className='settings__button'
                    type='submit'>
                    Envoyer
                    </button>
                    </form>
                    {/* <div className= {areOpen?'transitionElement transitionElement--open': 'transitionElement'} /> */}
                </div>
            </div>
    );
}

export default Settings;