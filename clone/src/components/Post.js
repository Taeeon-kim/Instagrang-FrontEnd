import React from "react";
import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Image from "../elements/Image";
import IconButton from '../elements/IconButton';
import styled from 'styled-components';
import Input from "../elements/Input";

const Post = (props) => {
  return (
    <React.Fragment>
      <Grid border="1px solid #DBDBDB" position  margin="auto" width="50%" >
        <Grid is_flex>
           <Image imageType = "circle" src ={props.user_profile} /><Text margin="0px 0px" bold>{props.nickname}</Text><Grid margin="0px 200px"> {/*is_me? 수정,삭제 btn : ...*/}</Grid>
        </Grid>
        <Grid>
        <Image imageType="rectangle" src={props.image}/> 
        </Grid>
        <Grid is_flex padding="6px 0px 8px 10px">
         {/*is_click? : */}  <IconButton likeIcon padding="8px"/> : <IconButton unLikeIcon padding="8px"/>  <IconButton commentIcon padding="8px"/>   {/*좋아요하트 아이콘, 댓글말풍선 아이콘*/} 
        </Grid>
        <Grid>
           <Text bold margin ="0px 10px">좋아요 oo 개</Text>
        </Grid>
        <Grid is_flex>
        <Text margin="0px 10px" bold>{props.nickname}</Text>{props.detail?<Text >{props.content}</Text>:<Grid><SkipContent>{props.content}</SkipContent><Grid _onClick={()=>{}}><Text>더보기</Text></Grid></Grid>}  {/* 생략부분*/}
        </Grid>
        <Grid>
          <Input padding="10px" placeholder="댓글 달기.."></Input>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};


Post.defaultProps = {
     
       
user_profile : "https://youngble.s3.ap-northeast-2.amazonaws.com/KakaoTalk_Photo_2021-11-17-00-56-23.jpeg", //테스트용으로 그전 강의에서 쓰던것 가져와서 먼저 써봄
     
detail: false,
nickname:"test_nickname",
content:"\n간단한 소개글입니다. 한칸을 띄지않고 계속쓴다면 이렇게 쭉쭉 나올것입니다. 포스트 맨마지막 부분까지말이죠, 하지만 한칸을 띄는순간 더보기버튼이 활성화 되게 됩니다. 이게 바로 -webkit-line-clamp",
image: "https://newsimg.hankookilbo.com/cms/articlerelease/2021/06/05/ef519975-80c8-40b6-b25a-47ab6270dc60.png",
createAt:"2021-11-29 11:00:00",
comment_cnt: 10,
is_me:false,

}

const SkipContent=styled.p`
    overflow: hidden;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
width: 70%px;
white-space: pre-wrap;
    
  `

export default Post;
