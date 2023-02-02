import OpenButton from "./OpenButton";
import { useSelector } from "react-redux";

import './settings.scss'

function Settings() {
    const isOpen = useSelector ((state) => state.settingsAreOpen)
    return (
        isOpen?
        <div className="settings">
            <OpenButton />
            <form
            className='settings-form'>
            <input
            placeholder="Email"
            type='text'
            />
            <input
            placeholder="Mot de passe"
            type='text'
            />
            <button
            className='settings-form__button'
            type='submit'>
            Envoyer
            </button>
        </form>
        </div>
        :
        <div className="settings__close">
        <OpenButton />
         </div>

    );
}

export default Settings;