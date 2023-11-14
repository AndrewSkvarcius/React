import React, { useState} from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodo";
function TodoList(){
    const [ todos, setTodo] = useState([]);

    //add new todo
    const add = newTodo => {
        setTodo(todos => [...todos, newTodo]);
    };

    //update todo
    const update = (id, updatedTask ) => {
        setTodo(todos => todos.map(todo => todo.id === id ? 
            { ...todo, task: updatedTask}: todo) )
    };
    //delete todo with id
    const remove = id => {
        setTodo(todos => todos.filter(todo => todo.id !== id));
    };

    const todoParts = todos.map(todo => (
        <Todo
        remove={remove}
        key={todo.id}
        id={todo.id}
        task={todo.task} 
        update={update}
        />
    ))

    return (
        <div>
            <NewTodoForm createTodo={add}/>
            <ul>{todoParts}</ul>
        </div>
    )
}
export default TodoList