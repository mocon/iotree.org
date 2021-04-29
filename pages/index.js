import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const currentYear = new Date().getFullYear()
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to ioTree</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          🌳 Welcome to <a href="https://iotree.org">ioTree</a>
        </h1>

        <p className={styles.description}>
          Purchase one or many trees, and prove your unique ownership with an NFT.
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about ioTree features and API.</p>
          </a>

          <a href="https://iotree.org" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about ioTree in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Browse the trees by location, species, and rarity.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Purchase a tree &rarr;</h3>
            <p>
              Let's get started. You might even get a carbon credit.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          &copy; {currentYear} ioTree.org
        </p>
      </footer>
    </div>
  )
}
