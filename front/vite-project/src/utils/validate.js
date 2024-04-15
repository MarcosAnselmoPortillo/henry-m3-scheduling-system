export const validate = (input) => {
    const errors = {};
    if (!input.name) {
        errors.name = 'Name is required';
      } else if (input.name.length > 100) {
        errors.name = 'Name cannot be longer than 100 characters';
      }
    
      if (!input.email) {
        errors.email = 'Email is required';
      } else if (isValidEmail(input.email)) {
        errors.email = 'Email format is invalid';
      }
    
      if (!input.birthdate) {
        errors.birthdate = 'Birthdate is required';
      } else if (!(input.birthdate instanceof Date) || isNaN(input.birthdate) || !isValidDate(input.birthdate)) {
        errors.birthdate = 'Birthdate is invalid';
      }
    
      if (!input.nDni) {
        errors.nDni = 'ID number is required';
      } else if (isNaN(input.nDni)) {
        errors.nDni = 'ID number must be an integer';
      }
    
      if (!input.username) {
        errors.username = 'Username is required';
      }
    
      if (!input.password) {
        errors.password = 'Password is required';
      } else if (input.password.length < 6) {
        errors.password = 'Password must be at least 6 characters long';
      }
    
      return errors;
}

const isValidEmail = (email) => {
    // Expresión regular para validar email
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
};

const isValidDate = (dateString) => {
    // Verificar si la fecha es válida y no futura
    const today = new Date();
    const selectedDate = new Date(dateString);
    return selectedDate <= today;
};