import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import AddNote from './components/AddNote';

const App = () => {
  const [notes, setNotes] = useState([]); 

  const addNote = (newNote) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        ...newNote,
        key: Date.now(), 
      }
    ]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.key !== id));
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <AddNote onAdd={addNote} />
      <div className="container my-4">
        <div className="row">
          {notes.map((note) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={note.key}>
              <Note
                id={note.key}
                title={note.title}
                description={note.description}
                onDelete={deleteNote}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
