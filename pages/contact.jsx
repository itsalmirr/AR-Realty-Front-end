import { Fragment, useState } from 'react'
import { Switch } from '@headlessui/react'
import { MdEmail, MdLocalPhone } from 'react-icons/md'
import axios from 'axios'

import { Layout } from '@components/index'
import { API_URL } from '@lib/constants'
import { classNames } from '@lib/helpers'
import {
  FormInput,
  LongFormInput,
  FormBtn,
  PhoneInput,
} from '@components/FormComponents'

const ContactPage = () => {
  const [formState, setFormState] = useState({
    first_name: '',
    last_name: '',
    company: '',
    email: '',
    message: '',
  })

  const [agreed, setAgreed] = useState(false)
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formState)
  }

  return (
    <Layout title='Contact Page'>
      <div className='bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24'>
        <div className='relative max-w-xl mx-auto'>
          <SvgDecorator />
          <div className='text-center'>
            <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              Contact sales
            </h2>
            <p className='mt-4 text-lg leading-6 text-gray-500'>
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
              massa dictumst amet. Sapien tortor lacus arcu.
            </p>
          </div>
          <div className='mt-12'>
            <form
              onSubmit={handleSubmit}
              className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'>
              <FormInput
                name={'name'}
                label={'First name'}
                type={'text'}
                value={formState.first_name}
                onChange={handleChange}
                required={true}
              />
              <FormInput
                name={'last-name'}
                label={'Last name'}
                type={'text'}
                value={formState.last_name}
                onChange={handleChange}
                required={true}
              />
              <div className='sm:col-span-2'>
                <FormInput
                  name={'company'}
                  label={'Company'}
                  type={'text'}
                  value={formState.company}
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
                  name={'phone-number'}
                  label={'Phone number'}
                  value={formState.phone_number}
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
                        agreed ? 'bg-primaryDark' : 'bg-gray-200',
                        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
                      )}>
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
                      <a
                        href='#'
                        className='font-medium text-gray-700 underline'>
                        Privacy Policy
                      </a>{' '}
                      and{' '}
                      <a
                        href='#'
                        className='font-medium text-gray-700 underline'>
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
        <div className='bg-white'>
          <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h2 className='text-2xl font-extrabold text-gray-900 sm:text-3xl'>
                  Sales Support
                </h2>
                <div className='mt-3'>
                  <p className='text-lg text-gray-500'>
                    Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                    volutpat massa dictumst amet. Sapien tortor lacus arcu.
                  </p>
                </div>
                <div className='mt-9'>
                  <div className='flex'>
                    <div className='flex-shrink-0'>
                      <MdLocalPhone
                        className='h-6 w-6 text-gray-400'
                        aria-hidden='true'
                      />
                    </div>
                    <div className='ml-3 text-base text-gray-500'>
                      <p>+1 (555) 123 4567</p>
                      <p className='mt-1'>Mon-Fri 8am to 6pm PST</p>
                    </div>
                  </div>
                  <div className='mt-6 flex'>
                    <div className='flex-shrink-0'>
                      <MdEmail
                        className='h-6 w-6 text-gray-400'
                        aria-hidden='true'
                      />
                    </div>
                    <div className='ml-3 text-base text-gray-500'>
                      <p>sales@ar.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-12 sm:mt-16 md:mt-0'>
                <h2 className='text-2xl font-extrabold text-gray-900 sm:text-3xl'>
                  Technical Support
                </h2>
                <div className='mt-3'>
                  <p className='text-lg text-gray-500'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Magni, repellat error corporis doloribus similique,
                    voluptatibus numquam quam, quae officiis facilis.
                  </p>
                </div>
                <div className='mt-9'>
                  <div className='flex'>
                    <div className='flex-shrink-0'>
                      <MdLocalPhone
                        className='h-6 w-6 text-gray-400'
                        aria-hidden='true'
                      />
                    </div>
                    <div className='ml-3 text-base text-gray-500'>
                      <p>+1 (555) 123 4567</p>
                      <p className='mt-1'>Mon-Fri 8am to 6pm PST</p>
                    </div>
                  </div>
                  <div className='mt-6 flex'>
                    <div className='flex-shrink-0'>
                      <MdEmail
                        className='h-6 w-6 text-gray-400'
                        aria-hidden='true'
                      />
                    </div>
                    <div className='ml-3 text-base text-gray-500'>
                      <p>techsupport@ar.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async (ctx) => {
  const { access } = ctx.req.cookies

  const { data } = await axios.get(`${API_URL}/api/user/me/`, {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  })

  return {
    props: {
      user: data,
    },
  }
}

export default ContactPage

export const SvgDecorator = () => {
  return (
    <Fragment>
      <svg
        className='absolute left-full transform translate-x-1/2'
        width={404}
        height={404}
        fill='none'
        viewBox='0 0 404 404'
        aria-hidden='true'>
        <defs>
          <pattern
            id='85737c0e-0916-41d7-917f-596dc7edfa27'
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits='userSpaceOnUse'>
            <rect
              x={0}
              y={0}
              width={4}
              height={4}
              className='text-gray-200'
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
        aria-hidden='true'>
        <defs>
          <pattern
            id='85737c0e-0916-41d7-917f-596dc7edfa27'
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits='userSpaceOnUse'>
            <rect
              x={0}
              y={0}
              width={4}
              height={4}
              className='text-gray-200'
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
