import { toast } from "react-toastify";
import { useTasks } from "../../../context/TaskContext";
import { deleteTask, favoriteTask } from "../../../reducer/actions";
import { FaStar } from "react-icons/fa6";

/* eslint-disable react/prop-types */
export default function SingleTask({
  task: { id, title, description, tags, priority, isFavourite },
}) {
  const { dispatch } = useTasks();

  const handleDelete = (taskId) => {
    deleteTask(taskId, dispatch);
    toast.warning("Task Deleted successfully", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleFavourite = (taskId) => {
    favoriteTask(taskId, dispatch);
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
            <button className="text-blue-500">Edit</button>
          </div>
        </td>
      </tr>
    </>
  );
}
