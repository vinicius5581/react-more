import React from 'react';
import Header from './Header';

export default class Basics extends React.Component {
	
	constructor(props) {
		super(props);
		this.name = "Santana";
		this.state = {brand:"audi"};
	}

	getVal(val) {
		return "The val is: " + val;
	}

	render() {
		const name = 'Vini';

		var list = [
			1,
			2,
			<Header />
		];

		setTimeout(() => this.setState({brand:"bmw"}),1000);

		return (
			<div>
				{this.state.brand}
				{list}
				{name}
				{(() => 3)()}
				{3 + 2}
				{this.getVal(10)}
				{this.name}
			</div>
		);
	} 
}
