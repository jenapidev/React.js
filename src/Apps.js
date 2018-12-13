import React, { Component } from 'react';
import './App.css';

//Hey You there i have been a lot of time looking for one way to make this works go to idex.js for more info 

class Mouse extends React.Component{

    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0};
    }
  
    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY 
      });
    }
  
    render() {
      return ( 
            <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
            {}
              <p>The current mouse position is ({this.state.x + ' x'}, {this.state.y + ' y'})</p>
            </div>
      );
    }
  }

class MouseTracker extends React.Component {
  render() {
    return(
      <div>
        <h1>Move the Mouse Arround</h1>
        <Mouse />
      </div>
    );
  }
}

export default MouseTracker;