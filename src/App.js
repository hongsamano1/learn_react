import Card from "./components/Card";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";

function App() {
  return (
    <div className="App">
      홍사마
      <Greeting />
      {/* <Greeting />
      <Greeting /> */}
      <Card />
      <Counter />
    </div>
  );
}

export default App;