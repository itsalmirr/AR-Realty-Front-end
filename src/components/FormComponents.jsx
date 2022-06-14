import { FaGoogle, FaTwitter, FaGithub } from 'react-icons/fa'

export const FormInput = ({
  name,
  label,
  value,
  type,
  onChange,
  required,
  ...rest
}) => {
  return (
    <div>
      <label htmlFor={name} className='block text-sm font-medium text-gray-700'>
        {label}{' '}
        {!rest.passwordMatch &&
          name === 'passwordConfirmation' &&
          value.length !== 0 && (
            <span className='text-red-500'>Passwords do not match</span>
          )}
      </label>
      <div className='mt-1'>
        <input
          id={name}
          name={name}
          type={type}
          autoComplete={name}
          required={required}
          onChange={onChange}
          onKeyUp={rest.handlePasswordMatch}
          value={value}
          className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accentDark focus:border-accentDark sm:text-sm'
        />
      </div>
    </div>
  )
}

export const FormButton = ({ label, type }) => {
  return (
    <div>
      <button
        type={type}
        className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primaryLight hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accentDark'>
        {label}
      </button>
    </div>
  )
}

export const ContinueWithProvider = () => {
  return (
    <div className='mt-6'>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <div className='w-full border-t border-gray-300' />
        </div>
        <div className='relative flex justify-center text-sm'>
          <span className='px-2 bg-white text-gray-500'>Or continue with</span>
        </div>
      </div>

      <div className='mt-6 grid grid-cols-3 gap-3'>
        <div>
          <a
            href='#'
            className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
            <span className='sr-only'>Sign in with Google</span>
            <FaGoogle className='h-5 w-5' />
          </a>
        </div>

        <div>
          <a
            href='#'
            className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
            <span className='sr-only'>Sign in with Twitter</span>
            <FaTwitter className='h-5 w-5' />
          </a>
        </div>

        <div>
          <a
            href='#'
            className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
            <span className='sr-only'>Sign in with GitHub</span>
            <FaGithub className='h-5 w-5' />
          </a>
        </div>
      </div>
    </div>
  )
}
