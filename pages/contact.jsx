import { useState } from 'react'
import axios from 'axios'

import { Layout } from '@components/index'
import { officesLocation, API_URL } from '@lib/constants'
import { FormInput, LongFormInput, FormBtn } from '@components/FormComponents'
import { ContactFormInfo, ContactFormDotDecor } from '@components/PatternDecor'

const ContactPage = ({ user }) => {
  const [formState, setFormState] = useState({
    name: user.full_name,
    email: user.email,
    message: '',
  })

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formState)
  }

  return (
    <Layout title='Contact Page'>
      <main className='overflow-hidden'>
        {/* Header */}
        <div className='bg-warm-gray-50'>
          <div className='py-24 lg:py-32'>
            <div className='relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8'>
              <h1 className='text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl'>
                Get in touch
              </h1>
              <p className='mt-6 text-xl text-warm-gray-500 max-w-3xl'>
                Vel nunc non ut montes, viverra tempor. Proin lectus nibh
                phasellus morbi non morbi. In elementum urna ut volutpat.
                Sagittis et vel et fermentum amet consequat.
              </p>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <section
          className='relative bg-white'
          aria-labelledby='contact-heading'>
          <div
            className='absolute w-full h-1/2 bg-warm-gray-50'
            aria-hidden='true'
          />
          {/* Decorative dot pattern */}
          <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <ContactFormDotDecor />
          </div>
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
                    className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'>
                    <FormInput
                      name='fullName'
                      label='Full name'
                      type='text'
                      value={formState.full_name}
                      onChange={handleChange}
                      required
                      placeholder='Full name'
                    />
                    <FormInput
                      name='listingTitle'
                      label='Listing title'
                      value={formState.listingTitle}
                      onChange={handleChange}
                      type='text'
                      required
                      placeholder='Listing title'
                    />
                    <FormInput
                      name='email'
                      label='Email'
                      value={formState.email}
                      onChange={handleChange}
                      type='email'
                      required
                      placeholder='Email'
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
                      value={formState.message}
                      onChange={handleChange}
                      required
                      placeholder='Message'
                      rows={4}
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

        {/* Contact grid */}
        <section aria-labelledby='offices-heading'>
          <div className='max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
            <h2
              id='offices-heading'
              className='text-3xl font-extrabold text-warm-gray-900'>
              Our offices
            </h2>
            <p className='mt-6 text-lg text-warm-gray-500 max-w-3xl'>
              Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate
              id malesuada non. Cras aliquet purus dui laoreet diam sed lacus,
              fames.
            </p>
            <div className='mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4'>
              {officesLocation.map((office) => (
                <div key={office.id}>
                  <h3 className='text-lg font-medium text-warm-gray-900'>
                    {office.city}
                  </h3>
                  <p className='mt-2 text-base text-warm-gray-500'>
                    {office.address.map((line) => (
                      <span key={line} className='block'>
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
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
