import "./App.css";

const getQuestions = async () => {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=10&type=multiple"
  );
  const res = response.json();
  console.log(res);
};

function App() {
  return (
    <div className="App">
      React Quiz
      <div>
        <button onClick={getQuestions}>Start Quiz</button>
      </div>
    </div>
  );
}

export default App;
