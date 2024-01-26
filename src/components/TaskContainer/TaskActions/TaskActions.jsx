import { useState } from "react";
import SearchTasks from "../SearchTasks/SearchTasks";
import AddTaskModal from "../AddTaskModal/AddTaskModal";

const TaskActions = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && <AddTaskModal setShowModal={setShowModal}/>}
      <div className="mb-14 items-center justify-between sm:flex">
        <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
        <div className="flex items-center space-x-5">
          <SearchTasks />
          <button
            onClick={() => setShowModal(true)}
            className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
          >
            Add Task
          </button>
          <button className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold">
            Delete All
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskActions;
