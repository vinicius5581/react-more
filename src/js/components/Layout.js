import React from 'react';

import Basics from './Basics';
import Footer from './Footer';
import Header from './Header';

export default class Layout extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			title : "Hey you"
		}
	}

	changeTitle(title){
		this.setState({title});
	}

	render() {
		const title = "Sup Vini!";

		setTimeout(() => this.setState({title:"Fala ae"}), 10000);

		return (
			<div>
				<Header changeTitle={this.changeTitle.bind(this)} title={title}/>
				<Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
				<Header title={this.state.title}/>
				{/*<Basics />*/}
				<Footer />
			</div>
		);
	} 
}
