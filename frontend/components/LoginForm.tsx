import React from 'react'
import { FaEye } from 'react-icons/fa';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { signIn } from 'next-auth/react';

const LoginForm = () => {
  return (
    <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={Yup.object({
            email: Yup.string().email('Valid email required').required('email must not be empty'),
            password: Yup.string().required('Password must not be empty')
        })}
        onSubmit={ async (values, {setSubmitting}) => {
           const result = await signIn('credentials', {
            redirect: false,
            email: values.email,
            password: values.email
           });

           if (result?.error) {
            console.log('Unable to login ', result.error)
           } else {
            console.log('Login successful');
           }
        }}
    >
        {({isSubmitting}) => (
            <Form>
                <label
                    className="text-sm mb-2 block"
                    htmlFor="email"
                >
                    Email
                </label>
                <Field
                    className="px-4 py-3 rounded block w-full mb-5 outline-none text-gray-600"
                    name="email"
                    type="email"
                    placeholder="Email"
                />
                <ErrorMessage name="email" />

                <label
                    className="text-sm mb-2 block"
                    htmlFor="password"
                >
                    Password
                </label>
                <div className="relative">
                    <Field
                        className="px-4 py-3 rounded block w-full outline-none text-gray-600"
                        name="password"
                        type="password"
                        placeholder="Input password"
                    />
                    <ErrorMessage name="password" />

                    <span className="absolute right-3 top-4 text-lg z-10 text-gray-500">
                        <FaEye />
                    </span>
                </div>
            

                <div className="text-right py-3">
                    <a href="#">Forgot Password?</a>
                </div>
                <button
                    className="block mt-6 w-full px-4 py-3 text-black custom-bg-lightblue rounded"
                    type="submit"
                >
                    {isSubmitting? 'Signing in...' : 'Sign in'}
                </button>
            </Form>
        )}
    </Formik>
  )
}

export default LoginForm