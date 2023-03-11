import OpenButton from "./OpenButton";
import { useSelector, useDispatch } from "react-redux";
import { changeSettingsFields, submitDeconnexion } from 'src/store/actions';
import './settings.scss'

function Settings() {
    const {areOpen, emailValue, passwordValue, isLoading, isLogged, hasFailed} = useSelector ((state) => state.settings);
    const nickname = useSelector ((state) => state.nickname);
    const dispatch = useDispatch();
    const handleOnClick = () => {
        dispatch(submitDeconnexion());
        }

    return (
            <div className="settings">
            {isLogged?
                <div >  
                <p className='connexionParagraph'>Welcome {nickname} !</p>
                <button
                className='connexionButton'
                onClick={handleOnClick}
                >
                Deconnexion
                </button>
                </div>
                :
                <>
                <OpenButton />
                <div className='settings__container'>
                    <form
                    className= {!areOpen? 'settings__form settings__form--open' : 'settings__form ' }
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
                    placeholder="Password"
                    type='password'
                    value={passwordValue}
                    onChange= {(event) => {
                        dispatch (changeSettingsFields(event.target.value, 'passwordValue'))
                    }}
                    />
                    <button
                    className='settings__button'
                    type='submit'>
                    Connexion
                    </button>
                    {hasFailed&& 
                    <p className='failed-message'>
                       wrong email or password, <br/>try again 
                    </p>}
                    </form>
                 </div>
                 {isLoading&& <p>chargement en cours</p>}
                 </>
                }
            </div>
    );
}

export default Settings;