import React from 'react'
import GoodsDetail from '../page/GoodsDetail'
import { Navigate } from 'react-router-dom'

// 로그인 상태에 따라 다른 페이지로 이동도도록 구현하시오.
// 로그인상태 : 상품디테일 컴포넌트
// 비 로그인상태 : 로그인페이지로 리다이렉트

const PrivateRoute = ({ authenticate }) => {
  return authenticate ? <GoodsDetail /> : <Navigate to={'/login'} />
}

export default PrivateRoute