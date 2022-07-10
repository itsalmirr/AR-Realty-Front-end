import { FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa'

export const API_URL = process.env.NEXT_BACKEND_API_URL

export const PER_PAGE = 6

export const companyLogo =
  'https://res.cloudinary.com/iamalmiir/image/upload/v1654999279/logoLarge_v9hemr.png'

export const metrics = [
  {
    id: 1,
    stat: '3K+',
    emphasis: 'Properties',
    rest: 'has been sold and countinues to grow',
  },
  {
    id: 2,
    stat: '4K+',
    emphasis: 'Properties listed',
    rest: 'across the US and Canada',
  },
]

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

export const officesLocation = [
  {
    id: 1,
    city: 'Los Angeles',
    address: ['4556 Brendan Ferry', 'Los Angeles, CA 90210'],
  },
  {
    id: 2,
    city: 'New York',
    address: ['886 Walter Streets', 'New York, NY 12345'],
  },
  {
    id: 3,
    city: 'Toronto',
    address: ['7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
  },
  { id: 4, city: 'London', address: ['114 Cobble Lane', 'London N1 2EF'] },
]
