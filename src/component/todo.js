import React from 'react';
import {connect} from 'react-redux';
import {removeTodo} from '../redux/todo/action';



const Todo = ({ todo, removeTodo}) =>{
    const {text, completed} = todo;
    
    return (
    <li
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}>
            {text} 
            <div style={{cursor: 'pointer'}} onClick={() =>removeTodo(todo)}>&#10005;</div>
    </li>
)};


const mapDispatchToProps = dispatch => ({
    removeTodo : todo => dispatch(removeTodo(todo))
})

export default connect(null,mapDispatchToProps)(Todo);