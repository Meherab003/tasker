import { useState } from "react";
import { GiCancel } from "react-icons/gi";

const AddTaskModal = ({ onSave, taskToUpdate, onCloseClick }) => {
  const [task, setTask] = useState(
    taskToUpdate || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tags: [],
      priority: "",
      isFavorite: false,
    }
  );
  const [isAdd, setIsAdd] = useState(Object.is(taskToUpdate, null));

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "tags") {
      value = value.split(",");
    }
    setTask({
      ...task,
      [name]: value,
    });
  };
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50">
      <form className="mx-auto my-10 w-[95%]  rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] max-md:px-4 lg:my-20  shadow-lg p-6  max-w-md relative animate-scaleIn">
        <div className="mb-2 flex items-center justify-between">
          <p></p>
          <h2 className=" text-center text-2xl font-bold text-white lg:text-[28px]">
            {isAdd ? "Add New Task" : "Edit Task"}
          </h2>
          <button
            onClick={onCloseClick}
            className="text-lg text-red-400 hover:opacity-80 p-0.5 rounded-full bg-slate-900 shadow"
          >
            <GiCancel />
          </button>
        </div>

        <div className=" text-white space-y-5">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              value={task.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[80px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[120px]"
              type="text"
              name="description"
              id="description"
              value={task.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="grid-cols-2 gap-x-4 max-md:space-y-4 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-1">
              <label htmlFor="tags">Tags</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                value={task.tags}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-2 py-3 text-sm"
                name="priority"
                id="priority"
                value={task.priority}
                onChange={handleChange}
                required
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-5 flex justify-center lg:mt-10">
          <button
            onClick={(e) => {
              e.preventDefault();
              onSave(task, isAdd);
            }}
            type="submit"
            className="rounded bg-blue-300 text-black px-4 py-2 transition-all hover:opacity-80"
          >
            Create new Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskModal;
