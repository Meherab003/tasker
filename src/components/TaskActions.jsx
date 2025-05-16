const TaskActions = ({ onOpenModal, onDeleteAll }) => {
  return (
    <div className="mb-14 items-center justify-between sm:flex">
      <h2 className="text-3xl font-semibold max-sm:mb-4 font-mono">
        Your Tasks
      </h2>
      <div className="flex items-center space-x-5">
        <button
          onClick={onOpenModal}
          className="rounded-md bg-blue-300 text-black px-3.5 py-2.5 text-sm font-semibold hover:opacity-80"
        >
          Add Task
        </button>
        <button
          onClick={onDeleteAll}
          className="rounded-md bg-red-400 text-black px-3.5 py-2.5 text-sm font-semibold hover:opacity-80"
        >
          Delete All
        </button>
      </div>
    </div>
  );
};

export default TaskActions;
