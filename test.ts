// 1. Component
// 2. FullComponent with all parameters
// 3. Service
// 4. Pipe
// 5. Directive
// 6. Service with Http
// 7. Component, Model, Service
// 8. EventEmitter
// 9. Component with CORE_DIRECTIVES, FORM_DIRECTIVES etc
// 10. Componet with all lifecycle events


import {Pipe} from 'angular2/core';
@Pipe({
	name: 'fetch',
	pure: false
})
export class asyncPipePipe {
	private fetchedValue: any;
	private fetchPromise: Promise<any>;
	@Output() eventName = new EventEmitter();
	
	transform(value: string, args: string[]): any {
		if (!this.fetchPromise) {
			this.fetchPromise = window.fetch(value)
				.then((result: any) => result.json())
				.then((json: any) => this.fetchedValue = json);
		}
		return this.fetchedValue;
	}
}