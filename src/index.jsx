
/************************************************************************
 * Project: PONG
 * 
 * TODO LIST:
 * 1. Create a canvas : Ball, Paddle, Score  X
 * 2. Implement the game logic : status, position, score  X
 * 3. Implement the game loop : events = mouse move
 * 4
 ************************************************************************ */

/************************************************************************
 * LEARNING REACTS THANKS TO GRAFIKARTS
 ************************************************************************ */


import React from 'react'; /* React is JS lib buildon UI interactive apps Web/Mobile*/
import ReactDOM from 'react-dom/client'; /* ReactDOM is for web */
import './index.css';


function numberFormat({number}) {
  return number < 10 ? `00:0${number}` : number;
}

// ============================================================================//
// Timer component :
//        * Events : setState, setInterval
//        * constructor : props, super, state, bind
// ============================================================================//
class Timer extends  React.Component {
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
  stop() {
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
	  <div >    <h3> Timer:</h3>
    Game : {this.state.timer}   <br/>
    <button onClick={this.toggleButton}>{this.label()}</button>
    <button onClick={this.reset}>mettre a 0</button>
    </div> 
	)}
}
// Default props for the Timer component
Timer.defaultProps = {
  start: 0,
  step: 1
}
// Manual props for the Timer component
class ManualIncementer extends React.Component {
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

// DONT FORGET TO BIND THE FUNCTION TO THE CURRENT CONTEXT
// ============================================================================//
// Formulaires component : INPUT, SELECT, MULTIPLE SELECT, CHECKBOX, RADIO
//        * HTMLFOR: htmlFor, onChange, e.target.value
//                * input, textarea, select (multiple + JSON.stringify for multiple select)
// ============================================================================//

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nom: 'Abou',
      noms: ['Aaamian', 'Aboubr', 'Ayman'],
      check: true,
      name:'',
      surname:'',
      subscribed: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleChangeMultipleSelect = this.handleChangeMultipleSelect.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
    this.handleChangeMultiple = this.handleChangeMultiple.bind(this)
  }

  handleChange(e) {
    this.setState({nom: e.target.value})
  }
  handleChangeMultipleSelect(e) {
    this.setState({
      noms: Array.from(e.target.selectedOptions).map(option => option.value)
    })
  }
  handleCheck(e) {
    this.setState({checked: e.target.checked})
  }

  handleChangeMultiple(e) {
    const AttibutToChange = e.target.name
    const type = e.target.type
    const value = type == 'checkbox' ? e.target.checked : e.target.value
    this.setState({
      [AttibutToChange]: balue
    })
  }
  //JSON.stringify is used to display the array in the console


  render() {
    return (
      <div>
        <label htmlFor="nom"> My name</label> <br/>

        <h3> Input :</h3>
        <input type="texte" id="nom" value ={this.state.nom} onChange={this.handleChange} />  <br/>
        <textarea type="texte" id="nom" value ={this.state.nom} onChange={this.handleChange} /> <br/>
       
        <h3> Select :</h3>
        <select value="this.state.nom" onChange={this.handleChange} >
                <option value="Aaamian">Aaamian</option>
                <option value="Aboubr">Aboubr</option>
                <option value="Ayman">Ayman</option>
                <option value="Damien">Damien</option>
                <option value="Aimane">Aimane</option>
        </select> <br/>

        <h3> Multiple Select :</h3>
       Noms : {JSON.stringify(this.state.noms)}  <br/>
        <select value={this.state.noms} onChange={this.handleChangeMultipleSelect} multiple>
                <option value="Aaamian">Aaamian</option>
                <option value="Aboubr">Aboubr</option>
                <option value="Ayman">Ayman</option>
                <option value="Damien">Damien</option>
                <option value="Aimane">Aimane</option>
        </select>

        <h3> Checkbox :</h3>
        <label htmlFor="check">Check me :</label> 
        <input type="checkbox" id="check" value ={this.state.nom} onChange={this.handleCheck} />  <br/>
        {this.state.checked ? <div> You checked me baby !</div>: null}

        <h3> Multiple selectors  :</h3>
        <div>
        <label htmlFor="name">Name :</label> 
        <input type="texte" id="name" name="name"  value={this.state.name} onChange={this.handleChangeMultiple} />  <br/>
        </div>
        <div>
        <label htmlFor="surname">Surname :</label> 
        <input type="texte"  id="surname" name="surname"  value={this.state.surname} onChange={this.handleChangeMultiple} />  <br/>
        </div>
        <div>
        <label htmlFor="subscribed">Do you wish to subscribe ? :</label>
        <input type="checkbox" id="subscribed" name="subscribed"value={this.state.subscribed} onChange={this.handleChangeMultiple} />  <br/>
        </div>
        {JSON.stringify(this.state.name)}
        {JSON.stringify(this.state.surname)}
        {JSON.stringify(this.state.subscribed)}

        </div>
    )
  }
}

// ============================================================================//
// Game component : Main component 
// ============================================================================//
class Game extends React.Component {

	  render() {
		return(
      <div className="game">
        <div className="game-board">
          <h1>React Tutorial Grafikart</h1>
          <h2>First: Timer, Manual Incrementer</h2>
          < Timer />
         <ManualIncementer />
         
         <h2>Second : Formulars </h2>
         <Home />
        
        </div>
      </div>    
    )
	  }
}  

// ============================================================================//

// create a root element
// React Dom is for web it will render the game component in the root element
const root = ReactDOM.createRoot(document.getElementById("root"));

window.setInterval(() => {root.render(<Game />);}, 1000);
