import "./App.css";
import React from "react";
import { ConnectedRouter } from 'connected-react-router';
import {Route, BrowserRouter} from 'react-router-dom';  // 경로설정및 이동을위해 꼭 필요함
import Header from '../components/Header';
import Post from '../components/Post';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import PostList from '../pages/PostList'
import {history} from '../redux/configureStore';
import Grid from "../elements/Grid";

function App() {
  return (
  <Grid border="1px solid #DBDBDB">
   
    <Header/>
    <ConnectedRouter history={history}>
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={Signup} />
    <Route path="/" exact component={PostList} />
    </ConnectedRouter>
  </Grid>
  
  )

}

export default App;
