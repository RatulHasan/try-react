import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './posts/PostList'
// import ReactYoutubeExample from './thirdParty/ReactYoutubeExample'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h1 className="App-title">Welcome to React</h1>*/}
            {/*<ReactYoutubeExample videoId='s4aIk0x5Eus'/>*/}
        {/*</header>*/}
          <PostList/>
      </div>
    );
  }
}

export default App;
