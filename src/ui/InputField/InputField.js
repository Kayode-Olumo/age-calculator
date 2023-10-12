import React from "react";
import "./styles/InputField.css";

const InputField = ({ placeholder, label, getValue, isValid, error }) => {
  return (
    <div>
      <label className={`${!isValid ? "input-label-invalid" : "input-label"}`}>
        {label.toUpperCase()}
      </label>
      <input
        className={`${!isValid ? "input-field-invalid" : "input-field"}`}
        placeholder={placeholder}
        onChange={getValue}
      />
      {!isValid && <span className="input-msg-invalid">{error}</span>}
    </div>
  );
};

export default InputField;
