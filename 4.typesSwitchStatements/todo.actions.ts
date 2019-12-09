import { Action, Add, RemoveAll, TodoAction } from './index';

interface ITodoState {
	todos: string[]
}

function todoReducer(
	action: TodoAction,
	state: ITodoState = { todos: [] }
): ITodoState {
	switch (action.type) {
		case 'Add': {
			return {
				todos: [...state.todos, action.payload]
			}
		}
		case "Remove All": {
			return {
				todos: []
			}
		}
	}

	return state;
}