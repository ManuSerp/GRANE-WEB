import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GRANE PROJECT</title>
        <meta name="description" content="Future website of the project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/ManuSerp/GRANE-WEB">the project</a>
        </h1>

  

        <div className={styles.grid}>
          <Link href="/app/home">
          <a className={styles.card}>
            <h2>Online App &rarr;</h2>
            <p>Here you can access the online app, which will be the first to be developped</p>
          </a>
          </Link>
            <Link href="/download">
          <a className={styles.card}>
            <h2>Desktop software &rarr;</h2>
            <p>Here you will be able to download our desktop app</p>
          </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/bihom_pr.png.jpg" alt="BIHOM Logo" width={172} height={74} />
          </span>
      </footer>
    </div>
  )
}
