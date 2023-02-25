import React from "react"
// TODO This is a TypeScript functional component in React that renders a single row of a todo list. The component takes in a props object with four properties: rowNumber, rowDescription, rowAssigned, and deleteTodo. rowNumber is a number, rowDescription and rowAssigned are strings, and deleteTodo is a function that takes in a number argument.The return statement contains a JSX table row (<tr>) element that renders three table cells (<td>): one for the rowNumber, one for the rowDescription, and one for the rowAssigned. The onClick event handler is set up so that when the row is clicked, the props.deleteTodo function is called with the rowNumber argument.The React.FC type is used to define the component's props as a function component with a return value of type JSX.Element.
export const TodoRowItem: React.FC<{
    rowNumber: number, 
    rowDescription: string, 
    rowAssigned: string, 
    deleteTodo: Function
}> = (props) => {

    return (
        <tr onClick={() => props.deleteTodo(props.rowNumber)}>
            <th scope="row">{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    )
}