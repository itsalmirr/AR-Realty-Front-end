import { useState, useEffect, useCallback } from 'react'
import { toast } from 'react-toastify'

import { FormBtn, FormInput } from '@components/app/Forms/FormComponents'
import { updateMe } from '@common/queries/auth'

const AccSettingsForm = ({ settings, setSettings, user }) => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = await updateMe(
        {
          full_name: fullName,
          email,
          username: username ? username.toLowerCase() : null,
        },
        '/api/auth/updateuser/'
      )

      toast.success(data.message)
    } catch (err) {
      toast.error("Couldn't update your account settings. Please try again.")
    }
    setSettings(!settings)
  }

  useEffect(() => {
    setEmail(user?.email)
    setFullName(user?.full_name)
    setUsername(user?.username)
  }, [user, settings])

  return (
    <form
      className='space-y-6 p-8 sm:space-y-5 sm:pt-10 px-4'
      onSubmit={onSubmit}
    >
      <div>
        <h3 className='text-lg font-medium leading-6 dark:text-textColor-100 text-gray-900'>
          Account Settings
        </h3>
        <p className='mt-1 max-w-2xl text-sm dark:text-gray-400 text-gray-500'>
          Manage your account settings and set your preferences.
        </p>
      </div>
      <div className='space-y-6 sm:space-y-5'>
        <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
          <label
            htmlFor='fullName'
            className='block text-sm font-medium text-gray-700 dark:text-gray-500 sm:mt-px sm:pt-2'
          >
            Full name
          </label>
          <div className='mt-1 sm:col-span-2 sm:mt-0 max-w-sm'>
            <FormInput
              name='fullName'
              type='text'
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
          </div>
        </div>

        <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-700 dark:text-gray-500 sm:mt-px sm:pt-2'
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

        <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
          <label
            htmlFor='username'
            className='block text-sm font-medium text-gray-700 dark:text-gray-500 sm:mt-px sm:pt-2'
          >
            Username
          </label>
          <div className='mt-1 sm:col-span-2 sm:mt-0 max-w-md'>
            <FormInput
              name='username'
              type='text'
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
        </div>
      </div>

      <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
        <label
          htmlFor='userAvatar'
          className='block text-sm font-medium text-gray-700 dark:text-gray-500 sm:mt-px sm:pt-2'
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
                  htmlFor='userAvatar'
                  className='relative cursor-pointer rounded-md font-medium text-accent-light dark:text-primary-dark focus-within:outline-none focus-within:ring-0 focus-within:ring-offset-0 hover:text-accent-light'
                >
                  <span>Upload a file</span>
                  <input
                    id='userAvatar'
                    name='userAvatar'
                    type='file'
                    accept='image/*'
                    className='sr-only'
                  />
                </label>
                <p className='pl-1'>or drag and drop</p>
              </div>
              <p className='text-xs text-gray-500'>PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-end'>
        <FormBtn
          type='submit'
          classes='w-1/6 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white dark:bg-primary-dark dark:hover:bg-accent-darker bg-primary-light hover:bg-accent-light'
          label='Save'
        />
      </div>
    </form>
  )
}

export default AccSettingsForm
