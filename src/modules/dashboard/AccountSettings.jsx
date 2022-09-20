import axios from 'axios'
import { toast } from 'react-toastify'
import { Fragment, useState } from 'react'
import { FormBtn, FormInput } from '@components/app/Forms/FormComponents'

const AccountSettings = ({ user, settings, setSettings }) => {
  const [full_name, setFullName] = useState(user.full_name)
  const [email, setEmail] = useState(user.email)

  const onSubmit = async (e) => {
    e.preventDefault()
    const { data } = await axios.put('/api/auth/updateuser/', {
      full_name,
      email,
    })

    console.log(data)
    if (data.success) {
      toast.success('Account settings updated')
      setSettings({ ...settings, full_name, email })
    } else {
      toast.error("Couldn't update account settings")
      toast.info('Please try again later or refresh the page')
    }
    setSettings(!settings)
  }

  return (
    <Fragment>
      <form
        className='space-y-6 pt-8 sm:space-y-5 sm:pt-10 px-4'
        onSubmit={onSubmit}
      >
        <div>
          <h3 className='text-lg font-medium leading-6 text-gray-900'>
            Account Settings
          </h3>
          <p className='mt-1 max-w-2xl text-sm text-gray-500'>
            Manage your account settings and set your preferences.
          </p>
        </div>
        <div className='space-y-6 sm:space-y-5'>
          <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
            <label
              htmlFor='full_name'
              className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
            >
              Full name
            </label>
            <div className='mt-1 sm:col-span-2 sm:mt-0 max-w-sm'>
              <FormInput
                name='full_name'
                type='text'
                onChange={(e) => setFullName(e.target.value)}
                value={full_name}
              />
            </div>
          </div>

          <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
            >
              Email address
            </label>
            <div className='mt-1 sm:col-span-2 sm:mt-0 max-w-md'>
              <FormInput
                name='email'
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
          </div>
        </div>

        <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
          <label
            htmlFor='profilePhoto-upload'
            className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
          >
            Profile photo
          </label>
          <div className='mt-1 sm:col-span-2 sm:mt-0'>
            <div className='flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6'>
              <div className='space-y-1 text-center'>
                <svg
                  className='mx-auto h-12 w-12 text-gray-400'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 48 48'
                  aria-hidden='true'
                >
                  <path
                    d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <div className='flex text-sm text-gray-600'>
                  <label
                    htmlFor='profilePhoto-upload'
                    className='relative cursor-pointer rounded-md bg-white font-medium text-accentDark focus-within:outline-none focus-within:ring-2 focus-within:ring-accentDark focus-within:ring-offset-2 hover:text-accentDark'
                  >
                    <span>Upload a file</span>
                    <input
                      id='profilePhoto-upload'
                      name='profilePhoto-upload'
                      type='file'
                      className='sr-only'
                    />
                  </label>
                  <p className='pl-1'>or drag and drop</p>
                </div>
                <p className='text-xs text-gray-500'>
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex max-w-xs m-auto md:float-right md:m-8'>
          <FormBtn type='submit' label='Save' />
        </div>
      </form>
    </Fragment>
  )
}

export default AccountSettings
