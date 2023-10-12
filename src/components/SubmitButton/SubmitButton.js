import React from "react";
import ArrowIcon from "../../assets/icon-arrow.svg";
import "./styles/SubmitButton.css";

const SubmitButton = () => {
  return (
    <div className="submit-btn-container">
      <div className="line" />
      <button className="submit-btn">
        <img src={ArrowIcon} alt="arrow-icon" />
      </button>
    </div>
  );
};

export default SubmitButton;
