import React from 'react'
import LoginSuccess from './components/LoginSuccess';
import LoginFail from './components/LoginFail';

/*
  1. 사용자로부터 id,pw를 입력받는다. (prompt()활용)
  2. 성공여부에 따라 다른 화면을 출력한다.
    성공시 - LoginSuccess 컴포넌트 실행 환영합니다!
    실패시 - LoginFail 컴포넌트 실행 > 아이디 패스워드가 잘못되었습니다
    + 아이디만 틀린경우 또는 패스워드가 틀린 경우를 구분하여 메세지 출력해보기
*/
let a = prompt('아이디를 입력하세요')
let b = prompt('비밀번호를 입력하세요')
let isLogin = false
let reason = ''
if (a === '인공지능사관학교' && b === '123123') isLogin = true;
else if (a === '인공지능사관학교' && b !== '123123') reason = '비밀번호가 틀렸습니다'
else if (a !== '인공지능사관학교' && b === '123123') reason = '아이디가 틀렸습니다'
else reason = '아이디 비밀번호 둘다 툴렸습니다'
const AppSample = () => {
  return (
    <div>
      {isLogin === true ? <LoginSuccess /> : <LoginFail reason={reason} />}
    </div>
  )
}

export default AppSample