import { GET_CURRENT_PAGE } from "./actions";



const initialState = {
    page: 1,
    per_page: 3,
}

export const paginationReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_CURRENT_PAGE:
            return {
                ...state,
                page: payload,
            };
        default:
            return state;
    }
}