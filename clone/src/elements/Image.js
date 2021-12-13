import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const {
    imageType,
    imageUrl,
    size,
    backgroundSize,
    width,
    height,
    margin,
    padding,
  } = props;

  const styles = {
    // style끼리 구분하는게 편해서
    size: size,
    width: width,
    height: height,
    margin: margin,
    padding: padding,
    backgroundSize: backgroundSize,
    imageUrl: imageUrl,
  };
  if (imageType === "logo") {
    return (
      <>
        <ImageLogo {...styles}></ImageLogo>
      </>
    );
  }
};

Image.defaultProps = {
  imageType: "logo", // 동그란 이미지, 사각형 포스트 이미지
  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png",
  size: 40,
  backgroundSize: "cover",
  width: null,
  height: null,
  margin: null,
  padding: null,
};

const ImageLogo = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background-size: ${(props) => props.backgroundSize};
  background-image: url("${(props) => props.imageUrl}");
`;

// const OutBox = styled.div`
//   width: 100%;
// `;
// const InBox = styled.div`
//   position: relative; // 상대적인 포지션
//   padding-top: 75%; // 75%를 주는 이유는 넓이가 100%이기 때문에 4:3비율을 맟추기 위해
//   overflow: hidden; // 이 박스 영역을 벗어나면 숨겨버린다.
//   background-image: url("${(props) => props.src}");
//   background-size: ${(props) => props.bgsize};
// `;

export default Image;
