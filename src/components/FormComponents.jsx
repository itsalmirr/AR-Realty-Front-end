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
      <label
        htmlFor={name}
        className={'block text-sm font-medium text-gray-700'}>
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
          disabled={rest.disabled}
          autoComplete={name}
          required={required}
          onChange={onChange}
          onKeyUp={rest.handlePasswordMatch}
          value={value}
          className={
            'appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accentDark focus:border-accentDark sm:text-sm'
          }
        />
      </div>
    </div>
  )
}

export const PhoneInput = ({
  name,
  label,
  value,
  type,
  onChange,
  required,
}) => {
  return (
    <div>
      <label htmlFor={name} className='block text-sm font-medium text-gray-700'>
        {label}{' '}
      </label>
      <div className='mt-1 relative rounded-md shadow-sm'>
        <div className='absolute inset-y-0 left-0 flex items-center'>
          <label htmlFor='country' className='sr-only'>
            Country
          </label>
          <select
            id='country'
            name='country'
            className='h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-accentDark focus:border-accentDark rounded-md'>
            <option>US</option>
            <option>CA</option>
            <option>EU</option>
          </select>
        </div>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          id={name}
          autoComplete='tel'
          required={required}
          className='py-2 px-4 block w-full pl-20 focus:ring-accentDark focus:border-accentDark border-gray-300 rounded-md'
          placeholder='+1 (555) 987-6543'
        />
      </div>
    </div>
  )
}

export const FormBtn = ({ label, type, classes }) => {
  return (
    <button
      type={type}
      className={
        classes
          ? classes
          : 'w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primaryDark hover:bg-primaryLight'
      }>
      {label}
    </button>
  )
}

export const LongFormInput = ({
  name,
  label,
  value,
  onChange,
  required,
  rows,
}) => {
  return (
    <div className='sm:col-span-2'>
      <div className='flex justify-between'>
        <label
          htmlFor={name}
          className='block text-sm font-medium text-warm-gray-900'>
          {label}
        </label>
        <span id='message-max' className='text-sm text-warm-gray-500'>
          Max. 300 characters
        </span>
      </div>
      <div className='mt-1'>
        <textarea
          id={name}
          name={name}
          rows={rows}
          value={value}
          onChange={onChange}
          required={required}
          className='py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-accentDark focus:border-accentDark border border-warm-gray-300 rounded-md'
          aria-describedby='message-max'
        />
      </div>
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
            className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-red-500'>
            <span className='sr-only'>Sign in with Google</span>
            <FaGoogle className='h-5 w-5' />
          </a>
        </div>

        <div>
          <a
            href='#'
            className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-blue-500'>
            <span className='sr-only'>Sign in with Twitter</span>
            <FaTwitter className='h-5 w-5' />
          </a>
        </div>

        <div>
          <a
            href='#'
            className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-black'>
            <span className='sr-only'>Sign in with GitHub</span>
            <FaGithub className='h-5 w-5' />
          </a>
        </div>
      </div>
    </div>
  )
}
