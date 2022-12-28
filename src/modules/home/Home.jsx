import MainSection from './MainSection'
import { Divider } from '@components/app/Divider'
import { renderListings } from './renderListings'
import { NewsLetter } from '@components/marketing/NewsLetter'

const Home = ({ listings }) => {
  return (
    <section className='container mx-auto sm:px-6 lg:px-8'>
      <MainSection />
      <div className='my-8'>
        <Divider text={'Featured Listings'} />
      </div>
      {renderListings(listings)}
      <NewsLetter />
    </section>
  )
}

export default Home
