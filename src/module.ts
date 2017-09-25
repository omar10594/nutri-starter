import { module } from 'angular';

import 'angular-ui-router';
import 'angular-material';
import './components/components.module';

export const app: ng.IModule = module('app', [
	'app.components',
	'ui.router',
	'ngMaterial'
]);