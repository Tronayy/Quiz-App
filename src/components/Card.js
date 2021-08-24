import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

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
      console.log("correct");
      const n = props.score + 1;
      props.fnScore(n);
    } else console.log("incorrect");
    props.fnAns(true);
  };

  return (
    <>
      <div>Question Number {props.number + 1}/10</div>
      <div>Score: {props.score}</div>
      <p>{props.data[props.number].question}</p>
      <div>
        <Button onClick={handleChoose}>{options[0]}</Button>
      </div>
      <div>
        <Button onClick={handleChoose}>{options[1]}</Button>
      </div>
      <div>
        <Button onClick={handleChoose}>{options[2]}</Button>
      </div>
      <div>
        <Button onClick={handleChoose}>{options[3]}</Button>
      </div>
    </>
  );
};

export default Card;
