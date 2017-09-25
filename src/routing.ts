import { app } from './module';

import homeTemplate = require('./components/home/home.template.html');

app
	.config(routes);

function routes($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider): void {
	const homeState = {
		name: 'home',
		url: '/',
		controller: 'HomeController',
		controllerAs: 'home',
		template: homeTemplate
	};

	$stateProvider.state(homeState);
	$urlRouterProvider.otherwise('/');
}