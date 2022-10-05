import styles from '../styles/Home.module.scss'
import React from 'react'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0'
import Homepage from '../pages/homepage'
import Load from '../Components/loading'

export default function Home() {
  const {user, error, isLoading} = useUser() 

  if(isLoading) return (<Load/>)
  if(error) return (<div>Oh no something went wrong{error.message}</div>)
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
        <footer className={styles.footer}>
          <span>@WeCare Healthcare Services</span>
          <div>
            <span> Photo by <a href="https://unsplash.com/@nci?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">National Cancer Institute</a> on <a href="https://unsplash.com/s/photos/black-healthcare?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>
            </div>
        </footer>
    </div>
  )
}
