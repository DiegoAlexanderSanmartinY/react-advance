import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: "",
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log("values", values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(10, "Must be 10 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          terms: Yup.boolean().oneOf(
            [true],
            "The terms and conditions must be accepted"
          ),
          jobType: Yup.string()
            .required("Required")
            .oneOf(
              ["Developer", "Designer", "Manager", "Accountant"],
              "Invalid Job Type"
            ),
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span" />

            <label>email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="span" />

            <label>Job Title</label>
            <Field name="jobType" as="select">
              <option value="">Select a job title</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Manager">Manager</option>
              <option value="Accountant">Accountant</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <label htmlFor="terms">
              <Field name="terms" type="checkbox" />
              Terms and Conditions
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
