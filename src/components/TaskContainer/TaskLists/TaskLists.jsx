import { useTasks } from "../../../context/TaskContext";
import SingleTask from "../SingleTask/SingleTask";
import TableHead from "./TableHead";

export default function TaskLists() {
  const { tasks } = useTasks();
  return (
    <table className="table-fixed overflow-auto xl:w-full">
      <TableHead />
      <tbody>
        {tasks.map((task) => (
          <SingleTask key={task.id} task={task}/>
        ))}
      </tbody>
    </table>
  );
}
