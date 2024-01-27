import { useTasks } from "../../../context/TaskContext";
import SingleTask from "../SingleTask/SingleTask";
import TableHead from "./TableHead";

export default function TaskLists() {
  const { tasks, searchText } = useTasks();
  const filteredSearchTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <table className="table-fixed overflow-auto xl:w-full">
      <TableHead />
      <tbody>
        {filteredSearchTasks.map((task) => (
          <SingleTask key={task.id} task={task} />
        ))}
      </tbody>
    </table>
  );
}
