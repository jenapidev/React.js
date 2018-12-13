import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const list = [
  {
    title: ' React',
    url: ' https://reactjs.org/',
    author: ' Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: ' Redux',
    url: ' https://redux.js.org/',
    author: ' Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,  
  },
];

const array = [1, 4, 9, 16];

//We use this code to pass the function to map

const newArray = array.map(function (x) {return x * 2; });

console.log(newArray);


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list,
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

/*  //First Step 
    onDismiss(id) {
    const updatedList = this.state.list.filter( function isNotId(item){
      return item.objectID !== id;
    });
  }
  
  //second
    onDismiss(id) {
    function isNotId(item) {
      return item.objectID !== id;
    }

    const updatedList = this.state.list.filter(isNotId);
  }

//Third  */
  onDismiss(id) {
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({ list: updatedList});

  }

  render() {
    var helloWorld = 'Welcome to the way to learn react';
      return (
      <div className="App">
        <h1>{helloWorld}</h1> 
        {this.state.list.map(item =>
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span> {item.author}</span>
            <span> {item.num_comments}</span>
            <span> {item.points}</span>
            <span>
              <button
              onClick={() => this.onDismiss(item.objectID)}
              type="button"
              >
              Dismiss
              </button>
            </span>
          </div>
        )}

      </div>
    );
  }
}



export default App;


