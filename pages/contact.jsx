import { Layout } from '@components/index'

import { ContactFormDecor, ContactFormDotDecor } from '@components/PatternDecor'
import { officesLocation } from '@lib/constants'

const ContactPage = () => {
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
                <ContactFormDecor />
                {/* Contact form */}
                <div className='py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12'>
                  <h3 className='text-lg font-medium text-warm-gray-900'>
                    Send us a message
                  </h3>
                  <form
                    action='#'
                    method='POST'
                    className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'>
                    <div>
                      <label
                        htmlFor='first-name'
                        className='block text-sm font-medium text-warm-gray-900'>
                        Full Name
                      </label>
                      <div className='mt-1'>
                        <input
                          type='text'
                          name='first-name'
                          id='first-name'
                          autoComplete='given-name'
                          className='py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-cyan-500 focus:border-cyan-500 border-warm-gray-300 rounded-md'
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor='first-name'
                        className='block text-sm font-medium text-warm-gray-900'>
                        Listing title
                      </label>
                      <div className='mt-1'>
                        <input
                          type='text'
                          name='first-name'
                          id='first-name'
                          autoComplete='given-name'
                          className='py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-cyan-500 focus:border-cyan-500 border-warm-gray-300 rounded-md'
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium text-warm-gray-900'>
                        Email
                      </label>
                      <div className='mt-1'>
                        <input
                          id='email'
                          name='email'
                          type='email'
                          autoComplete='email'
                          className='py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md'
                        />
                      </div>
                    </div>
                    <div>
                      <div className='flex justify-between'>
                        <label
                          htmlFor='phone'
                          className='block text-sm font-medium text-warm-gray-900'>
                          Phone
                        </label>
                      </div>
                      <div className='mt-1'>
                        <input
                          type='text'
                          name='phone'
                          id='phone'
                          autoComplete='tel'
                          className='py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md'
                          aria-describedby='phone-optional'
                        />
                      </div>
                    </div>
                    <div className='sm:col-span-2'>
                      <div className='flex justify-between'>
                        <label
                          htmlFor='message'
                          className='block text-sm font-medium text-warm-gray-900'>
                          Message
                        </label>
                        <span
                          id='message-max'
                          className='text-sm text-warm-gray-500'>
                          Max. 500 characters
                        </span>
                      </div>
                      <div className='mt-1'>
                        <textarea
                          id='message'
                          name='message'
                          rows={4}
                          className='py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border border-warm-gray-300 rounded-md'
                          aria-describedby='message-max'
                          defaultValue={''}
                        />
                      </div>
                    </div>
                    <div className='sm:col-span-2 sm:flex sm:justify-end'>
                      <button
                        type='submit'
                        className='mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primaryDark hover:bg-primaryLight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:w-auto'>
                        Submit
                      </button>
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

export default ContactPage
