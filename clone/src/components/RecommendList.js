import React from "react";
import styled from "styled-components";

import Image from "../elements/Image";
import Text from "../elements/Text";

import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";


const RecommendList = (props) => {
    return(
        <React.Fragment>
            <Container>
dd
            </Container>
        </React.Fragment>
    )
}





const Container = styled.div`
  min-width: 300px;
  height: 100%;
  position: fixed;
  top: 120;
  right: 20;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const MyProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const MyInfo = styled.div`
  display: flex;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 10px;
`;

const RecommendContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  height: 400px;
  overflow:auto;
`;

const RecommendTextBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const Recommended = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const RecommendedUser = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default RecommendList;