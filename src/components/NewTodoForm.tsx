import React, {useState} from 'react';
// TODO This is a TypeScript functional component in React that renders a form for adding a new todo item. The component takes in a props object with an addTodo function that accepts two arguments, description and assigneThe component uses the useState hook to create two state variables, description and assigned, initialized to empty stringThe return statement contains a JSX form element with two input fields, one for the assigned property and another for the description property. The input fields are set up to update the corresponding state variables whenever the user enters new input using the onChange event handler.When the user clicks the "Add Todo" button, the submitTodo function is called. If both description and assigned are not empty, the props.addTodo function is called with the description and assigned arguments, and the setDescription and setAssigned functions are used to reset the input fields to empty strings.The React.FC type is used to define the component's props as a function component with a return value of type JSX.Element.
export const NewTodoForm: React.FC<{addTodo: Function}> = (props) => {

    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    const submitTodo = () => {
        if (description !== '' && assigned !== '') {
            props.addTodo(description, assigned);
            setDescription('');
            setAssigned('');
        }
    }

    return (
        <div className='mt-5'>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>Assigned</label>
                    <input 
                        type='text' 
                        className='form-control' 
                        required
                        onChange={e => setAssigned(e.target.value)}
                        value={assigned}
                    ></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <textarea 
                        className='form-control' 
                        rows={3} 
                        required
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                    ></textarea>
                </div>
                <button 
                    type='button' 
                    className='btn btn-primary mt-3' 
                    onClick={submitTodo}
                >
                    Add Todo
                </button>
            </form>
        </div>
    )
}