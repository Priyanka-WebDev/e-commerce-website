import { Link } from "react-router-dom"
const Login = () => {
  return (
    <>
      <div className="register-main">
    <div >
      <h1 className="text-2xl">PreMART</h1>
      <form action="" className="register-form">
        <h3 className="text-3xl">Sign in</h3>
        <label htmlFor="name">Your Name</label>
        <input type="text" placeholder="First And Last Name"  name="name" id="name"/><br />

        <label htmlFor="name">Email</label>
        <input type="email"  name="name" id="name"/><br />

        <label htmlFor="name">PassWord</label>
        <input type="password" placeholder="At least 6 characters"  name="name" id="name"/><br />


        <button>Sign In</button><br />

        <p style={{fontSize:"0.8rem",margin:"10px 0"}}>By continuing, you agree to PreMART's <span style={{textDecoration:"underline",color:"blue"}}>Conditions of Use</span> and <span style={{textDecoration:"underline",color:"blue"}}>Privacy Notice</span>.</p>
        <p className="about-login">
        Already have an account? <Link to="/login" style={{textDecoration:"none",color:"blue"}}>Sign In</Link></p>
        <input style={{fontSize:"0.8rem",margin:"10px 0",backgroundColor:"white"}} type="checkbox" name="" id="" />Keep me signed in.
        <button style={{backgroundColor:"gray"}}><Link to='/register' style={{textDecoration:"none",color:"black"}}>Create Your Account</Link></button><br />
      </form>
    </div>
    </div>
    <div className="footer">
      <ul>
        <li><a  style={{color:"blue"}} href="/">Conditions of us</a></li>
        <li><a  style={{color:"blue"}} href="/">Privacy Notice</a></li>
        <li><a style={{color:"blue"}} href="/">Help</a></li>
      </ul>
    </div>
    </>
  )
}

export default Login
