import React from "react";
import styled from "styled-components";
import {
  AiOutlineHeart, // 좋아요 해제
  AiOutlineCheck, // 게시물 등록 버튼
} from "react-icons/ai";
import { BiArrowBack, BiMessageRounded } from "react-icons/bi";
import { FaRegComment, FaRegCompass } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { MdOutlineAddBox } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { HiHome } from "react-icons/hi";

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
    moreView, // 더보기 아이콘
    compass, //
    message,
    home,
    size,
    height,
    margin,
    padding,
    cursor, //커서 변수로 추가
  } = props;

  // props style
  const styles = {
    padding: padding,
    size: size,
    height: height,
    margin: margin,
    cursor: cursor, //커서 변수로 추가
  };

  if (likeIcon) {
    return (
      <React.Fragment>
        <Icon {...styles}>
          <FcLike size={size} onClick={_onClick}></FcLike>
        </Icon>
      </React.Fragment>
    );
  }
  if (unLikeIcon) {
    return (
      <React.Fragment>
        <Icon {...styles}>
          <AiOutlineHeart size={size} onClick={_onClick}></AiOutlineHeart>
        </Icon>
      </React.Fragment>
    );
  }
  if (commentIcon) {
    return (
      <React.Fragment>
        <Icon {...styles}>
          <FaRegComment size={size} onClick={_onClick}></FaRegComment>
        </Icon>
      </React.Fragment>
    );
  }
  if (plusIcon) {
    return (
      <React.Fragment>
        <Icon {...styles}>
          <MdOutlineAddBox size={size} onClick={_onClick}></MdOutlineAddBox>
        </Icon>
      </React.Fragment>
    );
  }
  if (checkIcon) {
    return (
      <React.Fragment>
        <Icon {...styles}>
          <AiOutlineCheck size={size} onClick={_onClick}></AiOutlineCheck>
        </Icon>
      </React.Fragment>
    );
  }
  if (leftArrowIcon) {
    return (
      <React.Fragment>
        <Icon {...styles}>
          <BiArrowBack size={size} onClick={_onClick}></BiArrowBack>
        </Icon>
      </React.Fragment>
    );
  }
  if (moreView) {
    return (
      <React.Fragment>
        <Icon {...styles}>
          <BsThreeDots size={size} onClick={_onClick}></BsThreeDots>
        </Icon>
      </React.Fragment>
    );
  }
  if (compass) {
    return (
      <React.Fragment>
        <Icon {...styles}>
          <FaRegCompass size={size} onClick={_onClick}></FaRegCompass>
        </Icon>
      </React.Fragment>
    );
  }
  if (message) {
    return (
      <React.Fragment>
        <Icon {...styles}>
          <BiMessageRounded size={size} onClick={_onClick}></BiMessageRounded>
        </Icon>
      </React.Fragment>
    );
  }
  if (home) {
    return (
      <React.Fragment>
        <Icon {...styles}>
          <HiHome size={size} onClick={_onClick}></HiHome>
        </Icon>
      </React.Fragment>
    );
  }
  return <React.Fragment></React.Fragment>;
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
  moreView: false,
  width: "100%",
  cursor: "pointer", //커서 변수로 추가
};

// ImageButton 스타일드 컴포넌트
const Icon = styled.div`
  margin: ${(props) => props.margin};
  cursor: ${(props) => props.cursor}; //커서 변수로 추가
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;

export default IconButton;
