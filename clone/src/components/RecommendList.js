import React from "react";
import styled from "styled-components";

import Image from "../elements/Image";
import Text from "../elements/Text";
import logoutImage from "../user.png";
import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import Grid from "../elements/Grid";


const RecommendList = (props) => {
    return(
        <React.Fragment>
          <Grid  margin="0px 0px 0px -100px">

            <Grid is_fix is_flex height ="70px" top ="100px" width="400px" left="61%" >
                 <Image cursor='pointer' src={logoutImage} imageType="circle" size="66" />
                 <Grid width="200px" height="70px">
                     <Text margin="20px 0px 5px 5px" bold width="200px" height="20px" size="14px">유저닉네임 </Text>
                     <Text  margin="0px 0px 0px 5px" width="200px" height="20px" color="#8E8E8E" size="14px">이름 </Text>
                 </Grid>
                 <Text bold color="#0095F6" size="12px">전환</Text>
             </Grid>
             <Grid is_fix is_flex height ="20px" top ="180px" width="400px" left="61%">
               <Text margin="10px 0px 0px 0px" bold width="250px" color="#8E8E8E" size="14px">회원님을 위한 추천</Text>
               <Text margin="10px 0px 0px 0px" bold size="12px">모두 보기</Text>  
            </Grid>



            {/* 여기부분을 맵핑돌리면 될거같다 */}
            <Grid padding="0px 8px" is_fix is_flex height ="70px" top ="200px" width="400px" left="61%">
                 <Image  cursor='pointer' src={props.src} imageType="circle" size="42"  src="https://img.insight.co.kr/static/2020/08/26/700/9q3e4k3731j1y60xqfg0.jpg"/>
                 <Grid width="210px" height="70px">
                     <Text margin="20px 0px 5px 5px" bold width="220px" height="20px" size="14px">유저닉네임 </Text>
                     <Text  margin="0px 0px 0px 5px" width="220px" height="20px" color="#8E8E8E" size="14px">instagram 신규 가입 </Text>
                 </Grid>
                 <Text bold color="#0095F6" size="12px">팔로우</Text>
             </Grid>
             <Grid padding="0px 8px" is_fix is_flex height ="70px" top ="270px" width="400px" left="61%">
                 <Image  cursor='pointer' src={props.src} imageType="circle" size="42" src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/cnoC/image/8Ql-wYAJmiMkSg4gvS6zhMewDg4.JPEG"/>
                 <Grid width="210px" height="70px">
                     <Text margin="20px 0px 5px 5px" bold width="220px" height="20px" size="14px">유저닉네임 </Text>
                     <Text  margin="0px 0px 0px 5px" width="220px" height="20px" color="#8E8E8E" size="14px">회원님을 위한 추천</Text>
                 </Grid>
                 <Text bold color="#0095F6" size="12px">팔로우</Text>
             </Grid>
             <Grid padding="0px 8px" is_fix is_flex height ="70px" top ="340px" width="400px" left="61%">
                 <Image  cursor='pointer' src={props.src} imageType="circle" size="42" src="https://ae01.alicdn.com/kf/HTB1Q2xDMXXXXXagapXXq6xXFXXXp/-.jpg_Q90.jpg_.webp"/>
                 <Grid width="210px" height="70px">
                     <Text margin="20px 0px 5px 5px" bold width="220px" height="20px" size="14px">유저닉네임 </Text>
                     <Text  margin="0px 0px 0px 5px" width="220px" height="20px" color="#8E8E8E" size="14px">instagram 신규 가입 </Text>
                 </Grid>
                 <Text bold color="#0095F6" size="12px">팔로우</Text>
             </Grid>
             <Grid padding="0px 8px" is_fix is_flex height ="70px" top ="410px" width="400px" left="61%">
                 <Image  cursor='pointer' src={props.src} imageType="circle" size="42" src="https://pbs.twimg.com/profile_images/861193219245080577/-iI9ThG0_400x400.jpg"/>
                 <Grid width="210px" height="70px">
                     <Text margin="20px 0px 5px 5px" bold width="220px" height="20px" size="14px">유저닉네임 </Text>
                     <Text  margin="0px 0px 0px 5px" width="220px" height="20px" color="#8E8E8E" size="14px">instagram 신규 가입 </Text>
                 </Grid>
                 <Text bold color="#0095F6" size="12px">팔로우</Text>
             </Grid>
             <Grid padding="0px 8px" is_fix is_flex height ="70px" top ="480px" width="400px" left="61%">
                 <Image  cursor='pointer' src={props.src} imageType="circle" size="42" src="https://mblogthumb-phinf.pstatic.net/MjAxNzAzMzFfNjEg/MDAxNDkwOTM2NjE4MDQy.eIMvlKaVriccpz8TPo-Wyagr3J6oEz_pRe3S32gADVIg.jQUkh4ws9TiGn6y2h2iu3z5xmyKvxrRMgS0rjJVTRPQg.PNG.jkirby/%EC%9E%A0%EB%A7%8C%EB%B3%B4.png?type=w800"/>
                 <Grid width="210px" height="70px">
                     <Text margin="20px 0px 5px 5px" bold width="220px" height="20px" size="14px">유저닉네임 </Text>
                     <Text  margin="0px 0px 0px 5px" width="220px" height="20px" color="#8E8E8E" size="14px">instagram 신규 가입 </Text>
                 </Grid>
                 <Text bold color="#0095F6" size="12px">팔로우</Text>
             </Grid>
          
          </Grid>
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
  /* @media (max-width: 1000px) {
    display: none;
  } */
`;

const MyProfileContainer = styled.div`
  display: flex;
  /* flex-direction: row; */
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