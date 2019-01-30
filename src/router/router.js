import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from '../views/App/App';
// import about from '../views/about/about';
// import car from '../views/car/car';

const AppRouter = () => (
	<Router>
		<div style={{ height: '100%', overFlow: 'hidden' }}>
			<Route path="/" exact component={App} />
			{/* <Route path="/car" component={car} />
			<Route path="/about" component={about} /> */}
		</div>
	</Router>
);

export default AppRouter;
