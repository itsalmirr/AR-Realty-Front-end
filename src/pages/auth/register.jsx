import { RegisterForm, Auth } from '@components/app/Forms'

const Register = () => {
  return <Auth Form={<RegisterForm />} type='register' />
}

export default Register
