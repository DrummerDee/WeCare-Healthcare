import {useReducer} from 'react'
import Link from 'next/link'
import { BsArrowLeftCircle } from 'react-icons/bs'
import addStyles from '../../styles/AddClient.module.scss'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import Success from '../../Components/success'
import Image from 'next/image'

//first param in the userReducer (takes two arguments, state & event)
const addClientReducer = (state,event) => {
    //when the function is called update previous state 
    return {
        ...state,
        [event.target.name] : event.target.value
    }
} 
const addClient = () => {

const [addClientData,setAddClientData] = useReducer(addClientReducer, {})

const handleSubmit = (e) => {
e.preventDefault()
if(Object.keys(addClientData).length == 0) return console.log('No form data') 
}
// if(Object.keys(addClientData).length > 0) return <Success></Success>

return (
        <>
            <header className={addStyles.header}>
                <nav className={addStyles.navbar}>
                    <Link href='/homepage' className={addStyles.btn}><BsArrowLeftCircle /></Link>
                    <h2> Add New Client </h2>
                    <Link href='/api/auth/logout'> Logout </Link>
                </nav>
            </header>
            <main>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="file" name='image' accept='image/*' className={addStyles.upload}/>
                    </div>
                    <div>
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" name="first-name"  placeholder='E.g David' onChange={setAddClientData}/>
                    </div>
                    <div>
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" name="last-name" placeholder='E.g Thomas' onChange={setAddClientData} />
                    </div>
                    <div>
                        <label htmlFor="birthdate">Birthdate</label>
                        <input type="date" name="birthdate" onChange={setAddClientData}/>
                    </div>
                    <div>
                        <label htmlFor='gender'> Please Select A Gender : </label>
                        <input type="radio" name='gender' value='Female' onChange={setAddClientData}/>
                        <label htmlFor="Female">Female</label>
                        <input type="radio"  name="gender" value='Male' onChange={setAddClientData}/>
                        <label htmlFor="Male">Male</label>
                        <input type="radio"  name="gender" value='Non-Binary' onChange={setAddClientData}/>
                        <label htmlFor="NonBinary">Non-Binary</label>
                    </div>
                    <div>
                        <textarea  
                        name='notes'
                        onChange={setAddClientData}> 
                        </textarea>
                    </div>
                    <input type='submit' value='Add'/>
                </form>
            </main>
        </>
    )
}
export default addClient
export const getServerSideProps = withPageAuthRequired()
