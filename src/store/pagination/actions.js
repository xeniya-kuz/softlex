export const GET_CURRENT_PAGE = "PAGINATION::GET_CURRENT_PAGE";

export const getCurrentPage = (page) => ({
    type: GET_CURRENT_PAGE,
    payload: page
});