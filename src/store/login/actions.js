
export const GET_TOKEN = "LOGIN::GET_TOKEN";
export const GET_LOGIN_DATA = "LOGIN::DATA";

export const getToken = (token) => ({
    type: GET_TOKEN,
    payload: token
});

export const getLoginData = (data) => ({
    type: GET_LOGIN_DATA,
    payload: data
});