export const validate = (input) => {
  const errors = {};
  if (
    !input.name &&
    !input.email &&
    !input.birthdate &&
    !input.nDni &&
    !input.username &&
    !input.password
  ) {
    return errors;
  }
  if (!input.name) {
    errors.name = "Name is required";
  } else if (input.name.length > 100) {
    errors.name = "Name cannot be longer than 100 characters";
  }

  if (!input.email) {
    errors.email = "Email is required";
  } else if (!isValidEmail(input.email)) {
    errors.email = "Email format is invalid";
  }

  if (!input.birthdate) {
    errors.birthdate = "Birthdate is required";
  } else if (!isValidDate(input.birthdate)) {
    errors.birthdate =
      "Birthdate is invalid. Is required at least 18 years old.";
  }

  if (!input.nDni) {
    errors.nDni = "ID number is required";
  } else if (isNaN(input.nDni)) {
    errors.nDni = "ID number must be an integer";
  }

  if (!input.username) {
    errors.username = "Username is required";
  } else if (!isValidUsername(input.username)) {
    errors.username =
      "Username can only contain letters, numbers, underscores, hyphens and periods";
  }

  if (!input.password) {
    errors.password = "Password is required";
  } else if (!isValidPassword(input.password)) {
    errors.password = "Password must be at least 8 characters long";
  }

  return errors;
};

const isValidEmail = (email) => {
  // Expresión regular para validar email
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regex.test(email);
};

const isValidDate = (dateString) => {
  // Verificar si la fecha es válida y no futura
  const today = new Date();

  const edadMinima = 18;
  const fechaLimite = new Date(
    today.getFullYear() - edadMinima,
    today.getMonth(),
    today.getDate()
  );

  const selectedDate = new Date(dateString);
  return selectedDate <= fechaLimite;
};

const isValidUsername = (username) => {
  // Expresión regular para validar username
  const regex = /^[a-zA-Z0-9_.-]+$/;
  return regex.test(username);
};

const isValidPassword = (password) => {
  // Expresión regular para validar contraseña
  const regex = /^.{8,}$/;
  return regex.test(password);
};
