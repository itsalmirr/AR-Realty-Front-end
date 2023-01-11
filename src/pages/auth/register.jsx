import { Auth } from '@components/app/Auth'
import { RegisterForm } from '@components/app/Forms'

const Register = () => {
  return <Auth Form={<RegisterForm />} type='register' />
}

export default Register
