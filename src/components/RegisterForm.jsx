import { useState } from 'react'
import { FormInput, FormButton } from '@components/FormComponents'
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
      <FormInput
        name='email'
        type='email'
        label='Email address'
        required
        value={email}
        onChange={handleEmailChange}
      />
      <FormInput
        name='full_name'
        type='text'
        label='Full name'
        required
        value={full_name}
        onChange={handleFullNameChange}
      />
      <FormInput
        name='user_name'
        type='text'
        label='User name'
        required
        value={user_name}
        onChange={handleUserNameChange}
      />

      <FormInput
        name='password'
        type='password'
        label='Password'
        required
        value={password}
        onChange={handlePasswordChange}
      />

      <FormInput
        name='passwordConfirmation'
        type='password'
        label='Confirm password'
        required
        value={passwordConfirmation}
        onChange={handlePasswordConfirmationChange}
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
            className='ml-2 block text-sm text-gray-900'
          >
            Remember me
          </label>
        </div>

        <div className='text-sm'>
          <a
            href='#'
            className='font-medium text-primaryLight hover:text-accentDark'
          >
            Forgot your password?
          </a>
        </div>
      </div>
      <FormButton type={'submit'} label='Register' />
    </form>
  )
}

export default RegisterForm
