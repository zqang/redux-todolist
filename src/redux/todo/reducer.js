import TodoAction from './type';


const INITIAL_STATE = {
    todoItems: [],
}


const todoReducer = (state= INITIAL_STATE, action ) => {
    switch(action.type){
        case TodoAction.ADD_TODO :
            return {
                ...state,
                todoItems:[...state.todoItems, {
                    id: action.id,
                    text: action.text,
                    completed: false
                }]
            };
        case TodoAction.REMOVE_TODO:
            return {
                ...state,
                todoItems: state.todoItems.filter(
                    todoItem => todoItem.id !== action.payload.id 
                )
            }
        default: 
            return state;
            
    }
};

export default todoReducer;