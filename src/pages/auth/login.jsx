import { links } from '@lib/constants'
import { LoginForm, Auth } from '@components/app/Forms'

const LoginPage = () => <Auth Form={<LoginForm />} type='login' />

export default LoginPage

export const getServerSideProps = (ctx) => {
  const { access, refresh } = ctx.req.cookies
  if (access && refresh) {
    ctx.res.writeHead(302, {
      Location: links.dashboard,
    })
    ctx.res.end()
  }

  return {
    props: {},
  }
}
