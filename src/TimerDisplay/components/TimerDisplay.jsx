import React from 'react';
import * as timerState from '../../timerState';

const leftPad = (val) =>{
    if(val<10) return `0${val}`;
        return `${val}`;
}

const TimerDisplay=(props)=>(
    <div>
        <div className="row center-block">
        {
            (props.timerState === timerState.COMPLETE)&&
            <iframe className="center-block youtube-responsive-width"height="315" src="https://www.youtube.com/embed/GgVcgbtHY9k?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        }
        </div>
   
    <div className="row">
                 <h3 className="text-center">{`${leftPad(props.currentTime.get("hours"))}:${leftPad(props.currentTime.get("minutes"))}:${leftPad(props.currentTime.get("seconds"))}`}</h3>
            </div>
    </div>
);

export default TimerDisplay;