import { Layout } from '@components/index'

const AboutPage = () => {
  return (
    <Layout title='About'>
      <div className='bg-white'>
        <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
          <div className='text-center mb-2'>
            <h2 className='mb-10 text-base font-semibold text-accent-600 tracking-wide uppercase'>
              COMPANY
            </h2>
            <h2 className='mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
              Honesty, Reliability and
              <br />
              Integrity
            </h2>
            <p className='max-w-xl mt-5 mx-auto text-xl text-gray-500'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur delectus repudiandae, ipsum numquam, enim doloremque
              excepturi impedit rerum suscipit magni incidunt modi omnis dolore
              maiores nemo repellendus. Quae, cumque aliquam.
            </p>
          </div>
        </div>
        <div className='flex items-center justify-center p-5'>
          <img
            className='mx-auto rounded-lg w-full md:w-2/4 md:h-2/4'
            src='https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Construction Site'
          />
        </div>
        <div className='bg-white'>
          <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
            <div className='text-center'>
              <h2 className='text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl'>
                AR Realty, Inc.
              </h2>
              <p className='max-w-xl mt-5 mx-auto text-md text-gray-500'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                vitae assumenda ducimus voluptatum fuga. Velit dolores quo id
                autem eaque. Placeat aliquid culpa iusto adipisci. Praesentium
                voluptate reiciendis delectus minima. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Architecto similique praesentium
                error natus delectus illum inventore tempora eos iusto dolorum
                cumque animi modi explicabo quasi debitis, eum non aspernatur.
                Facere! Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Recusandae quis ullam suscipit iure doloribus, asperiores
                amet omnis libero adipisci optio minus soluta! Asperiores modi
                aspernatur maiores quia, sed labore reiciendis!
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
                To be successful in the construction industry, a company must be
                led by a respected and ethical contractor who has authentically
                inspired superior craftsmanship, and dedication. A contractor is
                only as good as his team — and Home Services Toskic, Inc. is
                committed to hiring experienced professionals who share a deep
                commitment to quality.
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
