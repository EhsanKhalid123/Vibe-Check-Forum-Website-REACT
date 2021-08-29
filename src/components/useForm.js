// REFERENCE: Code is adapted from Week 4 Actviity 1 from Lab Examples

// Importing React classes and functions from node modules
import { useState, useEffect } from 'react';

const USERS_KEY = "users";

//https://hdtuto.com/article/react-js-get-current-date-and-time-example
// const currentDateTime = Date().toLocaleString();

// https://techfunda.com/howto/823/get-day-name-of-date
var days = new Array(7);
var month = new Array(12);
month[0] = "Jan"; month[1] = "Feb"; month[2] = "Mar"; month[3] = "Apr"; month[4] = "May"; month[5] = "Jun";
month[6] = "Jul"; month[7] = "Aug"; month[8] = "Sep"; month[9] = "Oct"; month[10] = "Nov"; month[11] = "Dec";
days[0] = "Sun"; days[1] = "Mon"; days[2] = "Tue"; days[3] = "Wed"; days[4] = "Thu"; days[5] = "Fri"; days[6] = "Sat";

var date = new Date(),
  currentDateTime = days[date.getDay()] + " " + month[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear();

// useState Hooks are being declared and used here
const useForm = (callback, validate) => {
  const [increment, setIncrement] = useState([]);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // useEffect Hook only runs when errors array and boolean value for isSubmitting is changed
  // If no errors and isSubmitting value is set to true then form is successfully submitted
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setValues(values => ({...values, success: "Successfully Signed Up, Use the Sign In tab to Login!" }));
      
      
      // User data is hard-coded, passwords are in plain-text.
      const users = [{ ...values, currentDateTime }];

      // users.push(values); 
      // users[values.username] = users

      // Increment Data, Add more users if already existing
      if (localStorage.getItem(USERS_KEY) !== null) {
        localStorage.setItem(USERS_KEY + increment, JSON.stringify(users));
        setIncrement(increment + 1);
      }
      else
        // Set data into local storage.
        localStorage.setItem(USERS_KEY, JSON.stringify(users));

      callback();

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
