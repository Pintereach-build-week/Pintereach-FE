import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';


// yup validation here

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required("Please enter your name.")
        .min(2, "Please enter a name longer than 2 characters."),
    username: yup
        .string()
        .min(2, "Username must be at least 2 characters long.")
        .required("Username is required."),
    email: yup
        .string()
        .email("Must be a valid email address.")
        .required("Must include email address."),
    password: yup
        .string()
        .min(6, "Passwords must be at least 6 characters long.")
        .required("Must include password."),
});

// Register Form

export default function Register() {
    const [buttonDisabled, setDisabled] = useState(true)
    const [formState, setFormState] = useState({
        name: "",
        username: "",
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
        username: "",
        email: "",
        password: "",        
    });
    //console.log(errors)

    const validateChange = event => {
        yup
        .reach(formSchema, event.target.name)
        .validate(event.target.value)
        .then(() => {
            setErrors({
                ...errors,
                [event.target.name]:""
            });
        })
        .catch(err => {
            setErrors({
                ...errors,
                [event.target.name]: err.errors[0]
            });
        });
    };

    const onSubmit = event => {
        event.preventDefault();
        console.log("Registration successful!")
        axios.post("https://reqres.in/api/article", formState)
            .then(response => { 
                setPost([...post, response.data]);
                setFormState({
                    name:"",
                    email: "",
                    password: "",
            })
            console.log("Response", response.data)
     
            })
            .catch(err => {
                console.log("Error", err.response)
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
        <Form onSubmit={onSubmit}>
            <div>
                <h1>Register Here</h1>
                <div className="error">
                    <Error>{errors.name}</Error>
                    <Error>{errors.username}</Error>
                    <Error>{errors.email}</Error>
                    <Error>{errors.password}</Error>
                </div>
                <div className="registerFormInputs">
                    <label>Name:&nbsp;
                        <input
                        id="name"
                        name="name"
                        type="text"
                        value={formState.name}
                        onChange={onInputChange}
                        placeholder="Enter your name here"
                        />
                    </label>
                    <br/>
                    <br/>
                    <label>Username:&nbsp;
                        <input 
                        type="text"
                        name="username"
                        value={formState.username}
                        onChange={onInputChange}
                        placeholder="Enter username here"
                        />
                    </label>
                    <br/>
                    <br/>
                    <label htmlFor="emailInput">Email:&nbsp;
                        <input
                            id="emailInput"
                            type="email"
                            name="email"
                            value={formState.email}
                            onChange={onInputChange}
                            placeholder="Enter email here"
                            />
                    </label>
                    <br/>
                    <br/>
                    <label htmlFor="passwordInput">Password:&nbsp;
                        <input
                            type="password"
                            name="password"
                            value={formState.password}
                            onChange={onInputChange}
                            placeholder="Enter password here"
                            />
                    </label>
                </div>
                <Button disabled={buttonDisabled}>Register Now!</Button>
                {/* <p>Already have an account?</p>
                <button>Login Here</button> */}
            </div>
        </Form>
       
    <pre>{JSON.stringify(post, null)}</pre>
    </div>
    );
};    

// Styling 
const Error = styled.div`
    color: #FF5733;
    font-size: .85rem;
    padding: 1%;
`;

const Form = styled.form`
    border: 1px solid #DBDBDB;
    border-radius: 3px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    padding: 3% 0;
    margin: 3% 15%;
`;

const Input = styled.input`
font-size: .85rem;
padding: 1%;
font-family: 'Roboto', sans-serif;
`;

const Button = styled.button`
    color: white;
    background-color: #FF5733;
    padding: 1% 4%;
    margin: 2%;
    border: 1px solid #DBDBDB;
    border-radius: 3px;
    `;



