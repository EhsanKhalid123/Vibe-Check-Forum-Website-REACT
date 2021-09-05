// REFERENCE: Code is adapted from Week 4 Actviity 1 from Lab Examples

// Importing React classes and functions from node modules
import { useState, useEffect } from 'react';
import { getDateJoined, getEmail, getPassword, getUser } from '../data/repository';

const USERS_KEY = "users";
const USER_KEY = "user";
const EMAIL_KEY = "email";
const PASSWORD_KEY = "Password";

var currentDateTime = getDateJoined();

// useState Hooks are being declared and used here
const EditForm = (callback, validate1, props) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);


  // useEffect Hook only runs when errors array and boolean value for isSubmitting is changed
  // If no errors and isSubmitting value is set to true then form is successfully submitted
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setValues(values => ({ ...values, success: "Profile Details Updated Successfully!" }));

      // User data is hard-coded, passwords are in plain-text.
      const users = [{ ...values, currentDateTime }];

      localStorage.setItem(USERS_KEY, JSON.stringify(users));
      localStorage.setItem(USER_KEY, values.username);
      localStorage.setItem(EMAIL_KEY, values.email);
      localStorage.setItem(PASSWORD_KEY, values.password);
      
      callback();

      props.loginUser(getUser(), getEmail(), getDateJoined(), getPassword());
  
      // Refresh the Page.
      props.history.push("/EditProfile");
      
      values.username = null;
      values.email = null;
      values.password = null;

    }
  }, [errors, isSubmitting]);



  // Handesubmit event handler, runs each time form is submitted
  // Calls validation function and sets errors in values element from validate function
  const handleSubmit = (event) => {
    if (event)
      event.preventDefault();
    setErrors(validate1(values));
    setIsSubmitting(true);
    values.success = "";
  };

  // Handechange event handler, runs each time an input box value changes
  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    values.success = "";

  };

  // Returns the folowing functions to be accessed by pages when imported
  return {
    handleChange,
    handleSubmit,
    values,
    errors
  };
};

// Export the useForm Function
export default EditForm;
