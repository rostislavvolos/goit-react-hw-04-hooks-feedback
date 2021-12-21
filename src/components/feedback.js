// import React from 'react';
import React, { useState } from "react";
import style from "./Feedback.module.css";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";


const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const Feedback = () => {


  const [state, setState] = useState(initialState);

  const countTotal = state.good + state.neutral + state.bad;

  const handleOnClick = (name) => {
    setState((prevState) => ({
      ...state,
      [name]: prevState[name] + 1,
    }));
  };

  const positivePercentage = Math.round((state.good / countTotal) * 100);

  return (
    <Section title="Please leave feedback!">
      <div className={style.feedback}>
        <FeedbackOptions onClick={handleOnClick} />
        <p className={style.statistics}>Statistics</p>
        {countTotal ? (
          <Statistics
            onGood={state.good}
            onNeutral={state.neutral}
            onBad={state.bad}
            onTotal={countTotal}
            positivePercentage={positivePercentage}
          />
        ) : (
          "Билин баратан feedback забыл"
        )}
      </div>
    </Section>
  );
};

export default Feedback;
