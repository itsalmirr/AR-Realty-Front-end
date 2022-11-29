import { Fragment, memo } from 'react'
import { toast } from 'react-toastify'

import { FormBtn, FormInput } from '@components/app/Forms/FormComponents'

const AccountSettings = ({
  email,
  full_name,
  username,
  currentPassword,
  newPassword,
  confirmPassword,
  setEmail,
  setFullName,
  setUsername,
  setCurrentPassword,
  setNewPassword,
  setConfirmPassword,
  settings,
  setSettings,
  updateAccount,
}) => {
  const onSubmit = async (e) => {
    e.preventDefault()
    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match')
      return
    }
    try {
      const res = await fetch('/api/auth/updateuser/', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name,
          email,
          username: username ? username.toLowerCase() : null,
        }),
      })
      const data = await res.json()
      toast.success(data.message)
    } catch (err) {
      toast.error(err.response.data.message)
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

          <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
            <label
              htmlFor='username'
              className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
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

          {/* <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
            <label
              htmlFor='current_password'
              className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
            >
              Current Password
            </label>
            <div className='mt-1 sm:col-span-2 sm:mt-0 max-w-md'>
              <FormInput
                name='current_password'
                type='password'
                onChange={(e) => setCurrentPassword(e.target.value)}
                value={currentPassword}
              />
            </div>
          </div> */}

          {/* <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
            <label
              htmlFor='newPassword'
              className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
            >
              New Password
            </label>
            <div className='mt-1 sm:col-span-2 sm:mt-0 max-w-md'>
              <FormInput
                name='newPassword'
                type='password'
                onChange={(e) => setNewPassword(e.target.value)}
                value={newPassword}
              />
            </div>
          </div> */}

          {/* <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
            <label
              htmlFor='confirmPassword'
              className='block text-sm font-medium text-gray-70 0 sm:mt-px sm:pt-2'
            >
              Confirm New Password
            </label>
            <div className='mt-1 sm:col-span-2 sm:mt-0 max-w-md'>
              <FormInput
                name='confirmPassword'
                type='password'
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
            </div>
          </div> */}
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
          <FormBtn type='submit' onClick={updateAccount} label='Save' />
        </div>
      </form>
    </Fragment>
  )
}

export default memo(AccountSettings)
