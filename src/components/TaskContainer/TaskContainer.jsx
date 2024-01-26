import { useTasks } from "../../context/TaskContext";
import NoTaskFound from "./NoTaskFound/NoTaskFound";
import TaskActions from "./TaskActions/TaskActions";
import TaskLists from "./TaskLists/TaskLists";

const TaskContainer = () => {
  const { tasks } = useTasks();
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions />
          <div className="overflow-auto">
            {tasks.length > 0 ? <TaskLists /> : <NoTaskFound />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskContainer;
