import { useState } from 'react'
import axios from 'axios'

const RegisterForm = () => {
  const [email, setEmail] = useState('')
  const [full_name, setFullName] = useState('')
  const [user_name, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [passwordMatch, setPasswordMatch] = useState(true)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== passwordConfirmation) {
      alert('Passwords do not match')
      return
    }
    const body = {
      email,
      full_name,
      user_name,
      password,
    }

    try {
      const res = await axios.post(
        'http://localhost:3000/api/auth/register',
        body
      )
      console.log(res)
    } catch (err) {
      alert('Error registering')
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleFullNameChange = (e) => {
    setFullName(e.target.value)
  }

  const handleUserNameChange = (e) => {
    setUserName(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handlePasswordConfirmationChange = (e) => {
    setPasswordConfirmation(e.target.value)
  }

  const handlePasswordMatch = () => {
    if (password === passwordConfirmation) {
      setPasswordMatch(true)
    } else {
      setPasswordMatch(false)
    }
  }

  return (
    <form className='space-y-6' onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-gray-700'
        >
          Email address
        </label>
        <div className='mt-1'>
          <input
            id='email'
            name='email'
            type='email'
            autoComplete='email'
            onChange={handleEmailChange}
            value={email}
            required
            className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
        </div>
      </div>

      <div>
        <label
          htmlFor='full_name'
          className='block text-sm font-medium text-gray-700'
        >
          Full name
        </label>
        <div className='mt-1'>
          <input
            id='full_name'
            name='full_name'
            type='text'
            value={full_name}
            onChange={handleFullNameChange}
            autoComplete='fullName'
            required
            className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
        </div>
      </div>
      <div>
        <label
          htmlFor='user_name'
          className='block text-sm font-medium text-gray-700'
        >
          User name
        </label>
        <div className='mt-1'>
          <input
            id='user_name'
            name='user_name'
            type='text'
            value={user_name}
            onChange={handleUserNameChange}
            autoComplete='fullName'
            required
            className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
        </div>
      </div>

      <div>
        <label
          htmlFor='password'
          className='block text-sm font-medium text-gray-700'
        >
          Password
        </label>
        <div className='mt-1'>
          <input
            id='password'
            name='password'
            type='password'
            value={password}
            onChange={handlePasswordChange}
            autoComplete='current-password'
            required
            className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
        </div>
      </div>

      <div>
        <label
          htmlFor='passwordConfirmation'
          className='block text-sm font-medium text-gray-700'
        >
          Confirm password{' '}
          {!passwordMatch && (
            <span className='text-red-500'>Passwords do not match</span>
          )}
        </label>
        <div className='mt-1'>
          <input
            id='confirm-password'
            name='confirm-password'
            type='password'
            autoComplete='current-password'
            value={passwordConfirmation}
            onChange={handlePasswordConfirmationChange}
            onKeyUp={handlePasswordMatch}
            required
            className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <input
            id='remember-me'
            name='remember-me'
            type='checkbox'
            className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
          />
          <label
            htmlFor='remember-me'
            className='ml-2 block text-sm text-gray-900'
          >
            Remember me
          </label>
        </div>

        <div className='text-sm'>
          <a
            href='#'
            className='font-medium text-indigo-600 hover:text-indigo-500'
          >
            Forgot your password?
          </a>
        </div>
      </div>

      <div>
        <button
          type='submit'
          className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          Sign in
        </button>
      </div>
    </form>
  )
}

export default RegisterForm
