import { FETCH_STATUSES } from "../../utils/constants";

export const selectTasks = (state) => state.home.tasks;
export const selectTotal = (state) => state.home.total;
export const selectLoading = (state) =>
    state.home.status === FETCH_STATUSES.REQUEST;
export const selectError = (state) => state.home.error;