/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
import {
  ADD__TASK,
  DELETE__ALL__TASK,
  DELETE__TASK,
  FAVOURITE__TASK,
} from "./actionsTypes";

export const taskReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD__TASK:
      return {
        ...state,
        tasks: [...state.tasks, payload],
      };
    case DELETE__TASK:
      const filteredTasks = state.tasks.filter((task) => task.id !== payload);
      return {
        ...state,
        tasks: [...filteredTasks],
      };
    case DELETE__ALL__TASK:
      return {
        ...state,
        tasks: [],
      };
    case FAVOURITE__TASK:
      const findTaskIndex = state.tasks.findIndex(
        (task) => task.id === payload
      );
      const newTasks = [...state.tasks];

      newTasks[findTaskIndex].isFavourite =
        !newTasks[findTaskIndex].isFavourite;
     console.log(state.tasks);
      return {
        ...state,
        tasks: [...newTasks],
      };
  }
};
