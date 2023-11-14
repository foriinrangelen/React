// import logo from './logo.svg';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
// import Product from './components/Product';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import ProductDetail2 from './components/ProductDetail2';
import Posts from './components/Posts';
import Login from './components/Login';
import User from './components/User';
import { useEffect, useState } from 'react';
// import axios from 'axios'

function App() {

  const [login, setLogin] = useState(false)

  // login 값이 업데이트 되었을 때 로그인 상태값 출력
  useEffect(() => {
    console.log(login);
  }, [login])


  // 로그인 상태에서 접근할 수 있는 페이지는 PrivateRoute를 만들어서 관리
  // <Navigate to='이동할 경로'/>
  const PrivateRoute = () => {
    return login ? <User /> : <Navigate to='/login' />
  }




  return (
    <div>
      <Routes>
        <Route path='/' element={<Home login={login} setLogin={setLogin} />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login setLogin={setLogin} />} />
        <Route path='/user' element={<PrivateRoute />} />
        {/* Product 컴포넌트로 이동되도록 Route 컴포넌트 생성하기 */}
        <Route path='/product' element={<Product />} />

        {/* URL 파라미터 형식으로 Route 구성하기 */}
        <Route path='/product/:pro_no' element={<ProductDetail />} />
        <Route path='/product/productDetail2' element={<ProductDetail2 />} />

        {/* axios를 이용하여 json-server 데이터 요청하는 실습 */}
        <Route path='/post' element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
