import React from 'react';


function Field ({name, value, onChange, children}){

	return <div className="form-check">
			<label htmlFor={name}>{children}</label>
			<input type="texte" value={value} onChange={onChange} id={name}/>
		</div>

}

function Checkbox ({name, value, onChange, children}){

	return <div className="form-check">
			<label htmlFor={name} className="form-check-label">{children}</label>
			<input type="checkbox" value={value} onChange={onChange} id={name} />
			</div>
}
// DONT FORGET TO BIND THE FUNCTION TO THE CURRENT CONTEXT
// ============================================================================//
// Formulaires component : INPUT, SELECT, MULTIPLE SELECT, CHECKBOX, RADIO
//        * HTMLFOR: htmlFor, onChange, e.target.value
//                * input, textarea, select (multiple + JSON.stringify for multiple select)
// ============================================================================//

export class Home extends React.Component {
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
	  this.handleSubmit = this.handleSubmit.bind(this)

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
	  const value = type === 'checkbox' ? e.target.checked : e.target.value
	  this.setState({
		[AttibutToChange]: value
	  })
	}

	handleSubmit(e){
		e.preventDefault()
		const data = JSON.stringify(this.state)
		console.log(data)
		this.setState(
		{
			name:'',
			surname:'',
			subscribed: false,
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
		  <input type="text" id="name" name="name"  value={this.state.name} onChange={this.handleChangeMultiple} />  <br/>
		  </div>
		  <div>
		  <label htmlFor="surname">Surname :</label>
		  <input type="texte"  id="surname" name="surname"  value={this.state.surname} onChange={this.handleChangeMultiple} />  <br/>
		  </div>
		  <div>
		  <label htmlFor="subscribed">Do you wish to subscribe ? :</label>
		  <input type="checkbox" id="subscribed" name="subscribed" value={this.state.subscribed} onChange={this.handleChangeMultiple} />  <br/>
		  </div>
		  {JSON.stringify(this.state.name)}
		  {JSON.stringify(this.state.surname)}
		  {JSON.stringify(this.state.subscribed)}

		  <h3> Multiple selectors but clean  :</h3>
		  <form className="container" onSubmit={this.handleSubmit}><div/>
		  <Field name="name" value={this.state.name} onChange={this.handleChangeMultiple}>Name : </Field>
		  <Field name="surname" value={this.state.surname} onChange={this.handleChangeMultiple}>Surname : </Field>
		  <Checkbox name="subscribed" value={this.state.subscribed} onChange={this.handleChangeMultiple}>Do you wish to subscribe ? </Checkbox>
			<button>Envoyer</button>
		  </form>



		  <h3> Voici des champs non controlés:</h3>
		  <input type="texte"/>
		  <input type="texte" value={undefined}/>
		  <input type="texte" defaultValue="Ceci est un champ non controlé"/>


		  </div>
	  )
	}
  }
