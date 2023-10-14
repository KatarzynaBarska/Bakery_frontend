import React from "react";
import {Field, Form, Formik} from "formik";

export const RegistrationFormFormik = () => {
    return (
        <div>
            <h1>Zarejestruj się</h1>
            <Formik
                initialValues={{firstName: '', lastName: '', age: 0}}
                onSubmit={async (values) => {
                    await new Promise((resolve) => setTimeout(resolve, 500));
                    alert(JSON.stringify(values, null, 2));
                }} >
                <Form>
                    <Field name="firstName" type="text"/>
                    <Field name="lastName"  type="text"/>
                    <Field name="age" type='number' />
                    <button type="submit" >
                        Submit
                    </button>
                </Form>
            </Formik>
        </div>
    )
}