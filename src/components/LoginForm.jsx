import { useState } from 'react'
import { useContext } from 'react'
import { FormInput, FormButton } from '@components/FormComponents'
import AuthContext from 'src/context/AuthContext'

const LoginForm = () => {
  const { loginUser } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'email') {
      setEmail(value)
    } else if (name === 'password') {
      setPassword(value)
    }
  }

  return (
    <form className='space-y-6' onSubmit={loginUser}>
      <FormInput
        name='email'
        type='email'
        label='Email address'
        required
        onChange={handleChange}
        value={email}
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

      <FormButton type={'submit'} label='Log in' />
    </form>
  )
}

export default LoginForm
