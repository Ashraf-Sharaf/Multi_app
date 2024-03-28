import React from "react";
import "./notes.css";
import { useNavigate } from "react-router-dom";
import noteCarc from "./noteCard";
import NoteCard from "./noteCard";

const Notes = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="buttons flex center ">
        <button
          className="button"
          onClick={() => {
            navigate("../notes");
          }}
        >
          Notes
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
      <NoteCard />
    </div>
  );
};
export default Notes;
