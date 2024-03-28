import React from "react";
import "./calculator.css";
import { useNavigate } from "react-router-dom";

const Calculator = () => {
  const navigate = useNavigate();

  return <div className="flex column center calculator">
        <div className="buttons flex center ">
        <button
          className="button"
          onClick={() => {
            navigate("../notes.jsx");
          }}
        >
          Notes
        </button>

        <button
          className="button"
          onClick={() => {
            navigate("../");
          }}
        >
          Weather
        </button>
      </div>
      <div className="flex gap">
      <button>C</button>
      <button>+</button>
      <button>-</button>
      <button>*</button>
      <button>/</button>
      <button>0</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>.</button>
      <button>=</button>
      </div>
  </div>;
};
export default Calculator;
