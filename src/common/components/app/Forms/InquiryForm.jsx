import { useState, useEffect, Fragment } from 'react'
import { handleInquirySubmit } from './lib'

import {
  FormInput,
  LongFormInput,
  FormBtn,
  ContactFormInfo,
} from '@components/app/Forms/FormComponents'

import { Divider } from '@components/app/Divider'

const InquiryForm = ({ user, listing, setInquiryMade }) => {
  const [formState, setFormState] = useState({
    name: user.full_name,
    email: user.email,
    message: '',
    listing: '',
    phone: '',
  })

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleInquirySubmit(formState, setFormState, setInquiryMade)
  }

  useEffect(() => {
    setFormState({
      ...formState,
      listing: listing.id,
      message: `I'm interested in ${listing.title}`,
    })
  }, [listing])

  return (
    <Fragment>
      <Divider text={'Make an inquiry'} />
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
                  onSubmit={handleSubmit}
                  className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
                >
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
                    value={listing.title}
                    // onChange={handleChange}
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
                    placeholder='Optional'
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
                        'mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-light hover:bg-primaryLight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:w-auto'
                      }
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default InquiryForm
