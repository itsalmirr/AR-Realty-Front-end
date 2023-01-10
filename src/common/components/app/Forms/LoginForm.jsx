import { useState, useContext } from 'react'

import AuthContext from '@context/AuthContext'
import { FormBtn, FormInput } from './FormComponents'

export const LoginForm = () => {
  const { loginUser } = useContext(AuthContext)
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'username') {
      setUserName(value)
    } else if (name === 'password') {
      setPassword(value)
    }
  }

  return (
    <form className='space-y-6' onSubmit={loginUser}>
      <FormInput
        name='username'
        type='text'
        label='Username'
        required
        onChange={handleChange}
        value={userName}
      />
      <FormInput
        name='password'
        type='password'
        label='Password'
        required
        onChange={handleChange}
        value={password}
      />
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <input
            id='remember-me'
            name='remember-me'
            type='checkbox'
            className='h-4 w-4 dark:text-primary-dark text-primary-light without-ring border-gray-300 rounded'
          />
          <label
            htmlFor='remember-me'
            className='ml-2 block text-sm dark:text-textColor-100 text-gray-900'
          >
            Remember me
          </label>
        </div>

        <div className='text-sm'>
          <a
            href='#'
            className='font-medium dark:text-primary-dark dark:hover:text-accent-dark text-primary-light hover:text-accent-light'
          >
            Forgot your password?
          </a>
        </div>
      </div>

      <FormBtn id='frm-login' type={'submit'} label='Log in' />
    </form>
  )
}
