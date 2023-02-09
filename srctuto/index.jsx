
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




// ============================================================================//
// Timer component :
//        * Events : setState, setInterval
//        * constructor : props, super, state, bind
// ============================================================================//
import {Timer, ManualIncrementer} from "./Timer.jsx";

// DONT FORGET TO BIND THE FUNCTION TO THE CURRENT CONTEXT
// ============================================================================//
// Formulaires component : INPUT, SELECT, MULTIPLE SELECT, CHECKBOX, RADIO
//        * HTMLFOR: htmlFor, onChange, e.target.value
//                * input, textarea, select (multiple + JSON.stringify for multiple select)
// ============================================================================//

import {Home} from "./Formulars.jsx";

// ============================================================================//
// TP create a THERMOMETHER
// ============================================================================//

import {Thermometer} from "./Thermometer.jsx";

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
          < ManualIncrementer />

         <h2>Second : Formulars </h2>
         < Home />

         <h2>Second : Thermometer </h2>
         < Thermometer />
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
