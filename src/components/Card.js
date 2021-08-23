import { useState, useEffect } from "react";

const Card = (props) => {
  const [options, setOptions] = useState([]);

  const answer = props.data[props.number].correct_answer;

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };
  useEffect(() => {
    if (!props.data[props.number].question) {
      return;
    }
    let answers = [...props.data[props.number].wrong_answers];
    answers.splice(
      getRandomInt(props.data[props.number].wrong_answers.length),
      0,
      props.data[props.number].correct_answer
    );
    setOptions(answers);
  }, [props.data, props.number]);

  const handleChoose = (event) => {
    const ans = event.target.innerHTML;
    if (ans.includes(answer)) {
      props.fn(true);
    }
  };

  return (
    <>
      <p>{props.data[props.number].question}</p>
      <div>
        <button onClick={handleChoose}>{options[0]}</button>
      </div>
      <div>
        <button onClick={handleChoose}>{options[1]}</button>
      </div>
      <div>
        <button onClick={handleChoose}>{options[2]}</button>
      </div>
      <div>
        <button onClick={handleChoose}>{options[3]}</button>
      </div>
    </>
  );
};

export default Card;
