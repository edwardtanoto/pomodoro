import React, { Component } from 'react';


class TimerConfig extends Component{
    constructor(){
        super();

        this.handleChange = this.handleChange.bind(this);
    }
        handleChange(ev){
            const newBaseTime = this.props.baseTime;

            if(ev.target.id=== 'hours') newBaseTime.subtract(newBaseTime.get('hours'), 'hours').add(parseInt(ev.target.value,10), 'hours');
            if(ev.target.id=== 'minutes') newBaseTime.subtract(newBaseTime.get('minutes'), 'minutes').add(parseInt(ev.target.value,10), 'minutes');
            if(ev.target.id=== 'seconds') newBaseTime.subtract(newBaseTime.get('seconds'), 'seconds').add(parseInt(ev.target.value,10), 'seconds');

            this.props.setBaseTime(newBaseTime)
        }

    render(){
        return(
            <div className="center-block">
            <div className="row">
            <h2 className="text-primary">Set Timer</h2>
        </div>
        <div className="row">
        
         <div className="form-group center-block">
             <div>
                 <label htmlFor="hours">Hours</label>
             </div>
             <div>
                 <input id="hours" 
                 className="form-control" 
                 type="number" 
                 min= "0"
                 defaultValue={this.props.baseTime.get("hours")} 
                 onChange={this.handleChange}/>
             </div>         
        </div>
             <div className="form-group center-block">
             <div>
                 <label htmlFor="minutes">Minutes</label>
             </div>
             <div>
                 <input id="minutes" 
                 className="form-control" 
                 type="number" 
                 min= "0"
                 max="59"
                 defaultValue={this.props.baseTime.get("minutes")} 
                 onChange={this.handleChange}/>
             </div>         
        </div>
             <div className="form-group center-block">
             <div>
                 <label htmlFor="seconds">Seconds</label>
             </div>
             <div>
                 <input id="seconds" 
                 className="form-control" 
                 type="number" 
                 min= "0"
                 defaultValue={this.props.baseTime.get("seconds")} 
                 onChange={this.handleChange}/>
             </div>         
             </div>
        
        </div>
        </div>
        )
    }
} 
   

export default TimerConfig;