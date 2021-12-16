import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoLogoFacebook } from "react-icons/ai";

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

        margin="100px auto 0px auto"

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
            margin="29px auto 3px auto"
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
            margin="3px auto"
            type="password"
          />
          {/* <Grid hide={pwd === "" ? "none" : null}>
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
          </Grid> */}
          <Button
            _onClick={login}
            padding="5px 0px"
            margin="10px auto 5px auto"
            borderRadius="5px"
          >
            로그인
          </Button>

          <Grid is_flex margin="10px auto 18px auto">
            <Line></Line>
            <Text size="13px" margin="0 18px" color="#8e8e8e" bold>
              또는
            </Text>
            <Line></Line>
          </Grid>
          <Grid is_flex margin="30px auto 20px auto" cursor="pointer">
            <Image
              imageType="preview"
              src="https://icons.iconarchive.com/icons/sicons/flat-shadow-social/256/facebook-icon.png"
              width="16px"
              margin="0 8px 0 auto"
            />
            <Span>Facebook으로 로그인</Span>
          </Grid>
          <Grid>
            <Atag>비밀번호를 잊으셨나요?</Atag>
          </Grid>
          {/* <Button

            // 회원가입 페이지 이동
            _onClick={() => {
              history.push("/signup");
            }}
            padding="8px 0px"
            margin="5px auto 100px auto"
            bold
          >
            가입하기
          </Button> */}
        </Grid>
      </Grid>
      <Grid
        padding="10px 0"
        width="350px"
        border="1px solid #e4e4e4"
        margin="10px auto"
      >
        <Grid is_flex>
          <Text margin="15px 0 15px auto" size="14px">
            계정이 없으신가요?
          </Text>
          <Text
            margin="15px auto 15px 5px"
            size="14px"
            color="#0095f6"
            cursor="pointer"
            bold
            _onClick={() => {
              history.push("/signup");
            }}
          >
            가입하기
          </Text>
        </Grid>
      </Grid>
      <Grid width="350px" margin="0px auto">
        <Text margin="20px auto 10px auto" textalign="center" size="14px">
          앱을 다운로드하세요.
        </Text>
      </Grid>
      <Grid is_flex width="350px" margin="0px auto 45px auto">
        <Image
          imageType="logo"
          width="136px"
          height="40px"
          bgsize="cover"
          margin="10px 4px 20px auto"
          src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"
        ></Image>
        <Image
          imageType="logo"
          width="136px"
          height="40px"
          bgsize="cover"
          margin="10px auto 20px 4px"
          src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"
        ></Image>
      </Grid>
      <Grid width="350px" margin="auto">
        <FooterText>Meta</FooterText>
        <FooterText>소개</FooterText>
        <FooterText>블로그</FooterText>
        <FooterText>채용 정보</FooterText>
        <FooterText>도움말</FooterText>
        <FooterText>API</FooterText>
        <FooterText>개인정보처리방침</FooterText>
        <FooterText>약관</FooterText>
        <FooterText>인기 계정</FooterText>
        <FooterText>해시태그</FooterText>
        <FooterText>위치</FooterText>
        <FooterText>Instagrang Lite</FooterText>
        <FooterText>뷰티</FooterText>
        <FooterText>댄스</FooterText>
        <FooterText>피트니스</FooterText>
        <FooterText>식음료</FooterText>
        <FooterText>집 및 정원</FooterText>
        <FooterText>음악</FooterText>
        <FooterText>시각 예술</FooterText>
      </Grid>
      <Grid width="350px" margin="auto">
        <FooterText>한국어</FooterText>
        <FooterText>© 2021 Instagram from Meta</FooterText>
      </Grid>
    </React.Fragment>
  );
};

const Line = styled.div`
  border-bottom: 1px solid #dbdbdb;
  width: 103px;
`;

const Span = styled.span`
  display: inline-block;
  margin: 0 auto 0 0;
  font-size: 14px;
  color: #385185;
  font-weight: bold;
`;

const Atag = styled.a`
  margin: 20px auto 10px auto;
  font-size: 12px;
  display: block;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 12px;
  color: #8e8e8e;
  display: inline-block;
  padding: 0 5px 5px 5px;
  margin: 0px;
  align-items: center;
`;

export default Login;
