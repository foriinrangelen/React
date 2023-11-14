import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({ setLogin }) => {
  const navigate = useNavigate()

  const loginS = () => {
    setLogin(true)
    navigate('/')
  }

  return (
    <div>
      <h1>로그인 페이지</h1>
      <button onClick={loginS}>로그인</button>
    </div>
  )
}

export default Login
