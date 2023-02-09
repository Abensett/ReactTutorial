import React from 'react';
// ============================================================================//
// 1 Timer component  + Manual Incrementor:
//        * Events : setState, setInterval
//        * constructor : props, super, state, bind
// ============================================================================//
// DONT FORGET TO BIND THE FUNCTION TO THE CURRENT CONTEXT
// ============================================================================//
//  2 Formulaires component : INPUT, SELECT, MULTIPLE SELECT, CHECKBOX, RADIO
//        * HTMLFOR: htmlFor, onChange, e.target.value
//                * input, textarea, select (multiple + JSON.stringify for multiple select)
// ============================================================================//


export class Timer extends  React.Component {
	constructor(props) {
	  // call the parent constructor
	  super(props)
	  this.state = {timer : props.start, time: null}

	  // bind the function to the current context
	  // this is so that the function can be called from the render function
	  this.toggleButton = this.toggleButton.bind(this)

	}
	//  be called when the component is mounted
	//  set the interval to 1 second
	componentDidMount() {
	  this.play()
	}
	// called when the component is unmounted
	// Stop the interval
	componentWillUnmount(){
	  this.stop()
	}
	// called every second and increment the timer
	tick() {
	  this.setState((state, props) => ({timer: state.timer + props.step}))
	}
	// Stop the interval
	stopp() {
	  window.clearInterval(this.state.time)
	  this.setState({time: null})
	}
	// Start the interval
	play() {
	  this.setState({time: window.setInterval(this.tick.bind(this), 1000)})
	}


	toggleButton() {
	  return this.state.time ? this.stop() : this.play()
	}

	label()
	{
	  return this.state.time ? 'Stop' : 'Play'
	}
	reset()
	{
	  this.stop();
	  this.play();
	  this.setState({timer: 0})
	}
	// render is called every time the state is changed
	// the state is changed when the increment function is called
	// binding functions in the construtors improve the performance
	render()
	{
		return (
		<div >  <h3> Timer:</h3>
	  Game : {this.state.timer}   <br/>
	  <button onClick={this.toggleButton}>{this.label()}</button>
	  <button onClick={this.reset}>Put to 0</button>
	  </div>
	  	  )}
  }
  // Default props for the Timer component
  Timer.defaultProps = {
	start: 0,
	step: 1
  }


  // Manual props for the Timer component
export class ManualIncrementer extends React.Component {
	constructor(props) {
	  super(props)
	  this.state = {timer: 0}

	}

	// console.log  show the event object in the console
	increment(e) {
	  console.log(e)
	  this.setState({timer: this.state.timer + 1})
	}

	// Bind the function to the current context
	render(){
	  return (
		<div>
		  <h3> Manual Incrementer :</h3>
		  Timer : {this.state.timer} <br></br>
		  <button onClick={this.increment.bind(this)}>Increment</button>
		</div>
	  )
	}
  }

function numberFormat({number}) {
	return number < 10 ? `00:0${number}` : number;
}
