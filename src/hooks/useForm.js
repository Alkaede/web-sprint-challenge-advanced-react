import {useState} from 'react';
// write your custom hook here to control your checkout form

export const useForm = (initValues) => {
  const [success, setSuccess] = useState(false);
  const [values, setValues] = useState(initValues);
  
  // going to pass values in const on the checkoutform
  // moving all state logic here
  
  // changehandler when values state is changed
  const handleChanges = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  // form submit
  const handleSubmit = e => {
    if(e){
      e.preventDefault();
    }
    setSuccess(true);
  }

  // returning the states
  return [values, handleChanges, handleSubmit, success];
}