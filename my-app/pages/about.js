import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Download</title>
        <meta name="description" content="Download page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>
          This app aim to make local shopping easier by providing a search in engine in local shops stocks.

          Indeed, it is a very common issue, thaht you want to but something in your city, but you don't now where to go or if a shops have your item.

          This app aim to solve this.

          With this, we hope we will be able to help developing local good consumption and shorter markets routes and help small local shops to be sustainable against delivery services, even in massive cities.
        
        
        
        </p>


      </main>

      <footer className={styles.footer}>
        
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/bihom_pr.png.jpg" alt="bihom logo" width={172} height={74} />
          </span>
      </footer>
    </div>
  )
}
