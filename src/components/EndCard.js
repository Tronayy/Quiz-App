const EndCard = (props) => {
  const reset = () => {
    props.fnStart(true);
    props.fnShowBtn(true);
  };

  return (
    <>
      <p>Your score was {props.score}/10</p>
      <button onClick={reset}>Try Again</button>
    </>
  );
};

export default EndCard;
