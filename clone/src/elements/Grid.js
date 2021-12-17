import React from "react";
import { FaSadCry, FaSmileBeam } from "react-icons/fa";
import styled from "styled-components";

const Grid = (props) => {
  const {
    is_fix,
    border,
    is_flex,
    width,
    padding,
    margin,
    bg,
    children,
    _onClick,
    position,
    height,
    cursor,
    borderBottom,
    borderTop,
    hide,
    minWidth, // 최소 width 값 지정
    borderRadius,
    maxWidth,
    top,
    left,
    minHeight,
    zindex,
    media,
    borderRight,
    berderLeft,
    overflowy,
    overflowx,

  } = props;

  const styles = {
    is_flex: is_flex,
    width: width,
    margin: margin,
    padding: padding,
    bg: bg,
    border: border,
    is_fix: is_fix,
    position: position,
    height: height,
    cursor: cursor,
    borderBottom: borderBottom,
    borderRight:borderRight,
    hide: hide,
    minWidth: minWidth, // 최소 width 값 지정
    borderRadius: borderRadius,
    maxWidth: maxWidth,
    top: top,
    left: left,
    minHeight: minHeight,
    zindex:zindex,
    media:media,
    berderLeft:berderLeft,
    overflowy:overflowy,
    overflowx:overflowx,
    borderTop:borderTop,
  };

  return (
    <>
      <GridBox {...styles} onClick={_onClick}>
        {children}
      </GridBox>
    </>
  );
};

Grid.defaultProps = {
  children: null,
  is_flex: false,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
  _onClick: () => {},
  border: false,
  is_fix: false,
  position: false,
  height: "100%",
  cursor: "Default",
  borderBottom: false,
  berderLeft: false,
  minWidth: null, // 최소 width 값 지정
  borderRadius: null,
  maxWidth: null,
  top: null ,
  left: null,
  minHeight: null,
  zindex:false,
  media:"false",
  overflowy:false,
  overflowx:false,
  borderTop:false,
  
};

const GridBox = styled.div`

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  box-sizing: border-box;
  cursor: ${(props) => props.cursor};
  border-top: ${(props) => props.borderTop};
  ${(props) => (props.overflowy ? ` overflow-y:${props.overflowy};` : "")}
  ${(props) => (props.overflowx ? ` overflow-x:${props.overflowx};` : "")}
  ${(props) => (props.padding ? `padding:${props.padding};` : "")}
  ${(props) => (props.margin ? `margin:${props.margin};` : "")}
${(props) => (props.bg ? `background-color:${props.bg};` : "")}
/* ${(props) =>
  props.is_flex
    ? `display: flex; align-tiems: center; justify-content: space-between;`
    : ""} */
${(props) => (props.is_flex ? `display: flex; align-items: center;` : "")}
${(props) => (props.border ? `border:${props.border};` : "border: none;")}
${(props) =>
  props.is_fix ? ` position: fixed;   z-index: 1;` : ""}
${(props) => (props.position ? `position: ${props.position};` : "")}
${(props) =>
  props.borderBottom ? `border-bottom : ${props.borderBottom};` : ""}
  ${(props) =>
  props.borderBottom ? `border-top : ${props.borderTop};` : ""}
  ${(props) =>
  props.berderLeft ? `border-left : ${props.berderLeft};` : ""}
${(props) =>
  props.hide ? `display:none` : "none"}; // 가입양식 유효성 검사시 안내문구
  min-width: ${(props) => props.minWidth}; // 최소 width 값 지정
  max-width: ${(props) => props.maxWidth}
  min-height: ${(props) => props.minHeight}; // 최소 width 값 지정
  z-index: ${(props) => (props.zindex ? `1;` : null)};
  border-radius: ${(props) => props.borderRadius};
  @media (max-width:700px) {
        width:100%;
        padding: 0px;
    }
  ${(props) => (props.media ? `@media (max-width:${props.media}){display:none};` : "")}
`;

export default Grid;
