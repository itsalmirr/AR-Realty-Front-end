import dynamic from 'next/dynamic'

import { Divider } from '@components/app/Divider'
import { NewsLetter } from '@components/marketing/NewsLetter'
import MainSection from './MainSection'

const FeaturedListings = dynamic(() => import('@components/app/FeaturedListings/FeaturedListings'))

const Home = () => (
  <section className='container mx-auto sm:px-6 lg:px-8'>
    <MainSection />
    <Divider text='Featured Listings' />
    <FeaturedListings />
    <NewsLetter />
  </section>
)

export default Home
