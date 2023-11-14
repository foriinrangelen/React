import React from 'react'
import { useState } from 'react'



/*
    실습문제 2) 랜덤숫자 맞추는 페이지 구현
    STEP 1) 랜덤 숫자를 생성한다. (범위 1~3)
    STEP 2) 사용자가 누른 버튼의 숫자를 가져온다
    STEP 3) 사용자가 선택한 숫자와 랜덤숫자를 비교
            - 두 숫자가 동일할 경우: 정답입니다🤣
            - 두 숫자가 불일치할 경우: 오답입니다🥲
            

*/


const randomNum = Math.floor(Math.random() * 3) + 1

const Ex02 = () => {

    const [ranNum, setRanNum] = useState(0)
    const [userNum, setUserNum] = useState(0)
    const [result, setResult] = useState('')
    const handleNum = (e) => {
        setRanNum(parseInt(randomNum))
        setUserNum(parseInt(e.target.innerText))
        // console.log(e.target.innerText)
        // console.log(randomNum);
        jugement(ranNum, userNum)
    }
    const jugement = (ranNum, userNum) => {
        let resultMsg = userNum === ranNum ? <p>정답입니다🤣</p> : <p>오답입니다🥲</p>
        setResult(resultMsg)
    }
    return (
        <div>
            <button onClick={handleNum}>1</button>
            <button onClick={handleNum}>2</button>
            <button onClick={handleNum}>3</button>
            <div>내가 선택한 숫자 : {userNum}</div>
            <div>랜덤한 숫자{ranNum}</div>
            {result}
            {/* {userNum === ranNum ? <p>정답입니다🤣</p> : <p>오답입니다🥲</p>} */}
        </div>

    )
}

export default Ex02