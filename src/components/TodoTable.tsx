import React from "react"
import { TodoRowItem } from "./TodoRowItem"
// TODO These are the same code snippets as before, but now they are written using TypeScript. TypeScript is a superset of JavaScript that adds optional static typing and other features to JavaScript, which can help catch errors earlier and make code more maintainable. In the updated code, each component has a type definition that specifies the type of its props. For example, the NewTodoForm component has a prop called addTodo of type Function, which represents a function that can take any arguments and return any value. The TodoRowItem component has props called rowNumber, rowDescription, rowAssigned, and deleteTodo, all of which have specific types. Finally, the TodoTable component has props called todos and deleteTodo, where todos is an array of TodoModel objects and deleteTodo is a function that can take a number and return any value.
export const TodoTable: React.FC<{
    todos: TodoModel[], deleteTodo: Function
}> = (props) => {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Assigned</th>
                </tr>
            </thead>
            <tbody>
                {props.todos.map(todo => (
                    <TodoRowItem
                        key={todo.rowNumber} 
                        rowNumber={todo.rowNumber}
                        rowDescription={todo.rowDescription}
                        rowAssigned={todo.rowAssigned}
                        deleteTodo={props.deleteTodo}
                    />
                ))}
            </tbody>
        </table>
    )
}