import { ADD__TASK, DELETE__ALL__TASK, DELETE__TASK } from "./actionsTypes";

export const addTask = (task, dispatch) => {
  dispatch({
    type: ADD__TASK,
    payload: task,
  });
};

export const deleteTask = (id, dispatch) => {
  dispatch({
    type: DELETE__TASK,
    payload: id,
  });
};

export const deleteAllTask = (dispatch) => {
  dispatch({
    type: DELETE__ALL__TASK,
  });
};
