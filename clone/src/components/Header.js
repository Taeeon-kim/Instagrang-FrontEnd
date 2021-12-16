import React from "react";
import styled from "styled-components";
import Grid from "../elements/Grid";
import Button from "../elements/Button";
import IconButton from "../elements/IconButton";
import { history } from "../redux/configureStore";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
const Header = (props) => {
  const dispatch = useDispatch();

  const logOut = (props) => {
    dispatch(userActions.logoutDB());
  };
  const is_login = useSelector((state) => state.user.is_login);
  console.log(is_login);
  // 로그인 확인
  const is_token = localStorage.getItem("token");

  if (is_login && is_token ) {
    return (
      <HeaderContainer>
        
        <Grid is_flex padding="10px" borderBottom="1px solid #DBDBDB"> 
          <Grid
            _onClick={() => {
              history.push("/");
            }}
          >
            <img alt='insta' src="insta.png" />
          </Grid>

          <IconButton
            plusIcon
            margin="0 0 0 auto"
            padding="0 0 7px 0"
            size="32px"
            _onClick={() => {
              history.push("/addpost");
            }}
          ></IconButton>
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
            width="15%"
            bg="white"
            color="#0095F6"
          >
            로그아웃
          </Button>
        </Grid>
      </HeaderContainer>
    );
  }
  return (
    <React.Fragment>
      <HeaderWrap>
        <Grid is_flex padding="10px 20px" margin="0 0 0px 0" bg="#fff"></Grid>
      </HeaderWrap>
    </React.Fragment>
  );
};

export default Header;

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
  height: 55px;
  position: fixed;
  z-index: 1;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0px 0px 0px -10px;
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
