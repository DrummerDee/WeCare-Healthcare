const Register = () => {

    return (
      <>
      <form action='api/register' method='POST'>
        <div>
          <label htmlFor="first-name">First Name</label>
          <input type='text' name='first' placeholder='First Name' required/>
          </div>
          <div>
            <label htmlFor="last-name">Last Name</label>
            <input type="text" name='last' placeholder='Last Name' required/>
            </div>
            <div>
          <label htmlFor="email"> Email </label>
          <input type='email' name='email' placeholder='Enter Email' required/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="register-pwd" placeholder="Enter Your Password" required/>
            </div>
            <div>
              <label>Terms and Conditions
                <input type="checkbox" name="terms" id="terms" required/></label>
              </div>
              <div>
                <input type="submit" value="Register"/>
              </div>
          </form>
  
      </>
    )
  }

  export default Register