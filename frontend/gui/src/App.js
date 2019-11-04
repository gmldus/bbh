import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Posts from './components/Posts';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Saved from './components/Saved';
import Detail from './components/Detail';
import Join from './components/Join';
import Update from './components/Update';
import SelectBoard from './components/SelectBoard';
import LoginSuccess from './components/LoginSuccess';


class App extends Component {
  state = {
    loginstatus:false
  }
  render() {
    
    return (
      <div className="App">
        <Router>
          <Header></Header>
          <div className="left">
            <Route exact path="/" component={Home}/>
            <Route path="/posts" component={Posts}/>
            <Route path="/write" component={CreatePost}/>
            <Route path="/saved" component={Saved}/>
            <Route path="/detail" component={Detail}/>
            <Route path="/join" component={Join}/>
            <Route path="/update" component={Update}/>
            <Route path="/selectboard" component={SelectBoard}/>
            <Route path="/LoginSuccess" component={LoginSuccess}/>
          </div>
          <div className="right">
            {this.state.loginstatus && <LoginSuccess></LoginSuccess>}
            <Login></Login>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
