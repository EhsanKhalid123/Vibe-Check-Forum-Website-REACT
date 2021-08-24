// REFERENCE: The following code was adapted from Week 4 Activity 1 from Lab Examples

// Functional Component for Validation Rules
function validate(values) {
  // Array of Errors
  let errors = {};

  // If statement for is name field is empty then display error
  if (!values.name) {
    errors.name = 'Name is required!'
  }

  // If statement for if email is empty do this else if not empty then make sure email is in valid form
  if (!values.email) {
    errors.email = 'Email address is required!';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Please enter a valid email address!';
  }

  // If statement for if password is empty do this else if not empty then make sure requirements are met
  if (!values.password) {
    errors.password = 'Password is required!';
  } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)[^ ]{6,}/.test(values.password)) {
    errors.password = 'Password must meet requirements!';
  }
  return errors;
};

// Export the validate Function
export default validate;