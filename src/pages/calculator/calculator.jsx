import React, { useState } from "react";
import "./calculator.css";
import { useNavigate } from "react-router-dom";

const Calculator = () => {
  const navigate = useNavigate();

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [operator, setOperator] = useState("");

  const clickedValue = (value) => {
    if (value === "=") {
      calculateResult();
    } else if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/"
    ) {
      setOperator(value);
      setValue2(value1);
      setValue1("");
    } else {
      setValue1(value1 + value);
    }
  };

  const calculateResult = () => {
    const firstValue = parseFloat(value1);
    const secondValue = parseFloat(value2);

    let result = 0;

    switch (operator) {
      case "+":
        result = firstValue + secondValue;
        break;
      case "-":
        result = firstValue - secondValue;
        break;
      case "*":
        result = firstValue * secondValue;
        break;
      case "/":
        if (secondValue !== 0) {
          result = firstValue / secondValue;
        }
        break;
      default:
        result = firstValue;
    }
    setValue1(result.toString());
    setValue2("");
    setOperator("");
  };

  const handleKeyDown = (event) => {
    const { key } = event;
    const allowedKeys = /[0-9+\-*/.=]/;

    if (allowedKeys.test(key)) {
      event.preventDefault();
      clickedValue(key);
    }
  };

  return (
    <div className="flex column center calculator">
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
            navigate("../");
          }}
        >
          Weather
        </button>
      </div>
      <div className="calculator-container flex gap column center" onKeyDown={handleKeyDown}>
        <input type="text" className="displayResult" value={value1} readOnly />
        <div className="flex gap" onKeyDown={handleKeyDown}>
          <button onClick={() => clickedValue("+")}>+</button>
          <button onClick={() => clickedValue("-")}>-</button>
          <button onClick={() => clickedValue("*")}>*</button>
          <button onClick={() => clickedValue("/")}>/</button>
          <button onClick={() => clickedValue("0")}>0</button>
          <button onClick={() => clickedValue("1")}>1</button>
          <button onClick={() => clickedValue("2")}>2</button>
          <button onClick={() => clickedValue("3")}>3</button>
          <button onClick={() => clickedValue("4")}>4</button>
          <button onClick={() => clickedValue("5")}>5</button>
          <button onClick={() => clickedValue("6")}>6</button>
          <button onClick={() => clickedValue("7")}>7</button>
          <button onClick={() => clickedValue("8")}>8</button>
          <button onClick={() => clickedValue("9")}>9</button>
          <button onClick={() => clickedValue(".")}>.</button>
          <button onClick={() => clickedValue("=")}>=</button>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
