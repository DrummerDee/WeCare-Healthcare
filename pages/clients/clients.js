import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import clientStyles from '../styles/clients.module.scss'
import { BsArrowLeftCircle, BsPlusCircle } from 'react-icons/bs'
import Link from 'next/link'

const clients = () => {
    return (
        <>
            <header className={clientStyles.header}>
                <nav className={clientStyles.navbar}>
                    <Link href='/homepage'><BsArrowLeftCircle /></Link>
                    <h2>Clients <Link href='/clients/add-client'><BsPlusCircle/></Link></h2>
                    <Link href='/api/auth/logout'><a>Logout </a></Link>
                </nav>
            </header>
            <main className={clientStyles.overall}>
                <section className={clientStyles.contain}>
                    <div className={clientStyles.img}>
                        <span className={clientStyles.dot}></span>
                        <span className={clientStyles.dot}></span>
                        <span className={clientStyles.dot}></span>
                    </div>
                    <div className={clientStyles.img}>
                        <span className={clientStyles.dot}></span>                        <span className={clientStyles.dot}></span>
                        <span className={clientStyles.dot}></span>
                    </div>
                    <div className={clientStyles.img}>
                        <span className={clientStyles.dot}></span>
                        <span className={clientStyles.dot}></span>
                        <span className={clientStyles.dot}></span>
                    </div>
                </section>
            </main>

        </>
    )
}
export default clients
export const getServerSideProps = withPageAuthRequired()