import { Provider } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import HooksCounter from "./components/HooksCounter";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 className="text-3xl font-bold mb-8 mt-4">
          Simple Counter Application
        </h1>
        <HooksCounter></HooksCounter>
      </div>
    </Provider>
  );
}

export default App;
