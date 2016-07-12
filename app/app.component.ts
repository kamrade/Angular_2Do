import {Component} from '@angular/core';

@Component({
	selector: 'todo-app',
	templateUrl: './app/app.component.html',
	styleUrls: ['./app/app.components.css']
})

export class AppComponent {
	title: string;
	constructor() {
		this.title = 'Main 2Do'
	}
}