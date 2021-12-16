import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../redux/configureStore";
import Grid from "../elements/Grid";
import Button from "../elements/Button";
import Input from "../elements/Input";
import Text from "../elements/Text";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as commentActions } from "../redux/modules/comment";
import Post from "../components/Post";

const PostList = (props) => {
  // const user_list = useSelector();
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.post.list); // state는 리덕스 스토어의 전체 데이터
  const is_login = useSelector((state)=> state.user.user.userId);

//   const is_login = useSelector((state) => state.user.is_login);
  // console.log(user_list);
  console.log(postList);  // 여기서 불러오면 아래 useEffect 전에 불러와지므로 initial 값만 불러온다

  React.useEffect(() => {
    dispatch(postActions.getMainAPI());
    
  }, []);




  return (
    <Grid>
      {postList.map((p, idx) => {
        if(p.userId === is_login){
        return (
          <Grid margin="20px 0px" key={p.postId}>
            <Post {...p} is_me/> 
          </Grid>
        ); 
        }
        else{
          return (
            <Grid margin="20px 0px" key={p.postId}>
              <Post {...p} /> 
            </Grid>
          ); 
        }

      })}
    </Grid>
  );
};




const FloatBtn = styled.button`
  width: 100px;
  height: 100px;
  background-color: #170b3b;
  color: white;
  box-sizing: border-box;
  font-size: 50px;
  font-weight: 800;
  position: fixed;
  bottom: 50px;
  right: 16px;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 100px;
`;

export default PostList;