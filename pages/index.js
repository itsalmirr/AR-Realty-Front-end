import {
  Layout,
  MainSection,
  FeaturedListings,
  ListingCard,
} from '@components/index'

const Home = () => {
  return (
    <Layout title={'Home'}>
      <main>
        <MainSection />
      </main>
      <section className='lg:relative'>
        <FeaturedListings />
        <div className='container mx-auto w-full sm:px-6 lg:px-8'>
          <ListingCard />
        </div>
      </section>
    </Layout>
  )
}

export default Home
