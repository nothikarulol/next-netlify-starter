
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>idk!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="AnimeDuo!" />
        <p className="description">
          test test test </code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
