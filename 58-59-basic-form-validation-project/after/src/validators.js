export function validateEmail(email) {
  const errors = [];

  if (email.length === 0) {
    errors.push("Required");
  }

  if (!email.match(/@webdevsimplified\.com$/)) {
    errors.push("Must end with @webdevsimplified.com");
  }

  return errors;
}

export function validatePassword(password) {
  const errors = [];

  if (password.length < 10) {
    errors.push("Must be at least 10 characters");
  }

  if (!password.match(/[a-z]/)) {
    errors.push("Must include at least one lowercase letter");
  }

  if (!password.match(/[A-Z]/)) {
    errors.push("Must include at least one uppercase letter");
  }

  if (!password.match(/\d/)) {
    errors.push("Must include at least one number");
  }

  return errors;
}
