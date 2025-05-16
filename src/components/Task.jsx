import { FaRegStar, FaStar } from "react-icons/fa";

const Task = ({ task, onEdit, onDelete, toggleFavorite }) => {
  return (
    <>
      <td>
        <button onClick={() => toggleFavorite(task)}>
          {task.isFavorite ? (
            <FaStar className="text-yellow-500 md:text-xl" />
          ) : (
            <FaRegStar className="text-yellow-500 md:text-xl" />
          )}
        </button>
      </td>
      <td className="font-semibold">{task.title}</td>
      <td>
        <p className="text-sm text-red-500 md:hidden">
          Can't show on Small Devices
        </p>
        <p className="text-sm hidden md:block">{task.description}</p>
      </td>
      <td>
        <ul className="flex justify-center gap-1.5 flex-wrap">
          {task.tags.map((tag) => (
            <li key={tag}>
              <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-green-300 text-black font-bold px-2.5 text-sm capitalize">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </td>
      <td className="text-center">{task.priority}</td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <button
            onClick={() => onDelete(task.id)}
            className="text-red-300 font-semibold"
          >
            Delete
          </button>
          <button
            onClick={() => onEdit(task)}
            className="text-blue-300 font-semibold mr-5"
          >
            Edit
          </button>
        </div>
      </td>
    </>
  );
};

export default Task;
