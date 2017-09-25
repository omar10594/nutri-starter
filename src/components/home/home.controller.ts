import { components } from '../components.module';
import { Chance } from 'chance';

export class HomeController {
	protected chance: Chance.Chance = new Chance();

	public message: string = 'Hello World!';

	public updateMessage(): void {
		this.message = `Hello ${this.chance.name_prefix()}!`;
	}
}

components
	.controller('HomeController', HomeController);