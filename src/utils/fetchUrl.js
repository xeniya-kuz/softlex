import { DEVELOPER_NAME } from "./constants";


export const fetchUrl = (action) => {
    return `https://uxcandy.com/~shapoval/test-task-backend/v2/${action}?developer=${DEVELOPER_NAME}`;
}