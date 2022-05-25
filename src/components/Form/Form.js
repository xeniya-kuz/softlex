import './Form.css'
import 'jquery'
import $ from 'jquery'
import { useState } from 'react'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { Modal } from '../../Modal/Modal'
import { useDispatch } from 'react-redux'
import { getFormData } from '../../store/form/actions'
import { fetchUrl } from "../../utils/fetchUrl";
import { create } from "../../utils/constants";


export const Form = () => {

    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [modalActive, setModalActive] = useState(true);



    var emailPattern = new RegExp(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangeText = (e) => {
        setText(e.target.value)
    }

    const send = () => {
        $(document).ready(function () {
            var form = new FormData();
            form.append("username", username);
            form.append("email", email);
            form.append("text", text);

            $.ajax({
                url: fetchUrl(create),
                crossDomain: true,
                method: 'POST',
                mimeType: "multipart/form-data",
                contentType: false,
                processData: false,
                data: form,
                dataType: "json",
                success: function (data) {
                    console.log(data);
                    dispatch(getFormData(data));
                }
            });
        });
        setModalActive(false);
    }


    return (
        <>
            <Modal active={modalActive} setActive={setModalActive}>
                <form className='form' onSubmit={send}>
                    <div>
                        <label htmlFor="name" >NAME <span className="red">*</span></label>
                        <label> <Input id="name" type="text" value={username} required onChange={handleChangeUsername} /></label>
                    </div>
                    <div>
                        <label htmlFor="email">EMAIL  <span className="red">*</span></label>
                        <label htmlFor="email" className='block'>(username@hostname.ru/com)</label>
                        <Input id="email" type="email" value={email} required onChange={handleChangeEmail} />
                    </div>
                    <div>
                        <label htmlFor="text" >TEXT <span className="red">*</span></label>
                        <textarea id="text" className='input form__textarea' type="text" value={text} required onChange={handleChangeText} />
                    </div>
                    <div>
                        {emailPattern.test(email) ? <Button type='submit' className="button_mt">Добавить задачу</Button> : <Button type='submit' className="button_mt" disabled>Добавить задачу</Button>}
                    </div>
                </form>
            </Modal>
        </>
    )
}