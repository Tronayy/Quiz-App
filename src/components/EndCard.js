import "./EndCard.css";

const EndCard = (props) => {
  const reset = () => {
    props.fnStart(true);
    props.fnShowBtn(true);
  };

  return (
    <>
      <p className="p">Your score was {props.score}/10</p>
      <button className="Btn" onClick={reset}>
        Try Again
      </button>
    </>
  );
};

export default EndCard;
