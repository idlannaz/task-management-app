import React, { useEffect, useState } from 'react';
import './style.css';
import AddNew from './AddNew';

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('ITEMS');
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos));
  }, [todos]);

  // Function to add a new task with optional parent
  function addTodo(title, parentId = null) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false, parentId }
      ];
    });
  }

  // Function to toggle task completion
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  // Function to delete a task
  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id);
    });
  }

  // Recursive function to display tasks and their children
  function renderTasks(tasks, parentId = null) {
    return tasks
      .filter(task => task.parentId === parentId) // Only show tasks that match the current parentId
      .map(task => {
        const childTasks = tasks.filter(t => t.parentId === task.id); // Get child tasks
        const allChildrenCompleted = childTasks.every(child => child.completed); // Check if all children are done
        const taskStatusLabel = task.completed ? "Completed" :
          childTasks.length > 0 && allChildrenCompleted ? "Done" : "In Progress"; // Determine status label

        return (
          <li key={task.id}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={e => toggleTodo(task.id, e.target.checked)}
                disabled={task.completed ? false : childTasks.length > 0 && !allChildrenCompleted} // Disable checkbox if not all children are done
              />
              {task.title} - {taskStatusLabel} {/* Show status label */}
            </label>
            <button className="btn btn-danger" onClick={() => deleteTodo(task.id)}>Delete</button>
            <ul>
              {renderTasks(tasks, task.id)} {/* Recursively render child tasks */}
            </ul>
          </li>
        );
      });
  }

  return (
    <>
      <AddNew todos={todos} onSubmit={addTodo} />
      <h1 className="header">Task System</h1>
      <ul className="list">
        {todos.length === 0 && "No Tasks"}
        {renderTasks(todos)}
      </ul>
    </>
  );
}

export default App;
