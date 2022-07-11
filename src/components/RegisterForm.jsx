import { useState, useContext } from 'react'

import AuthContext from 'src/context/AuthContext'
import { FormInput, FormBtn } from '@components/FormComponents'

const RegisterForm = () => {
  const [email, setEmail] = useState('')
  const [full_name, setFullName] = useState('')
  const [user_name, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [passwordMatch, setPasswordMatch] = useState(true)
  const { registerUser } = useContext(AuthContext)

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'full_name':
        setFullName(e.target.value)
        break
      case 'email':
        setEmail(e.target.value)
        break
      case 'user_name':
        setUserName(e.target.value)
        break
      case 'password':
        setPassword(e.target.value)
        break
      case 'passwordConfirmation':
        setPasswordConfirmation(e.target.value)
        break
      default:
        break
    }
  }

  const handlePasswordMatch = () => {
    if (password === passwordConfirmation) {
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
        value={full_name}
        onChange={handleChange}
      />
      <FormInput
        name='email'
        type='email'
        label='Email address'
        required
        value={email}
        onChange={handleChange}
      />
      <FormInput
        name='user_name'
        type='text'
        label='User name'
        required
        value={user_name}
        onChange={handleChange}
      />

      <FormInput
        name='password'
        type='password'
        label='Password'
        required
        value={password}
        onChange={handleChange}
      />

      <FormInput
        name='passwordConfirmation'
        type='password'
        label='Confirm password'
        required
        value={passwordConfirmation}
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

export default RegisterForm
