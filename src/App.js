import Card from "./components/Card";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import Counter5 from "./components/Counter5";

function App() {
  const handleIncrease = () => {
    console.log('더하기 버튼 클릭!!')}


  
  return (
      
    <div className="App">
      홍사마
      <Counter onIncreaseClick={handleIncrease}/>
      <Greeting
      username="홍사마"  />
      <Greeting
      username="장동건"  />
      <Greeting
      username="멋쟁이"  />
      <Counter5 />
      <Card />
    </div>
  );
}

export default App;