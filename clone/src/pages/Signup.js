import React, { useState } from "react";
import { useDispatch } from "react-redux";

// 엘레먼트 불러오기
import Input from "../elements/Input";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Button from "../elements/Button";
import Text from "../elements/Text";

import { actionCreators as userActions } from "../redux/modules/user";
import { checkEmail, checkPassword } from "../shared/signupCheck";

const Signup = () => {
  const dispatch = useDispatch();

  // 상태관리
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdCheck, setPwdCheck] = useState("");

  // 토큰 세션 확인
  const is_session = localStorage.getItem("token");

  const signUp = () => {
    if (email === "" || pwd === "" || userName === "") {
      alert("입력사항을 전부 기입해주세요");
      return;
    }
    if (!checkEmail(email)) {
      alert("유효하지 않은 아이디 형식입니다.");
      return;
    }
    if (!checkPassword(pwd)) {
      alert("아이디가 포함되지 않은 숫자+영문자 형식입니다.");
      return;
    }
    if (pwd.includes(email)) {
      alert("비밀번호에 아이디가 포함되어 있습니다.");
      return;
    }
    if (pwd !== pwdCheck) {
      alert("비밀번호가 다릅니다.");
      return;
    }

    dispatch(userActions.signupDB(email, userName, pwd, pwdCheck));
  };

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
          <Grid hide={email === "" ? "none" : null}>
            <Text
              color={checkEmail(email) ? "#1fc40f" : "#ff5d5d"}
              bold
              margin="0px 0px 5px 5px"
              size="0.75rem"
            >
              {checkEmail(email)
                ? "올바른 양식의 아이디입니다"
                : "올바르지 않는 아이디 형식입니다."}
            </Text>
          </Grid>
          <Input
            _onChange={(e) => {
              setUserName(e.target.value);
            }}
            onSubmit={() => {}}
            placeholder="사용자 이름"
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
                : "아이디가 포함되지 않은 숫자+영문자 형식입니다."}
            </Text>
          </Grid>
          <Input
            _onChange={(e) => {
              setPwdCheck(e.target.value);
            }}
            onSubmit={() => {}}
            placeholder="비밀번호 확인"
            padding="11px 0px 9px 8px"
            margin="5px auto"
            type="password"
          />
          <Grid hide={pwdCheck === "" ? "none" : null}>
            <Text
              color={pwd === pwdCheck ? "#1fc40f" : "#ff5d5d"}
              bold
              margin="0px 0px 5px 5px"
              size="0.75rem"
            >
              {pwd === pwdCheck
                ? "비밀번호가 같습니다."
                : "비밀번호가 다릅니다."}
            </Text>
          </Grid>
          <Button
            _onClick={signUp}
            padding="8px 0px"
            margin="10px auto 50px auto"
          >
            가입
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Signup;
