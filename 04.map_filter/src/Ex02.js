import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import coffeeList from './data/cafe.json'
import MenuBoard from './components/MenuBoard';
import './style/Ex02.css'

/*
    실습문제) 커피메뉴를 출력하는 웹 페이지 구현
    STEP1) 'coffee_menus.json' 파일을 import 한다.
    STEP2) 커피 정보를 HTML문법과 결합하여 화면에 출력한다.

    결과물: Card 형태로 메뉴이름과 금액만 출력할 것
    * react bootstrap 사용할 경우
    1. npm install react-bootstrap 설치
    2. Ex02.js에 CSS파일 import하기
        -> import 'bootstrap/dist/css/bootstrap.min.css';
    3. 원하는 컴포넌트가 있다면 import 해서 사용하기
    ex) 버튼을 사용할 경우 -> import {Button} from 'react-bootstrap'
    

*/

const Ex02 = () => {
    return (<MenuBoard />)


    // const [coffeeData, setcoffeeData] = useState(coffeeList)
    // console.log(coffeeList)

    // return (
    //     coffeeData.map(item => (
    //         <Card style={{ width: '18rem', }}>
    //             <Card.Img variant="top" src={`${item.img}`} />
    //             <Card.Body>
    //                 <Card.Title>{item.name}-{item.category}</Card.Title>
    //                 <Card.Text>
    //                     {item.price}
    //                 </Card.Text>
    //                 {/* <Button variant="secondary">2</Button> */}
    //             </Card.Body>
    //         </Card >
    //     ))

    // );
}

export default Ex02