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
  const is_login = useSelector((state)=> state.user.user.userId);
  console.log(is_login)
  React.useEffect(()=>{
    if(comment_list.length>0){
        // console.log("dd")
        dispatch(commentActions.setComment(comment_list));
      
    }
    else{
    dispatch(commentActions.getComment(parseInt(props.postId)));
    }
    // console.log("dd22")
    // console.log(props.postId)
  },[]) // 만약 []부분을 빼면 위의 조건에서 if에 맞지않고 else에 맞게 되는데 계속해서 무한루프가 걸린다.
//   if(!comment_list[postId] || !post_id){
//     return null;
//   }

  return (

      <Grid padding="16px">
        {comment_list.map( c =>{
          if(c.userId === is_login)
          {
          return  <CommentItem key={c.commentId} {...c} is_me/>
         }
         else{
          return  <CommentItem key={c.commentId} {...c} />
         }
        })
        
        }

      </Grid>
 
  );
};

CommentList.defaultProps ={
  postId:null,
  is_me:false,

}

const CommentItem = (props) => {

    const dispatch = useDispatch();
    const deleteComment = () => {

        console.log(props.commentId);
        dispatch(commentActions.deleteCommentDB(props.commentId));
        
      };
    // const {user_profile,user_name,user_id,post_id,insert_dt, contents} =props
  return (
    <Grid >
        <Grid is_flex width="auto"> 
            <Image imageType="circle" src={props.user_profile}/>
            <Text bold margin="0px 5px 0px 0px">{props.nickname}</Text>
            <Text wordbreak margin="0px" width ="100%">{props.content}</Text>
            {props.is_me? <Text
             width= "50px"
                margin="0px"
                padding="0px 0px 6px 0px"
                textalign
                bold
                size="15px"
                color="#0095F6"
                cursor="pointer"
                
                _onClick={()=> deleteComment(props.commentId)}
              >
                삭제
              </Text> : null }
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