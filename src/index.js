import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// 引入store
import store from './store';
// 引入router
import AppRouter from './router';

import 'amfe-flexible';
import './css/index.scss';
import './css/common.scss';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<Provider store={store}>
		<AppRouter />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
