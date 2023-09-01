import Styles from "./checkbox.module.css";
import { ErrorMessage, Field, useFormikContext } from "formik";
import React, { useState } from "react";

const CheckBox = ({ name, type, value }) => {
    const { setFieldValue, errors, Values } = useFormikContext();
    return (
        <div className={Styles.parent_checkbox}>
            {/* <label for="test" >مرا به خاطر بسپار</label>
            <input type="checkbox" name="test" className={Styles.check_box_input} /> */}


            <label>
                
                مرا به خاطر بسپار
            </label>
            <Field className={Styles.check_box_input} type={type} name={name} value={value} />

        </div>
    )
}
export { CheckBox };