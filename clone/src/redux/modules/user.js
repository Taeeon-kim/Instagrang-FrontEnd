import { createAction, handleAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { deleteCookie, getCookie, setCookie } from "../../shared/cookie";
import axios from "axios";
import instance from "../../axios"
// import { apis } from "../../api/axios";

// 액션
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// 액션 크리에이터
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// 초기값
const initialStat = {
  user: {
    userId:null
  },
  is_login: false,
};

const loginDB = (email, pwd) => {
  return function (dispatch, getState, { history }) {
    // 로그인 api
    const user = {
      username: email,
      password: pwd,
    };
    console.log(user);
    // apis
    //   .login(user)
    axios
      .post("http://3.36.100.253/user/login", user)
      .then((res) => {
        console.log("loginDB 접근 확인");
        const userId = res.data.userId
        const jwtToken = res.headers.authorization;
        // localStorage.setItem("token", jwtToken);
        // localStorage.setItem("userId", userId);
        sessionStorage.setItem("token", jwtToken)
        sessionStorage.setItem("userId", userId)

        dispatch(setUser({ email: email, user_name: email, userId: userId }));
        alert("정상적으로 로그인 되었습니다.");
        // window.location.href = "/";  // 요렇게하면 redux 값이 다 날라감
        history.push('/')
        
      })
      .catch((err) => {
        console.log(err);
        window.alert("아이디 또는 비밀번호가 다릅니다.");
        return;
      });
  };
};

const signupDB = (email, userName, pwd) => {
  return function (dispatch, getState, { history }) {
    //api
    const user = {
      email: email,
      nickname: userName,
      password: pwd,
    };
    console.log(user);
    // apis
    //   .signUp(user)
    axios
      .post("http://3.36.100.253/user/signup", user)
      .then(() => {
        window.alert("회원가입을 축하드립니다!");
        history.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const loginCheckDB = () => {
  return function (dispatch, getState, { history }) {
    const userId = sessionStorage.getItem("userId");
    dispatch(setUser({ userId: parseInt(userId) }));
    
  };
};

// 토큰삭제
const logoutDB = () => {
  return function (dispatch, getState, { history }) {
    dispatch(logOut());
    alert("로그아웃 되었습니다.");
    // localStorage.removeItem("token");
    // localStorage.removeItem("userId");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
    history.push("/login");
    window.location.reload();
  };
};

//리듀서
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "SUCCESS");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        // localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("useId");
        window.sessionStorage.clear();
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
  },
  initialStat
);

const actionCreators = {
  logOut,
  getUser,
  signupDB,
  loginDB,
  loginCheckDB,
  logoutDB,
};

export { actionCreators };
