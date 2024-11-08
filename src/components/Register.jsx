import { Link } from "react-router-dom"
import "./Navbar.css"

const Register = () => {
  return (
    <div className="register-main">
    <div >
      <h1>PreMART</h1>
      <form action="" className="register-form">
        <h3>Create Account</h3>
        <label htmlFor="name">Your Name</label>
        <input type="text" placeholder="First And Last Name"  name="name" id="name"/><br />

        <label htmlFor="name">Email</label>
        <input type="email"  name="name" id="name"/><br />

        <label htmlFor="name">PassWord</label>
        <input type="password" placeholder="At least 6 characters"  name="name" id="name"/><br />

        <label htmlFor="name">Re-enter PassWord</label>
        <input type="password"  name="name" id="name"/><br />

        <button>Create Your Account</button><br />

        <p style={{fontSize:"0.8rem",margin:"10px 0"}}>By creating an account, you agree to GoSnippets's <span style={{textDecoration:"underline",color:"blue"}}>Conditions of Use</span> and <span style={{textDecoration:"underline",color:"blue"}}>Privacy Notice</span>.</p>
        <p className="about-login">
        Already have an account? <Link to="/login" style={{textDecoration:"none",color:"blue"}}>Sign In</Link></p>
      </form>
    </div>
    <div className="footer">
      <ul>
        <li><a  style={{color:"blue"}} href="/">Conditions of us</a></li>
        <li><a  style={{color:"blue"}} href="/">Privacy Notice</a></li>
        <li><a style={{color:"blue"}} href="/">Help</a></li>
      </ul>
    </div>
    </div>
  )
}

export default Register
