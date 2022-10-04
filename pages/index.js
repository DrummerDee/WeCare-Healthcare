import styles from '../styles/Home.module.scss'
import React from 'react'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0'
import Homepage from '../pages/homepage'

export default function Home() {
  const {user} = useUser() 
  if(user){
    return (
      <>
      <Homepage />
      </>
    )
  }
  return (
    <div className={styles.container}>
        <header>
          <nav>
            <ul className = {styles.navbar}>
              <li><Link href='/api/auth/login' className={styles.link}>Sign In</Link></li>
              <li><Link href='/About'>About Us</Link></li>
              <li><Link href='/Contact'>Contact Us</Link></li>
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
