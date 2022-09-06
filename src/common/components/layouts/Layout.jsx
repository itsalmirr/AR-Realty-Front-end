import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Fragment } from 'react'

const Navbar = dynamic(() => import('@components/app/Navbar/Navbar'))
const Footer = dynamic(() => import('@components/marketing/Footer/Footer'))

const Layout = ({ title, children }) => {
  const keywords = [
    'realty',
    'company',
    'selling',
    'homes',
    'keywords',
    'meta',
    'tag',
    'rental',
    'location',
    'home',
  ]
  const description = 'Realty company selling homes in the United States'

  return (
    <Fragment>
      <Head>
        <title>{title} | AR Realty</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <section className='container mx-auto max-w-7xl sm:px-6 lg:px-8'>
        {children}
      </section>
      <Footer />
    </Fragment>
  )
}

export default Layout
