import { socialMedia } from '@lib/index'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const siteTitle = 'AR Realty'

  return (
    <footer className='bg-primaryDark mt-20' aria-labelledby='footer-heading'>
      <div className='max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8'>
        <div className='pt-5 pb-5 md:flex md:items-center md:justify-between'>
          <div className='flex space-x-6 md:order-2'>
            {socialMedia.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-gray-200 hover:text-accentDark'>
                <span className='sr-only'>{item.name}</span>
                {item.icon}
              </a>
            ))}
          </div>
          <p className='text-base text-gray-200 md:mt-0 md:order-1'>
            &copy; {currentYear} {siteTitle} - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
