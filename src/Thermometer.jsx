import React from 'react';


function Boiling ({celsius})
{
	return <div className="temp">
	<label htmlFor="tempC">Temperature in Celcius :</label>
	<input type="texte"  id="tempC" name="tempC"  value={celsius}/>
	</div>
}

function BoilingF ({celsius})
{
	return <div className="temp">
	<label htmlFor="tempF">Temperature in Farenheit :</label>
	<input type="texte"  id="tempF" name="tempF"  value={celsius}/>
	</div>
}




export class Thermometer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		  tempC:100,
		  tempF:212,
		}
	}
	render() {
	return(
		<div className="thermometer">
		<Boiling/>
		<BoilingF/>
		</div>
	)
	}
}
