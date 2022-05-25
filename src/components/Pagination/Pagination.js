
import { useDispatch, useSelector } from "react-redux";
import { selectTotal } from "../../store/home/selectors";
import { getCurrentPage } from "../../store/pagination/actions";
import { selectCurrentPage, selectPerPage } from "../../store/pagination/selectors";
import { createPages } from "../../utils/pagesCreator";
import { Button } from "../Button/Button";
import './Pagination.css'


export const Pagination = () => {

    const dispatch = useDispatch();

    const total = useSelector(selectTotal);
    const per_page = useSelector(selectPerPage);
    const current_page = useSelector(selectCurrentPage);

    const pagesCount = Math.ceil(total / per_page);
    const pages = [];
    //кол-во кнопок в пагинации, не считая 1й и равной pagesCount
    const wideNumber = 8;

    createPages(pages, pagesCount, current_page, wideNumber);


    return (
        <div className="pagination">
            {current_page > (wideNumber / 2 + 1) &&
                <>
                    <Button onClick={() => dispatch(getCurrentPage(1))}>1</Button>
                </>}
            {pages.map((page) => {
                return (
                    <Button key={page} className={current_page === page ? "current-page" : "page"} onClick={() => dispatch(getCurrentPage(page))}>{page}</Button>
                )

            })}
            {current_page <= (pagesCount - wideNumber / 2) &&
                <>
                    <Button onClick={() => dispatch(getCurrentPage(pagesCount))}>{pagesCount}</Button>
                </>}
        </div>
    )
}