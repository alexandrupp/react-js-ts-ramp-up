import { useRef, useState } from "react";
import { validateEmail, validatePassword } from "./validators";

export function RefForm() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [emailErrors, setEmailErrors] = useState([]);
  const [passwordErrors, setPasswordErrors] = useState([]);
  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(false);

  const validateFormInput = (event) => {
    event.preventDefault();
    setIsAfterFirstSubmit(true);

    const emailResults = validateEmail(emailRef.current.value);
    const passwordResults = validatePassword(passwordRef.current.value);
    setEmailErrors(emailResults);
    setPasswordErrors(passwordResults);

    if (emailResults.length === 0 && passwordResults.length === 0) {
      alert("Success!");
    }
  };

  return (
    <form onSubmit={validateFormInput} className="form">
      <div className={`form-group ${emailErrors.length > 0 ? "error" : ""}`}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          className="input"
          type="email"
          id="email"
          ref={emailRef}
          onChange={
            isAfterFirstSubmit
              ? (event) => setEmailErrors(validateEmail(event.target.value))
              : undefined
          }
        />
        {emailErrors.length > 0 && (
          <div className="msg">{emailErrors.join(", ")}</div>
        )}
      </div>
      <div className={`form-group ${passwordErrors.length > 0 ? "error" : ""}`}>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          type="password"
          id="password"
          ref={passwordRef}
          onChange={
            isAfterFirstSubmit
              ? (event) =>
                  setPasswordErrors(validatePassword(event.target.value))
              : undefined
          }
        />
        {passwordErrors.length > 0 && (
          <div className="msg">{passwordErrors.join(", ")}</div>
        )}
      </div>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}
