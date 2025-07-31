import React, { useState } from 'react';

const Note = ({ id, title, description, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState({ title, description });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedNote((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (editedNote.title.trim() && editedNote.description.trim()) {
      onEdit(id, editedNote);
      setIsEditing(false);
    } else {
      alert('Both title and content are required!');
    }
  };

  return (
    <div className="card h-100">
      <div className="card-body">
        {isEditing ? (
          <>
            <input
              type="text"
              className="form-control mb-2"
              name="title"
              value={editedNote.title}
              onChange={handleChange}
            />
            <textarea
              className="form-control mb-2"
              name="description"
              value={editedNote.description}
              onChange={handleChange}
              rows="3"
            />
            <button className="btn btn-success me-2" onClick={handleSave}>Save</button>
            <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <button className="btn btn-danger me-2" onClick={() => onDelete(id)}>Delete</button>
            <button className="btn btn-warning" onClick={() => setIsEditing(true)}>Edit</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Note;
