import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useUser } from '@auth0/nextjs-auth0'
import Link from 'next/link'
import homeStyles from '../styles/Homepage.module.scss'
import Image from 'next/image'
import Logo from '../public/assests/Images/WeCare.png'



const homepage = () => {
  const { user } = useUser()
  console.log(user)
  return (
    <>
      <header className={homeStyles.header}>
        <div>
      <Image
                src={Logo}
                className={homeStyles.image}
                alt='Lavender background with black outlined hands with red heart hovering over the cusped hands'
                width='75%'
                height='75%'
              />
              </div>
        <nav>
          <ul className={homeStyles.navbar}>
            <Link href='/clients/index'> Clients </Link>
            <Link href='/resources'> Resources </Link>
            <Link href='/we-chat'> WeChat </Link>
            <Link href='/contacts'> Contacts </Link>
            <Link href='/settings'> Settings </Link>
            <Link href='/api/auth/logout'> Logout </Link>
          </ul>
        </nav>
      </header>
      <main className={homeStyles.body}>
      <div className={homeStyles.greeting}>
      <h1> Welcome back, {user.nickname.toUpperCase()} !</h1>
      <span>Last Login : {user.updated_at}</span>
      </div>
      <section className={homeStyles.main}>
        <div>
          <img src={user.picture} className={homeStyles.userpic} />
        </div>
        <h2> {user.nickname.toUpperCase()} </h2>
        <span> Title{user.title}</span>
        <div>
          <h3> Latest Updates </h3>
        </div>
      </section>
      </main>
    </>
  )
}

export default homepage

export const getServerSideProps = withPageAuthRequired()