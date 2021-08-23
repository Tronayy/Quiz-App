import "./App.css";
import { useCallback, useState } from "react";

function App() {
  const [questions, setQuestions] = useState([]);

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
  }, []);

  if (questions.length > 0) {
    console.log(questions);
  }

  return (
    <div className="App">
      React Quiz
      <div>
        <button onClick={getQuestionsHandler}>Start Quiz</button>
      </div>
    </div>
  );
}

export default App;
