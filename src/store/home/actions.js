import { fetchUrl } from "../../utils/fetchUrl";

export const GET_DATA_REQUEST = "HOME::GET_REQUEST";
export const GET_DATA_SUCCESS = "HOME::GET_SUCCESS";
export const GET_DATA_FAILURE = "HOME::GET_DATA_FAILURE";


export const getDataRequest = () => ({
    type: GET_DATA_REQUEST
});

export const getDataSuccess = (data) => ({
    type: GET_DATA_SUCCESS,
    payload: data
});

export const getDataFailure = (error) => ({
    type: GET_DATA_FAILURE,
    payload: error
});



export const getData = ({ currentPage, currentSortField, currentSortDirection }) => async (dispatch) => {
    dispatch(getDataRequest());
    try {
        const response = await fetch(fetchUrl('') + `&page=${currentPage}&sort_field=${currentSortField}&sort_direction=${currentSortDirection}`);
        console.log(response);
        if (!response.ok) {
            throw new Error(response.status);
        }
        const result = await response.json();
        dispatch(getDataSuccess(result));
    } catch (err) {
        dispatch(getDataFailure(err));
        console.warn(err);
    }
};

