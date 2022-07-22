import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GRANE</title>
        <meta name="description" content="Grane app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          ONLINE APP
        </h1>

  

      </main>

      <footer className={styles.footer}>
        
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/bihom_pr.png.jpg" alt="bihom logo" width={132} height={80} />
          </span>
      </footer>
    </div>
  )
}
