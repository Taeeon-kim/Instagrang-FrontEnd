import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";

import { history } from "../redux/configureStore";

// 액션 크리에이터 불러오기
import { actionCreators as userActions } from "../redux/modules/user";

// 엘레먼트 불러오기
import Input from "../elements/Input";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Button from "../elements/Button";

const Login = () => {
  const dispatch = useDispatch();

  // 상태관리
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const login = () => {
    // 이메일, 패스워드 빈값일 때 입력안내 문구
    if (email === "") {
      alert("이메일를 입력해주세요.");
      return;
    }
    if (pwd === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    dispatch(userActions.loginDB(email, pwd));
  };

  // 토큰 세션 확인
  const is_session = localStorage.getItem("token");

  // 세션이 있을 때
  useEffect(() => {
    if (is_session) {
      history.replace("/");
    }
  }, []);

  return (
    <React.Fragment>
      <Grid width="350px" border="1px solid #e4e4e4" margin="100px auto">
        <Image
          imageType="logo"
          width="190px"
          height="70px"
          bgsize="cover"
          margin="22px auto 22px auto"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
        />
        <Grid width="268px" margin=" 0 auto">
          <Input
            _onChange={(e) => {
              setEmail(e.target.value);
            }}
            onSubmit={() => {}}
            placeholder="이메일 주소"
            padding="11px 0px 9px 8px"
            margin="5px auto"
          />
          <Input
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
            onSubmit={() => {}}
            placeholder="비밀번호"
            padding="11px 0px 9px 8px"
            margin="5px auto"
            type="password"
          />
          <Button
            _onClick={login}
            padding="8px 0px"
            margin="10px auto 5px auto"
          >
            로그인
          </Button>
          <Button
            // 회원가입 페이지 이동
            _onClick={() => {
              history.push("/signup");
            }}
            padding="8px 0px"
            margin="5px auto 100px auto"
            bold
          >
            가입하기
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
