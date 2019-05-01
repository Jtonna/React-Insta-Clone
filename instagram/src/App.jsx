import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

import dummyData from './dummy-data';

class App extends React.Component{
  constructor(){
  // why is this needed?
    super();
    // super is used to call functions on an objects parent
    this.state = {
      // setting the state of the data allows it to be used with props
      postsBanana: []
      };
  }

  componentDidMount(){
    this.setState({ postsBanana: dummyData })
  }

  render() {
    return(
      <div className="App">
      <SearchBar />
      <PostContainer postsBanana={this.state.postsBanana} />
      </div>
    )
  }
}

export default App;
