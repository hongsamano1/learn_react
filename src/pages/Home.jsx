import React from 'react'
import Logical from '../components/Logical';
import Greeting from '../components/Greeting';
import Card from '../components/Card';
import Counter from '../components/Counter';
import Move from '../components/Move';

const Home = () => {
  // logic
  const handleIncrease = () => {
    console.log("🔥 더하기 버튼 클릭!!");
  };
  // view
  return (
    <div>Home
      {/* 페이지 이동 버튼 */}
      <Move />

      <Logical />
      <Greeting username="문성민" />
      <Greeting username="박성혜" />
      <Greeting username={"송주령"} />
      <Card />
      <Counter onIncreaseClick={handleIncrease} />
      {/* 미션: 숫자가 5씩 증가하는 Counter 컴포넌트 만들기 */}
      <Counter step={5} onIncreaseClick={handleIncrease} />
    </div>
  )
}

export default Home