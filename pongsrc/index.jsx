import React from 'react'; /* React is JS lib buildon UI interactive apps Web/Mobile*/
import ReactDOM from 'react-dom/client'; /* ReactDOM is for web */
import './index.css';
// useState = state management
// useEffect = lifecycle management 
// useRef = reference to a DOM element (DOM element is a HTML element D = Document O = Object M = Model)
import { useState, useEffect, useRef } from "react";

// offsetWidth and offsetHeight are the width and height of the element including padding and border

const Ball = () => {
  const [Position, setPosition] = useState({ x: 0, y: 0 });
  const [Speep, setSpeep] = useState({ x: 5, y: 5 });
  const parentRef = useRef(null);

  useEffect(() => {
    const parent = parentRef.current;
    const width = parent.offsetWidth;
    const height = parent.offsetHeight;

    const intervalId = setInterval(() => {
      setPosition(prevPos => {
        let newX = prevPos.x + Speep.x * Math.cos((angle * Math.PI) / 180);
        let newY = prevPos.y + Speep.y * Math.sin((angle * Math.PI) / 180);

        if (newX < 0 || newX + 20 > width) {
          newX = prevPos.x;
          setSpeep(prevSpeep => ({ ...prevSpeep, x: -prevSpeep.x }));
        }
        if (newY < 0 || newY + 20 > height) {
          newY = prevPos.y;
          setSpeep(prevSpeep => ({ ...prevSpeep, y: -prevSpeep.y }));
        }
        

        return { x: newX, y: newY };
      });
    }, 16);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      ref={parentRef}
      className="Board"
      style={{
        width: '100%',
        height: '100%'
      }}
    >
      <div
        className="Ball"
        style={{
          left: `${Position.x}px`,
          top: `${Position.y}px`
        }}
      />
    </div>
  );
};

class   Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ballX: 0,
            ballY: 0,
            ballSpeedX: 1,
            ballSpeedY: 0,
            Paddle1Height: 0,
            Paddle2Height: 0,
            player1Score: 0,
            player2Score: 0,
            time: 0,
            MousePosition: { x: 0, y: 0 },
        };
    }

    handleMouseMove = (event) => {
      this.setState({
        MousePosition: {
          x: event.clientX,
          y: event.clientY
        }
      });
    };
    // on mouse move update the state
    render() {
        return(
            <div className="FullScreen">

                <div className="Board">
                     <Ball/>
                    <div className="Ball"></div>
                    <div className="Paddle Paddle1" style={{  top:"{this.state.Paddl1Height}px" }}></div>
                    <div className="Paddle Paddle2"></div>
                </div>
                <div className="Social"></div>
            </div>
          
        )
    }
}

// ============================================================================//
// Pong Game  : Main component 
// ============================================================================//
class Game extends React.Component {

    render() {
      return(
    <div className="game">
      <div className="game-board">
        <Board /> 
      
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