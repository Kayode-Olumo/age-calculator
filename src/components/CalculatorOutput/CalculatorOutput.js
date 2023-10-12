import React from "react";
import "./styles/CalculatorOutput.css";

const CalculatorOutput = ({ data }) => {
  return (
    <div>
      <p className="output-txt">
        <span>{data["years"]}</span> years
      </p>
      <p className="output-txt">
        <span>{data["months"]}</span> months
      </p>
      <p className="output-txt">
        <span>{data["days"]}</span> days
      </p>
    </div>
  );
};

export default CalculatorOutput;
