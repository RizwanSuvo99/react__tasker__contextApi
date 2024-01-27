import { useState } from "react";
import { addTask, setShowModal, updateTask } from "../../../reducer/actions";
import { useTasks } from "../../../context/TaskContext";
import { toast } from "react-toastify";

const AddTaskModal = () => {
  const { dispatch, taskToUpdate } = useTasks();
  const [task, setTask] = useState(
    taskToUpdate || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tags: "",
      priority: "",
      isFavourite: false,
    }
  );

  // State to store error messages
  const [errorMessages, setErrorMessages] = useState({
    title: "",
    description: "",
    tags: "",
    priority: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "tags") {
      value = value.split(",");
    }
    setTask({
      ...task,
      [name]: value,
    });

    setErrorMessages({
      ...errorMessages,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrorMessages = {};
    if (!task.title.trim()) {
      newErrorMessages.title = "Please enter a title";
    }
    if (!task.description.trim()) {
      newErrorMessages.description = "Please enter a description";
    }
    if (Array.isArray(task.tags) ? task.tags[0] === "" : !task.tags.trim()) {
      newErrorMessages.tags = "Please enter tags";
    }
    if (!task.priority) {
      newErrorMessages.priority = "Please select a priority";
    }

    if (Object.values(newErrorMessages).some((msg) => msg !== "")) {
      setErrorMessages(newErrorMessages);
      Object.entries(newErrorMessages).forEach(([fieldName, errorMsg]) => {
        if (errorMsg !== "") {
          toast.error(errorMsg, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      });
      return;
    }
    if (taskToUpdate) {
      updateTask(task, dispatch);
      toast.success("Task Updated successfully", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }
    addTask(task, dispatch);
    toast.success("Task added successfully", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <>
      <div className="bg-black bg-opacity-70 h-full w-full z-10 absolute top-0 left-0"></div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 z-10 absolute top-1/4 left-1/3"
      >
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          {taskToUpdate ? "Update Task" : "Add New Task"}
        </h2>

        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className={`block w-full rounded-md bg-[#2D323F] px-3 py-2.5 ${
                errorMessages.title && "border-red-500"
              }`}
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
              id="title"
            />
            {errorMessages.title && (
              <p className="text-red-500">{errorMessages.title}</p>
            )}
          </div>

          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className={`block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px] ${
                errorMessages.description && "border-red-500"
              }`}
              type="text"
              name="description"
              value={task.description}
              onChange={handleChange}
              id="description"
            ></textarea>
            {errorMessages.description && (
              <p className="text-red-500">{errorMessages.description}</p>
            )}
          </div>

          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                className={`block w-full rounded-md bg-[#2D323F] px-3 py-2.5 ${
                  errorMessages.tags && "border-red-500"
                }`}
                type="text"
                name="tags"
                value={task.tags}
                onChange={handleChange}
                id="tags"
              />
              {errorMessages.tags && (
                <p className="text-red-500">{errorMessages.tags}</p>
              )}
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className={`block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5 ${
                  errorMessages.priority && "border-red-500"
                }`}
                name="priority"
                onChange={handleChange}
                id="priority"
              >
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              {errorMessages.priority && (
                <p className="text-red-500">{errorMessages.priority}</p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 flex gap-5 justify-center lg:mt-20">
          <button
            className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
            onClick={() => setShowModal(dispatch)}
          >
            Close
          </button>
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default AddTaskModal;
