import React from 'react'
import { useFormStatus } from 'react-dom'

const LoginSubmit = () => {
    const { pending } = useFormStatus();
  return (
    <button
        className="block mt-6 w-full px-4 py-3 text-black custom-bg-lightblue rounded"
        disabled={pending}
    >
        {pending ? 'Signing in...' : 'Sign in'}
    </button>
  )
}

export default LoginSubmit