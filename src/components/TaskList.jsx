import Task from "./Task";

const TaskList = ({ tasks, onEdit, onDelete, toggleFavorite }) => {
  return (
    <table className="table-auto md:table-fixed overflow-auto xl:w-full font-mono">
      <thead>
        <tr>
          <th className="md:p-4 pb-8 text-sm font-semibold capitalize md:w-[48px]"></th>
          <th className="md:p-4 pb-8 text-sm font-semibold capitalize md:w-[250px]">
            {" "}
            Title{" "}
          </th>
          <th className="md:p-4 pb-8 text-sm font-semibold capitalize md:w-full">
            {" "}
            Description{" "}
          </th>
          <th className="md:p-4 pb-8 text-sm font-semibold capitalize md:w-[200px]">
            {" "}
            Tags{" "}
          </th>
          <th className="md:p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
            {" "}
            Priority{" "}
          </th>
          <th className="md:p-4 pb-8 text-sm font-semibold capitalize md:w-[150px]">
            {" "}
            Options{" "}
          </th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr
            key={task.id}
            className="border-b border-[#2E3443] bg-[#202530] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2 items-center"
          >
            <Task
              task={task}
              onEdit={onEdit}
              onDelete={onDelete}
              toggleFavorite={toggleFavorite}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
