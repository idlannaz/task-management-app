import React, { useState } from 'react';
import './style.css';

function AddNew({ todos, onSubmit }) {
  const [newItem, setNewItem] = useState('');
  const [parentId, setParentId] = useState(''); // To store the selected parent

  function handleSubmit(e) {
    e.preventDefault();
    // Pass both the task name and the optional parentId to the onSubmit handler
    onSubmit(newItem, parentId || null);
    setNewItem('');
    setParentId('');
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="parentTask">Parent Task (Optional)</label>
        <select
          id="parentTask"
          value={parentId}
          onChange={e => setParentId(e.target.value)}
        >
          <option value="">None</option>
          {todos.map(todo => (
            <option key={todo.id} value={todo.id}>
              {todo.title}
            </option>
          ))}
        </select>
      </div>
      <button className="btn">Add New Task</button>
    </form>
  );
}

export default AddNew;
