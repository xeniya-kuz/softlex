import { useEffect } from "react"
import { BallTriangle } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading, selectTotal } from "../../store/home/selectors";
import { selectCurrentPage } from "../../store/pagination/selectors";
import { DEVELOPER_NAME } from "../../utils/constants";
import { Pagination } from "../Pagination/Pagination";
import './Home.css'
import { selectCurrentSortDirection, selectCurrentSortField } from "../../store/sort/selectors";
import { Link, Outlet } from "react-router-dom";
import { Button } from "../Button/Button";
import { getData } from "../../store/home/actions";
import { selectToken } from "../../store/login/selectors";
import { Table } from "./Table/Table";
import { getToken } from "../../store/login/actions";
import { selectFormStatus } from "../../store/form/selectors";
import { getFormData } from "../../store/form/actions";
import { getEditData } from "../../store/edit/actions";


export const Home = () => {

    const dispatch = useDispatch();

    const error = useSelector(selectError);
    const isLoading = useSelector(selectLoading);
    const currentPage = useSelector(selectCurrentPage);
    const currentSortField = useSelector(selectCurrentSortField);
    const currentSortDirection = useSelector(selectCurrentSortDirection);
    const totalTasks = useSelector(selectTotal);
    const token = useSelector(selectToken);

    const getInfo = async () => {
        dispatch(getData({ DEVELOPER_NAME, currentPage, currentSortField, currentSortDirection }));
    }


    const newMsgStatus = useSelector(selectFormStatus);

    useEffect(() => {
        getInfo();

        // обновление компонента при добавлении новой записи
        if (newMsgStatus === 'ok') {
            dispatch(getFormData(''));
        }

        // eslint-disable-next-line
    }, [currentPage, currentSortField, currentSortDirection, totalTasks, newMsgStatus])

    const logout = () => {
        dispatch(getToken(''));
        //для смены импута на див после выхода
        dispatch(getEditData(''));
    }


    return (
        <div className="container">
            {isLoading ? <div ><BallTriangle /></div> :
                error ? <div>Error: {error}</div> :
                    <>
                        <div className="button-wrap">
                            <Button type='button' ><Link to="/create">Создать задачу</Link></Button>
                            {token === '' ? <Button type='button'><Link to="/login">Войти</Link></Button> : <Button type='button' onClick={logout}><Link to="/">Выйти</Link></Button>}
                        </div>
                        <Outlet />
                        <Table />
                        <Pagination />

                    </>
            }
        </div>
    )

}