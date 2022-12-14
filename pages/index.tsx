import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

//My components
import Hero from '../components/Hero'
import Oferty from '../components/Oferty'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dominik Works</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
      <Oferty/>
    </div>
  )
}
