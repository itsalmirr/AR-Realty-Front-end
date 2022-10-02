import { useState, useContext } from 'react'

import AuthContext from '@context/AuthContext'
import { FormInput, FormBtn } from './FormComponents'

export const RegisterForm = () => {
  const [passwordMatch, setPasswordMatch] = useState(true)
  const { registerUser } = useContext(AuthContext)

  const [formState, setFormState] = useState({
    email: '',
    full_name: '',
    username: '',
    password: '',
    passwordConfirmation: '',
  })

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handlePasswordMatch = () => {
    if (formState.password === formState.passwordConfirmation) {
      setPasswordMatch(true)
    } else {
      setPasswordMatch(false)
    }
  }

  return (
    <form className='space-y-6' onSubmit={registerUser}>
      <FormInput
        name='full_name'
        type='text'
        label='Full name'
        required
        value={formState.full_name}
        onChange={handleChange}
      />
      <FormInput
        name='email'
        type='email'
        label='Email address'
        required
        value={formState.email}
        onChange={handleChange}
      />
      <FormInput
        name='username'
        type='text'
        label='User name'
        required
        value={formState.username}
        onChange={handleChange}
      />

      <FormInput
        name='password'
        type='password'
        label='Password'
        required
        value={formState.password}
        onChange={handleChange}
      />

      <FormInput
        name='passwordConfirmation'
        type='password'
        label='Confirm password'
        required
        value={formState.passwordConfirmation}
        onChange={handleChange}
        passwordMatch={passwordMatch}
        {...{ passwordMatch, handlePasswordMatch }}
      />

      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <input
            id='remember-me'
            name='remember-me'
            type='checkbox'
            className='h-4 w-4 text-primaryLight focus:ring-accentDark border-gray-300 rounded'
          />
          <label
            htmlFor='remember-me'
            className='ml-2 block text-sm text-gray-900'>
            Remember me
          </label>
        </div>

        <div className='text-sm'>
          <a
            href='#'
            className='font-medium text-primaryLight hover:text-accentDark'>
            Forgot your password?
          </a>
        </div>
      </div>
      <FormBtn type={'submit'} label='Register' />
    </form>
  )
}
