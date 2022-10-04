import React from 'react';
import Link from 'next/link';

 const login = () => {
  return (
    <form action='api/login' method='POST'>
        <div>
        <label htmlFor='email'> Email </label>
        <input type='email' placeholder='Enter Your Email' id='email' autoFocus required/>
        </div>
        <div>
        <label> Password </label>
        <input type='password' placeholder='Enter Your Password' id='password' autoFocus required/>
        <Link href='forgot'> Forgot Password </Link>
        </div>
        <div>
        <input type="submit" value='Sign In' />
        </div>
        <div>
        <h4> Don't have an account? <Link href='register'>Sign Up Here</Link> </h4>
        </div>
    </form>
  )
}
export default login 