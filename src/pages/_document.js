import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body className='dark:bg-background-dark bg-background-light'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
