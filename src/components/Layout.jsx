import { Fragment } from 'react'
import Navbar from '@components/Navbar'
import Head from 'next/head'

const Layout = ({ title, children }) => {
  // Realty company selling homes keywords for meta tag
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
      <main>{children}</main>
    </Fragment>
  )
}

export default Layout
