import React, { Component } from 'react';
import Timer from './Timer/component/Timer';
import './App.css';


class App extends Component {
  render() {
    return (
       <div className="card app-content center-block">
        <div className="card-body">
          <Timer />
          
        </div>
      </div>

     
    );
  }
}

export default App;
