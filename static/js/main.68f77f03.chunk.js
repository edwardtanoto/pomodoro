(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(23)},18:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(9),i=a.n(s),c=(a(16),a(18),a(2)),m=a(3),o=a(5),l=a(4),u=a(6),h=a(1),d=a(7),b=a.n(d),p=function(){return r.a.createElement("div",{className:"row"},r.a.createElement("h1",{className:"text-center"},"Pomodoro App"))},v=0,T=function(e){return e<10?"0".concat(e):"".concat(e)},f=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"row center-block"},2===e.timerState&&r.a.createElement("iframe",{className:"center-block youtube-responsive-width",height:"315",src:"https://www.youtube.com/embed/GgVcgbtHY9k?autoplay=1",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),r.a.createElement("div",{className:"row"},r.a.createElement("h3",{className:"text-center"},"".concat(T(e.currentTime.get("hours")),":").concat(T(e.currentTime.get("minutes")),":").concat(T(e.currentTime.get("seconds"))))))},g=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(l.a)(t).call(this))).getButton=e.getButton.bind(Object(h.a)(Object(h.a)(e))),e}return Object(u.a)(t,e),Object(m.a)(t,[{key:"getButton",value:function(){return this.props.timerState===v?r.a.createElement("button",{className:"btn btn-primary center-block",onClick:this.props.startTimer},"Start"):1===this.props.timerState?r.a.createElement("button",{className:"btn btn-danger center-block",onClick:this.props.stopTimer},"Stop"):2===this.props.timerState?r.a.createElement("button",{className:"btn btn-info center-block",onClick:this.props.stopTimer},"Reset"):void 0}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},this.getButton())}}]),t}(n.Component),E=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(l.a)(t).call(this))).handleChange=e.handleChange.bind(Object(h.a)(Object(h.a)(e))),e}return Object(u.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){var t=this.props.baseTime;"hours"===e.target.id&&t.subtract(t.get("hours"),"hours").add(parseInt(e.target.value,10),"hours"),"minutes"===e.target.id&&t.subtract(t.get("minutes"),"minutes").add(parseInt(e.target.value,10),"minutes"),"seconds"===e.target.id&&t.subtract(t.get("seconds"),"seconds").add(parseInt(e.target.value,10),"seconds"),this.props.setBaseTime(t)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("h2",{className:"text-primary"},"Set Timer")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("label",{htmlFor:"hours"},"Hours")),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("input",{id:"hours",className:"form-control",type:"number",min:"0",defaultValue:this.props.baseTime.get("hours"),onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("label",{htmlFor:"minutes"},"Minutes")),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("input",{id:"minutes",className:"form-control",type:"number",min:"0",defaultValue:this.props.baseTime.get("minutes"),onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("label",{htmlFor:"seconds"},"Seconds")),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("input",{id:"seconds",className:"form-control",type:"number",min:"0",defaultValue:this.props.baseTime.get("seconds"),onChange:this.handleChange})))))}}]),t}(n.Component),j=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{href:"https://edwardtanoto.github.io/mygameJS/index.html"},"Multiplayer Game"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://edwardtanoto.github.io/tictactoeJS/index.html"},"Singleplayer Game"))}}]),t}(n.Component),O=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(l.a)(t).call(this))).state={currentTime:b.a.duration(25,"minutes"),baseTime:b.a.duration(25,"minutes"),timerState:v,timer:null},e.setBaseTime=e.setBaseTime.bind(Object(h.a)(Object(h.a)(e))),e.startTimer=e.startTimer.bind(Object(h.a)(Object(h.a)(e))),e.reduceTimer=e.reduceTimer.bind(Object(h.a)(Object(h.a)(e))),e.stopTimer=e.stopTimer.bind(Object(h.a)(Object(h.a)(e))),e}return Object(u.a)(t,e),Object(m.a)(t,[{key:"setBaseTime",value:function(e){this.setState({baseTime:e,currentTime:e})}},{key:"startTimer",value:function(){this.setState({timerState:1,timer:setInterval(this.reduceTimer,1e3)})}},{key:"stopTimer",value:function(){this.state.timer&&clearInterval(this.state.timer),this.setState({timerState:v,timer:null,currentTime:b.a.duration(this.state.baseTime)})}},{key:"completeTimer",value:function(){this.state.timer&&clearInterval(this.state.timer),this.setState({timerState:2,timer:null})}},{key:"reduceTimer",value:function(){if(0!==this.state.currentTime.get("hours")||0!==this.state.currentTime.get("minutes")||0!==this.state.currentTime.get("seconds")){var e=b.a.duration(this.state.currentTime);e.subtract(1,"seconds"),this.setState({currentTime:e})}else this.completeTimer()}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement(p,null),r.a.createElement(f,{currentTime:this.state.currentTime,timerState:this.state.timerState}),r.a.createElement(g,{startTimer:this.startTimer,timerState:this.state.timerState,stopTimer:this.stopTimer}),1!==this.state.timerState&&r.a.createElement(E,{baseTime:this.state.baseTime,setBaseTime:this.setBaseTime}),r.a.createElement("br",null),r.a.createElement(j,null))}}]),t}(r.a.Component),y=(a(21),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card app-content center-block"},r.a.createElement("div",{className:"card-body"},r.a.createElement(O,null)))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.68f77f03.chunk.js.map