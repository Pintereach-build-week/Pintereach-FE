import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

//// Set up initial states ////

const initialFormValues = {
    name: "",
    email: "",
    username: "",
    password: "",
}

const initialErrors = {
    name: "",
    email: "",
    username: "",
    password: "",
}

const initialDisabled = true


//// yup validation here ////

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("Please enter your name.")
        .min(2, "Please enter a name longer than 2 characters."),
    email: yup
        .string()
        .trim()
        .email("Must be a valid email address.")
        .required("Must include email address."),
    username: yup
        .string()
        .trim()
        .min(2, "Username must be at least 2 characters long.")
        .required("Username is required."),
    password: yup
        .string()
        .trim()
        .min(6, "Passwords must be at least 6 characters long.")
        .required("Must include password."),
});

//// Register Form ////

export default function Register() {
    const [formValues, setFormValues] = useState(initialFormValues)
    const [errors, setErrors] = useState(initialErrors)
    const [disabled, setDisabled] = useState(initialDisabled)
    const [post, setPost] = useState([])
    

    const onInputChange = event => {
        const { name, value } = event.target

        yup
        .reach(formSchema, name)
        .validate(value)
        .then(() => {
            setErrors({
                ...errors,
                [name]: ""
            });
        })
        .catch(err => {
            setErrors({
                ...errors,
                [name]:err.errors[0]
            })
        });

        setFormValues({
            ...formValues,
            [name]: value
        })
    }



    const onSubmit = event => {
        event.preventDefault();
        console.log("Registration successful!")
        axios.post("https://reqres.in/api/article", formValues)
            .then(response => { 
                setPost([...post, response.data]);
                console.log("Response", response.data)
            })
            .catch(err => {
                console.log("Error", err.response)
            })
            .finally(() => {
                setFormValues(initialFormValues)
            }) 
    }

    useEffect(() => {
        formSchema
            .isValid(formValues)
            .then(valid => {
                setDisabled(!valid)
            })
    }, [formValues])

    return (
    <div>     
        <Form onSubmit={onSubmit}>
            <div>
                <Title>Pintereach</Title>
                <h1>Register Here</h1>
                <CalltoAction>Please fill out form below</CalltoAction>
                <div className="errors">
                    <Error>{errors.name}</Error>
                    <Error>{errors.email}</Error>
                    <Error>{errors.username}</Error>
                    <Error>{errors.password}</Error>
                </div>
                <div className="registerFormInputs">
                    <label> Name:&nbsp;
                        <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formValues.name}
                        onChange={onInputChange}
                        placeholder="Enter your name here"
                        />
                    </label>
                    <br/>
                    <br/>
                    <label htmlFor="emailInput">Email:&nbsp;
                        <Input
                            id="emailInput"
                            type="email"
                            name="email"
                            value={formValues.email}
                            onChange={onInputChange}
                            placeholder="Enter email here"
                            />
                    </label>
                    <br/>
                    <br/>
                    <label>Username:&nbsp;
                        <Input 
                        type="text"
                        name="username"
                        value={formValues.username}
                        onChange={onInputChange}
                        placeholder="Enter username here"
                        />
                    </label>
                    <br/>
                    <br/>
                    <label htmlFor="passwordInput">Password:&nbsp;
                        <Input
                            type="password"
                            name="password"
                            value={formValues.password}
                            onChange={onInputChange}
                            placeholder="Enter password here"
                            />
                    </label>
                </div>
                <Button disabled={disabled}
                type="submit"
                >Register Now!</Button>
            </div>
        </Form>
       
    <pre>{JSON.stringify(post, null, 2)}</pre>
    </div>
    );
};    

// Styling 
const Title = styled.h1`
color: white;
background-color: #FF5733;
width: 100%;
text-align: center;
font-size: 2.5rem;
`;

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
    margin: 3% 0 3% 15%;
    width: 70%;
`;

const Input = styled.input`
    font-size: .85rem;
    padding: 1%;
    width: 210px;
    font-family: 'Roboto', sans-serif;
    text-align: left;
    margin-left: 1%;
`;

const Button = styled.button`
    color: white;
    background-color: #FF5733;
    padding: 1% 4%;
    margin: 2%;
    border: 2px solid #DBDBDB;
    border-radius: 3px;

    &:hover {
        background-color: white;
        border: 2px solid #FF5733;
        color:#FF5733;
    }
    `;

const CalltoAction = styled.h4`
    color:#FF5733;
`;
