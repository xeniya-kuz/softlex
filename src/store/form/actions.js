export const GET_FORM_DATA = "FORM::DATA";

export const getFormData = (data) => ({
    type: GET_FORM_DATA,
    payload: data
});