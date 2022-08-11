import { useState, useEffect, useContext } from 'react'
import { FaPhone, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

import { FormInput, LongFormInput, FormBtn } from '@components/FormComponents'
import ListingsContext from '@context/ListingsContext'

const InquiryForm = ({ user, listing }) => {
  const { handleInquirySubmit } = useContext(ListingsContext)
  const [formState, setFormState] = useState({
    listing: listing.title,
    listing_id: '',
    name: user.full_name,
    email: user.email,
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    setFormState({
      ...formState,
      listing_id: listing.id,
      listing: listing.title,
    })
  }, [listing])

  return (
    <section className='relative bg-white' aria-labelledby='contact-heading'>
      <div
        className='absolute w-full h-1/2 bg-warm-gray-50'
        aria-hidden='true'
      />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='relative bg-white shadow-xl'>
          <h2 id='contact-heading' className='sr-only'>
            Contact us
          </h2>

          <div className='grid grid-cols-1 lg:grid-cols-3'>
            {/* Contact information & decoration*/}
            <ContactFormInfo />
            {/* Contact form */}
            <div className='py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12'>
              <h3 className='text-lg font-medium text-warm-gray-900'>
                Send us a message
              </h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleInquirySubmit(formState, setFormState)
                }}
                className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'>
                <FormInput
                  name='fullName'
                  label='Full name'
                  type='text'
                  required
                  disabled={user.full_name}
                  placeholder='Full name'
                  value={formState.name}
                  onChange={handleChange}
                />
                <FormInput
                  name='listingTitle'
                  label='Listing title'
                  type='text'
                  required
                  disabled={listing.title}
                  placeholder='Listing title'
                  value={formState.listing}
                  onChange={handleChange}
                />
                <FormInput
                  name='email'
                  label='Email'
                  type='email'
                  required
                  disabled={user.email}
                  placeholder='Email'
                  value={formState.email}
                  onChange={handleChange}
                />
                <FormInput
                  name='phone'
                  label='Phone'
                  value={formState.phone}
                  onChange={handleChange}
                  type='tel'
                  required
                  placeholder='Phone'
                />
                <LongFormInput
                  name='message'
                  label='Message'
                  required
                  placeholder='Message'
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                />
                <div className='sm:col-span-2 sm:flex sm:justify-end'>
                  <FormBtn
                    type='submit'
                    label='Send'
                    classes={
                      'mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primaryDark hover:bg-primaryLight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:w-auto'
                    }
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InquiryForm

const ContactFormInfo = () => {
  return (
    <div className='relative overflow-hidden py-10 px-6 bg-gradient-to-b from-primaryLight to-primaryDark sm:px-10 xl:p-12'>
      {/* Decorative angle backgrounds */}
      <div
        className='absolute inset-0 pointer-events-none sm:hidden'
        aria-hidden='true'>
        <svg
          className='absolute inset-0 w-full h-full'
          width={343}
          height={388}
          viewBox='0 0 343 388'
          fill='none'
          preserveAspectRatio='xMidYMid slice'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z'
            fill='url(#linear1)'
            fillOpacity='.1'
          />
          <defs>
            <linearGradient
              id='linear1'
              x1='254.553'
              y1='107.554'
              x2='961.66'
              y2='814.66'
              gradientUnits='userSpaceOnUse'>
              <stop stopColor='#fff' />
              <stop offset={1} stopColor='#fff' stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className='hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden'
        aria-hidden='true'>
        <svg
          className='absolute inset-0 w-full h-full'
          width={359}
          height={339}
          viewBox='0 0 359 339'
          fill='none'
          preserveAspectRatio='xMidYMid slice'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z'
            fill='url(#linear2)'
            fillOpacity='.1'
          />
          <defs>
            <linearGradient
              id='linear2'
              x1='192.553'
              y1='28.553'
              x2='899.66'
              y2='735.66'
              gradientUnits='userSpaceOnUse'>
              <stop stopColor='#fff' />
              <stop offset={1} stopColor='#fff' stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className='hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block'
        aria-hidden='true'>
        <svg
          className='absolute inset-0 w-full h-full'
          width={160}
          height={678}
          viewBox='0 0 160 678'
          fill='none'
          preserveAspectRatio='xMidYMid slice'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z'
            fill='url(#linear3)'
            fillOpacity='.1'
          />
          <defs>
            <linearGradient
              id='linear3'
              x1='192.553'
              y1='325.553'
              x2='899.66'
              y2='1032.66'
              gradientUnits='userSpaceOnUse'>
              <stop stopColor='#fff' />
              <stop offset={1} stopColor='#fff' stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <h3 className='text-lg font-medium text-white'>Contact information</h3>
      <p className='mt-6 text-base text-teal-50 max-w-3xl'>
        Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa
        dictumst amet. Sapien tortor lacus arcu.
      </p>
      <dl className='mt-8 space-y-6'>
        <dt>
          <span className='sr-only'>Phone number</span>
        </dt>
        <dd className='flex text-base text-cyan-50'>
          <FaPhone
            className='flex-shrink-0 w-6 h-6 text-cyan-200'
            aria-hidden='true'
          />
          <span className='ml-3'>+1 (555) 123-4567</span>
        </dd>
        <dt>
          <span className='sr-only'>Email</span>
        </dt>
        <dd className='flex text-base text-cyan-50'>
          <HiMail
            className='flex-shrink-0 w-6 h-6 text-cyan-200'
            aria-hidden='true'
          />
          <span className='ml-3'>support@ar.com</span>
        </dd>
      </dl>
      <ul role='list' className='mt-8 flex space-x-12'>
        <li>
          <a className='text-cyan-200 hover:text-cyan-100' href='#'>
            <span className='sr-only'>Instagram</span>
            <FaInstagram
              className='w-7 h-7'
              aria-hidden='true'
              fill='currentColor'
            />
          </a>
        </li>
        <li>
          <a className='text-cyan-200 hover:text-cyan-100' href='#'>
            <span className='sr-only'>GitHub</span>
            <FaGithub
              className='w-7 h-7'
              aria-hidden='true'
              fill='currentColor'
            />
          </a>
        </li>
        <li>
          <a className='text-cyan-200 hover:text-cyan-100' href='#'>
            <span className='sr-only'>Twitter</span>
            <FaTwitter
              className='w-7 h-7'
              aria-hidden='true'
              fill='currentColor'
            />
          </a>
        </li>
      </ul>
    </div>
  )
}
