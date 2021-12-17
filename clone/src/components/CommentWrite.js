import React from "react";
import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Input from "../elements/Input";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const CommentWrite = (props) => {
  const dispatch = useDispatch();

  const [comment_text, setCommentText] = React.useState("");

  const { postId } = props;

  const write = (e) => {
    setCommentText(e.target.value);
    console.log(comment_text);
    dispatch(commentActions.addCommentDB(postId, comment_text));
    setCommentText(""); //이렇게 클린하기위해서 아래 value={comment_text}를 쓴것이다.
  };
  React.useEffect(() => {}, []);
  return (
    <Grid is_flex>
        <FriendContainer >
      <Input
      margin="0px 0px 0px -30px"
        border="0px"
        padding="10px"
        placeholder="댓글 달기.."
        width="510px"
        _onChange={(e) => {
          setCommentText(e.target.value);
        }}
        onSubmit={write}
        value={comment_text}
      ></Input>
     
      {comment_text.length > 0 ? (
      <Text textalign width="70px" height="30px" zindex color="#0095F6" _onClick={write} margin="10px 5px 0px 0px" >
          게시
        </Text>
      ) : (
        <Text textalign width="70px" height="30px" zindex color="#BFE0FD" margin="10px 5px 0px 0px" >
          게시
        </Text>
       
      )}
       </FriendContainer>
    </Grid>
  );
};


const FriendContainer = styled.div`
    min-width:300px;
    box-sizing: border-box;
    display:flex;
    height:100%;
    margin-left:30px;
    flex-direction:flex-start;
    @media (max-width:1000px) {
        display:none;
    }`

export default CommentWrite;
