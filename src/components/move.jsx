import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Move = () => {
  // logic
  const history = useNavigate()

  const handleHome = () => {
    // 실행문
    // React-router-dom으로 페이지 이동하는 방법2
    history("/")
  }
  // view
  return (
    <div>
      <button type="button" onClick={handleHome}>Home으로 이동</button>
      <button type="button">About으로 이동</button>
      <Link to="/contact">Contact로 이동</Link>
    </div>
  )
}

export default Move