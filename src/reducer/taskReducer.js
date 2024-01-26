/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
import {
  ADD__TASK,
  DELETE__ALL__TASK,
  DELETE__TASK,
  FAVOURITE__TASK,
  SEARCH__TASK,
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
      const filteredDeleteTasks = state.tasks.filter(
        (task) => task.id !== payload
      );
      return {
        ...state,
        tasks: [...filteredDeleteTasks],
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
      if (findTaskIndex !== -1) {
        const newTasks = [...state.tasks];
        newTasks[findTaskIndex] = {
          ...newTasks[findTaskIndex],
          isFavourite: !newTasks[findTaskIndex].isFavourite,
        };
        return {
          ...state,
          tasks: newTasks,
        };
      }
      return;
    case SEARCH__TASK:
      const filteredSearchTasks = state.tasks.filter((task) =>
        task.title.toLowerCase().includes(payload.toLowerCase())
      );
      return {
        ...state,
        tasks: [...filteredSearchTasks],
      };
  }
};
