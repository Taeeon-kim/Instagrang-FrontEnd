import React from "react";
import styled from "styled-components";

// 라우터 불러오기
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

// 페이지 불러오기
import Login from "../pages/Login";

function App() {
  return (
    <BrowserRouter>
      <BackImg>
        <Wrap>
          <Route path="/" exact component={Login} />
        </Wrap>
      </BackImg>
    </BrowserRouter>
  );
}

// background color or image
const BackImg = styled.div`
  background-color: #eee;
  height: 150%;
`;

// Wrap 스타일드 컴포넌트
const Wrap = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 500px;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
`;

export default App;
