import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <body className='dark:bg-background-dark'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
