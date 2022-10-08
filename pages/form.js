import React, { useState } from 'react'

const form = () => {
    const [firstName, setFirstName] = useState('')
    const handleSubmit = () => {
        console.log(firstName)
    }
    const handleInput = (e) => {
        setFirstName(e.target.value)
    }
    return (
        <>
            <h1> What is your name ? </h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'> First Name </label>
                <input type='text' value={firstName} onChange={handleInput()}/>
            <button type='submit' onClick={() => handleSubmit()}> Enter </button>
            </form>
             <h2> {firstName} </h2>
        </>
    )
}

export default form;