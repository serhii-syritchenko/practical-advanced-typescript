import fetch from 'node-fetch';

interface ITodo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

function GetTodos(target: any, name: string) {
	const init = () => {
		return fetch('https://jsonplaceholder.typicode.com/todos')
			.then(response => response.json())
	}

	Object.defineProperty(target, name, {
		get: function() {
			return init();
		}
	})
}

class TodoService {
	@GetTodos
	todos: Promise<ITodo[]>
}

const todoService = new TodoService();

todoService.todos.then(todos  => {
	console.log(todos[0].id)
})