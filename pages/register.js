 const Register = () => {

  return (
    <>
    <form>
      <div>
        <label htmlFor="first-name">First Name</label>
        <input type='text' placeholder='First Name'/>
        </div>
        <div>
          <label htmlFor="last-name">Last Name</label>
          <input type="text" placeholder='Last Name'/>
          </div>
          <div>
        <label htmlFor="email"> Email </label>
        <input type='email' placeholder='Enter Email'/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="register-pwd" placeholder="Enter Your Password"/>
          </div>
          <div>
            <label>Terms and Conditions
              <input type="checkbox" name="terms" id="terms" /></label>
            </div>
            <div>
              <input type="submit" value="Register" />
            </div>
        </form>

    </>
  )
}
export default Register