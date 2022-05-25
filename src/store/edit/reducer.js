import { GET_EDIT_DATA, GET_MSG_TXT, GET_CHECKBOX, GET_INITIAL_TEXT, GET_MSG_STATUS } from "./actions";


const initialState = {
    status: '',
    message: '',
    text: '',
    id: null,
    checkbox: '',
    msgStatus: '',
    initialText: '',
}

export const editReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_EDIT_DATA:
            return {
                ...state,
                status: payload.status,
                message: payload.message,
            };
        case GET_MSG_TXT:
            return {
                ...state,
                text: payload.text,
                id: payload.id,
            };
        case GET_CHECKBOX:
            return {
                ...state,
                checkbox: payload,
            };
        case GET_INITIAL_TEXT:
            return {
                ...state,
                initialText: payload,
            };
        case GET_MSG_STATUS:
            let isTextChanged = '';
            let msgStatus = ''
            if (state.initialText === state.text) {
                isTextChanged = false
            }
            else {
                isTextChanged = true
            }

            if (state.checkbox === true && isTextChanged === true) {
                msgStatus = 11;
            }
            if (state.checkbox === true && isTextChanged === false) {
                msgStatus = 10;
            }
            if (state.checkbox === false && isTextChanged === true) {
                msgStatus = 1;
            }
            if (state.checkbox === false && isTextChanged === false) {
                msgStatus = 0;
            }
            return {
                ...state,
                msgStatus: msgStatus,
                isTextChanged: isTextChanged
            };
        default:
            return state;
    }
}