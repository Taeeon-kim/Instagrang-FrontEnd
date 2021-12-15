import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";
import instance from "../../axios";
import moment from "moment";


const SET_POST = 'SET_POST'
const ADD_POST = 'ADD_POST'
const DELETE_POST = 'DELETE_POST'
const GET_DETAIL ='GET_DETAIL'
const IS_LIKE = 'IS_LIKE'
// 액션 생성 함수
const setPost = createAction(SET_POST,(post_list) => ({post_list}))
const addPost = createAction(ADD_POST,(post) => ({post}))
const deletePost = createAction(DELETE_POST ,(post) => ({post}))
const getDetail = createAction(GET_DETAIL ,((post)=>({post})))
const like = createAction(IS_LIKE, (like)=>({like}))
// 기본값 지정
const initialState = {
    
    list:[] ,
    detail: false,
    is_like: false,
}


const initalPost = {
  content: "",
  // img_url:"https://newsimg.hankookilbo.com/cms/articlerelease/2021/06/05/ef519975-80c8-40b6-b25a-47ab6270dc60.png",
  post_date: moment().format("YYYY-MM-DD"),
  title: "",
  // uid: "키값",
  // userId:"값",
  area: "",
};

// [공성훈] addPost 작업 중
const addPostDB = () => {
  //   console.log(selectedImage);
  const formData = new FormData();
  formData.append("image");
  return function (dispatch, getState, { history }) {
    instance.post().then((res) => {
      console.log("addPostDB 접근 확인");
    });
  };
};

const getMainAPI = () => {
  return function (dispatch, getState, { history }) {
    instance.get("/").then((response) => {
      console.log(response.data);
      let post_list = [];
      response.data.forEach((post) => {
        // console.log({...post});
        post_list.push({ ...post });
        // console.log(post_list)
      });
      dispatch(setPost(post_list));
    });

    // console.log(initialState.list)
    // const post = [...initialState.list,{id: "yougnble@aa.com",
    // nickname: "youngble",
    // content:"test 내용",
    // image: 'https://newsimg.hankookilbo.com/cms/articlerelease/2021/06/05/ef519975-80c8-40b6-b25a-47ab6270dc60.png'}]
    // console.log(post);

    // // post_list.push(post)
    // console.log(post)
    // dispatch(setPost(post)) //나중에 필요
  };
};

// withdraw
// const deleteDB = (postId) => {
//     return function (dispatch, getState, {history}){
//         console.log(postId);
//         const TOKEN = localStorage.getItem("token");
//         console.log(TOKEN)
//         // const a = `Bearer ${TOKEN}`;
//         // console.log(a.split(" "));
//         instance.delete(`/api/posts/${postId}`,{postId},{ headers: {
//             "authorization" : `Bearer ${TOKEN}`
//           }, }).then((res) => {
//             console.log(res);
//             // let users = res.data
//             // dispatch(deletePost(users));
//         }).catch(err => {
//             console.log("withdraw : 에.러", err);
//         });
//     };
// };

const getDetailPost = () => {
  return function (dispatch, getState, { history }) {
    dispatch(getDetail());
  };
};


const likePost =(postId) =>{
    return function (dispatch, getState,{history}){
        const TOKEN = localStorage.getItem("token");
        console.log(postId);
        axios.post(`http://3.36.100.253/api/likes/${postId}`,{} ,{ headers: {
            "authorization" : `${TOKEN}`
          }}).then((response)=>{
        console.log("like 눌름");
        console.log(response);
        dispatch(like())
    })
}
}

// 리듀서
export default handleActions(

    {
        [SET_POST] : (state,action) => produce(state,(draft) => {
            draft.list = action.payload.post_list 
        }),// 리스트를 초기값에서 갈아끼우기
        [ADD_POST] : (state,action) => produce(state,(draft) => {
                draft.list = action.payload.post
                console.log(draft.list)
        }),
        [DELETE_POST] : (state, action) => produce(state, (draft) => {
            // draft.study.joinNum -= 1;
            // draft.join = action.payload.join
        }),

        [GET_DETAIL] : (state,action) => produce(state, (draft)=>{
            draft.detail = true;
        }),
        [IS_LIKE] : (state, action) => produce(state, (draft) => {
            draft.is_like ? draft.is_like = false : draft.is_like =true;
        }),
    }
,initialState)

// 액션생성자 내보냄
const actionCreators = {
    setPost,
    getMainAPI,
    addPostDB, // [공성훈] 작업 중
    addPost,
    getDetailPost,
    likePost,
    like,
    
}

export {actionCreators}

