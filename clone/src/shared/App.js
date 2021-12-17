import "./App.css";
import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route, BrowserRouter } from "react-router-dom"; // 경로설정및 이동을위해 꼭 필요함
import Header from "../components/Header";
import Post from "../components/Post";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PostList from "../pages/PostList";
import AddPost from "../pages/AddPost";
import { history } from "../redux/configureStore";
import Grid from "../elements/Grid";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import PostDetail from "../pages/PostDetail";

function App() {
  const dispatch = useDispatch();
  // const is_token = localStorage.getItem("token") ? true : false;
 const is_session = sessionStorage.getItem("token") ? true : false;

  React.useEffect(() => {
    // if (is_token) {
    //   dispatch(userActions.loginCheckDB());
    // }
    if (is_session) {
      dispatch(userActions.loginCheckDB());
    }
  });
  return (
    <Grid bg="#FAFAFA">
      <Header />
      <Grid padding="100px 0px 0px 0px ">
      <ConnectedRouter history={history}>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/" exact component={PostList} />
        <Route path="/addpost" exact component={AddPost} />
        <Route path="/addpost/:id" exact component={AddPost} />
        <Route path="/posts/:id" exact component={PostDetail} />
      </ConnectedRouter>
      </Grid>
    </Grid>
  );
}

export default App;
