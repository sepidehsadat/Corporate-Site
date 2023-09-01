import Styles from "./input_text.module.css";
import { ErrorMessage, Field, useFormikContext } from "formik";
import React, { useState } from "react";

const InputText = ({ name, placeholder, type, title }) => {
    const { setFieldValue, errors, Values } = useFormikContext();

    return (
        <div className={Styles.InputText}>
            <Field name={name}>
                {
                    ({
                        Field,
                        form: { touched, errors },
                        meta,
                    }) => (
                        <>
                            <input
                                placeholder={placeholder}
                                type={type}
                                className={Styles.input}
                                value={meta.value}
                                onChange={(event) => setFieldValue(name, event.target.value)}
                            />
                            <ErrorMessage name={name} render={(msg) => <p className={Styles.error}>{msg}</p>} />
                        </>
                    )
                }
            </Field>
        </div>
    )
}
export { InputText };