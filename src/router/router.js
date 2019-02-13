import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from '../views/App/App';
import MeetingDetails from '../views/MeetingDetails/MeetingDetails';

const AppRouter = () => (
	<Router>
		<div style={{ height: '100%', overflow: 'hidden' }}>
			<Switch>
				<Route path="/" exact component={App} />
				<Route path="/MeetingDetails" component={MeetingDetails} />
			</Switch>
		</div>
	</Router>
);

export default AppRouter;
