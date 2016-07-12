import {Component} from '@angular/core';

@Component({
	selector: 'todo-app',
	templateUrl: './app/app.component.html',
	styleUrls: ['./app/app.component.css']
})

export class AppComponent {
	title: string;
	todos: string[];

	constructor() {
		this.title = 'Main 2';
		this.todos = [];

	}

	addTodo(event: any, input: HTMLInputElement) {
		this.todos.push(input.value);
		input.value = '';
	}

}