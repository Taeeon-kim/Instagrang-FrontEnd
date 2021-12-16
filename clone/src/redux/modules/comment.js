import { createAction, handleActions } from "redux-actions";
import {produce} from "immer";
import "moment";
import moment from "moment";
// import { actionCreators as postActions } from "./post";
import instance from '../../axios';
import { actionCreators as postActions } from "./post";


const ADD_COMMENT = "ADD_COMMENT";
const SET_COMMENT = "SET_COMMENT";
const addComment = createAction(ADD_COMMENT, (content) => ({content}));
const setComment = createAction(SET_COMMENT, (comment_list)=>({comment_list}));
const initialState = {
    // list: {}, // image-community 에서는 요렇게 초기값되어있음
    list:[],
    // is_loading: false,
  };


  const addCommentDB = (postId, content) =>{
      return function(dispatch, getState, {history}){
        const TOKEN = localStorage.getItem("token");
        console.log(TOKEN);
        console.log(postId);
        instance.post(`/api/comments/${postId}`,{content},{ headers: {
            "authorization" : `${TOKEN}`
          }}).then((response)=>{
              console.log(response.data);
              console.log("커멘트작성응답");
              let comment_list = {...response.data};
              console.log(comment_list)
              dispatch(addComment(comment_list))
              // 코멘트의 숫자를 셀때는 post정보에 포함된 comments 배열의 길이로 숫자를 세서 화면에 표현하므로 post 리덕스의 상태도 수정해주어야 한다.
        dispatch(postActions.newComment(parseInt(postId)));

      })
  }
}

const getComment = (postId) => {
  return function (dispatch, getState, { history }) {
    instance.get("/").then((response) => {
      // console.log(postId);
     
      const _post = response.data.filter((list)=>list.postId===postId)
      console.log(_post[0].commentList);
      const comment_list= _post[0].commentList;
      dispatch(setComment(comment_list));
      // const result = response.data[postId]
      // console.log(result.commentList);
      // let post_list = [];
      // response.data.forEach((post) => {
      //   // console.log({...post});
      //   post_list.push({ ...post });
        
      // });
     
    });
  }
}
export default handleActions(
{
    [ADD_COMMENT]: (state, action) => produce(state, (draft)=> {
      console.log(action.payload.content)
      console.log(draft.list[action.payload.postId])
        draft.list.unshift(action.payload.content);
       
        console.log(draft.list)
      }),

      [SET_COMMENT]: (state, action) => produce(state, (draft)=> {
          draft.list = action.payload.comment_list;
          console.log(draft.list)
      }),
      
}, initialState)


const actionCreators ={
    addComment,
    addCommentDB,
    getComment,
    setComment,
}

export {actionCreators};