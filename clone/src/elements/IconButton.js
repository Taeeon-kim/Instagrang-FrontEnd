import React from "react";
import styled from "styled-components";
import {
  AiOutlineHeart, // 좋아요 해제
  AiOutlineCheck, // 게시물 등록 버튼
} from "react-icons/ai";
import {BiArrowBack} from "react-icons/bi"
import {FaRegComment} from "react-icons/fa"
import {FcLike} from "react-icons/fc"
import { MdOutlineAddBox } from "react-icons/md";


const IconButton = (props) => {
  // props
  const {
    _onClick,
    likeIcon, // 좋아요 아이콘
    unLikeIcon, // 좋아요 해제 아이콘
    commentIcon, // 코멘트 아이콘
    plusIcon, // 포스트 추가 아이콘
    checkIcon, // 게시물 등록 아이콘
    leftArrowIcon, // 뒤로가기 아이콘
    size,
    height,
    margin,
    padding,
  } = props;

  // props style
  const styles = {
    padding : padding,
    size: size,
    height: height,
    margin: margin,
  };

  if (likeIcon) {

    return(
      <React.Fragment>
        <Icon {...styles}>
          <FcLike size={size} onClick={_onClick}></FcLike>
        </Icon>
      </React.Fragment>
    );
  }
  if (unLikeIcon) {
    return(
      <React.Fragment>
        <Icon {...styles}>
          <AiOutlineHeart size={size} onClick={_onClick}></AiOutlineHeart>
        </Icon>
      </React.Fragment>
    );
  }
  if (commentIcon) {
    return(
      <React.Fragment>
        <Icon {...styles}>
          <FaRegComment size={size} onClick={_onClick}></FaRegComment>
        </Icon>
      </React.Fragment>
    );
  }
  if (plusIcon) {
    return(
      <React.Fragment>
        <Icon {...styles}>
          <MdOutlineAddBox size={size} onClick={_onClick}></MdOutlineAddBox>
        </Icon>
      </React.Fragment>
    );
  }
  if (checkIcon) {
    return(
      <React.Fragment>
        <Icon {...styles}>
          <AiOutlineCheck size={size} onClick={_onClick}></AiOutlineCheck>
        </Icon>
      </React.Fragment>
    );
  }
  if (leftArrowIcon) {
    return(
      <React.Fragment>
        <Icon {...styles}>
          <BiArrowBack size={size} onClick={_onClick}></BiArrowBack>
        </Icon>
      </React.Fragment>
    );
  }
};

// IconButton DefaultProps
IconButton.defaultProps = {
  delete: false,
  size: "24px",
  height: "24px",
  margin: null,
  padding: null,
  _onClick: () => {},
  likeIcon: false,
  unLikeIcon: false,
  commentIcon: false,
  plusIcon: false,
  checkIcon: false,
  leftArrowIcon: false,
  width: "100%",
};

// ImageButton 스타일드 컴포넌트
const Icon = styled.div`
  margin: ${(props) => props.margin};
  cursor: pointer;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;

export default IconButton;
