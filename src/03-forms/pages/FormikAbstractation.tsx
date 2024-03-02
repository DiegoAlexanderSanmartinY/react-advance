import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyCheckbox, MySelect, MyTextInput } from "../components";
import "../styles/styles.css";

export const FormikAbstractation = () => {
  return (
    <div>
      <h1>Formik Abstractation</h1>

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
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Diego"
              type="text"
            />

            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Sanmartin"
              type="text"
            />

            <MyTextInput
              label="Email"
              name="email"
              placeholder="dasanmartin@me.com"
            />

            <MySelect name="jobType" label="Job Title">
              <option value="">Select a job title</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Manager">Manager</option>
              <option value="Accountant">Accountant</option>
            </MySelect>

            <MyCheckbox
              label="I accept the terms and conditions"
              name="terms"
              type="checkbox"
            />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
