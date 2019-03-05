import React from 'react';
import moment from 'moment';
import TimerHeader from '../../TimerHeader/components/TimerHeader'
import TimerDisplay from '../../TimerDisplay/components/TimerDisplay';
import TimerButton from '../../TimerButton/components/TimerButton';
import TimerConfig from '../../TimerConfig/components/TimerConfig';
import Game from '../../Game/component/Game';
import * as timerState from '../../timerState';


class Timer extends React.Component{
    constructor(){
        super();
        this.state={
            currentTime: moment.duration(25,'minutes'),
            baseTime: moment.duration(25,'minutes'),
            timerState: timerState.NOT_SET,
            timer: null,
        };
        this.setBaseTime = this.setBaseTime.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.reduceTimer = this.reduceTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    }
    setBaseTime(newBaseTime){

        this.setState({
            baseTime: newBaseTime,
            currentTime :newBaseTime,

        })
    }

    startTimer(){
        this.setState({
            timerState: timerState.RUNNING,
            timer : setInterval(this.reduceTimer,1000)
        })
    }

    stopTimer(){
        if(this.state.timer){
            clearInterval(this.state.timer);
        }

        this.setState({
            timerState:timerState.NOT_SET,
            timer:null,
            currentTime: moment.duration(this.state.baseTime),
        })
    }

    completeTimer(){
        if(this.state.timer){
            clearInterval(this.state.timer);
        }

        this.setState({
            timerState:timerState.COMPLETE,
            timer:null,
        })
    }

    reduceTimer(){
        if(this.state.currentTime.get('hours')===0 &&
           this.state.currentTime.get('minutes')===0 &&
           this.state.currentTime.get('seconds')===0)
        {
            this.completeTimer();
            return;
        }

        const newTime= moment.duration(this.state.currentTime);
        newTime.subtract(1,'seconds');

        this.setState({
            currentTime :newTime,
        });
    }

    render()
    {
        return(
        <div className="container-fluid">
        <TimerHeader />
        <TimerDisplay 
        currentTime={this.state.currentTime}
        timerState={this.state.timerState}
        />
        <TimerButton 
        startTimer={this.startTimer} 
        timerState={this.state.timerState}
        stopTimer={this.stopTimer}
        />
        {
        (this.state.timerState !== timerState.RUNNING)
        &&
        <TimerConfig 
        baseTime={this.state.baseTime}
        setBaseTime={this.setBaseTime}
        />
        }
        <br/>
        <Game />
      </div>
        );
    }
  
}

export default Timer;