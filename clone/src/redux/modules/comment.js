import { createAction, handleActions } from "redux-actions";
import {produce} from "immer";
import "moment";
import moment from "moment";
import { actionCreators as postActions } from "./post";
import instance from '../../axios';


const ADD_COMMENT = "ADD_COMMENT";

const addComment = createAction(ADD_COMMENT, (post_id, content) => ({post_id, content}));

const initialState = {
    // list: {}, // image-community 에서는 요렇게 초기값되어있음
    list:[],
    // is_loading: false,
  };


  const addCommentFB = (post_id, content) =>{
      return function(dispatch, getState, {history}){
        const TOKEN = localStorage.getItem("token");
        console.log(TOKEN);
        console.log(post_id);
        instance.post(`/api/comments/${post_id}`,{content},{ headers: {
            "authorization" : `${TOKEN}`
          }}).then((response)=>{
              console.log(response);
              console.log("커멘트작성응답");
              dispatch(addComment(post_id,content))
      })
  }
}


export default handleActions(
{
    [ADD_COMMENT]: (state, action) => produce(state, (draft)=> {
        // draft.list[action.payload.post_id].unshift(action.payload.content);
      }),
}, initialState)


const actionCreators ={
    addComment,
    addCommentFB,
}

export {actionCreators};