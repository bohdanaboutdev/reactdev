import React, { useState } from "react";

function DisplayItem({ value, onDelete }) {
    const [checked, setChecked] = useState(false);

    return (
        <div className={`display-item ${checked ? "checked" : ""}`}>
            <p>
                <label>
                    <input
                        type="checkbox"
                        name="list-item"
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                    />
                    <span>{value}</span>
                </label>
            </p>
            <span
                className="display-item_delete"
                onClick={onDelete}
            >
                Remove
            </span>
        </div>
    );
}


function Todolist() {
    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (input.trim() === "") return;
        setTasks([...tasks, input]);
        setInput("");
    };

    const deleteTask = (indexToDelete) => {
        setTasks(tasks.filter((_, index) => index !== indexToDelete));
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addTask();
        }
    };

    return (
        <div className="to-do_wrapper">
            <h3>To-Do List</h3>

            <div className="to-do_add">
                <input
                    type="text"
                    value={input}
                    placeholder="Enter a task"
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={addTask}>Add</button>
            </div>

            <div className="to-do_list">
                {tasks.length === 0 ? (
                    <p>No tasks yet</p>
                ) : (
                    tasks.map((task, index) => (
                        <DisplayItem
                            key={index}
                            value={task}
                            onDelete={() => deleteTask(index)}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default Todolist;
