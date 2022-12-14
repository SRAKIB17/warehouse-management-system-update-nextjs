import Head from 'next/head'
import Image from 'next/image'
import Home from '../components/Home/Home'
import styles from '../styles/Home.module.css'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Fresh Grocries WMS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Home />
      </main>

      <div>

      </div>
    </div>
  )
}

