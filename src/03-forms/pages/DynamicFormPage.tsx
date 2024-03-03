import { Form, Formik } from "formik";
import { MySelect, MyTextInput } from "../components";
import formJson from "../components/custom-form.json";
import * as Yup from "yup";
console.log(formJson);

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;
  let schema = Yup.string();
  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("Campo requerido");
    }
    if (rule.type === "minLength") {
      schema = schema.min(
        (rule as any).value || 1,
        `Minimo ${(rule as any).value} caracteres`
      );
    }
    if (rule.type === "email") {
      schema = schema.email("Email no valido");
    }
    //... otra reglas
  }
  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicFormPage = () => {
  //   console.log("Formik", Formik);
  return (
    <div>
      <h1>DynamicFormPage</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log("values", values);
        }}
        validationSchema={validationSchema}
        onReset={() => {}}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ name, type, label, placeholder, options }) => {
              if (type === "input" || type === "email" || type === "password") {
                return (
                  <MyTextInput
                    key={name}
                    name={name}
                    type={type}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelect key={name} name={name} type={type} label={label}>
                    <option value="">Select an option</option>
                    {options?.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </MySelect>
                );
              }
              throw new Error(`Type ${type} not supported`);
            })}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
