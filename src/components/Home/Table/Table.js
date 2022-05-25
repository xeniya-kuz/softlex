import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getChangingMsgTxt, getCheckbox, getEditData, getInitialText, getMsgStatus } from '../../../store/edit/actions';
import { selectCheckbox, selectEditStatus, selectMsgId, selectMsgTxt } from '../../../store/edit/selectors';
import { selectTasks } from '../../../store/home/selectors';
import { getCurrentPage } from '../../../store/pagination/actions';
import { getCurrentSortDirection, getCurrentSortField } from '../../../store/sort/action';
import { selectCurrentSortDirection, selectCurrentSortField } from '../../../store/sort/selectors';
import { SORT } from '../../../utils/constants';
import { Button } from '../../Button/Button';
import { Input } from '../../Input/Input';
import './Table.css'

export const Table = () => {

    const dispatch = useDispatch();

    const tasks = useSelector(selectTasks);
    const currentSortField = useSelector(selectCurrentSortField);
    const currentSortDirection = useSelector(selectCurrentSortDirection);
    const msgText = useSelector(selectMsgTxt);
    const msgId = useSelector(selectMsgId);


    const getSorted = ((sortField) => {
        dispatch(getCurrentPage(1));
        dispatch(getCurrentSortField(sortField));

        if (currentSortDirection === SORT.up) {
            dispatch(getCurrentSortDirection(SORT.down));

        } else {
            dispatch(getCurrentSortDirection(SORT.up));
        }
    })

    const [text, setText] = useState(msgText);
    const editStatus = useSelector(selectEditStatus);
    const [id, setId] = useState('');
    const checkbox = useSelector(selectCheckbox);
    const [taskStatus, setTaskStatus] = useState('');


    const handleChangeText = (e) => {
        setText(e.target.value)
    }

    const changeMsg = (taskId, taskText, status) => {
        setId(taskId);
        setText(taskText);
        setTaskStatus(status);
    }
    //выставляет изначальное состояние чекбокса в соответствии со статусом задачи 
    useEffect(() => {
        if (editStatus === 'ok') {
            if (checkbox === '') {
                if (taskStatus === 0 || taskStatus === 1) {
                    dispatch(getCheckbox(false));
                }
                if (taskStatus === 10 || taskStatus === 11) {
                    dispatch(getCheckbox(true));
                }
            }
            //передаем в стор исходный текст для последующего его отображения в инпуте, именно этот text и будет меняться
            dispatch(getChangingMsgTxt(id, text));
            //этот текст будет образцом для сравнения, чтобы проверить изменения
            dispatch(getInitialText(text));
        }
        // eslint-disable-next-line
    }, [editStatus])


    const handleChangeCheckbox = () => {
        dispatch(getCheckbox(!checkbox));
    }


    //как отправлять измененные данные?
    const handleSave = () => {
        dispatch(getChangingMsgTxt(id, text));
        dispatch(getMsgStatus);
        //для смены импута на див после "сохранения"
        dispatch(getEditData(''));
        console.log('handleSave');
        //после отправки я бы подчистила данные в сторе, чтобы, например, checked всегда работал корректно, но пока не стала для сохранения данных для отправки
    }


    return (
        <div className="table">
            <div className="row heading">
                <div className="column sort" onClick={(() => getSorted('id'))}>
                    <span>Id</span>
                    {/* Некоторая путаница с названием стрелок и свойствами SORT: сортировка asc идет как бы сверху вниз (от 1го эл-та к последнему), а стрелка "сверху вниз" называется down */}
                    {currentSortField === 'id' && <FontAwesomeIcon icon={`${`fa-solid fa-arrow-${currentSortDirection === SORT.up ? 'down' : 'up'}-long`}`} />}
                </div>
                <div className="column sort" onClick={(() => getSorted('username'))} >Username
                    {currentSortField === 'username' && <FontAwesomeIcon icon={`${`fa-solid fa-arrow-${currentSortDirection === SORT.up ? 'down' : 'up'}-long`}`} />}
                </div>
                <div className="column sort" onClick={(() => getSorted('email'))}>Email
                    {currentSortField === 'email' && <FontAwesomeIcon icon={`${`fa-solid fa-arrow-${currentSortDirection === SORT.up ? 'down' : 'up'}-long`}`} />}
                </div>
                <div className="column">Image</div>
                <div className="column">Text</div>
                <div className="column sort" onClick={(() => getSorted('status'))}>Status
                    {currentSortField === 'status' && <FontAwesomeIcon icon={`${`fa-solid fa-arrow-${currentSortDirection === SORT.up ? 'down' : 'up'}-long`}`} />}
                </div>
            </div>
            {tasks.map((task) => {
                return (
                    <div key={task.id} className="row">
                        <div className="column">{task.id}</div>
                        <div className="column">{task.username}</div>
                        <div className="column">{task.email}</div>
                        <img className="column img" src={task.image_path} alt="no img path" />
                        {editStatus === 'ok' && msgId === task.id ? <Input className="column" value={text} required onChange={handleChangeText} /> : <div className="column" >{task.text}</div>}

                        {editStatus === 'ok' && msgId === task.id ? <Input className="column" value={text} type='checkbox' checked={checkbox} onChange={handleChangeCheckbox} /> : <div className="column">{task.status}</div>}
                        <div className="column">
                            {editStatus === 'ok' && msgId === task.id ? <Button type='button' onClick={handleSave} >Сохранить</Button> : <Button type='button' onClick={() => changeMsg(task.id, task.text, task.status)} ><Link to={`/edit/${task.id}`}>Редактировать</Link>
                            </Button>}</div>
                    </div>
                )
            }
            )}
        </div>
    )
}