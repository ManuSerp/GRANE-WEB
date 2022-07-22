import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Download</title>
        <meta name="description" content="Download page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Here you will be able to download the desktop app and to find the link of the mobile app
        </h1>

  

        <div className={styles.grid}>
            <h2>Desktop app &rarr;</h2>
            <p>Desktop app link</p>

            <h2>Mobile app &rarr;</h2>
            <p>Here you will be able to dgo to the playstore</p>
        </div>
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
