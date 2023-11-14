import { useState, useRef } from 'react'
import './App.css';




/*
  1. ref란
    - 컴포넌트 내부에 저장공간& 특정 DOM 요소에 접근하기 위해 사용

  2. ref 특징
    - 화면이 리렌더링되더라도 ref 내 값은 그대로 유지된다
    - ref값이 바뀌더라도 리렌더링이 되지않는다

  3. ref활용
    - 리렌더링이 일어나지 않아도 컴포넌트 내부에 데이터를 유지해야 할 경우만 사용
    - 특정 DOM 요소에 접근할 때 사용

*/
function App() {

  let countVar = 0;
  const [countState, setCountState] = useState(0)
  let countRef = useRef(0)

  const countHandler = (e) => {
    let countParam = e.target.innerText
    console.log(countParam)
    if (countParam === 'var+1') countVar += 1
    else if (countParam === 'state+1') setCountState(countState + 1)
    else if (countParam === 'ref+1') countRef.current += 1
    console.log("countVar : ", countVar)
    console.log("countState : ", countState)
    console.log("countRef : ", countRef.current)
  }

  return (
    <div>
      <h2>var : {countVar}</h2>
      <h2>state : {countState}</h2>
      <h2>ref :{countRef.current} </h2>

      <button onClick={countHandler}>var+1</button>
      <button onClick={countHandler}>state+1</button>
      <button onClick={countHandler}>ref+1</button>

    </div>
  );
}

export default App;
