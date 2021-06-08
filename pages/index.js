import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to .网 - the future of the internet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to .网
        </h1>
        <h2 className={styles.title}>
          我们欢迎您来到 .网
        </h2>

        <div className={styles.grid}>
          
          <a
            href="http://为什么.网.hns.to/"
            className={styles.card}
          >
            <h3>Why .网? &rarr;</h3>
            <p>
              Click here for why we believe .网 is the next big thing!
            </p>
          </a>
          
          
          <a href="http://terms.网.hns.to/" className={styles.card}>
            <h3>Terms & Conditions &rarr;</h3>
            <p>Read the terms & conditions of becoming a registrant of .网 domains here!</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
