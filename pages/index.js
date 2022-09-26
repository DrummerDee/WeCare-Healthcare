import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WeCare Healthcare Services @</title>
        <meta name="Healthcare application" content="Generated by create next app" />
      </Head>
        <header>
          <nav>
            <ul className = {styles.navbar}>
              <li>Sign In</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </nav>
        </header>
        <main className={styles.main}>
        <h1 className={styles.title}> Welcome to WeCare Healthcare</h1>
        </main>
        <footer>
          <span>@WeCare Healthcare Services</span>
        </footer>
    </div>
  )
}
