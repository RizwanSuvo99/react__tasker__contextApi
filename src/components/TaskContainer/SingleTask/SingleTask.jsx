import { toast } from "react-toastify";
import { useTasks } from "../../../context/TaskContext";
import {
  deleteTask,
  favoriteTask,
  showEdit,
} from "../../../reducer/actions";
import { FaStar } from "react-icons/fa6";

/* eslint-disable react/prop-types */
export default function SingleTask({ task }) {
  const { id, title, description, tags, priority, isFavourite } = task;
  const { dispatch } = useTasks();

  const handleDelete = (taskId) => {
    const isConfirm = confirm("Do you want to Delete?Please Confirm!");
    if (!isConfirm) return;
    deleteTask(taskId, dispatch);
    toast.warning("Task Deleted successfully", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleFavourite = (taskId) => {
    if (!isFavourite) {
      toast.success("Added to Favourite successfully", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      toast.warning("Removed from Favourite successfully", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    favoriteTask(taskId, dispatch);
  };

  const handleEdit = (task) => {
    showEdit(task, dispatch);
  };

  return (
    <>
      <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
        <td>
          <button onClick={() => handleFavourite(id)}>
            {isFavourite ? <FaStar color="yellow" /> : <FaStar color="gray" />}
          </button>
        </td>
        <td>{title}</td>
        <td>
          <div>{description}</div>
        </td>
        <td>
          <ul className="flex justify-center gap-1.5 flex-wrap">
            {tags.map((tag) => (
              <li key={tag}>
                <span
                  style={{
                    backgroundColor: `rgb(${Math.floor(
                      Math.random() * 255 + 1
                    )},${Math.floor(Math.random() * 255 + 1)},${Math.floor(
                      Math.random() * 255 + 1
                    )}`,
                  }}
                  className={`inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize text-[#F4F5F6]`}
                >
                  {tag}
                </span>
              </li>
            ))}
          </ul>
        </td>
        <td className="text-center">{priority}</td>
        <td>
          <div className="flex items-center justify-center space-x-3">
            <button onClick={() => handleDelete(id)} className="text-red-500">
              Delete
            </button>
            <button onClick={() => handleEdit(task)} className="text-blue-500">
              Edit
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
