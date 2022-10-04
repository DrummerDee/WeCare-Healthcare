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
                width='70%'
                height='70%'
              />
              </div>
        <nav>
          <ul className={homeStyles.navbar}>
            <li> Something </li>
            <li> Something </li>
            <li> Something </li>
            <li> Something</li>
            <Link href='/api/auth/logout'> Logout </Link>
          </ul>
        </nav>
      </header>
      <h1> Welcome back, {user.nickname.toUpperCase()} !</h1>
      <span>Last Login : {user.updated_at}</span>
      <main>
        <div>
          <img src={user.picture} />
        </div>
        <h2> {user.nickname} </h2>
        <span> {user.title}</span>
        <div>
          <h3> Latest Updates </h3>
        </div>
      </main>
    </>
  )
}

export default homepage

export const getServerSideProps = withPageAuthRequired()