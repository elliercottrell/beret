import "./App.css";
import Counter from "./Components/Counter";
import Form from "./Components/Form";

function App() {
  return (
    <div className="App">
      <h1>Beret</h1>
      <div className="underline"></div>
      <hr className="hr"></hr>
      <Form />
      <hr className="hr"></hr>
      <Counter />
    </div>
  );
}

export default App;
