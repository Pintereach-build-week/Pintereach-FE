import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

//Establish initial states here

// const initialFormValues = {
//     name: '',
//     email: '',
//     password: '',
// }


// yup validation here
const formSchema = yup.object().shape({
    name: yup
        .string()
        .required("Please enter your name.")
        .min(2, "Please enter a name longer than 2 characters."),
    email: yup
        .string()
        .email("Must be a valid email address.")
        .required("Must include email address."),
    password: yup
        .string()
        .min(6, "Passwords must be at least 6 characters long.")
        .required("Must include password."),
});

//Register Form

export default function Register() {
    const [buttonDisabled, setDisabled] = useState(true)
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [post, setPost] = useState([])
    useEffect(() => {
        formSchema
            .isValid(formState)
            .then(valid => {
                setDisabled(!valid)
            })
    }, [formState])

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",        
    });
    console.log(errors)

    const validateChange = event => {
        yup
        .reach(formSchema, event.target.name)
        .validate(event.target.value)
        .then(valid => {
            setErrors({
                ...errors,
                [event.target.name]:""
            });
        })
        .catch(err => {
            setErrors({
                errors,
                [event.target.name]: err.errors[0]
            });
        });
    };

    const onSubmit = event => {
        event.preventDefault();
        axios.post("https://reqres.in/api/article", formState)
            .then(response => {
                console.log("response", response.data)
                setPost([...post, response.data]);
                setFormState({
                    name:"",
                    email: "",
                    password: "",
            })
     
            })
            .catch(err => {
                console.log("Error", err)
            })
    }

    const onInputChange = event => {
        event.persist();
        const newFormData = {
            ...formState,
            [event.target.name]:
            [event.target.value],
        } 
    validateChange(event);
    setFormState(newFormData);
  }

    return (
    <div>     
        <form onSubmit={onSubmit}>
            <div>
                <h1>Register Here</h1>
                <div className="error">
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                </div>
                <div className="registerFormInputs">
                    <label>Name:
                        <input
                        id="name"
                        name="name"
                        type="text"
                        value={formState.name}
                        onChange={onInputChange}
                        />
                    </label>
                    <label htmlFor="emailInput">Email:
                        <input
                            id="emailInput"
                            type="email"
                            name="email"
                            value={formState.email}
                            onChange={onInputChange}
                            />
                    </label>
                    <label htmlFor="passwordInput">Password:
                        <input
                            type="password"
                            name="password"
                            value={formState.password}
                            onChange={onInputChange}
                            />
                    </label>
                </div>
                <button disabled={buttonDisabled}>Submit</button>
            </div>
        </form>
       
    <pre>{JSON.stringify(post, null)}</pre>
    </div>
    );
};    



