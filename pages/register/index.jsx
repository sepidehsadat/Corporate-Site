import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Styles from './register.module.css'
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { InputText } from '../../src/components/common/InputText';
import { InputPhone } from '../../src/components/common/InputPhone';
import { InputDatePicker } from '../../src/components/common/InputDatePicker';
import { Button } from '../../src/components/common/Button';
import ArrowRight from '../../src/assets/images/arrow_right.png';
import ArrowLeft from '../../src/assets/images/arrow_left.png'
import ArrowLeftDisable from '../../src/assets/images/left_arrow_disable.png'
import Checkmark from '../../src/assets/images/check_mark.png'
import { Authorization } from '../../src/components/authorization';

const Register = () => {
    const [step, SetStep] = useState(0);

    const validationUserInformation = Yup.object().shape(
        {
            username: Yup.string().required("نام کاربری اجباری هست"),
            password: Yup.string().required("پسورد اجباری هست")
        }
    );
    const validationPersonalInformation = Yup.object().shape(
        {
            nationalcode: Yup.string().required("کد ملی اجباری هست"),
            email: Yup.string().required("ایمیل اجباری هست"),
            date: Yup.string().required("تاریخ تولد اجباری هست"),
        }
    );
    const validationPhoneNamber = Yup.object().shape(
        {
            phonenumber: Yup.string().required("تلفن همراه اجباری هست"),
        }
    );
    const inputsUserInformation = [
        { name: "username", type: "text", placeholder: "نام کاربری", title: "" },
        { name: "password", type: "password", placeholder: "رمزعبور", title: "" }
    ]
    const inputsPersonalInformation = [
        { name: "nationalcode", type: "text", placeholder: "کد ملی", title: "" },
        { name: "email", type: "text", placeholder: "ایمیل", title: "" }
    ]
    const onSubmit = (value) => {
        console.log("submit");
        if (step <= 1) {
            nextStep();
        }
    }
    const nextStep = () => {
        if (step < 2) {
            SetStep(step + 1);
        }
    }
    const previousStep = () => {
        if (step > 0) {
            SetStep(step - 1);
        }
    }
    return (
        <div className={`flex  ${Styles.register_page}`}>
            <div className={Styles.form_register}>
                <h1 className={Styles.title}>ثبت نام</h1>
                <div class={Styles.wizard_parent}>
                    <div className={Styles.wizard_item}>
                        <div className={step > 0 ? Styles.wizard_accepted : Styles.wizard_information_user_active}>
                            <Image src={Checkmark} className={step > 0 ? Styles.show : Styles.hide} width={32} height={32} />
                        </div>
                        <p className={step > 0 ? Styles.wizard_title : Styles.wizard_title_active}>اطلاعات کاربری</p>
                    </div>
                    <div className={Styles.wizard_item}>
                        <div className={step == 0 ? Styles.wizard_information_personal : step == 1 ? Styles.wizard_information_personal_active : Styles.wizard_information_personal_accepted}>
                            <Image src={Checkmark} className={step == 2 ? Styles.show : Styles.hide} width={32} height={32} />
                        </div>
                        <p className={step == 1 ? Styles.wizard_title_active : Styles.wizard_title}>اطلاعات شخصی</p>
                    </div>
                    <div className={Styles.wizard_item}>
                        <div className={step > 1 ? Styles.wizard_phone_active : Styles.wizard_phone}></div>
                        <p className={step == 2 ? Styles.wizard_title_active : Styles.wizard_title}> تلفن</p>
                    </div>
                </div>
                <Formik
                    initialValues={{
                        username: "",
                        password: "",
                        nationalcode: "",
                        email: "",
                        date: "",
                        phonenumber: ""
                    }}
                    enableReinitialize
                    onSubmit={onSubmit}
                    validationSchema={step == 0 ? validationUserInformation : step == 1 ? validationPersonalInformation : validationPhoneNamber}
                >
                    {(values, error, touched, submitForm) => (
                        <Form>
                            <div className={Styles.parent_items}>
                                {step == 0 &&
                                    <div className={Styles.step_user_information}>
                                        {inputsUserInformation.map((input, i) => (
                                            <InputText
                                                key={i}
                                                name={input.name}
                                                placeholder={input.placeholder}
                                                type={input.type}
                                                title={input.title}
                                            />
                                        ))}
                                    </div>
                                }
                                {step == 1 &&
                                    <div className={Styles.step_personal_information}>
                                        {inputsPersonalInformation.map((input, j) => (
                                            <InputText
                                                key={j}
                                                name={input.name}
                                                placeholder={input.placeholder}
                                                type={input.type}
                                                title={input.title}
                                            />
                                        ))}
                                        <InputDatePicker name="date" />
                                    </div>
                                }
                                {step == 2 &&
                                    <div className={Styles.step_phone_number}>
                                        {/* <span className={Styles.number}>+98</span>
                                           <Input placeholder={"شماره همراه"} /> */}
                                        <InputPhone
                                            name="phonenumber"
                                            placeholder="شماره همراه"
                                            type="text"
                                            title=""
                                        />
                                    </div>
                                }
                            </div>
                            {step < 2 ?
                                <Button type="submit" title={"بعدی"} />
                                :
                                <Button type="submit" title={"ثبت نام"} />
                            }
                            {step > 0 && <p className={Styles.previous} onClick={previousStep}>قبلی</p>}
                        </Form>)}
                </Formik>
                <div className={Styles.parent_authorization}>
                    <Authorization />
                    <div className={step == 0 ? Styles.show : Styles.hide}>
                        <p className={Styles.go_to_register}>عضو ما هستید؟<Link className={Styles.link_register} href={"#"}>ورود</Link></p>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Register;