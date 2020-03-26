import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';

import './App.css';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Submit from './pages/Submit';
import Success from './pages/Success';
import Submissions from './pages/Submissions';
import Edit from './pages/Edit';
import View from './pages/View';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
import Splash from './pages/Splash';

import firebase from './config/firebase';
import EditSuccess from './pages/EditSuccess';

class App extends Component {
	state = {
		user: null,
		userDetails: { fistName: '' },
		photoFile: null,
		photoBase64: null,
		selectedSubmission: {}
	};

	componentDidMount() {
		this.initApp();
	}

	auth = firebase.auth();
	db = firebase.firestore();

	initApp = () => {
		this.auth.onAuthStateChanged(user => {
			if (user) {
				this.setState({ user: user.uid }, () => {
					this.getUserDetails();
				});
			}
		});
	};

	getUserDetails = () => {
		this.db
			.collection('users')
			.doc(this.state.user)
			.get()
			.then(doc => {
				this.setState({ userDetails: doc.data() });
			});
	};

	// PHOTO UPLOAD
	onPhotoUpload = e => {
		const reader = new FileReader();
		const file = e.target.files[0];

		reader.onloadend = () => {
			this.setState(
				{
					photoFile: file,
					photoBase64: reader.result
				},
				() => {
					this.props.history.push('/dashboard/submit');
				}
			);
		};

		reader.readAsDataURL(file);
	};

	render() {
		return (
			<div className="App">
				<Route path="/" exact component={Splash} />

				<Route path="/login" exact component={Login} />
				<Route
					path="/register"
					exact
					render={() => <Register onRegister={this.onRegister} />}
				/>

				<Route
					path="/dashboard"
					exact
					render={() => (
						<Dashboard
							firstName={this.state.userDetails.firstName}
							onPhotoUpload={this.onPhotoUpload}
						/>
					)}
				/>

				<Route
					path="/dashboard/submit"
					exact
					render={() => (
						<Submit
							photoBase64={this.state.photoBase64}
							photoFile={this.state.photoFile}
							userDetails={this.state.userDetails}
							onPhotoUpload={this.onPhotoUpload}
						/>
					)}
				/>
				<Route path="/dashboard/submit/success" exact component={Success} />

				<Route
					path="/submissions"
					exact
					render={() => <Submissions user={this.state.user} />}
				/>

				<Route path="/submissions/:id" exact render={() => <View />} />
				<Route
					path="/submissions/:id/edit"
					exact
					render={props => (
						<Edit {...props} userDetails={this.state.userDetails} />
					)}
				/>

				<Route
					path="/submissions/:id/edit/success"
					exact
					component={EditSuccess}
				/>

				<Route
					path="/notifications"
					exact
					render={() => <Notifications user={this.state.user} />}
				/>

				<Route path="/settings" exact component={Settings} />
			</div>
		);
	}
}

export default withRouter(App);
