export const API_URL = process.env.NEXT_BACKEND_API_URL

export const links = {
  home: '/',
  listings: '/listings',
  about: '/about',
  contact: '/contact',
  register: '/users/register',
  login: '/users/login',
}

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}
