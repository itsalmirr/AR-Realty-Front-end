import { useState, useContext } from 'react'

import AuthContext from '@context/AuthContext'
import { FormInput, FormButton } from '@components/FormComponents'

const LoginForm = () => {
  const { loginUser } = useContext(AuthContext)
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'user_name') {
      setUserName(value)
    } else if (name === 'password') {
      setPassword(value)
    }
  }

  return (
    <form className='space-y-6' onSubmit={loginUser}>
      <FormInput
        name='user_name'
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

      <FormButton type={'submit'} label='Log in' />
    </form>
  )
}

export default LoginForm
