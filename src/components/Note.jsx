import React from 'react';

const Note = (props) => {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <button
          className="btn btn-danger mt-2"
          onClick={() => props.onDelete(props.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;
