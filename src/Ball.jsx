import React from 'react'; 


// useState = valeur de l'état 
// useEffect = lifecycle management 
// useRef = reference to a DOM element (DOM element is a HTML element D = Document O = Object M = Model)
import { useState, useEffect, useRef } from "react";



// offsetWidth and offsetHeight are the width and height of the element including padding and border
// useRef is used to get the reference of the parent element (Board) and then we can get the width and height of the parent element
// useEffect is used to update the state of the ball position
// setInterval is used to update the state of the ball position every 10 ms
export const Ball = (props) => {
    const [Position, setPosition] = useState({ x: 0, y: 0 });
    const [Speed, setSpeed] = useState({ x: 5, y: 5 });
    const [angle, setAngle] = useState(45);
    const parentRef = useRef(null);
  
    useEffect(() => {
      const parent = parentRef.current;
      const width = parent.offsetWidth;
      const height = parent.offsetHeight;
  
      const intervalId = setInterval(() => {
        setPosition(prevPos => {
          let newX = prevPos.x + Speed.x * Math.cos((angle * Math.PI) / 180);
          let newY = prevPos.y + Speed.y * Math.sin((angle * Math.PI) / 180);
  
          if (newX < 0 || newX + 20 > width) {
            newX = prevPos.x;
            setSpeed(prevSpeed => ({ ...prevSpeed, x: -prevSpeed.x }));
            setAngle(180 - angle);
          }
          if (newY < 0 || newY + 20 > height) {
            newY = prevPos.y;
            setSpeed(prevSpeed => ({ ...prevSpeed, y: -prevSpeed.y }));
            setAngle(360 - 2 * angle);
          }
          return { x: newX, y: newY };
        });
      }, 13);
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