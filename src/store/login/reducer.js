import { GET_TOKEN, GET_LOGIN_DATA } from "./actions";


const initialState = {
    token: '',
    status: '',
    message: ''
}

export const loginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_TOKEN:
            return {
                ...state,
                token: payload,
            };
        case GET_LOGIN_DATA:
            return {
                ...state,
                status: payload.status,
                message: payload.message,
            };
        default:
            return state;
    }
}