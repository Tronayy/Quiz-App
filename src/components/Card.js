import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import "./Card.css";

var dis;
var getColor = ["secondary", "secondary", "secondary", "secondary"];
const Cards = (props) => {
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
    const right = event.target.attributes[0].nodeValue;
    dis = true;
    console.log(event.target.attributes[0].nodeValue);

    if (ans.includes(answer)) {
      // getColor = "success";
      const n = props.score + 1;
      props.fnScore(n);
    } else {
      if (right.includes("Btn1")) {
        getColor[0] = "danger";
      }
      if (right.includes("Btn2")) {
        getColor[1] = "danger";
      }
      if (right.includes("Btn3")) {
        getColor[2] = "danger";
      }
      if (right.includes("Btn4")) {
        getColor[3] = "danger";
      }
    }

    props.fnAns(true);
    setTimeout(
      () => (getColor = ["secondary", "secondary", "secondary", "secondary"]),
      10
    );
    setTimeout(() => (dis = false), 10);
  };

  return (
    <div className="box">
      <Card
        className="text-center"
        bg="dark"
        text="white"
        border="light"
        style={{ width: "700px", height: "400px" }}
      >
        <Card.Header as="h5">
          <div>Question Number {props.number + 1}/10</div>
          <div>Score: {props.score}</div>
        </Card.Header>
        <Card.Body>
          <p>{props.data[props.number].question}</p>
          <div className="button d-grid gap-2">
            <Button
              id="Btn1"
              variant={getColor[0]}
              onClick={handleChoose}
              disabled={dis === true ? true : false}
            >
              {options[0]}
            </Button>
          </div>
          <div className="button d-grid gap-2">
            <Button
              id="Btn2"
              variant={getColor[1]}
              onClick={handleChoose}
              disabled={dis === true ? true : false}
            >
              {options[1]}
            </Button>
          </div>
          <div className="button d-grid gap-2">
            <Button
              id="Btn3"
              variant={getColor[2]}
              onClick={handleChoose}
              disabled={dis === true ? true : false}
            >
              {options[2]}
            </Button>
          </div>
          <div className="button d-grid gap-2">
            <Button
              id="Btn4"
              variant={getColor[3]}
              onClick={handleChoose}
              disabled={dis === true ? true : false}
            >
              {options[3]}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
