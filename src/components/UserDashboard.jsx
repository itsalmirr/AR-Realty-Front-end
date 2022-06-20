const profile = {
  name: 'Ricardo Cooper',
  email: 'ricardo.cooper@example.com',
  avatar:
    'https://res.cloudinary.com/iamalmiir/image/upload/v1646398857/icon_xfatll.png',
  backgroundImage:
    'https://res.cloudinary.com/iamalmiir/image/upload/v1655707112/verne-ho-0LAJfSNa-xQ-unsplash_qfkws7.jpg',
  fields: [
    ['Phone', '(555) 123-4567'],
    ['Email', 'ricardocooper@example.com'],
    ['Title', 'Senior Front-End Developer'],
    ['Team', 'Product Development'],
    ['Location', 'San Francisco'],
    ['Sits', 'Oasis, 4th floor'],
    ['Salary', '$145,000'],
    ['Birthday', 'June 8, 1990'],
  ],
}

import { UserHeader } from '@components/index'

const UserDashboard = () => {
  return (
    <div>
      <header>
        <UserHeader profile={profile} />
      </header>
    </div>
  )
}

export default UserDashboard
