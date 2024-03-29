import React, { useState } from "react";
import "./notes.css";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    setNotes([...notes, ""]);
  };

  const removeNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const updateNote = (index, newText) => {
    const newNotes = [...notes];
    newNotes[index] = newText;
    setNotes(newNotes);
  };

  return (
    <div className="all-notes">
      <div className="buttons flex center ">
        <button
          className="button"
          onClick={() => {
            navigate("../");
          }}
        >
          Weather
        </button>

        <button
          className="button"
          onClick={() => {
            navigate("../calculator");
          }}
        >
          Calculator
        </button>
      </div>
      <button className="add-button" onClick={addNote}>
        Add Note
      </button>
      <div className="notes-container flex ">
        {notes.map((note, index) => (
          <div className="note flex column" key={index}>
            <textarea
              value={note}
              onChange={(e) => updateNote(index, e.target.value)}
              placeholder="Type syour note"
            />
            <button class="delete-button" onClick={() => removeNote(index)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Notes;
