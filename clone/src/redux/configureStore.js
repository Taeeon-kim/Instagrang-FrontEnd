import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import User from "./modules/user";   // export 했던 user의 리듀서를 가져온것이다. 이때 handleActions로 쓰고 이름은 안정했기때문에 해당 user 에서 import 하면 이렇게 정해서 쓸수있다
import Post from "./modules/post";
import Comment from "./modules/comment";

export const history = createBrowserHistory();   //history를 만들어줌

const rootReducer = combineReducers({   //우리가 만들 리듀서를 묶을때 넣어줌 이때 user 소문자 변수로 쓴것때문에 user.user. ~~ 에서 좀 헷갈린것이다. 그냥 user.js, post.js 등등 에서 받아온 reducer 정보들을 묶어서 여기서 쓴다
    user: User,
    post: Post,
    comment: Comment,
    router : connectRouter(history), //history 를 만들고 createBrowserHistory()를 넣어준다. 그리고 리듀서를 묶는 구간에 router 에다가 history를 connectRouter로 router와 연결이 되게 하고  스토어에 history 저장.
  });

  const middlewares = [thunk.withExtraArgument({history:history})];  //미들웨어들 액션실행후 비동기처리하고 할때 thunk 로 쓸껀데 그 안에 내장함수 withExtraArgument를 쓴다. 액션생성함수 실행하고 리듀서가 실행하기 전단계에서 이제 history 사용 가능
  //그래서 비동기 갔다와서 .then 하고 history 받아다가 쓴다.

// 지금이 어느 환경인 지 알려줘요. (개발환경, 프로덕션(배포)환경 ...)
const env = process.env.NODE_ENV;    //process.env.NODE_ENV를 찍어보면 지금 어느환경인지가 나온다.

// 개발환경에서는 로거라는 걸 쓴다
if (env === "development") { // if문을 써서 개발할때만 콘솔창에 어떤 액션이고 어떤 경로상태인지 뜨게 해주고 import 하면 프로젝트 크기만 커지므로 if문을 쓰고 require를 씀 
  const { logger } = require("redux-logger");    //require는 패키지 가져올때 쓰는데 왜 import 안하고 require 을 썼냐면, logger 라는건 콘솔창에 이전상태 이후상태 찍히는데  요걸 가져오면 redux안에 store데이터들에 어떤게 담기고 변하는지 나옴
  middlewares.push(logger);  // 이 logger를 middlewares에 밀어 넣어줌 그럼 [thunk]뒤에 logger가 붙을것이다.
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;


    const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = (initialStore) => createStore(rootReducer, enhancer);  

export default store();