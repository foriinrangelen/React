import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/ex03.css'
import Board from './components/Board'

/*
    실습문제) 주사위 게임 페이지 구현
    STEP 1) 사용자가 "던지기" 버튼을 누른다
    STEP 2) 주사위 눈이 랜덤으로 표시된다
            - 랜덤숫자를 이용해서 이미지 띄우기
    STEP 3) 사용자의 주사위 눈과 컴퓨터의 주사위 눈을 비교한다
            - 무승부: alert()를 활용하여 "무승부!" 창 띄우기
            - 사용자 승: 사용자 count++
            - 컴퓨터 승: 컴퓨터 count++
    STEP 4) "reset"버튼 클릭 시 모든 내용 초기화
            - 점수, 이미지
   [만들어야할 state]
    - 점수
    - 숫자
    - 주사위 이미지 경로

   [만들어야할 component]
    - Board.jsx
*/


let randomNum1 = 1;
let randomNum2 = 1;
// let cnt1 = 0;
// let cnt2 = 0;
const Ex03 = () => {


    const [userCount, setUserCount] = useState(0)
    const [comCount, setComCount] = useState(0)
    const [diceSrc1, setDiceSrc1] = useState(1)
    const [diceSrc2, setDiceSrc2] = useState(1)

    const goDice = () => {
        randomNum1 = Math.floor(Math.random() * 6) + 1
        randomNum2 = Math.floor(Math.random() * 6) + 1
        console.log("1 : ", randomNum1, "2 : ", randomNum2)
        setDiceSrc1(randomNum1)
        setDiceSrc2(randomNum2)

        if (randomNum1 > randomNum2) {
            setUserCount(userCount + 1)
        }
        else if (randomNum1 < randomNum2) setComCount(comCount + 1)
        else {
            alert("무승부입니다")
        }
    }
    // 초기화
    const reset = () => {
        setDiceSrc1("1")
        setDiceSrc2("1")
        setUserCount(0)
        setComCount(0)
    }

    return (
        <div className='container'>
            <h1>주사위게임</h1>
            <div className='button-area'>
                <Button variant="secondary" onClick={goDice}>던지기</Button>
                <Button variant="danger" onClick={reset}>Reset</Button>
            </div>
            <div className='board-area'>
                <Board diceSrc={diceSrc1} Count={userCount} user={'나'} />
                <Board diceSrc={diceSrc2} Count={comCount} user={'Computer'} />
            </div>


            {/* 
                <div className='board'>
                    <img src={`img/dice${diceSrc1}.png`} style={{ width: 150, padding: 10 }} />
                    <div className='score-area'>
                        현재 점수는?
                        <div>{userCount}</div>
                    </div>
                </div>
                <div className='board'>
                    <img src={`img/dice${diceSrc2}.png`} style={{ width: 150, padding: 10 }} />
                    <div className='score-area'>
                        현재 점수는?
                        <div>{comCount}</div>
                    </div>
                </div>


            </div> */}
        </div>

    )
}

export default Ex03