import { toast } from 'react-toastify'

import { links } from '@lib/constants'
import { LoginForm } from '@components/app/Forms/LoginForm'
import { Auth } from '@components/app/Auth'

const LoginPage = () => {
  const logoImg =
    'https://res.cloudinary.com/iamalmiir/image/upload/v1654999279/logoLarge_v9hemr.png'

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
    toast.error('Something went wrong')
  }

  return {
    props: {},
  }
}
