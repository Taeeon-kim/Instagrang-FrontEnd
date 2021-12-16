import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    width,
    text,
    margin,
    children,
    _onClick,
    bg,
    color,
    border,
    padding,
    height,
    borderRadius,
  } = props;
  const styles = {
    width,
    text,
    margin,
    bg,
    color,
    border,
    padding,
    height,
    borderRadius,
  };
  return (
    <>
      <BtnBox {...styles} onClick={_onClick}>
        {text ? text : children}
      </BtnBox>
    </>
  );
};

Button.defaultProps = {
  _onClick: () => {},
  margin: false,
  text: false,
  children: null,
  width: "100%",
  height: "100%",
  bg: "#0095F6",
  color: "#FFFFFF",
  border: false,
  padding: null,
  borderRadius: null,
};

const BtnBox = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadius};
  box-sizing: border-box;
  ${(props) => (props.margin ? `margin:${props.margin};` : "")}
  ${(props) =>
    props.border ? `border : 1px solid #000000;` : `border : none;`}
background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  cursor: pointer; // 버튼에 마우스 가져다 될 때 손가락 모양의 포인터 추가
`;
export default Button;
