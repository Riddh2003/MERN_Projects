import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, toggleTask } from "../redux/taskSlice";

export const Task = () => {
    const [task, setTask] = useState("");
    const tasks = useSelector((state) => state.task.tasks);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            dispatch(addTask(task));
            setTask("");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded">
            <h1 className="text-xl font-bold mb-4">Task Manager</h1>

            {/* Task Form */}
            <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
                <input
                    type="text"
                    className="border p-2 rounded"
                    placeholder="Add a new task..."
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
                    Add
                </button>
            </form>

            {/* Task List */}
            <div>
                {tasks.length === 0 ? <p>No tasks yet. Add one!</p> : null}
                {tasks.map((task) => (
                    <div key={task.id} className="flex justify-between items-center p-2 border-b">
                        <span
                            className={`cursor-pointer ${task.completed ? "line-through text-gray-500" : ""}`}
                            onClick={() => dispatch(toggleTask(task.id))}
                        >
                            {task.text}
                        </span>
                        <button onClick={() => dispatch(deleteTask(task.id))} className="bg-red-500 text-white px-2 rounded">
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};