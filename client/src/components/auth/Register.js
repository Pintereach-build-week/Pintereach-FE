import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
// import styled from "styled-components";
import { connect } from "react-redux";
import { register } from "../../store/auth/authActions";
import { Link } from "react-router-dom";


const SignUpForm = ({ errors, touched, ...props }) => {
  return (
    <div>
      
        <Form>
          <label>
            Username
            <Field 
            type="text" 
            name="username" 
            placeholder="Username" />
          </label>
          {touched.username && errors.username && (
            <p className="error">{errors.username}</p>
          )}

          <label>
            Password
            <Field 
            type="password" 
            name="password" 
            placeholder="Password" />
          </label>
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}

          <div><button type="submit">{props.isLoading ? "..." : "Register Now!"}</button></div>

        </Form>
        <h3>
          Already have an account? <Link to="/login">Login Here</Link> here.{" "}
        </h3>
      </div>
    
  );
};

const FormikSignUpForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",
      
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
    .min(2, "Please enter a name longer than 2 characters.")
    .required("Please enter your username."),
    password: Yup.string()
      .min(2, "Passwords must be at least 6 characters long.")
      .required("Must include password."),
    
  }),

  handleSubmit(values, { props }) {
    let user = {
      username: values.username,
      password: values.password,
    };

    props.register(user, props.history);
  },
})(SignUpForm);

const mapPropsToState = state => {
  return {
      isLoading: state.auth.isLoading,
      error: state.auth.error,
  }
};

export default connect(
  mapPropsToState,
  { register },
)(FormikSignUpForm);


// Styling 
// const Error = styled.div`
//     color: #FF5733;
//     font-size: .85rem;
//     padding: 1%;
// `;

// const Form = styled.form`
//     border: 1px solid #DBDBDB;
//     border-radius: 3px;
//     text-align: center;
//     font-family: 'Roboto', sans-serif;
//     padding: 3% 0;
//     margin: 3% 15%;
// `;

// const Input = styled.input`
// font-size: .85rem;
// padding: 1%;
// font-family: 'Roboto', sans-serif;
// `;

// const Button = styled.button`
//     color: white;
//     background-color: #FF5733;
//     padding: 1% 4%;
//     margin: 2%;
//     border: 1px solid #DBDBDB;
//     border-radius: 3px;
 
 
//     `;
//     return (
//     <div>     
//         <Form onSubmit={onSubmit}>
//             <div>
//                 <h1>Register Here</h1>
//                 <CalltoAction><h4>Please fill out form below</h4></CalltoAction>
//                 <div className="error">
//                     <Error>{errors.name}</Error>
//                     <Error>{errors.username}</Error>
//                     <Error>{errors.email}</Error>
//                     <Error>{errors.password}</Error>
//                 </div>
//                 <div className="registerFormInputs">
//                     <label> Name:&nbsp;
//                         <Input
//                         id="name"
//                         name="name"
//                         type="text"
//                         value={formState.name}
//                         onChange={onInputChange}
//                         placeholder="Enter your name here"
//                         />
//                     </label>
//                     <br/>
//                     <br/>
//                     <label>Username:&nbsp;
//                         <Input 
//                         type="text"
//                         name="username"
//                         value={formState.username}
//                         onChange={onInputChange}
//                         placeholder="Enter username here"
//                         />
//                     </label>
//                     <br/>
//                     <br/>
//                     <label htmlFor="emailInput">Email:&nbsp;
//                         <Input
//                             id="emailInput"
//                             type="email"
//                             name="email"
//                             value={formState.email}
//                             onChange={onInputChange}
//                             placeholder="Enter email here"
//                             />
//                     </label>
//                     <br/>
//                     <br/>
//                     <label htmlFor="passwordInput">Password:&nbsp;
//                         <Input
//                             type="password"
//                             name="password"
//                             value={formState.password}
//                             onChange={onInputChange}
//                             placeholder="Enter password here"
//                             />
//                     </label>
//                 </div>
//                 <Button disabled={buttonDisabled}
//                 type="submit"
//                 >Register Now!</Button>
//             </div>
//         </Form>
       
//     <pre>{JSON.stringify(post, null)}</pre>
//     </div>
//     );
// };    





