import React from 'react'
// import imgSrc from "./img/에스파윈터-winter.gif"
import imgSrc from "./img/i16485681820.jpg"
import Like from "./components/Like"




/*
        실습문제 1) 좋아요 기능을 가진 페이지 만들기 구현
        STEP 1) 빈 하트를 클릭 시, 꽉찬 하트로 변경해주기!❤️ 
        STEP 2) 빈 하트를 클릭 시,  좋아요1개로 변경해주기!
        STEP 3) '좋아요'가 눌린 상태에서 클릭 시, 되돌리기!

*/
const Ex01 = () => {
    return (
        <div>
            <img style={{ width: 300 }} src={imgSrc} />
            <Like />
        </div>
    )
}

export default Ex01