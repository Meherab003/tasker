import { FaRegStar, FaStar } from "react-icons/fa";

const Task = ({ task }) => {
  return (
    <>
      <td>
        {task.isFavorite ? (
          <FaStar className="text-yellow-500 text-xl" />
        ) : (
          <FaRegStar className="text-yellow-500 text-xl" />
        )}
      </td>
      <td>{task.title}</td>
      <td>
        <p className="text-sm">{task.description}</p>
      </td>
      <td>
        <ul className="flex justify-center gap-1.5 flex-wrap">
          {task.tags.map((tag) => (
            <li key={tag}>
              <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </td>
      <td className="text-center">{task.priority}</td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <button className="text-red-500">Delete</button>
          <button className="text-blue-500">Edit</button>
        </div>
      </td>
    </>
  );
};

export default Task;
