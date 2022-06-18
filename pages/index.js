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
      <section>
        <FeaturedListings />
        <ListingCard />
      </section>
    </Layout>
  )
}

export default Home
