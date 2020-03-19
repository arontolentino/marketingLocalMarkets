import React from 'react';
import './App.css';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Submit from './pages/Submit';
import Success from './pages/Success';
import Submissions from './pages/Submissions';
import Edit from './pages/Edit';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
import ImageCapture from './pages/ImageCapture';

function App() {
	return (
		<div className="App">
			<Router>
				<Redirect from="/" exact to="/dashboard" />

				<Route path="/login" exact component={Login} />
				<Route path="/register" exact component={Register} />

				<Route path="/dashboard" exact component={Dashboard} />

				<Route path="/submit" exact component={Submit} />
				<Route path="/submit/success" exact component={Success} />

				<Route path="/camera" exact component={ImageCapture} />

				<Route path="/submissions" exact component={Submissions} />
				<Route path="/submissions/edit/:id" exact component={Edit} />

				<Route path="/notifications" exact component={Notifications} />

				<Route path="/settings" exact component={Settings} />
			</Router>
		</div>
	);
}

export default App;
