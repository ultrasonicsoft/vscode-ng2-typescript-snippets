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
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | pipeName:exponent
 * Example:
 *   {{ 2 |  pipeName:10}}
 *   formats to: 1024
*/
@Pipe({name: 'pipeName'})
export class pipeNamePipe {
	transform(value:number, args:string[]) : any {
		return Math.pow(value, parseInt(args[0] || '1', 10));
	}
}