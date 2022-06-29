import Head from 'next/head'
import Image from 'next/image'
import CaptionCarousel from '../components/Carousel'
import { Contact } from '../components/Contact'
import Menu from '../components/Menu'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Menu />
      <CaptionCarousel />
      <Contact />
    </div>
  )
}
