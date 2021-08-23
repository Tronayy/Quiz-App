const Card = (props) => {
  return (
    <>
      <p>{props.data[0].question}</p>
      <div>
        <button>{props.data[0].correct_answer}</button>
      </div>
      <div>
        <button>{props.data[0].wrong_answers[0]}</button>
      </div>
      <div>
        <button>{props.data[0].wrong_answers[1]}</button>
      </div>
      <div>
        <button>{props.data[0].wrong_answers[2]}</button>
      </div>
    </>
  );
};

export default Card;
