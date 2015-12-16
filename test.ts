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
	
	import {Component } from 'angular2/core';
	@Component({selector: 'componentName', template: '<h2>This is componentName component.</h2><h3>Name: {{ name }}</h3>}'})
	class componentName {
	  name: string = 'Angular2 User';
	}