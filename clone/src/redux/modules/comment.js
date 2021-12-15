import { createAction, handleActions } from "redux-actions";
import {produce} from "immer";
import "moment";
import moment from "moment";
// import { actionCreators as postActions } from "./post";
import instance from '../../axios';


const ADD_COMMENT = "ADD_COMMENT";
const SET_COMMENT = "SET_COMMENT";
const addComment = createAction(ADD_COMMENT, (content) => ({content}));
const setComment = createAction(SET_COMMENT, (postId)=>({postId}));
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
              dispatch(addComment({...response.data}))
      })
  }
}

const getComment = (postId) => {
  return function (dispatch, getState, { history }) {
    instance.get("/").then((response) => {
      console.log(response.data[postId]);
      const result = response.data[postId]
      console.log(result.commentList);
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
        // draft.list[action.payload.postId].push(action.payload.content);
        draft.list = action.payload.content;
        console.log(draft.list)
      }),

      [SET_COMMENT]: (state, action) => produce(state, (draft)=> {

      }),
      
}, initialState)


const actionCreators ={
    addComment,
    addCommentDB,
    getComment,
    setComment,
}

export {actionCreators};