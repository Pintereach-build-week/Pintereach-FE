import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { login } from "../../store/auth/authActions";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import FormStyling from './FormStyling'


const Login = ({ errors, touched, ...props }) => {
  return(
   
    <FormStyling>
        <Form>
          <h2>Pintereach Log In</h2>
          <div style={{padding:'2% 0'}}>
            <label>
              <Field type="text" 
              name="username" 
              placeholder="Username" />
            </label>
            <div style={{paddingTop: '1%'}}>
              {touched.username && errors.username && (
                <Error className="error">{errors.username}</Error>
              )}
            </div>
          </div>
          
          <div style={{padding:'2% 0'}}>
            <label>
              <Field
              type="password"
                name="password"
                placeholder="Password" />
            </label>
            <div style={{paddingTop: '1%'}}>
              {touched.password && errors.password && (
                <Error className="error">{errors.password}</Error>
              )}
            </div>
          </div>
        
          <div style={{padding:'2% 0'}}><Button type="submit">{props.isLoading ? "..." : "Login "}</Button></div>

        </Form>
        <h4>
          Don't have an account yet? <Link to="/register" >Sign Up</Link> here.{" "}
        </h4> 
    </FormStyling>
    
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
    .required("Please enter your username."),
    password: Yup.string()
    .required("Please enter your password."),
  }),

  handleSubmit(values, { resetForm, props }) {
    props.login(values, props.history);
    resetForm();
  },
})(Login);

const mapStateToProps = state => {
  return {
      isLoading: state.auth.isLoading,
      error: state.auth.error,
  }
};

export default connect(
  mapStateToProps,
  { login },
)(FormikLoginForm);



const Button = styled.button`
  color: white;
  background-color: #FF5733;
  padding: 1% 4%;
  border: 1px solid rgba(var(--ca6,219,219,219),1);
  border-radius: 3px;
`;

// const LoginStyling = styled.form`
//   margin: 5% 15%;
//   padding: 3% 0;
//   border: 1px solid rgba(var(--ca6,219,219,219),1);
//   box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
//   border-radius: 3px;
//   text-align: center;
//   font-family: 'Roboto', sans-serif;
// `;

// const Input = styled.input`
//     font-size: .75rem;
//     padding: 1%;
// `;

const Error = styled.div`
    font-size: .75rem;
    color: #FF5733;
`;