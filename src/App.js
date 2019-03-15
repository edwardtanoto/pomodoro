import React, { Component } from 'react';
import Timer from './Timer/component/Timer';

import Spotify from './Spotify/component/spotify';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
       <div className="card app-content center-block">
        <div className="card-body">
          <Timer />
          
        </div>
      
      </div>
      <Spotify/>
</div>
     
    );
  }
}

export default App;
