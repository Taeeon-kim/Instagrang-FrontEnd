import React from "react";
import Post from "../components/Post";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";
// import Permit from "../shared/Permit";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Text from "../elements/Text";
import Button from "../elements/Button";
import IconButton from "../elements/IconButton"

const PostDetail = (props) => {
  const postId = props.match.params.id;
  console.log(postId);
  const dispatch = useDispatch();
//   const user_info = useSelector((state) => state.user.user);
  const post_list = useSelector((state) => state.post.list);
    console.log(post_list)

  const post = post_list.filter((list) => list.postId === parseInt(postId));
  
  const is_login = useSelector((state)=> state.user.user.userId);
  // const post_idx = post_list.findIndex(p => p.postId === parseInt(postId));
  // console.log(post_idx)
  // const post = post_list[post_idx];
  // console.log(post)
  // console.log(post_list);
  // const [post, setPost] = React.useState(post_data? post_data : null);
console.log(post.length)
  React.useEffect(() => {
    if(post.length>0){

       return;
    }
else{
    
    dispatch(postActions.getDetailPost(postId));
    dispatch(postActions.getMainAPI()); 
}
  }, );

  return (
    
    <Grid is_flex >
      <Grid  >
        {post[0] && (<Grid is_fix  top="100px" width="50%"  minWidth="150px"  margin="-37px auto" >
          <Image
            imageType="rectangle"
            src={"http://3.36.100.253" + post[0].image}
            height="0px"
          /></Grid>
        )}
      </Grid>
      <Grid media="700px" minWidth="150px"  margin="-37px 300px 0px 0px" width="50%" berderLeft="1px solid #DBDBDB"  >
        <Grid is_flex  borderBottom="1px solid #DBDBDB" width="650px" borderTop="1px solid #DBDBDB" border="1px solid #DBDBDB"> 
          <Image imageType="circle" src={props.user_profile} margin="0px 10px 0px 10px" />
          <Text padding="0px 0px" bold textalign>
            {post[0]&& post[0].nickname}
          </Text>
          <Text bold margin="1px 0px 0px 10px" color="#00376B">• 팔로잉</Text>
          <IconButton
              moreView
              width="20px"
              margin="0px 0px 0px 400px"
              cursor="default"
            ></IconButton>
        </Grid>
        <Grid is_flex  width="650px" borderRight="1px solid #DBDBDB"> 
          <Image imageType="circle" src={props.user_profile} margin="0px 10px 0px 10px" height="50px"/>
          <Text bold textalign  height="20px">
            {post[0]&& post[0].nickname}
          </Text>
          
          <Text wordbreak padding="10px" width="300px" >
          {post[0]&& post[0].content}
        </Text>
        </Grid>
            <Text padding="0px 10px" margin="0px 0px 0px 10px" color="#8E8E8E" size="15px">{post[0]&& post[0].createdAt}</Text>
        
        <Grid width="650px">
         <CommentList postId={postId} />
         </Grid>
         <Grid is_flex border="1px solid #DBDBDB" width="650px">
         <IconButton
              likeIcon
              padding="8px 16px 8px 8px"
              _onClick={() => {
                // setLike(!is_like);
                // dispatch(postAction.likePost(props.postId, login_userId));
              }}
            />
            <IconButton
            commentIcon
            padding="8px 16px 8px 0"
            _onClick={() => {
            //   dispatch(commentActions.getComment(props.postId));
            //   history.push(`/posts/${props.postId}`);
            }}
          />

        <Grid>
          <Text bold margin="0px 10px" size="14px" color="#262626">
            {/* 좋아요 {props.likeList.length} 개 */}
            좋아요 oo 개
          </Text>
        </Grid>
            
         </Grid>
         <Grid>
            {/* <CommentWrite postId={props.postId}></CommentWrite> */}
            </Grid>
      </Grid>
    </Grid>
  );
};




export default PostDetail;

