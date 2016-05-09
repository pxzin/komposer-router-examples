import React, {Component}  from 'react';

export default class Clicker extends Component{
	constructor(prop){
		super();
		this.randomSeed = Math.random();
	}

	render(){
		return (<strong>{`Você já clicou [${this.props.clicks}] vezes`} - {this.randomSeed}</strong>)
	}
}