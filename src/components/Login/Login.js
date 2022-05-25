import { useState } from "react";
import { Button } from "../Button/Button"
import { Input } from "../Input/Input"
import 'jquery'
import $ from 'jquery'
import { useDispatch, useSelector } from "react-redux";
import { getLoginData, getToken } from "../../store/login/actions";
import { selectLoginMessage, selectLoginStatus } from "../../store/login/selectors";
import { Modal } from "../Modal/Modal";
import './Login.css'
import { fetchUrl } from "../../utils/fetchUrl";
import { login } from "../../utils/constants";


export const Login = () => {
    const dispatch = useDispatch();

    const [user, setUser] = useState('admin');
    const [password, setPassword] = useState('123');
    const [modalActive, setModalActive] = useState(true);

    const loginStatus = useSelector(selectLoginStatus);
    const loginMessage = useSelector(selectLoginMessage);


    const handleChangeUser = (e) => {
        setUser(e.target.value);
    }


    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setModalActive(false);

        $(document).ready(function () {
            var form = new FormData();
            form.append("password", password);
            form.append("username", user);

            $.ajax({
                url: fetchUrl(login),
                crossDomain: true,
                method: 'POST',
                mimeType: "multipart/form-data",
                contentType: false,
                processData: false,
                data: form,
                dataType: "json",
                success: function (data) {
                    console.log(data);
                    dispatch(getToken(data.message.token));
                    dispatch(getLoginData(data));
                }
            });
        });


    }

    return (
        <Modal active={modalActive} setActive={setModalActive}>
            <div className="login">
                <h2> Авторизация</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" >USERNAME </label>
                        <Input type="text" value={user} autoComplete={user} required onChange={handleChangeUser} />
                    </div>

                    <div>
                        <label htmlFor="name" >PASSWORD </label>
                        <Input type="password" value={password} autoComplete={password} required onChange={handleChangePassword} />
                    </div>
                    <div>
                        <Button type="submit" className="button_mt">Авторизоваться</Button>
                    </div>
                    {loginStatus === 'error' &&
                        <>
                            <p>{loginStatus}</p>
                            <p>{loginMessage.password}</p>
                        </>}
                </form>
            </div>
        </Modal>
    )
}