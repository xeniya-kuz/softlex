import { FETCH_STATUSES } from "../../utils/constants";
import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actions";



const initialState = {
    tasks: [],
    total: null,
    error: null,
    status: FETCH_STATUSES.IDLE,
}

export const homeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_DATA_REQUEST:
            return {
                ...state,
                error: null,
                status: FETCH_STATUSES.REQUEST,
            };
        case GET_DATA_SUCCESS:
            let tasks = [];
            let total = null;
            let error = null;
            let status = null;
            if (payload.status === 'ok') {
                // tasks = payload.message.tasks;
                // total = payload.message.total_task_count;
                ({ tasks, total_task_count: total } = payload.message);
                status = FETCH_STATUSES.SUCCESS;
            } else {
                error = payload.message;
                status = FETCH_STATUSES.FAILURE;
            }
            return {
                ...state,
                tasks: tasks,
                total: total,
                error: error,
                status: status,
            };
        case GET_DATA_FAILURE:
            return {
                ...state,
                status: FETCH_STATUSES.FAILURE,
                error: payload,
            };
        default:
            return state;
    }
}