import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './../public/UI/home/navbar'
import SLD from '../public/UI/home/slide'
import Cards from '../public/UI/home/Cards'
import Products from '../public/UI/home/Products'


export default function Home() {
  return (
    <main id="home">
      <Head>
        <meta name="Smart Perfumes" content="Selling Perfumes" />
        <title>Smart Perfumes (Test Mode !)</title>
      </Head>
      <Navbar/>
      <SLD/>
      <Cards/>
      <Products/>
    </main>
  )
}
