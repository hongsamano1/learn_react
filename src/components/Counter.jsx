import React, { useState } from 'react'

const Counter = ({step =1, onIncreaseClick}) => {
  // logic
  // let count = 0;
  // state
  // 첫번째 변수 : 데이터, 두번째 변수 : 함수






  
  const [count, setCount] = useState(0)

// 미션 : 최대 증가값 10, 최소 감소값 0
  const MAX = 10
  const MIN = 0

  const handleIncrease = () => {
    // count = count + 1
    if (count >= MAX) return
    //count가 MAX 보다 크거나 같다면 set하지 말기

    setCount(count + step)
    onIncreaseClick()
    // console.log("🚀 ~ count:", count)
  }

  // 미션: -1버튼 클릭시 count의 값이 1씩 감소되는 함수 연결
  const handleDecrease = () => { 
    //if (count <= MIN) return
    setCount((prev) => count <= MIN ? count : prev -step)
    //setCount((prev) => prev -1)
  }
  // view
  return (
    <div>
      <h1>카운터</h1>
      <h2>{count}</h2>
      <div>
        <button type="button" onClick={handleIncrease}>+{step}</button>
        <button type="button" onClick={handleDecrease}>-{step}</button>
      </div>
    </div>
  )
}

export default Counter