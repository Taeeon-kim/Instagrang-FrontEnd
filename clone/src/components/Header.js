import React from "react";
import logoutImage from "../user.png";
import styled from "styled-components";
import Grid from "../elements/Grid";
import Button from "../elements/Button";
import IconButton from "../elements/IconButton";
import { history } from "../redux/configureStore";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import Image from "../elements/Image";
const Header = (props) => {
  const dispatch = useDispatch();

  const logOut = (props) => {
    dispatch(userActions.logoutDB());
  };
  const is_login = useSelector((state) => state.user.is_login);
  console.log(is_login);
  // 로그인 확인
  const is_token = localStorage.getItem("token");
  // 로그아웃 확인 코드
  const onRemove = () => {
    if (window.confirm("로그아웃 하시겠습니까?") === true) {
      logOut();
    } else {
      return false;
    }
  };
  if (is_login && is_token) {
    return (
      <HeaderContainer>
        <Grid is_flex width="935px">
          <Grid
            _onClick={() => {
              history.push("/");
            }}
          >
            <Image
              margin="20px 0px 0px 0px"
              imageType="logo"
              width="103px"
              height="29px"
              bgsize="cover"
              alt="insta"
              src="https://cdn.freelogovectors.net/wp-content/uploads/2016/12/InstagramLogo.png"
            />
          </Grid>
          <Grid is_flex>
            <IconButton
              home
              margin="0 0 0 auto"
              padding="0 0 7px 0"
              size="30px"
            ></IconButton>
            <IconButton
              message
              margin="0 0 0 10px"
              padding="0 0 7px 0"
              size="30px"
            ></IconButton>
            <IconButton
              compass
              margin="0 0 0 10px"
              padding="0 0 7px 0"
              size="30px"
            ></IconButton>
            <IconButton
              unLikeIcon
              margin="0 0 0 10px"
              padding="0 0 7px 0"
              size="30px"
            ></IconButton>
            <IconButton
              plusIcon
              margin="0 0 0 10px"
              padding="0 0 7px 0"
              size="30px"
              _onClick={() => {
                history.push("/addpost");
              }}
            ></IconButton>
            <Image
              imageType="preview"
              width="24px"
              height="24px"
              margin="0 0 0 22px"
              src={logoutImage}
              _onClick={onRemove}
            />
            <Button
              _onClick={() => {
                // 로그아웃 확인 코드
                const onRemove = () => {
                  if (window.confirm("로그아웃 하시겠습니까?") === true) {
                    logOut();
                  } else {
                    return false;
                  }
                };
                onRemove();
              }}
              margin="0 0 0 22px"
              width="15%"
              bg="white"
              color="#0095F6"
            >
              로그아웃
            </Button>
          </Grid>
        </Grid>
      </HeaderContainer>
    );
  }
  return (
    <React.Fragment>
      <HeaderWrap>
        <Grid is_flex bg="#fff"></Grid>
      </HeaderWrap>
    </React.Fragment>
  );
};

export default Header;

const LogoutImage = styled.image``;

const HeaderWrap = styled.div`
  width: 100%;
  max-width: 500px;
  position: fixed;
  top: 0px;
  background-color: #fff;
`;

const HeaderContainer = styled.div`
  border: 1px solid #dbdbdb;
  width: 100%;
  height: 60px;
  position: fixed;
  z-index: 1;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  // margin: -10px 0px 0px -10px; // 삭제 하는 것이 좋아 보입니다.
`;

const HeaderContents = styled.div`
  max-width: 1000px;
  width: 100%;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
