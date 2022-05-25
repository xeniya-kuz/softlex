
export const GET_EDIT_DATA = "EDIT::DATA";
export const GET_MSG_TXT = "EDIT::GET_MSG_TXT";
export const GET_CHECKBOX = "EDIT::GET_CHECKBOX";
export const GET_INITIAL_TEXT = "EDIT::GET_INITIAL_TEXT";
export const GET_MSG_STATUS = "EDIT::GET_MSG_STATUS";


export const getEditData = (data) => ({
    type: GET_EDIT_DATA,
    payload: data
});

export const getChangingMsgTxt = (id, txt) => ({
    type: GET_MSG_TXT,
    payload: {
        id: id,
        text: txt
    }
});

export const getCheckbox = (checkbox) => ({
    type: GET_CHECKBOX,
    payload: checkbox
});

export const getMsgStatus = {
    type: GET_MSG_STATUS
};

export const getInitialText = (txt) => ({
    type: GET_INITIAL_TEXT,
    payload: txt
});