import Styles from "./input_date_picker.module.css";
import DatePicker from "react-datepicker";
import { ErrorMessage, Field, useFormikContext } from "formik";
import { Formik, Form, useField } from "formik";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

const InputDatePicker = ({ name }) => {
    const { setFieldValue, errors, Values } = useFormikContext();
    const [field, meta, helpers] = useField(name);

    const { value } = meta;
    const { setValue } = helpers;
    return (
        <div className={Styles.input_date_picker}>
            <Field name={name}>
                {
                    ({
                        Field,
                        form: { touched, errors },
                        meta,
                    }) => (
                        <>
                            <DatePicker
                                placeholderText={'تاریخ تولد'}
                                className={Styles.input}
                                {...field}
                                selected={value}
                                onChange={(date) => setValue(date)}
                            />
                            <ErrorMessage name={name} render={(msg) => <p className={Styles.error}>{msg}</p>} />
                        </>
                    )
                }
            </Field>
        </div>
    )
}
export { InputDatePicker };