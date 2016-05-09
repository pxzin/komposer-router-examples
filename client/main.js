import React from 'react';
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createHistory, useBasename } from 'history';

const history = useBasename(createHistory)({
	basename: '/'
});

import App from './App-body';
import AppNotFound from './AppNotFound';
import Dashboard from './Dashboard';
import Generic from './Generic';
import Fabio from './Fabio';

var Routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Dashboard} />
		<Route path="/generic" component={Generic} version={13}>
			<IndexRoute component={Dashboard} />
			<Route path="/generic/fabio" component={Fabio}/>
		</Route>
		<Route path="/fabio" component={Fabio}/>
		<Route path="*" component={AppNotFound}/>
	</Route>
)


Meteor.startup(function() {
	render(
		<Router history={browserHistory}>
			{Routes}
		</Router>
		, document.getElementById('app')
	);
});