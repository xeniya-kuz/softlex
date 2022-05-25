import { GET_CURRENT_SORT_FIELD, GET_CURRENT_SORT_DIRECTION } from "./action";



const initialState = {
    sort_field: '',
    sort_direction: ''
}

export const sortReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_CURRENT_SORT_FIELD:
            return {
                ...state,
                sort_field: payload,
            };
        case GET_CURRENT_SORT_DIRECTION:
            return {
                ...state,
                sort_direction: payload,
            };
        default:
            return state;
    }
}