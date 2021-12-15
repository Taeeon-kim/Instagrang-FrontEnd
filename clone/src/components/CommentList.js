import React from "react";
import Text from "../elements/Text";
import Grid from "../elements/Grid";
import Image from '../elements/Image';

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";

const CommentList = (props) => {

  const dispatch = useDispatch();
  const comment_list = useSelector(state => state.comment.list);
  console.log(comment_list)


  React.useEffect(()=>{
    // if(!comment_list[post_id]){
    //   dispatch(commentActions.getCommentFB(post_id));
    // }
  },[])
//   if(!comment_list[post_id] || !post_id){
//     return null;
//   }

  return (
    
      <Grid padding="16px">
        {comment_list.map( c =>{
          return  <CommentItem key={c.id} {...c}/>
        })}

      </Grid>
 
  );
};

CommentList.defaultProps ={
  postId:null,

}

const CommentItem = (props) => {

    // const {user_profile,user_name,user_id,post_id,insert_dt, contents} =props
  return (
    <Grid >
        <Grid is_flex width="auto"> 
            <Image imageType="circle" src={props.user_profile}/>
            <Text bold>{props.nickname}</Text>
            <Text margin="0px" width ="100%">{props.content}</Text>
        </Grid>
        <Grid  margin ="0px 40px">
            <Text size="13px" color= "#8E8E8E" bold margin="10px">{props.createdAt}</Text>
        </Grid>
    </Grid>
  );
};


CommentItem.defaultProps = {
    user_profile : "https://youngble.s3.ap-northeast-2.amazonaws.com/KakaoTalk_Photo_2021-11-17-00-56-23.jpeg",
    nickname : "test",
    commentId: null,
    content : "",
    createdAt: '2021-01-01 19:00:00',
}

export default CommentList;