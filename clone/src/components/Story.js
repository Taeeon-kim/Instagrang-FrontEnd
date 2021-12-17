import React from "react";
import styled from "styled-components";
import Image from "../elements/Image";
import { useSelector } from "react-redux";
import { history } from "../redux/configureStore";

const Story = (props) => {
  return (
    <React.Fragment>
      <StoryContainer>
        {/* {friends.map((v) => {
                    return(
                        <ImageContainer key={v.insta_id}>
                        <Image cursor='pointer' src={v.profile_image}shape='circle' size='80' _onClick={()=> {
                            history.push('/friends/'+v.insta_id)
                        }}></Image>
                        </ImageContainer>
                    )
                })} */}
        {/* 스토리에 내용물이 없을 경우 width가 짧아져 화면이 깨져서 하얀 그림을 넣은 이미지를 Default로 채워주었다. */}
        <ImageContainer>
          <Image
            imageType="circle"
            size="80"
            src="https://mblogthumb-phinf.pstatic.net/20160817_259/retspe_14714118890125sC2j_PNG/%C7%C7%C4%AB%C3%F2_%281%29.png?type=w800"
          ></Image>
        </ImageContainer>
        <ImageContainer>
          <Image
            imageType="circle"
            size="80"
            src="https://item.kakaocdn.net/do/fd0050f12764b403e7863c2c03cd4d2d7154249a3890514a43687a85e6b6cc82"
          ></Image>
        </ImageContainer>
        <ImageContainer>
          <Image
            imageType="circle"
            size="80"
            src="https://newsimg.sedaily.com/2021/04/03/22KXWN5X2Q_2.jpg"
          ></Image>
        </ImageContainer>
        <ImageContainer>
          <Image
            imageType="circle"
            size="80"
            src="https://img.hankyung.com/photo/202111/p1065590921493731_758_thum.jpg"
          ></Image>
        </ImageContainer>
        <ImageContainer>
          <Image
            imageType="circle"
            size="80"
            src="https://lh3.googleusercontent.com/proxy/fQFlH5DELQ8fUFjdLjnwZaR7GuCNLR1fBtiuaXlunBEhch5iIpaLSuEe3UwH2zrS5gFPSFcUTAoL4NgXANTVHMI7d0ZJtMM_jkF5bIJmf70RD8WwPoXiYtANPu2RvjbM0EFngykhk1-ceDh79LJbnKg_yzviYfYZLOt3lhw8_USGYQ"
          ></Image>
        </ImageContainer>
        <ImageContainer>
          <Image
            imageType="circle"
            size="80"
            src="https://w.namu.la/s/db854de68ffaa4ec688cc573a06d28d6b6e024c3fcd6160a6496103d0cacd5bfc3345a5dffc4c45b7591a97538ddc42280e0a57c9e2155ae90a836cff97436f13a20a07e6942b45fb572538f6bc5edd0"
          ></Image>
        </ImageContainer>
        <ImageContainer>
          <Image shape="circle" size="80"></Image>
        </ImageContainer>
      </StoryContainer>
    </React.Fragment>
  );
};

const StoryContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  border: 1px solid #dbdbdb;
  background-color: white;
  padding: 10px;
  overflow: auto; // 요거 쓰면 아래 스크롤생김
  margin: auto;
  min-width: 456px;
`;

const ImageContainer = styled.div``;

export default Story;
