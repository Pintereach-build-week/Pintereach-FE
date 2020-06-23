import React, { useState, useEffect} from 'react'
import * as Yup from "yup";
import axios from "axios";
import styled from 'styled-components'

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
    const [user, setUsers] = useState([])
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
            setUsers([...user, res.data]);
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
        <div className='login-form'>
            <Form className='login-form-container' onSubmit={onSubmit}>
                <div className='login-header'>
                    <h2>Pintereach Log In</h2>
                </div>
                <div className='login-form-inputs'>
                    <label>
                        <Input
                            type='text'
                            name='username'
                            value={formValues.username}
                            onChange={onInputChange}
                            placeholder="Username"
                        />
                    </label>
                    <br />
                    <br />
                    <label>
                        <Input
                            type='password'
                            name='password'
                            value={formValues.password}
                            onChange={onInputChange}
                            placeholder="Password"
                        />
                    </label>
                    <br />
                    <br />
                    <Button id='loginBtn' disabled={disabled}>Log In</Button>
                    <br />
                    <br />
                    <div className='errors'>
                        <Error>{formErrors.username}</Error>
                        <Error>{formErrors.password}</Error>
                    </div>
                </div>
            </Form>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    );
}

const Button = styled.button`
  color: white;
  background-color: #FF5733;
  padding: 1% 4%;
  border: 1px solid rgba(var(--ca6,219,219,219),1);
  border-radius: 3px;
`;

const Form = styled.form`
  margin: 5% 15%;
  padding: 3% 0;
  border: 1px solid rgba(var(--ca6,219,219,219),1);
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  border-radius: 3px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
`;

const Input = styled.input`
    font-size: .75rem;
    padding: 1%;
`;

const Error = styled.div`
    font-size: .75rem;
    color: #FF5733;
`;
