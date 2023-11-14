import React, { useEffect, useState } from 'react'

/*
    1. Life Cycle(생명주기)
    - React 컴포넌트의 생성부터 소멸까지 이르는 일련의 과정 
    - Mount, Update, UnMount
      Mount: 컴포넌트가 화면에 처음 그려진 상태 ex) api활용할때 주로 사용
      Update: props, state, force update 변화가 발생했을 때 리렌더링 되는 상태 
              + 부모컴포넌트가 갱신되었을 때도 동작
        ex) 특정 state가 변경 되었을때 주로 사용
      unMount: 컴포넌트가 화면에서 사라진 상태
    - 함수형 컴포넌트에서는 useEffect() 사용 (클래스 컴포넌트에서는 사용불가)

*/

const RFComponent = () => {
  console.log('1. contructor 대체=> 함수 초기화')
  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(0)
  const handleIncrement = () => {
    setNum(num + 1)
  }
  const handleIncrement2 = () => {
    setNum2(num2 + 1)
  }

  // 3. componentDidMount 대체
  // useEffect(()=>{ 실행할 로직 },[]) : 화면이 처음 렌더링 될때 실행
  useEffect(() => {
    console.log('3. componentDidMount 대체=> 화면렌더링 완료!')
  }, [])

  // 4. componentDidUpdate 대체
  // useEffect(()=>{ 실행할 로직 },[변화를 감지할 state])

  // - 특정 state가 변화할 때 실행
  //   useEffect(() => {
  //     console.log('1- 4. componentDidUpdate 대체=> []안에 state 설정')
  //   }, [num]) // 넣어서 알아서 감지?

  //   useEffect(() => {
  //     console.log('2- 4. componentDidUpdate 대체=> []안에 state 설정')
  //   }, [num2]) // 넣어서 알아서 감지?
  // useEffect 안에 return 문으로 소멸에대한 처리가능

  useEffect(() => {
    console.log('3- 4. componentDidUpdate 대체=> []안에 state 설정')
  }, [num, num2]) // 넣어서 알아서 감지?

  return (
    <div>
      {console.log('2. render 대체=> return문 안(in)')}
      <p>
        RFComponent1:{num}
        <button onClick={handleIncrement}>1증가</button>
      </p>
      <p>
        RFComponent2:{num2}
        <button onClick={handleIncrement2}>2증가</button>
      </p>
    </div>
  )
}
// https://api.openweathermap.org/data/2.5/weather?lat=35.146595&lon=126.922274&appid=29d877bc68a37cc13b5115976c778115
export default RFComponent
