import React, { useState, useEffect} from 'react'
import * as Yup from "yup";
import axios from "axios";

const formSchema = Yup.object().shape({
    username: Yup
        .string()
        .min(2, "Username must be at least 2 characters long.")
        .required("Username input is required."),
    password: Yup
        .string()
        .min(8, "Password must be at least 8 characters long.")
        .required("Password input is required."),
});

const initialFormValues = {
    username: '',
    password: '',
  }

const initialFormErrors = {
    username: '',
    password: '',
}

const initialDisabled = true

export default function Login() {
    const [username, setUsernames] = useState([])
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors) 
    const [disabled, setDisabled] = useState(initialDisabled)  

    const onInputChange = evt => {
        const { name, value } = evt.target
      
        Yup
          .reach(formSchema, name)
          .validate(value)
          .then(() => {
            setFormErrors({
              ...formErrors,
              [name]: ""
            });
          })
          .catch(err => {
            setFormErrors({
              ...formErrors,
              [name]: err.errors[0]
            })
          });
    
          setFormValues({
            ...formValues,
            [name]: value
          })
      }

    const onSubmit = evt => {
        evt.preventDefault()
    
        console.log('submitted!')
    
        axios
          .post('https://reqres.in/api/users', formValues)
          .then(res => {
            setUsernames([...username, res.data]);
            console.log("Success", res);
          })
          .catch(err => console.log(err.response))
          .finally(() => {
            setFormValues(initialFormValues)
          })
    }

    useEffect(() => {
        formSchema.isValid(formValues).then(valid => {
              setDisabled(!valid);
        })
    }, [formValues])

    return (
        <div>
            <form className='login-form-container' onSubmit={onSubmit}>
                <div className='login-header'>
                    <h2>Log In:</h2>
                </div>
                <div className='login-form-inputs'>
                    <label>Username:&nbsp;
                        <input
                            type='text'
                            username='username'
                            value={formValues.username}
                            onChange={onInputChange}
                            placeholder="Username"
                        />
                    </label>
                    <br />
                    <br />
                    <label>Password:&nbsp;
                        <input
                            type='password'
                            username='password'
                            value={formValues.password}
                            onChange={onInputChange}
                            placeholder="Password"
                        />
                    </label>
                    <br />
                    <br />
                    <button id='loginBtn' disabled={disabled}>Log In</button>
                </div>
                <br />
                <br />
                <div className='errors'>
                    <div>{formErrors.username}</div>
                    <div>{formErrors.password}</div>
                </div>
            </form>
            <pre>{JSON.stringify(username, null, 2)}</pre>
        </div>
    );
}