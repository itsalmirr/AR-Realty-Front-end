import { FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa'

export const API_URL = process.env.NEXT_BACKEND_API_URL

const formatter = new Intl.NumberFormat('en-EN', {
  maximumSignificantDigits: 3,
  style: 'currency',
  currency: 'USD',
})

const numFormater = new Intl.NumberFormat('en-EN', {
  maximumSignificantDigits: 3,
  style: 'decimal',
})

export const numberFormater = (num) => {
  return numFormater.format(num)
}

export const formatPrice = (price) => {
  return formatter.format(price)
}

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

// Site data
export const links = {
  home: '/',
  listings: '/listings',
  about: '/about',
  contact: '/contact',
  register: '/users/register',
  login: '/users/login',
}

export const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
export const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Buy', href: '/listings', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Contact', href: '/contact', current: false },
]
export const userNavigation = [
  { name: 'Dashboard', href: '/account/dashboard' },
  { name: 'Sign out', href: '/signout' },
]

export const socialMedia = [
  {
    name: 'Twitter',
    href: '#',
    icon: <FaTwitterSquare className='h-6 w-6' />,
  },
  {
    name: 'Instagram',
    href: '#',
    icon: <FaInstagramSquare className='h-6 w-6' />,
  },
]
