import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../redux/configureStore";
import Grid from "../elements/Grid";
import Button from "../elements/Button";
import Input from "../elements/Input";
import Text from "../elements/Text";
import { actionCreators as postActions } from "../redux/modules/post";
import Post from "../components/Post";

const PostList = (props) => {
  // const user_list = useSelector();
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.post.list); // state는 리덕스 스토어의 전체 데이터
  console.log(postList[0].nickname)
//   const is_login = useSelector((state) => state.user.is_login);
  // console.log(user_list);
  console.log(postList);

  React.useEffect(() => {
    dispatch(postActions.getMainAPI());
  }, []);

  return (
    <Grid>
      {postList.map((p, idx) => {
        return (
          <Grid margin="20px 0px">
            <Post {...p}/>
          </Grid>
        ); 
   
      })}

      {/* {is_login && (
        <FloatBtn
          onClick={() => {
            history.push("/write");
          }}
        >
          +
        </FloatBtn>
      )} */}
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