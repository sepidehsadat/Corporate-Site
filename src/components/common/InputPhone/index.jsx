import Styles from "./input_phone.module.css";
import { ErrorMessage, Field, useFormikContext } from "formik";
import React, { useState } from "react";

const InputPhone = ({ name, placeholder, type, title }) => {
    const { setFieldValue, errors, Values } = useFormikContext();

    return (
        <Field name={name}>
            {
                ({
                    Field,
                    form: { touched, errors },
                    meta,
                }) => (
                    <>
                        <span className={Styles.number}>+98</span>
                        <input
                            placeholder={placeholder}
                            type={type}
                            className={Styles.input_phone}
                            value={meta.value}
                            onChange={(event) => setFieldValue(name, event.target.value)}
                        />
                        <ErrorMessage name={name} render={(msg) => <p className={Styles.error}>{msg}</p>} />
                    </>
                )
            }
        </Field>

    )
}
export { InputPhone };