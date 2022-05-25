import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navigate } from 'react-router-dom';
import './Modal.css'

export const Modal = ({ active, setActive, children }) => {

    return (
        <div className={`modal ${active ? 'active' : ''}`} >
            <div className={`modal__content ${active ? 'active' : ''}`} >
                <div className='cross' onClick={() => setActive(false)}><FontAwesomeIcon icon="fa-solid fa-xmark" /></div>
                {active ? children : <Navigate replace to="/" />}
            </div>
        </div>
    )
}