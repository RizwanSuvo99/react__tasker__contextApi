
import SearchTasks from "../SearchTasks/SearchTasks";
import AddTaskModal from "../AddTaskModal/AddTaskModal";
import { useTasks } from "../../../context/TaskContext";
import { deleteAllTask, setShowModal } from "../../../reducer/actions";
import { toast } from "react-toastify";

const TaskActions = () => {
  // const [showModal, setShowModal] = useState(false);
  const { dispatch,showModal } = useTasks();
  const handleDeleteAll = () => {
    const isConfirm = confirm("Do you want to Delete All Task?Please Confirm!");
    if (!isConfirm) return;
    deleteAllTask(dispatch);
    toast.warning("All Tasks Deleted successfully", {
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
      {showModal && <AddTaskModal />}
      <div className="mb-14 gap-4 items-center justify-between sm:flex">
        <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
        <div className="flex items-center space-x-5">
          <SearchTasks />
          <button
            onClick={() => setShowModal(dispatch)}
            className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
          >
            Add Task
          </button>
          <button
            onClick={handleDeleteAll}
            className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
          >
            Delete All
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskActions;
