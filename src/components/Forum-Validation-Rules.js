// REFERENCE: The following code was adapted from Week 4 Activity 1 from Lab Examples

// Functional Component for Validation Rules
function validate(values) {
    // Array of Errors
    let errors = {};
  
    // If statement for is name field is empty then display error
    if (!values.textarea) {
      errors.textarea = 'Error: Post is Empty!';
    }
  
    return errors;
  };
  
  // Export the validate Function
  export default validate;