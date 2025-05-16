import { useState } from "react";
import AddTaskModal from "../components/AddTaskModal";
import NoTaskFound from "../components/NoTaskFound";
import SearchBar from "../components/SearchBar";
import TaskActions from "../components/TaskActions";
import TaskList from "../components/TaskList";

const TaskBoard = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "I want to learn React such that I can create treat it like my slave and make it do whatever I want it to do",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavorite: false,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleAddTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          } else {
            return task;
          }
        })
      );
    }
    setShowAddModal(false);
  };

  const handleEditTask = (newTask) => {
    setTaskToUpdate(newTask);
    setShowAddModal(true);
  };

  const handleCloseClick = () => {
    setShowAddModal(false);
    setTaskToUpdate(null);
  };
  const handleToggleFavorite = (task) => {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          if (t.isFavorite) {
            return {
              ...t,
              isFavorite: false,
            };
          } else {
            return {
              ...t,
              isFavorite: true,
            };
          }
        } else {
          return t;
        }
      })
    );
  };

  const handleDeleteTask = (taskId) => {
    const tasksAfterDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(tasksAfterDelete);
  };

  const handleDeleteAllTasks = () => {
    setTasks([]);
  };

  const handleSearch = (searchTerm) => {
    const filteredTasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // setTasks([...filteredTasks]); //Not the Correct way. causing the unmatched task to be deleted. this function require useEffect hook.
    console.log(filteredTasks);
  };
  return (
    <section className="mb-20 w-full md:w-[95%] mx-auto" id="tasks">
      {showAddModal && (
        <AddTaskModal
          onSave={handleAddTask}
          taskToUpdate={taskToUpdate}
          onCloseClick={handleCloseClick}
        />
      )}
      <div className="w-full container">
        <SearchBar onSearch={handleSearch} />
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-3 py-8 md:px-9 md:py-16 max-lg:w-[95%] mx-auto">
          <TaskActions
            onOpenModal={() => {
              setShowAddModal(true);
            }}
            onDeleteAll={handleDeleteAllTasks}
          />
          <div className="overflow-auto w-full">
            {tasks.length > 0 ? (
              <TaskList
                tasks={tasks}
                onEdit={handleEditTask}
                onDelete={handleDeleteTask}
                toggleFavorite={handleToggleFavorite}
              />
            ) : (
              <NoTaskFound />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
