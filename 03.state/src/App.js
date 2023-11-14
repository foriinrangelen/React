// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

/*
    1. state 개념
      - 컴포넌트 내부에서 사용하는 데이터
      - 일반 변수는 값이 변화해도 화면에 보여지지 않지만 
        state는 변화를 감지한 후 화면에 변경된 값을 보여준다

    2. state 사용방법
      - 생성 => const [state 변수이름, set함수이름]= useState(초기값)
      - state변수이름: 컴포넌트 내부에서 사용할 데이터
      - set함수이름: state를 변경해주는 함수
        ex) const [num, setNum]= useState(0)
            num = 0; - X => const기 때문에
            setNum(0) - O => state 는 set함수를 통해서만 변경이 가능하다!
      - !최상단에 import { useState } from 'react' 추가

*/

function App() {
  let count = 0;

  // state 생성(useState()안의 값으로 초기화 가능)
  const [count2, setCount2] = useState(0);
  const handleClick = () => {
    console.log("클릭이벤트 실행!")
    count++
    console.log(count)
  }
  const handleClick2 = () => {
    // state 변경하는 방법
    setCount2(count2 + 1) // 화면에 렌더링이 다 끝난 후에 변경된 값이 화면에 출력
    console.log(count2)

  }
  return (
    <div>
      <p>변수: {count}</p>
      <p>state: {count2}</p>
      <button onClick={handleClick}>클릭1</button>
      <button onClick={handleClick2}>클릭2</button>
    </div>
  );
}

export default App;
