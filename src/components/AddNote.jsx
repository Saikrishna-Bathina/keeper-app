import React, { useState } from 'react';

const AddNote = ({ onAdd }) => {
  const [note, setNote] = useState({
    title: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.title.trim() && note.description.trim()) {
      onAdd(note);
      setNote({ title: '', description: '' });
    }
  };

  return (
    <div className="container my-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="noteTitle" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="noteTitle"
            name="title"
            value={note.title}
            onChange={handleChange}
            placeholder="Enter note title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="noteDescription" className="form-label">Content</label>
          <textarea
            className="form-control"
            id="noteDescription"
            name="description"
            value={note.description}
            onChange={handleChange}
            placeholder="Enter note content"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    </div>
  );
};

export default AddNote;
