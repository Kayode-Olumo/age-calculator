import React, { useState } from "react";
import InputField from "../../ui/InputField/InputField";
import CalculatorOutput from "../CalculatorOutput/CalculatorOutput";
import SubmitButton from "../SubmitButton/SubmitButton";
import { calcData } from "../../data/calcData";

const initialState = { years: "--", months: "--", days: "--" };

const Calculator = () => {
  const [state, setState] = useState(initialState);
  const [userAge, setUserAge] = useState({
    years: "",
    yearsErr: "Must be in the past",
    months: "",
    monthsErr: "Must be a valid month",
    days: "",
    daysErr: "Must be a valid day",
  });
  const [isValid, setIsValid] = useState(true);

  const dateConverter = (date) => {
    const concatDate = `${date.years}-${date.months}-${date.days}`;
    const birthday = new Date(concatDate);
    const currentDate = new Date();

    let calcDay = currentDate.getDay() - birthday.getDay();
    let calcMonth = currentDate.getMonth() - birthday.getMonth();
    const calcYear = currentDate.getFullYear() - birthday.getFullYear();

    if (currentDate.getDay() < birthday.getDay()) {
      calcMonth--;

      const calcLastMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      );
      calcDay = calcDay + calcLastMonth.getDate();
    }
    setState({
      ...state,
      years: calcYear,
      months: calcMonth,
      days: calcDay,
    });
  };

  const inputHandler = (tag, value) => {
    console.log(tag, value);
    const today = new Date();
    if (tag === "years" && value > today.getFullYear()) {
      setIsValid(false);
    } else if (tag === "months" && value > 12) {
      setIsValid(false);
    } else if (tag === "days" && value > 31) {
      setIsValid(false);
    } else if (value === "") {
      setIsValid(false);
    } else {
      setIsValid(true);
      setUserAge((prevState) => {
        return {
          ...prevState,
          [tag]: +value,
        };
      });
    }
  };

  const inputValidation = (tag, value) => {
    if (tag === "years") {
      return userAge.yearsErr;
    } else if (tag === "months") {
      return userAge.monthsErr;
    } else if (tag === "days") {
      return userAge.daysErr;
    } else if (value === "") {
      return "empty field";
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (isValid) {
      dateConverter(userAge);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div style={{ display: "flex" }}>
          {calcData.map((data) => {
            return (
              <div>
                <InputField
                  id={data.tag}
                  key={data.id}
                  placeholder={data.placeholder}
                  label={data.label}
                  getValue={(event) =>
                    inputHandler(data.tag, event.target.value)
                  }
                  isValid={isValid}
                  error={(event) =>
                    inputValidation(data.tag, event.target.value)
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <SubmitButton />
      </div>
      <CalculatorOutput data={state} />
    </form>
  );
};

export default Calculator;
