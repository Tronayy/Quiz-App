import Button from "react-bootstrap/Button";

const EndCard = (props) => {
  const reset = () => {
    props.fnStart(true);
    props.fnShowBtn(true);
  };

  return (
    <>
      <p>Your score was {props.score}/10</p>
      <Button onClick={reset}>Try Again</Button>
    </>
  );
};

export default EndCard;
