import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

export const RegisterPage = () => {
  const {
    onChange,
    name,
    email,
    password1,
    password2,
    formData,
    resetForm,
    isValidEmail,
  } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          name="name"
          onChange={onChange}
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          name="email"
          onChange={onChange}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>email invalido</span>}

        <input
          type="password"
          placeholder="Password"
          value={password1}
          name="password1"
          onChange={onChange}
        />
        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>La contrasena debe de tener 6 caracteres</span>
        )}

        <input
          type="password"
          placeholder="Repeat Password"
          value={password2}
          name="password2"
          onChange={onChange}
        />
        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password2.trim().length > 0 &&
          password1 === password2 &&
          password1.trim().length > 0 && (
            <span>La contrasena debe de tener 6 caracteres</span>
          )}

        <button type="submit">Create</button>
        <button type="button" onClick={resetForm} className="btn">
          Reset
        </button>
      </form>
    </div>
  );
};
