/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { initialState } from "../reducer/initialState";
import { useReducer } from "react";
import { taskReducer } from "../reducer/taskReducer";

export const TaskContext = createContext(initialState);
export const TaskContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const values = {
    dispatch,
    tasks: state.tasks,
    showModal: state.showModal,
    taskToUpdate: state.taskToUpdate,
  };
  return <TaskContext.Provider value={values}>{children}</TaskContext.Provider>;
};

export const useTasks = () => useContext(TaskContext);
