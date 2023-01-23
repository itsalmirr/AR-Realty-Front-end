import dynamic from 'next/dynamic'

import { links } from '@lib/constants'
import { Divider } from '@components/app/Divider'
import { Spinner } from '@components/app/Spinner'
import { DashboardHeader } from '@components/app/Dashboard'

const RequestedInquiries = dynamic(
  () => import('@components/app/RequestedInquiriesCard/RequestedInquiriesCard'),
  {
    loading: () => <Spinner />,
  }
)

const Dashboard = () => (
  <>
    <header>
      <DashboardHeader />
    </header>
    <div className='container mx-auto sm:px-6 lg:px-8 mt-12'>
      <Divider text='Your Inquiries' />
      <RequestedInquiries links={links} />
    </div>
  </>
)

export default Dashboard
