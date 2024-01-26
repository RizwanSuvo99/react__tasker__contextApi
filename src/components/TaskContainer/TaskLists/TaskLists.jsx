import SingleTask from "../SingleTask/SingleTask";
import TableHead from "./TableHead";

export default function TaskLists() {
  return (
    <table className="table-fixed overflow-auto xl:w-full">
      <TableHead />
      <tbody>
        <SingleTask />
      </tbody>
    </table>
  );
}
