import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from '../views/App/App';
import MeetingDetails from '../views/MeetingDetails/MeetingDetails';

class AppRouter extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Router>
				<div style={{ height: '100%', overflow: 'hidden' }}>
					<Switch>
						<Route path="/" exact component={App} />
						<Route path="/MeetingDetails" component={MeetingDetails} />
					</Switch>
				</div>
			</Router>
		);
	}
}

// 将store和组件连接起来
export default AppRouter;
