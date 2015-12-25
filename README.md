# Angular 2 TypeScript Snippets for VS Code

## IMPORTANT UPDATE

All latest Angular2 Beta API keywords has been included in this snippet. With these snippet your Angular2 development speed will be drastrically improved.

https://angular.io/docs/ts/latest/api/
  
**************************************************

Angular 2 has gone in Beta version.

https://angular.io/

A great news for all of Angular2 lovers. 

If you are working on Angular 2 with TypeScript, here are the most frequently used snippets for Angular2 with Typescript embedded in Visual Studio Code..

These snippet will generate code with latest syntax for Component, Directive, Service, Events, Lifecycle events and much more... 


## Usage
Type part of a snippet, press `enter`, and the snippet unfolds.

# Latest Angular2 API keywords
![api2](https://cloud.githubusercontent.com/assets/4145169/11999302/c39f5d2c-aae0-11e5-8954-ca1e3a3a099d.gif)

# Latest Angular2 Typescript snippets
```typescript
<<Angular2 api keywords>>       // https://angular.io/docs/ts/latest/api/ all latest Angular2 API keywords 

ng2bootstrap  					// generate an Angular 2 Bootstrap snippet
ng2appComp    					// generate an Angular 2 Root App Component class with basic DIRECTIVES, COMPONENTS, PROVIDERS etc
ng2component    				// generate an Angular 2 Simple Component class
ng2compService    				// generate an Angular 2 Component class with Service Dependency Injection
ng2simpleService    			// generate an Angular 2 Simple Service class
ng2httpService					// generate an Angular 2 Service class with HTTP service injected
ng2pipeSimple					// generate an Angular 2 Simple Pipe class - Stateless
ng2pipeAsyncStateful			// generate an Angular 2 Async Stateful Pipe class
ng2eventEmitter					// generate an Angular 2 EventEmitter event variable
ng2componentEmpty				// generate an Angular 2 Component with empty definition
ng2onChanges					// generate an Angular 2 ngOnChange event handler function
ng2componentAfterContentInit	// generate an Angular 2 Component implementing AfterContentInit interface
ng2directiveSimple				// generate an Angular 2 Directive with empty definition

ng2constructor					// generate constructor definition
forFull							// generate full definition of for loop

```

![demo8](https://cloud.githubusercontent.com/assets/4145169/11861826/fc83e0dc-a4a9-11e5-8548-41709cf9c430.gif)


Latest Angular2 HTML snippets
```typescript
ngClick                             // "Click event directive. (click)="clickEventHandler($event)"" 
ngInterpol                          // "Interpol component's property in html" 
ngInterpol-part                     // "Interpol component's property in <p> tag. <p>{{property}}</p>"
ngInterpol-div                      // "Interpol component's property in <div> tag. <div>{{property}}</div>"
ngBind-one-way                      // "One way binding to component's property. [property]=\"Property\""
ngBind-one-way-div                  // "One way binding to <div> property e.g. <div [property]=\"property\"></div>"
ngBind-ng-model                     // "Two way binding [(ngModel)] to component's property. [(ngModel)]=\"Property\""
ngBind-ng-model-div                 // "Two way binding [(ngModel)] to component's property. [(ngModel)]=\"Property\""
ngBind-two-way                      // "Two way binding to component's property. [(property)]=\"Property\""
ngBind-two-way-div                  //  "Two way binding to component's property. [(property)]=\"Property\""
ngIf                                // "ngIf directive. *ngIf=\"Property\""
ngIf-div                            //  "ngIf directive on <div>. <div *ngIf=\"Property\"></div>"
ngIf-section                        //  "ngIf directive on <section>. <section *ngIf=\"Property\"></section>"
ngFor                               // "ngFor. *ngFor=\"#item of list\""
ngFor-li		                    //  "ngFor on <li>. <li *ngFor=\"#item of list\">{{item}}</li>"
ngSwitch                            // "ngSwitch directive. [ngSwitch]=\"conditionExpression\""
ngSwitch-when-default               // "ngSwitch with <div> and ngSwitchWhen conditions."
ngSwitch-template                   // "ngSwitch with <template> and ngSwitchWhen conditions."
ngClass                             // "ngClass directive. [ngClass]=\"highlightedClass\""
ngClass-array                       // "ngClass with Css class array . [ngClass]=[\"highlightedClass\",\"showBorder\""
ngClass-object                      // "ngClass with Css class Object . [ngClass]=\"{active: isOn, disabled: isDisabled}\""
ngClass-div                         // "ngClass on <div> directive. <div [ngClass]=\"CSS-Class-Name\"> </div>"
ngClass-array-div                   // "ngClass with Css class array on <div>. <div [ngClass]=\"[CssClass-1,CssClass-2]\"> </div>"
ngClass-object-div                  // "ngClass with Css class Object . [ngClass]=\"{active: isOn, disabled: isDisabled}\""
ngForm-submit		                // "Form tag with (ngSubmit). <form id=\"dataForm\" (ngSubmit)=\"submitMethod()\"></div>" 
ngInput-control                     // "input control with data binding . <input type=\"text\" class=\"form-control\" required"
ngSelect-control                    // "select control with data binding . <select required [(ngModel)]=\"model.property\" ngControl=\"controlName\">"
ngDiv-hidden                        // "Conditional hidden <div> . <div [hidden]=\"condition\"></div>"
ngInput-text                        // "Text input box. <input type=\"text\" required></input>"
ngInput-ngModel                     // "Input box with ngModel binding . <input type=\"text\" required [(ngModel)]=\"model.name\">{{model.name}} </input>"
ngButton-submit                     //  "Submit button. <button type=\"submit\">Submit</button>"
ngButton-click                      // "button with click event. <button (click)=\"onClick()\">Button Text</button>"
ngKeyUp                             // "Key up event. (keyup)=\"onKey($event)\""
ngBlur                              // "Blur event. (blur)=\"onBlur($event)\""
ngSubmit                            // "ngSubmit event. (ngSubmit)=\"onSubmit()\""
ngPipeWithProperty                  // "Apply pipe on component property. [date, json, number, ...]}"
ngPipeWithProperty                  // "Pipe with interpolation property" 
ngPipe-Async                        // "Async Pipe with interpolation property"
ngPipe-date                         // "Date Pipe. e.g. 'Jun 15, 2015' for en-US"
ngPipe-date-mediumDate              // "Medium Date With Time Pipe. e.g. Sep 3, 2010, 12:05:08 PM for en-US"
ngPipe-date-shortDate               // "Short Date With Time Pipe. e.g. 9/3/2010, 12:05 PM for en-US"
ngPipe-date-full                    // "Full Date Pipe. e.g. Friday, September 3, 2010 for en-US"
ngPipe-longDate                     // "Long Date Pipe. e.g. September 3, 2010"
ngPipe-mediumDate                   // "Medium Date Pipe. e.g. Sep 3, 2010 for en-US"
ngPipe-shortDate                    // "Short Date Pipe. e.g. Sep 3, 2010 for en-US"
ngPipe-mediumTime                   // "Medium Time Pipe. e.g. 12:05:08 PM for en-US"
ngPipe-shortTime                    // "Short Time Pipe. e.g. 12:05 PM for en-US"
ngPipe-Uppercase                    // "Uppercase pipe. Convert string to upper case"
nPipe-Lowercase                     // "Lowercase pipe. Convert string to lower case"
ngPipe-json                         // "Json pipe. Convert string to JSON format"
ngPipe-slice                        // "Slice pipe. Creates a new List or String containing only a subset (slice) of the elements."
ngPipe-Decimal                      // "Decimal pipe. Formats a number as local text. i.e. group sizing and separator and other locale-specific configurations are based on the active locale."
ngPipe-percent                      // "Percent pipe. Formats a number as local percent."
ngPipe-currency                     // "Currency pipe. Formats a number as local currency."

```

![htmldemo4](https://cloud.githubusercontent.com/assets/4145169/11918039/a72e2b5c-a746-11e5-9abe-20472267325a.gif)


Alternatively, press `Ctrl`+`Space` (Windows, Linux) or `Cmd`+`Space` (OSX) to activate snippets from within the editor.

## Installation

1. Install Visual Studio Code 0.10.1 or higher
2. Launch Code
3. From the command palette `Ctrl`-`Shift`-`P` (Windows, Linux) or `Cmd`-`Shift`-`P` (OSX)
4. Select `Install Extension`
5. Choose the extension `Angular2 TypeScript with HTML directives Snippets` - `By Balram`

![install updated](https://cloud.githubusercontent.com/assets/4145169/11919220/5bc2b4a4-a772-11e5-9dba-82763eba3a15.png)

6. Reload Visual Studio Code

![restart](https://cloud.githubusercontent.com/assets/4145169/11861315/0496279e-a4a5-11e5-97b5-8a22f7fc842a.png)


Stay tuned for latest updates...

Thanks!
