import dynamic from 'next/dynamic'

import MainSection from './MainSection'
import { NewsLetter } from '@components/marketing/NewsLetter'
import { Divider } from '@components/app/Divider'
const FeaturedListings = dynamic(() =>
  import('@components/app/FeaturedListings/FeaturedListings')
)

const Home = () => {
  return (
    <section className='container mx-auto sm:px-6 lg:px-8'>
      <MainSection />
      <Divider text={'Featured Listings'} />
      <FeaturedListings />
      <NewsLetter />
    </section>
  )
}

export default Home
