export const GET_CURRENT_SORT_FIELD = "SORT::GET_CURRENT_SORT_FIELD";
export const GET_CURRENT_SORT_DIRECTION = "SORT::GET_CURRENT_SORT_DIRECTION";

export const getCurrentSortField = (sort_field) => ({
    type: GET_CURRENT_SORT_FIELD,
    payload: sort_field
});

export const getCurrentSortDirection = (sort_direction) => ({
    type: GET_CURRENT_SORT_DIRECTION,
    payload: sort_direction
});