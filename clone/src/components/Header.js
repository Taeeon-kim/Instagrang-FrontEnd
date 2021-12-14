import React from "react";
import styled from "styled-components";
import Grid from "../elements/Grid";
import Button from "../elements/Button";
import { history } from "../redux/configureStore";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
const Header = (props) => {
  const dispatch = useDispatch();

  const logOut = (props) => {
    dispatch(userActions.logoutDB());
  };

  const email = localStorage.getItem("token");

  if (email) {
    return (
      <Grid is_flex>
        <Grid padding="10px" borderBottom="1px solid #DBDBDB">
          <img src="insta.png" />
        </Grid>
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
        >
          로그아웃
        </Button>
      </Grid>
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
