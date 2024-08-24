// src/components/ToDoList.js
import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';  // Updated import

const ToDoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        axios.get('/todos/')
            .then(response => setTodos(response.data))
            .catch(error => console.error('Error fetching the todos:', error));
    }, []);

    const addTask = () => {
        axios.post('/todos/', { task: newTask, completed: false })
            .then(response => setTodos([...todos, response.data]))
            .catch(error => console.error('Error adding the task:', error));
        setNewTask('');
    };

    const toggleCompletion = (id) => {
        const todo = todos.find(t => t.id === id);
        axios.put(`/todos/${id}/`, { ...todo, completed: !todo.completed })
            .then(response => setTodos(todos.map(t => t.id === id ? response.data : t)))
            .catch(error => console.error('Error updating the task:', error));
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                            {todo.task}
                        </span>
                        <button onClick={() => toggleCompletion(todo.id)}>
                            {todo.completed ? 'Undo' : 'Complete'}
                        </button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={addTask}>Add Task</button>
        </div>
    );
};

export default ToDoList;
