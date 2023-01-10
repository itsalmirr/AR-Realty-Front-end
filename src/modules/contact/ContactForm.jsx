import { Fragment } from 'react'
import { Switch } from '@headlessui/react'

import {
  FormBtn,
  FormInput,
  PhoneInput,
  LongFormInput,
} from '@components/app/Forms/FormComponents'
import { classNames } from '@lib/helpers'

const ContactForm = ({
  agreed,
  formState,
  setAgreed,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div className='relative max-w-xl mx-auto'>
      <SvgDecorator />
      <div className='text-center'>
        <h2 className='text-3xl font-extrabold tracking-tight dark:text-primary-dark text-gray-900 sm:text-4xl'>
          Contact sales
        </h2>
        <p className='mt-4 text-lg leading-6 dark:text-textColor-100 text-gray-500'>
          Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
          massa dictumst amet. Sapien tortor lacus arcu.
        </p>
      </div>
      <div className='mt-12'>
        <form
          onSubmit={handleSubmit}
          className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
        >
          <FormInput
            name={'first_name'}
            label={'First name'}
            type={'text'}
            value={formState.first_name}
            onChange={handleChange}
            required={true}
          />
          <FormInput
            name={'last_name'}
            label={'Last name'}
            type={'text'}
            value={formState.last_name}
            onChange={handleChange}
            required={true}
          />
          <div className='sm:col-span-2'>
            <FormInput
              name={'company_name'}
              label={'Company'}
              type={'text'}
              value={formState.company_name}
              onChange={handleChange}
              autoComplete='organization'
              required={true}
            />
          </div>
          <div className='sm:col-span-2'>
            <FormInput
              name={'email'}
              label={'Email'}
              type={'email'}
              value={formState.email}
              onChange={handleChange}
              autoComplete='email'
              required={true}
            />
          </div>
          <div className='sm:col-span-2'>
            <PhoneInput
              name={'phone'}
              label={'Phone number'}
              value={formState.phone}
              onChange={handleChange}
              required={true}
            />
          </div>
          <div className='sm:col-span-2'>
            <LongFormInput
              name={'message'}
              label={'Message'}
              value={formState.message}
              onChange={handleChange}
              rows={4}
              required={true}
            />
          </div>
          <div className='sm:col-span-2'>
            <div className='flex items-start'>
              <div className='flex-shrink-0'>
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className={classNames(
                    agreed
                      ? 'bg-primary-light dark:bg-primary-dark'
                      : 'bg-gray-200',
                    'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
                  )}
                >
                  <span className='sr-only'>Agree to policies</span>
                  <span
                    aria-hidden='true'
                    className={classNames(
                      agreed ? 'translate-x-5' : 'translate-x-0',
                      'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                    )}
                  />
                </Switch>
              </div>
              <div className='ml-3'>
                <p className='text-base text-gray-500'>
                  By selecting this, you agree to the{' '}
                  <a href='#' className='font-medium text-gray-700 underline'>
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href='#' className='font-medium text-gray-700 underline'>
                    Cookie Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
          <div className='sm:col-span-2'>
            <FormBtn
              type='submit'
              className='w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white'
              label={"Let's talk"}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm

export const SvgDecorator = () => {
  return (
    <Fragment>
      <svg
        className='absolute left-full transform translate-x-1/2'
        width={404}
        height={404}
        fill='none'
        viewBox='0 0 404 404'
        aria-hidden='true'
      >
        <defs>
          <pattern
            id='85737c0e-0916-41d7-917f-596dc7edfa27'
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits='userSpaceOnUse'
          >
            <rect
              x={0}
              y={0}
              width={4}
              height={4}
              className='text-primary-light dark:text-primary-dark'
              fill='currentColor'
            />
          </pattern>
        </defs>
        <rect
          width={404}
          height={404}
          fill='url(#85737c0e-0916-41d7-917f-596dc7edfa27)'
        />
      </svg>
      <svg
        className='absolute right-full bottom-0 transform -translate-x-1/2'
        width={404}
        height={404}
        fill='none'
        viewBox='0 0 404 404'
        aria-hidden='true'
      >
        <defs>
          <pattern
            id='85737c0e-0916-41d7-917f-596dc7edfa27'
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits='userSpaceOnUse'
          >
            <rect
              x={0}
              y={0}
              width={4}
              height={4}
              className='text-primary-light dark:text-primary-dark'
              fill='currentColor'
            />
          </pattern>
        </defs>
        <rect
          width={404}
          height={404}
          fill='url(#85737c0e-0916-41d7-917f-596dc7edfa27)'
        />
      </svg>
    </Fragment>
  )
}
