import "./App.css";
import { useCallback, useState } from "react";
import Cards from "./components/Card";
import EndCard from "./components/EndCard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [questions, setQuestions] = useState([]);
  const [showBtn, setShowBtn] = useState(true);
  const [qNo, setQNo] = useState();
  const [chooseAns, setChooseAns] = useState(false);
  const [score, setScore] = useState();
  const [start, setStart] = useState(false);

  var n;

  const setStartHandler = () => {
    setStart(true);
    n = 1;
    setScore(0);
    setQNo(0);
  };

  const getQuestionsHandler = useCallback(async () => {
    await setStartHandler();
    if (start || n) {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=10&type=multiple"
      );
      const res = await response.json();

      const gotQuestions = res.results.map((quizData) => {
        return {
          question: quizData.question,
          correct_answer: quizData.correct_answer,
          wrong_answers: quizData.incorrect_answers,
        };
      });
      setQuestions(gotQuestions);
      setShowBtn(false);
    } // eslint-disable-next-line
  }, [start, n]);

  if (questions.length > 0) {
  }

  const nextHandler = () => {
    var number = qNo + 1;
    setQNo(number);
    setChooseAns(false);
  };

  return (
    <div className="App">
      <h1 className="Header">React Quiz</h1>
      <div>
        {showBtn && (
          <button className="Btn" onClick={getQuestionsHandler}>
            Start Quiz
          </button>
        )}

        {!showBtn && qNo <= 9 && (
          <Cards
            data={questions}
            number={qNo}
            choose={chooseAns}
            fnAns={setChooseAns}
            score={score}
            fnScore={setScore}
          />
        )}

        {!showBtn && qNo > 9 && (
          <EndCard
            fnShowBtn={setShowBtn}
            fnStart={setStart}
            score={score}
            fnScore={setScore}
          />
        )}
      </div>
      <br />
      <div>
        {!showBtn && chooseAns && qNo <= 8 && (
          <button className="Btn" onClick={nextHandler}>
            Next Question
          </button>
        )}
      </div>
      <div>
        {!showBtn && chooseAns && qNo === 9 && (
          <button className="Btn" onClick={nextHandler}>
            End Quiz
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
