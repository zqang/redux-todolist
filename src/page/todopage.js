import React from 'react';
import {addTodo} from '../redux/todo/action';
import {connect} from 'react-redux';
import { selectTodoItems } from '../redux/todo/selector';
import {createStructuredSelector} from 'reselect';
import TodoList from '../component/todoList';


const Todopage = ({todoItems, addTodo}) => {
    let input 

    const handleSubmit = event =>{
        event.preventDefault();
        if(!input.value.trim()){
            return
        }
        addTodo(input.value);
        input.value = '';
    }

    return(
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type='text' ref={node => input = node}/>
                    <input type='submit' value='Add' />
                </form>
            </div>
            <TodoList todos = {todoItems}/>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    todoItems : selectTodoItems
});

const mapDispatchToProps = dispatch => ({
    addTodo : (item) => dispatch(addTodo(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Todopage);