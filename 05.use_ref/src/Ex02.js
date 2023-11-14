import React, { useRef } from 'react'


const Ex02 = () => {
    let idRef = useRef();
    let pwRef = useRef();
    const allRight24 = () => {
        let a = idRef.current.value
        let b = pwRef.current.value
        if (a === "smart" && b === "1234") alert(`환영합니다~! ${a}님`)
        else alert("로그인 실패...")
    }

    return (
        <div>
            <form>
                id<input type="text" ref={idRef} /><br />
                pw<input type="text" ref={pwRef} />
                <input type="button" value="로그인" onClick={allRight24} />
            </form>
        </div>
    )
}

export default Ex02