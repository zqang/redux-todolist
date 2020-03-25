import {createSelector} from 'reselect';

const selectTodo = state => state.todo;

export const selectTodoItems = createSelector(
    [selectTodo],
    (todo) => todo.todoItems
);