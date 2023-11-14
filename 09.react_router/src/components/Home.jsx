import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = ({ login, setLogin }) => {
  /*
    실습)
    1. 로그인 상태를 판단하여 "로그인" or "로그아웃"으로 출력해보기
      - loginState를 이용해 조건부 렌더링으로 출력

    2. "로그아웃" 버튼을 클릭했을 때, "로그인" 상태로 전환하기
      - useNavigate를 이용해 loginState값 판단 후 상태값 전환
  */
  console.log(login)
  const navigate = useNavigate()

  const goToProduct = () => {
    navigate('/product')
  }

  // const logout = () => {
  //   setLogin(false)
  //   navigate('/')
  // }

  return (
    <div>
      <h1>Home</h1>
      <Link to={'/about'}>About 페이지로 이동하기!</Link>
      <br />
      <br />
      <button onClick={goToProduct}>상품페이지로 이동하기!</button>
      <br />
      <br />
      {login ? (
        <Link to={'/'} onClick={() => setLogin(false)}>
          로그아웃
        </Link>
      ) : (
        <Link to={'/login'}>로그인</Link>
      )}
      <br />
      <br />
      {login ? (
        <Link to={'/user'}>마이페이지</Link>
      ) : (
        <Link to={'/login'}>마이페이지</Link>
      )}
      {/* {login ? <Link to={'/user'}>마이페이지</Link>:null} */}
    </div>
  )
}

export default Home
