import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();

  const goToMain = (e) => {
    // 이벤트 동작을 중지시키는 함수
    e.preventDefault();
    setAuthenticate(!authenticate);
    navigate("/");
  };
  //submit 버튼 클릭 시, 로그인 상태값을 전환하고 메인 페이지로 이동되도록 구현하시오.

  return (
    <div className="login-box">
      <div className="login-box-tit">
        <h2>로그인</h2>
      </div>
      <div className="login-box-form">
        <form>
          <div className="input-block">
            <input type="text" placeholder="아이디를 입력해주세요." />
          </div>
          <div className="input-block">
            <input type="password" placeholder="비밀번호를 입력해주세요." />
          </div>
          <div className="submit">
            <input
              type="submit"
              className="login-btn"
              value="로그인"
              onClick={goToMain}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
