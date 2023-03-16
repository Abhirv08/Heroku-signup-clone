import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import Input from './Input';
import Select from './Select';
import Errors from './Errors';
import { roles, languages, countries, initialValues } from '../Constants'


export default function SignUpForm() {
    const [errorMsgs, setErrorMsgs] = useState([]);

    const [diffErrorMsg, setDiffErrorMsg] = useState(false);

    const signupSchema = Yup.object().shape({
        firstName: Yup.string().min(1, 'Should Not be Empty').max(40, 'First name is too long (maximum is 40 characters)').required('First name'),
        lastName: Yup.string().max(40, 'Last name is too long (maximum is 40 characters)').required('Last name'),
        email: Yup.string().email('Invalid email address').required('E-mail'),
        companyName: Yup.string().min(1, 'Should Not be Empty'),
        role: Yup.string().required('Role'),
        location: Yup.string().required('Country/Region'),
        dev_language: Yup.string().required('Primary development language'),
    });

    const onSubmit = (values) => {
        console.log(values)
    }

    return (

        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={signupSchema}
        >
            {(formik) => {
                const handleError = () => {
                    setErrorMsgs([])
                    console.log(formik.errors);
                    const {firstName, lastName, email, role, location, dev_language} = formik.errors;
                    
                    if(firstName != undefined && firstName.length > 40){
                        setErrorMsgs((err) => [firstName]);
                        setDiffErrorMsg(true);
                        return ;
                    }

                    if(lastName != undefined && lastName.length > 40){
                        setErrorMsgs((err) => [lastName]);
                        setDiffErrorMsg(true);
                        return ;
                    }

                    if (firstName === "First name") setErrorMsgs((err) => [...err, "First name"]);
                    if (lastName === "Last name") setErrorMsgs((err) => [...err, "Last name"]);
                    if (email === "E-mail") setErrorMsgs((err) => [...err, "E-mail"]);
                    if (role === "Role") setErrorMsgs((err) => [...err, "Role"]);
                    if (location === "Country/Region") setErrorMsgs((err) => [...err, 'Country/Region']);
                    if (dev_language === "Primary development language") setErrorMsgs((err) => [...err, "Primary development language"]);

                }

                return (
                    <div className='lg:float flex flex-col lg:right-[-10px] lg:mr-[30px]' >
                        {errorMsgs.length == 0 ? <div></div> : <Errors isAllFilled = {diffErrorMsg} errorMessages={errorMsgs} />}
                        <div className="bg-white p-4 md:p-8 rounded-md custom_shadow lg lg:w-[362px] ">

                            <Form >
                                <Input type="text" name="firstName" label='First name' placeholder="First name" isRequired={true} />
                                <Input type="text" name="lastName" label='Last name' placeholder="Last name" isRequired={true} />
                                <Input type="email" name="email" label='Email Address' placeholder="Email Address" isRequired={true} />
                                <Input type="text" name="companyName" label='Company name' placeholder="Company name" isRequired={false} />
                                <Select options={roles} name="role" label="Role" isRequired={true} placeholder='Role' />
                                <Select options={countries} name="location" label="Country/Region" isRequired={true} placeholder="Country/Region" />
                                <Select options={languages} name="dev_language" label="Primary development language" isRequired={true} placeholder="Select a language" />
                                <button className="bg-[#1869CB] w-full border-[1px] rounded-[4px] hover:bg-[#0650aa] text-center text-white p-4 mt-1 mb-4 font-bold cursor-pointer" type="submit" onClick={handleError}>CREATE AN ACCOUNT</button>
                            </Form>
                            <div className="text-[13px] text-text_color">
                                <p>
                                    Signing up signifies that you have read and agree to the <a className="text-[#1869CB] underline" href="https://www.heroku.com/policy" >Terms of Service</a> and our &nbsp;
                                    <a className="text-[#1869CB] underline" href="https://www.salesforce.com/company/privacy/" >Privacy Policy</a>.
                                </p>
                                <a className="text-[#1869CB] underline" href="https://www.heroku.com/#" >Cookie Preferances</a>
                            </div>
                        </div>
                    </div>
                )
            }
            }
        </Formik>
    )
}
