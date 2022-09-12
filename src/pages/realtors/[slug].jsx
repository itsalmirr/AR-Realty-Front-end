import dynamic from 'next/dynamic'
import { Layout } from '@components/layouts'
import { Divider } from '@components/app/Divider'
import { RealtorListings, RealtorDashboard } from '@modules/realtor'

const RealtorsListing = ({ realtor, slug }) => {
  return (
    <Layout title={realtor.full_name}>
      <header>
        <RealtorDashboard realtor={realtor} />
      </header>
      {/* Listings by realtor */}
      <Divider text={`Properties listed by ${realtor.full_name}`} />
      <main>
        <RealtorListings slug={slug} />
      </main>
    </Layout>
  )
}

export const getServerSideProps = async (context) => {
  const { slug } = context.params
  const res = await fetch(
    `${process.env.NEXT_BACKEND_API_URL}/api/realtors/${slug}`
  )
  const realtor = await res.json()

  return {
    props: {
      realtor,
      slug,
    },
  }
}

export default RealtorsListing
