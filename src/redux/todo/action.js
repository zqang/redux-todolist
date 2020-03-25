import TodoAction from './type';

let nextTodoId = 0;
export const addTodo = text => ({
    type: TodoAction.ADD_TODO,
    id: nextTodoId++,
    text
})

export const removeTodo = todo => ({
    type: TodoAction.REMOVE_TODO,
    payload: todo,
})