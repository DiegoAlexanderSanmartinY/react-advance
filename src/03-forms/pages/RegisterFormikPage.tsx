import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{ name: "", email: "", password1: "", password2: "" }}
        onSubmit={(values) => {
          console.log("values", values);
        }}
        onReset={() => {}}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .min(2, "Must be 3 characters or more")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password1: Yup.string()
            .min(6, "Must be 6 characters or more")
            .required("Required"),
          password2: Yup.string()
            .required("Required")
            .min(6, "Must be 6 characters or more")
            .oneOf([Yup.ref("password1")], "Passwords must match"),
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" placeholder="Name" />
            <ErrorMessage name="name" component="span" />

            <label>Email</label>
            <Field name="email" type="email" placeholder="Email" />
            <ErrorMessage name="email" component="span" />

            <label>Password</label>
            <Field name="password1" type="password1" placeholder="Password" />
            <ErrorMessage name="password1" component="span" />

            <label>Password</label>
            <Field
              name="password2"
              type="password2"
              placeholder="Repeat Password"
            />
            <ErrorMessage name="password2" component="span" />

            <button type="submit">Create</button>
            <button type="reset" className="btn">
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );

  // const {
  //   onChange,
  //   name,
  //   email,
  //   password1,
  //   password2,
  //   formData,
  //   resetForm,
  //   isValidEmail,
  // } = useForm({
  //   name: "",
  //   email: "",
  //   password1: "",
  //   password2: "",
  // });
  // const onSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event?.preventDefault();
  //   console.log(formData);
  // };
  // return (
  //   <div>
  //     <h1>Register Formik Page</h1>

  //     <form noValidate onSubmit={onSubmit}>
  //       <input
  //         type="text"
  //         placeholder="Name"
  //         value={name}
  //         name="name"
  //         onChange={onChange}
  //         className={`${name.trim().length <= 0 && "has-error"}`}
  //       />
  //       {name.trim().length <= 0 && <span>Este campo es necesario</span>}

  //       <input
  //         type="email"
  //         placeholder="Email"
  //         value={email}
  //         name="email"
  //         onChange={onChange}
  //         className={`${!isValidEmail(email) && "has-error"}`}
  //       />
  //       {!isValidEmail(email) && <span>email invalido</span>}

  //       <input
  //         type="password"
  //         placeholder="Password"
  //         value={password1}
  //         name="password1"
  //         onChange={onChange}
  //       />
  //       {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
  //       {password1.trim().length < 6 && password1.trim().length > 0 && (
  //         <span>La contrasena debe de tener 6 caracteres</span>
  //       )}

  //       <input
  //         type="password"
  //         placeholder="Repeat Password"
  //         value={password2}
  //         name="password2"
  //         onChange={onChange}
  //       />
  //       {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
  //       {password2.trim().length > 0 &&
  //         password1 === password2 &&
  //         password1.trim().length > 0 && (
  //           <span>La contrasena debe de tener 6 caracteres</span>
  //         )}

  //       <button type="submit">Create</button>
  //       <button type="button" onClick={resetForm} className="btn">
  //         Reset
  //       </button>
  //     </form>
  //   </div>
  // );
};
