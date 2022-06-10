import Head from 'next/head'
import Layout from '@components/Layout'

export default function Home() {
  return (
    <div>
      <Layout title={'Home'}>
        <section>
          <h1>Hello world!</h1>
        </section>
      </Layout>
    </div>
  )
}
