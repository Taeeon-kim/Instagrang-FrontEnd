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
import Text from "../elements/Text";

import { checkEmail, checkPassword } from "../shared/signupCheck";

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
      <Grid
        padding="10px 0"
        width="350px"
        border="1px solid #e4e4e4"
        margin="100px auto"
      >
        <Image
          imageType="logo"
          width="175px"
          height="50px"
          bgsize="cover"
          margin="22px auto 12px auto"
          src="https://cdn.freelogovectors.net/wp-content/uploads/2016/12/InstagramLogo.png"
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
          {/* <Grid hide={email === "" ? "none" : null}>
            <Text
              color={checkEmail(email) ? "#1fc40f" : "#ff5d5d"}
              bold
              margin="0px 0px 5px 5px"
              size="0.75rem"
            >
              {checkEmail(email)
                ? "올바른 양식의 이메일입니다"
                : "올바르지 않는 이메일 형식입니다."}
            </Text>
          </Grid> */}
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
          <Grid hide={pwd === "" ? "none" : null}>
            <Text
              color={
                checkPassword(pwd) && pwd.includes(email) === false
                  ? "#1fc40f"
                  : "#ff5d5d"
              }
              bold
              margin="0px 0px 13px 5px"
              size="0.75rem"
            >
              {checkPassword(pwd) && pwd.includes(email) === false
                ? "사용할 수 있는 비밀번호입니다"
                : "특수문자 영문, 숫자 포함, 최소 8자 이상이어야 합니다."}
            </Text>
          </Grid>
          <Button
            _onClick={login}
            padding="8px 0px"
            margin="10px auto 5px auto"
          >
            로그인
          </Button>
          {/* <Grid is_flex>
            <Grid border="1px solid black"></Grid>
            <Text size="13px" width="26px" margin="0 18px">
              또는
            </Text>
            <Grid border="1px solid black"></Grid>
          </Grid> */}
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
