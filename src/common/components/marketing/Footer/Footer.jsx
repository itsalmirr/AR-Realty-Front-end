import Link from 'next/link'

import { socialMedia } from '@lib/constants'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const siteTitle = 'AR Realty'

  return (
    <footer
      className='bg-primary-light max-w-7xl mx-auto border-t dark:border-white/10 dark:bg-background-dark  mt-20'
      aria-labelledby='footer-heading'
    >
      <div className='mx-auto py-5 px-4 sm:px-6 lg:px-8'>
        <div className='pt-5 pb-5 md:flex md:items-center md:justify-between'>
          <div className='flex space-x-6 md:order-2'>
            {socialMedia.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-200 my-4 dark:text-textColor-icons hover:text-accent-light dark:hover:text-accent-dark'
              >
                <span className='sr-only'>{item.name}</span>
                {item.icon}
              </Link>
            ))}
          </div>
          <p className='text-base text-gray-200 dark:text-textColor-icons md:mt-0 md:order-1'>
            &copy; {currentYear} {siteTitle} - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
