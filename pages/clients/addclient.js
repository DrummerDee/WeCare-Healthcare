import React, {useState} from 'react'
import Link from 'next/link'
import { BsArrowLeftCircle } from 'react-icons/bs'
import addStyles from '../../styles/AddClient.module.scss'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import Image from 'next/image'

const addclient = () => {
    const [fileInput,setFileInput] = useState('')
    const [previewSource,setPreviewSource] = useState('')
    const [selectFile,setSelectFile] = useState('')
    const handleFileInput = (e) => {
        const file = e.target.files[0]
        previewFile(file)
    }
    const previewFile = (file) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
    }
    return (
        <>
            <header className={addStyles.header}>
                <nav className={addStyles.navbar}>
                    <Link href='/homepage'><BsArrowLeftCircle /></Link>
                    <h2> Add New Client </h2>
                    <Link href='/api/auth/logout'> Logout </Link>
                </nav>
            </header>
            <main>
            {previewSource && (
                    <Image src={previewSource}
                        alt='choosen file'
                        width='100'
                        height='100'
                        />
                )}
                <form action='/api/addclient' method='POST'>
                    <div>
                        <input type="file" name='image' accept='image/*' onChange={handleFileInput} value={fileInput} className={addStyles.upload}/>
                    </div>
                    <div>
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" name="first-name" placeholder='E.g David' />
                    </div>
                    <div>
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" name="last-name" placeholder='E.g Thomas' />
                    </div>
                    <div>
                        <label htmlFor="birthdate">Birthdate</label>
                        <input type="date" name="birthdate" />
                    </div>
                    <div>
                        <label htmlFor='gender'> Please Select A Gender </label>
                        <input type="radio" name="choosen_gender" value='Female' />
                        <label htmlFor="Female">Female</label>
                        <input type="radio" name="choosen_gender" value='Male' />
                        <label htmlFor="Male">Male</label>
                        <input type="radio" name="choosen_gender" value='Non-Binary' />
                        <label htmlFor="NonBinary">Non-Binary</label>
                    </div>
                    <div>
                        <textarea col='20' row='30' placeholder='Please Enter Your Notes Here'> </textarea>
                    </div>
                    <input type='submit' value='Enter'/>
                </form>
            </main>
        </>
    )
}
export default addclient
export const getServerSideProps = withPageAuthRequired()
