import Image from 'next/image'

import { Layout } from '@components/layouts'

const AboutPage = () => {
  return (
    <Layout title='About'>
      <div className='bg-white'>
        <div className='mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
          <div className='text-center mb-2'>
            <h2 className='mb-10 text-base font-semibold text-accent-600 tracking-wide uppercase'>
              About
            </h2>
            <h2 className='mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
              Honesty, Reliability and
              <br />
              Integrity
            </h2>
            <p className='max-w-xl mt-5 mx-auto text-xl text-gray-500'>
              At AR Realty, our values are our guiding light. They drive how we
              work together and how we show up for our community, and they shape
              what we aspire to be. They influence our business decisions and
              how we ultimately serve our customers.
            </p>
          </div>
        </div>
        <div className='flex items-center justify-center p-5'>
          <Image
            width={588}
            height={392}
            className='mx-auto rounded-lg w-full md:w-2/4 md:h-2/4'
            src='https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Construction Site'
          />
        </div>
        <div className='bg-white'>
          <div className='mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
            <div className='text-center'>
              <h2 className='text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl'>
                AR Realty, Inc.
              </h2>
              <p className='max-w-xl mt-5 mx-auto text-md text-gray-500'>
                AR Realty&apos;s founders saw an opportunity to empower people
                with knowledge and information and make it radically easier for
                people to move. The introduction of the Zestimate, our
                proprietary valuation algorithm, combined with advanced
                technology, content and connections, has turned AR Realty into a
                household name. This was phase one. Despite the transparency
                that&apos;s empowered millions of people in their home journey,
                very little innovation has happened around the transaction
                itself. We now live in an always-on world, but real estate
                isn&apos;t always on. In fact, it&apos;s off a lot of the time.
                Other industries have ushered in a new era of convenience; the
                time for a seamless and convenient real estate transaction
                experience is now. This is phase two — and our next chapter as a
                company.
              </p>
            </div>
          </div>
        </div>
        <div className='our-philosophy'>
          <div className='our-philosophy-section mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
            <div className='text-center'>
              <h2 className='mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl'>
                Our Philosophy
              </h2>
              <p className='max-w-xl mt-5 mx-auto text-xl text-gray-50'>
                As the most-visited real estate website in the United States, AR
                Realty and its affiliates offer customers an on-demand
                experience for selling and buying with transparency and nearly
                seamless end-to-end service. AR Realty Home Loans, our affiliate
                lender, provides our customers with an easy option to get
                pre-approved and secure financing for their next home purchase.
              </p>
              <p className='max-w-xl mt-5 mx-auto text-xl text-gray-50'>
                The company must exemplify teamwork, integrity, honesty, and
                attention to detail each and every step of the way, which
                naturally creates an ideal and safe construction environment for
                everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
