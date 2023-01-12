import { FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';

export const NODE_ENV = process.env.NODE_ENV;
export const API_URL = process.env.NEXT_BACKEND_API_URL;
export const GOOGLE_MAP_API = process.env.GOOGLE_MAP_API;
export const MAPBOX_API_TOKEN = process.env.MAPBOX_API_TOKEN;
export const MAPBOX_STYLE = process.env.MAPBOX_STYLE;
export const PER_PAGE = 6;
export const logoImg =
  'https://res.cloudinary.com/iamalmiir/image/upload/v1654999279/logoLarge_v9hemr.png';

export const companyLogo =
  'https://res.cloudinary.com/iamalmiir/image/upload/v1654999279/logoLarge_v9hemr.png';

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
];

export const links = {
  home: '/',
  listings: '/listings',
  about: '/about',
  contact: '/contact',
  register: '/auth/register',
  login: '/auth/login',
  dashboard: '/account/dashboard',
};

export const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Buy', href: '/listings', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Contact', href: '/contact', current: false },
];
export const userNavigation = [
  { name: 'Dashboard', href: '/account/dashboard' },
  { name: 'Sign out', href: '/signout' },
];

export const socialMedia = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/iamalmiir',
    icon: <FaTwitterSquare className='h-6 w-6' />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/iamalmiir/',
    icon: <FaInstagramSquare className='h-6 w-6' />,
  },
];

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
];
