import React, { Component } from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header';

class Dashboard extends Component {
	state = {};
	render() {
		return (
			<div className="dashboard">
				<Header />
				<div className="page wrapper">
					<h1>Dashboard</h1>
				</div>
				<Nav />
			</div>
		);
	}
}

export default Dashboard;
