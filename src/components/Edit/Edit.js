import 'jquery'
import $ from 'jquery'
import './Edit.css'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useParams } from "react-router-dom"
import { getEditData } from '../../store/edit/actions'
import { selectEditStatus } from '../../store/edit/selectors'
import { selectToken } from "../../store/login/selectors"
import { Button } from "../Button/Button"
import { Modal } from '../Modal/Modal'
import { edit } from '../../utils/constants'
import { fetchUrl } from '../../utils/fetchUrl'

export const Edit = () => {

    const dispatch = useDispatch();

    const { taskId } = useParams();

    const [modalActive, setModalActive] = useState(true);

    const token = useSelector(selectToken);
    const editStatus = useSelector(selectEditStatus);

    const sendToken = () => {
        $(document).ready(function () {
            var form = new FormData();
            form.append("token", token);

            $.ajax({
                url: fetchUrl(edit + `${taskId}`),
                crossDomain: true,
                method: 'POST',
                mimeType: "multipart/form-data",
                contentType: false,
                processData: false,
                data: form,
                dataType: "json",
                success: function (data) {
                    console.log(data);
                    dispatch(getEditData(data));
                }
            });
        });
    }

    useEffect(() => {
        sendToken();
        // eslint-disable-next-line 
    }, [taskId])



    return (
        <>
            {editStatus === 'error' &&
                <Modal active={modalActive} setActive={setModalActive}>
                    <>
                        <h3>{editStatus}</h3>
                        <p>Вы не авторизованы, либо истёк срок действия токена.</p>
                        <Button type='button' ><NavLink to="/login">Войти</NavLink></Button>
                    </>
                </Modal>
            }
        </>
    )
}