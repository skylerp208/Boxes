import React, { Component } from 'react';
import './App.css';
import NavBar from "./NavBar";
import BoxContainer from "./Containers/BoxContainer"

class App extends Component {

  dragHandler = (e) => {
    console.log("draaged");
  }

  onDragOver = (e) => {
    console.log('dragging overrrrrr');
  }

  onDrop = (e) => {
    console.log('drooooopppeed');
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <BoxContainer
          dragHandler = {this.dragHandler}
          onDragOver = {this.onDragOver}
          onDrop = {this.onDrop}
        />
      </div>
    );
  }
}

export default App;
