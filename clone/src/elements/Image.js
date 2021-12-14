import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const { imageType, src, size, bgsize, width, height, margin, padding } =
    props;

  const styles = {
    // style끼리 구분하는게 편해서
    imageType,
    src,
    size,
    bgsize,
    width,
    height,
    margin,
    padding,
  };

  if (imageType === "logo") {
    return <ImageLogo {...styles}></ImageLogo>;
  }

  if (imageType === "circle") {
    return <ImageCircle {...styles}></ImageCircle>;
  }
  if (imageType === "rectangle") {
    return <ImageRectangle {...styles}></ImageRectangle>;
  }
  return (
    <>
      <OutBox>
        <InBox {...styles} />
      </OutBox>
    </>
  );
};

Image.defaultProps = {
  imageType: "logo",
  src: "https://newsimg.hankookilbo.com/cms/articlerelease/2021/06/05/ef519975-80c8-40b6-b25a-47ab6270dc60.png",
  size: 40,
  bgsize: "cover",
};

const ImageRectangle = styled.div`
  width: 200px;
  height: 200px;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background-size: ${(props) => props.bgsize};
  background-image: url("${(props) => props.src}");
`;

const ImageLogo = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background-size: ${(props) => props.bgsize};
  background-image: url("${(props) => props.src}");
`;

const OutBox = styled.div`
  width: 100%;
`;
const InBox = styled.div`
  position: relative; // 상대적인 포지션
  padding-top: 75%; // 75%를 주는 이유는 넓이가 100%이기 때문에 4:3비율을 맟추기 위해
  overflow: hidden; // 이 박스 영역을 벗어나면 숨겨버린다.
  background-image: url("${(props) => props.src}");
  background-size: ${(props) => props.bgsize};
`;

const ImageCircle = styled.div`
  --size: ${(props) =>
    props.size}px; //css 에서도 변수를 만들수있는데 --size 와 같이 쓰면된다.
  /* width: 36px;
    height: 36px;
    border-radius: 36px; */
  width: var(
    --size
  ); //위에 --size 변수를 쓸땐 이렇게 var하고 ()안에 넣어준다. var()함수
  height: var(--size);
  border-radius: var(
    --size
  ); //위에 다 똑같이 준건 Circle 만들때 같은 값이여야 원이 만들어지기때문에
  min-width: 36px;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: 4px;
`;

export default Image;
