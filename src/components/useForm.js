// REFERENCE: Code is adapted from Week 4 Actviity 1 from Lab Examples

// Importing React classes and functions from node modules
import { useState, useEffect } from 'react';

// useState Hooks are being declared and used here
const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // useEffect Hook only runs when errors array and boolean value for isSubmitting is changed
  // If no errors and isSubmitting value is set to true then form is successfully submitted
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setValues(values => ({ ...values, success: "Successfully Signed Up, Use the Sign In tab to Login!" }));
      callback();
    }
  }, [errors, isSubmitting]);

  // Handesubmit event handler, runs each time form is submitted
  // Calls validation function and sets errors in values element from validate function
  const handleSubmit = (event) => {
    if (event)
      event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
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
export default useForm;
