import login from "../../src/assets/images/login.PNG"
import React from 'react'
import Styles from "./login.module.css";
import Link from "next/link";

//import forms components
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { InputText } from "../../src/components/common/InputText";
import { Button } from "../../src/components/common/Button";
import { CheckBox } from "../../src/components/common/CheckBox";
import { Authorization } from "../../src/components/authorization";

//import components
import HeaderLogin from '../../src/components/Header/headerLoginRegister/headerLR'
import Footer from '../../src/components/Footer/Footer';


const Login = () => {
    const validation = Yup.object().shape({
        username: Yup.string().required("نام کاربری اجباری هست"),
        password: Yup.string().required("پسورد اجباری هست")
    });
    const inputs = [
        { name: "username", type: "text", placeholder: "نام کاربری", title: "" },
        { name: "password", type: "password", placeholder: "رمزعبور", title: "" }
    ]
    const onSubmit = (value) => {
        console.log("submit");
    }
    return (
        <>
        <HeaderLogin />
        <div className={`flex  ${Styles.login_page}`}>
            {/* <Image src={login} width={400} height={400} /> */}
            <div className={Styles.form_login}>
                <h1 className={Styles.title}>ورود</h1>

                <Formik
                    initialValues={{
                        userName: "",
                        password: ""
                    }}
                    enableReinitialize
                    onSubmit={onSubmit}
                    validationSchema={validation}
                >
                    {(values, error, touched, submitForm) => (
                        <Form>
                            <div className={Styles.parent_items}>
                                {inputs.map((input, i) => (
                                    <InputText
                                        key={i}
                                        name={input.name}
                                        placeholder={input.placeholder}
                                        type={input.type}
                                        title={input.title}
                                    />
                                ))}
                            </div>
                            <CheckBox
                                name="checked"
                                 type="checkbox"
                                 value="remember"
                            />
                            <Button title={"ورود"} type="submit" />
                        </Form>)}
                </Formik>
                <Authorization />
                <p className={Styles.go_to_register}> اکانت ندارید؟<Link className={Styles.link_register} href={'/Register'}>ثبت نام</Link></p>
            </div>
        </div>
        <Footer />
        </>
    )
}
export default Login;
