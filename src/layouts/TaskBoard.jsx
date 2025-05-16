import { useState } from "react";
import AddTaskModal from "../components/AddTaskModal";
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

  return (
    <section className="mb-20 relative" id="tasks">
      {showAddModal && <AddTaskModal />}
      <div className="container">
        <SearchBar />
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions
            onOpenModal={() => {
              setShowAddModal(true);
            }}
          />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
