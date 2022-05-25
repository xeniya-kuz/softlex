import { GET_FORM_DATA } from "./actions";




const initialState = {
    status: ''
}

export const formReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_FORM_DATA:
            return {
                ...state,
                status: payload.status,
            };
        default:
            return state;
    }
}