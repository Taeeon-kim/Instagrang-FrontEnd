import React from "react";
import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Input from "../elements/Input";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { useDispatch, useSelector } from "react-redux";

const CommentWrite = (props) => {
  const dispatch = useDispatch();

   
    const dispatch = useDispatch();
   
     const [comment_text, setCommentText ]= React.useState("");
 
    const {postId} = props;
    
    const write =(e) =>{
        setCommentText(e.target.value)
        console.log(comment_text)
        dispatch(commentActions.addCommentDB(postId, comment_text))
        setCommentText("");  //이렇게 클린하기위해서 아래 value={comment_text}를 쓴것이다.


    }
    React.useEffect(()=>{
        
      },[])
    return (
         <Grid is_flex>
          <Input padding="10px" placeholder="댓글 달기.." _onChange={(e)=>{  setCommentText(e.target.value)}} value={comment_text}></Input>
         {comment_text.length>0 ? <Text position ="absolute" left="50%" color ="#0095F6" _onClick={write}>게시</Text>: <Text position ="absolute" left="50%" color ="#BFE0FD">게시</Text>}
        </Grid>
       
    )
}


  const write = (e) => {
    setCommentText(e.target.value);
    console.log(comment_text);
    dispatch(commentActions.addCommentDB(postId, comment_text));
    setCommentText(""); //이렇게 클린하기위해서 아래 value={comment_text}를 쓴것이다.
  };
  React.useEffect(() => {}, []);
  return (
    <Grid is_flex>
      <Input
        border="0px"
        padding="10px"
        placeholder="댓글 달기.."
        _onChange={(e) => {
          setCommentText(e.target.value);
        }}
        onSubmit={write}
        value={comment_text}
      ></Input>
      {comment_text.length > 0 ? (
        <Text position="absolute" left="70%" color="#0095F6" _onClick={write}>
          게시
        </Text>
      ) : (
        <Text position="absolute" left="70%" color="#BFE0FD">
          게시
        </Text>
      )}
    </Grid>
  );
};

export default CommentWrite;
