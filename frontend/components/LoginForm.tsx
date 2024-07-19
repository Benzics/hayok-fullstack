"use client";
import React from 'react'
import LoginSubmit from './ui/LoginSubmit'
import { FaEye } from 'react-icons/fa';

const LoginForm = () => {
  return (
    <form>
        <label
            className="text-sm mb-2 block"
            htmlFor="email"
        >
            Email
        </label>
        <input
            className="px-4 py-3 rounded block w-full mb-5 outline-none text-gray-600"
            name="email"
            type="email"
            placeholder="Email"
        />

        <label
            className="text-sm mb-2 block"
            htmlFor="password"
        >
            Password
        </label>
        <div className="relative">
            <input
                className="px-4 py-3 rounded block w-full outline-none text-gray-600"
                name="password"
                type="password"
                placeholder="Input password"
            />

            <span className="absolute right-3 top-4 text-lg z-10 text-gray-500">
                <FaEye />
            </span>
        </div>
       

        <div className="text-right py-3">
            <a href="#">Forgot Password?</a>
        </div>
        <LoginSubmit />
    </form>
  )
}

export default LoginForm