import "./App.css";
import React from "react";
import { ConnectedRouter } from 'connected-react-router';
import {Route, BrowserRouter} from 'react-router-dom';  // 경로설정및 이동을위해 꼭 필요함
import Header from '../components/Header';
import Post from '../components/Post';

function App() {
  return (
  <React.Fragment>
    <BrowserRouter>
    <Header/>
    <Route path="/" exact component={Post} />
    </BrowserRouter>
  </React.Fragment>
  
  )

}

export default App;
