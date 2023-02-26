import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold">Simple Counter Application</h1>
      <Counter></Counter>
      <Counter></Counter>
    </div>
  );
}

export default App;
