import React, { useEffect, useState } from 'react';
import './style.css';
import AddNew from './AddNew';

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('ITEMS');
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState('');

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos));
  }, [todos]);

  function generateUUID() {
    return '_' + Math.random().toString(36).slice(2, 11);
  }

  function addTodo(title, parentId = null) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: generateUUID(), title, completed: false, parentId }
      ];
    });
  }

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

  function deleteTodo(id) {
    setTodos(currentTodos => {
      const updatedTodos = currentTodos.filter(todo => todo.id !== id);
      localStorage.setItem('ITEMS', JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  }

  // Function to enable edit mode
  function editTodo(id, title) {
    setEditId(id);
    setEditTitle(title);
  }

  // Function to save edited title
  function saveEditTodo() {
    setTodos(currentTodos =>
      currentTodos.map(todo =>
        todo.id === editId ? { ...todo, title: editTitle } : todo
      )
    );
    setEditId(null);
    setEditTitle('');
  }

  function renderTasks(tasks, parentId = null) {
    return tasks
      .filter(task => task.parentId === parentId)
      .map(task => {
        const childTasks = tasks.filter(t => t.parentId === task.id);
        const allChildrenCompleted = childTasks.every(child => child.completed);
        const taskStatusLabel = task.completed
          ? 'Completed'
          : childTasks.length > 0 && allChildrenCompleted
          ? 'Done'
          : 'In Progress';
        return (
          <li key={task.id}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={e => toggleTodo(task.id, e.target.checked)}
                disabled={
                  task.completed
                    ? false
                    : childTasks.length > 0 && !allChildrenCompleted
                }
              />
              {editId === task.id ? (
                <input
                  value={editTitle}
                  onChange={e => setEditTitle(e.target.value)}
                  onBlur={saveEditTodo}
                  onKeyDown={e => {
                    if (e.key === 'Enter') saveEditTodo();
                  }}
                />
              ) : (
                <>
                  {task.title} - {taskStatusLabel}
                </>
              )}
            </label>
            {editId !== task.id && (
              <button onClick={() => editTodo(task.id, task.title)}>Edit</button>
            )}
            <button className="btn btn-danger" onClick={() => deleteTodo(task.id)}>Delete</button>
            <ul>{renderTasks(tasks, task.id)}</ul>
          </li>
        );
      });
  }

  localStorage.clear();


  return (
    <>
      <AddNew todos={todos} onSubmit={addTodo} />
      <h1 className="header">Task System</h1>
      <ul className="list">
        {todos.length === 0 && 'No Tasks'}
        {renderTasks(todos)}
      </ul>
    </>
  );
}

export default App;
