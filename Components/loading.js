import loadStyles from '../styles/loading.module.scss';
import Link from 'next/link'
const loading = () => {
  return (
    <>
    <h1> Page is loading, if not redirected in 5s <Link href='/homepage'> click here </Link></h1>
    <div className={loadStyles.loading}></div>
    </>
  )
}

export default loading