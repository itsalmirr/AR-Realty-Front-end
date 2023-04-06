import { links } from '@lib/constants'
import { Dashboard } from '@modules/dashboard'

const DashboardPage = () => <Dashboard />

export default DashboardPage

export const getServerSideProps = async ({ req, res }) => {
  const { access, refresh } = req.cookies

  if (!access || !refresh) {
    res.writeHead(302, {
      Location: links.login,
    })
    res.end()
  }

  return {
    props: {},
  }
}
