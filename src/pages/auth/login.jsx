import { links } from '@lib/constants'
import { LoginForm } from '@components/app/Forms/LoginForm'
import { Auth } from '@components/app/Auth'

const LoginPage = () => {
  return <Auth Form={<LoginForm />} type='login' />
}

export default LoginPage

export const getServerSideProps = (ctx) => {
  try {
    const { access, refresh } = ctx.req.cookies
    if (access && refresh) {
      ctx.res.writeHead(302, {
        Location: links.dashboard,
      })
      ctx.res.end()
    }
  } catch (error) {
    console.error(error)
  }

  return {
    props: {},
  }
}
