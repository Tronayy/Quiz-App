import "./App.css";
import { useCallback, useState } from "react";
import Card from "./components/Card";

function App() {
  const [questions, setQuestions] = useState([]);
  const [showBtn, setShowBtn] = useState(true);
  const [qNo, setQNo] = useState(0);
  const [chooseAns, setChooseAns] = useState(false);

  const getQuestionsHandler = useCallback(async () => {
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
  }, []);

  if (questions.length > 0) {
  }

  const nextHandler = () => {
    var number = qNo + 1;
    setQNo(number);
    setChooseAns(false);
  };

  return (
    <div className="App">
      React Quiz
      <div>
        {showBtn && <button onClick={getQuestionsHandler}>Start Quiz</button>}

        {!showBtn && (
          <Card
            data={questions}
            number={qNo}
            choose={chooseAns}
            fn={setChooseAns}
          />
        )}
      </div>
      <br />
      {!showBtn && chooseAns && (
        <button onClick={nextHandler}>Next Question</button>
      )}
    </div>
  );
}

export default App;
