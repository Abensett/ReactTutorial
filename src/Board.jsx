import React from 'react'; 

import {Ball} from './Ball.jsx';
import {PaddleMove} from './Paddles.jsx'
import {Score} from './Score.jsx'

// rerennder the board component when the state changes
export class   Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ballX: 0,
            ballY: 0,
            ballSpeedX: 1,
            ballSpeedY: 0,
            Paddle1Height: 50,
            Paddle2Height: 0,
            player1Score: 0,
            player2Score: 0,
            time: 0,
        };
        this.Paddle1Height = this.UpdatePaddle1Height.bind(this);
        this.UpdatePaddle1Height = this.UpdatePaddle1Height.bind(this);
    }
    Ref = React.createRef();
    UpdatePaddle1Height = (NewHeight) => {
        this.setState({Paddle1Height: NewHeight})
    };


    // on mouse move update the state
    render() {
        return(
            <div className="FullScreen">
                <div className="Board">
                    <Score position="left" player="1" total={this.state.player1Score} />
                    <Score position="right" player="2" total={this.state.player2Score} />
                    < Ball/>
                    < PaddleMove Paddle1={this.state.Paddle1Height} ChangePaddleHeight={this.UpdatePaddle1Height} BoardRef={this.Ref}/>
                    <div className="Paddle Paddle2"></div>
                </div>
                {/* <h1> {this.state.Paddle1Height} test</h1> */}

                <div className="Social"></div>
            </div>
          
        )
    }
}
