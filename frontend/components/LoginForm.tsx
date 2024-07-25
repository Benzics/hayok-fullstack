import React from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import InputError from './ui/InputError';
import { Errors } from '@/types';

const LoginForm = () => {

    const searchParams = useSearchParams()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState<Errors>({});
    const [status, setStatus] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)

    const resetToken  = searchParams.get('reset')
    useEffect(() => {
        if (resetToken  && !errors) {
            setStatus(atob(resetToken))
        } else {
            setStatus('')
        }
    }, [resetToken, errors])

  return (
    <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={Yup.object({
            email: Yup.string().email('Valid email required').required('email must not be empty'),
            password: Yup.string().required('Password must not be empty')
        })}
        onSubmit={ async (values, {setSubmitting}) => {

            const email = values.email;
            const password = values.password;
            const result = await login({
                    email,
                    password,
                    remember: shouldRemember,
                    setErrors,
                    setStatus,
                })
        }}
    >
        {({isSubmitting}) => (
            <Form>
                
                <InputError messages={errors.email} className="mb-2" />
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
                        type={passwordVisible ? 'text' : 'password'}
                        placeholder="Input password"
                    />
                    <ErrorMessage name="password" />

                    <span
                        className="absolute right-3 top-4 text-lg z-10 text-gray-500"
                        onClick={() => setPasswordVisible(!passwordVisible)}>
                        {!passwordVisible ? <FaEye /> : <FaEyeSlash />}
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