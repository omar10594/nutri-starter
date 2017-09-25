import 'angular';
import 'angular-mocks';
import { HomeController } from './home.controller';

describe('HomeController', () => {
	it('should return the correct message', () => {
		const ctrl: HomeController = new HomeController();

		expect(ctrl.message).toBe('Hello World!');
	})

	it('should update the message with a name', () => {
		const ctrl: HomeController = new HomeController();
		ctrl.updateMessage();

		expect(ctrl.message).not.toMatch('Hello World!');
		expect(ctrl.message).toMatch(/^Hello .*!$/);
	})
})